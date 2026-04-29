import { useLayoutEffect, useRef, useState } from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  type TooltipContentProps,
} from 'recharts';
import type { ChartSeriesPoint } from './types';

type ChartTone = 'volume' | 'listings';

const CHART_HEIGHT = 154;
const CHART_MARGIN = { top: 4, right: 0, bottom: 0, left: 0 };
const TOOLTIP_WRAPPER_STYLE = { outline: 'none' };
const X_AXIS_TICK = {
  fill: 'var(--color-chart-axis-text)',
  fontFamily: 'var(--font-mono)',
  fontSize: 11,
};
const Y_AXIS_TICK = {
  fill: 'var(--color-chart-axis-text)',
  fontFamily: 'var(--font-mono)',
  fontSize: 11,
};
const CHART_TONE_SETTINGS: Record<ChartTone, { barCategoryGap: string; barSize: number; maxBarSize: number }> = {
  volume: {
    barCategoryGap: '42%',
    barSize: 24,
    maxBarSize: 28,
  },
  listings: {
    barCategoryGap: '36%',
    barSize: 36,
    maxBarSize: 42,
  },
};

interface StatsRechartsBarChartProps {
  axisFormatter: (value: number) => string;
  chartId: string;
  label: string;
  points: ChartSeriesPoint[];
  summary: string;
  tone: ChartTone;
  valueFormatter: (value: number) => string;
}

export function StatsRechartsBarChart({
  axisFormatter,
  chartId,
  label,
  points,
  summary,
  tone,
  valueFormatter,
}: StatsRechartsBarChartProps) {
  const [figureRef, chartWidth] = useMeasuredWidth<HTMLElement>();
  const chartSettings = CHART_TONE_SETTINGS[tone];
  const chartMax = getNiceChartMax(getPeakPoint(points)?.value ?? 0);
  const chartTicks = getChartTicks(chartMax);
  const xAxisInterval = getXAxisInterval(points.length, tone);

  return (
    <figure
      className={`stats-recharts ${tone}`}
      ref={figureRef}
      aria-labelledby={`${chartId}-title`}
      aria-describedby={`${chartId}-summary`}
    >
      <figcaption className="visually-hidden" id={`${chartId}-title`}>
        {label}
      </figcaption>
      {chartWidth > 0 ? (
        <ResponsiveContainer width={chartWidth} height={CHART_HEIGHT}>
          <BarChart
            accessibilityLayer
            barCategoryGap={chartSettings.barCategoryGap}
            barGap={0}
            data={points}
            desc={summary}
            margin={CHART_MARGIN}
            throttleDelay="raf"
          >
            <CartesianGrid stroke="var(--color-chart-grid)" vertical={false} />
            <XAxis
              axisLine={{ stroke: 'var(--color-chart-baseline)' }}
              dataKey="label"
              height={24}
              interval={xAxisInterval}
              tick={X_AXIS_TICK}
              tickMargin={8}
              tickLine={false}
            />
            <YAxis
              allowDecimals={false}
              axisLine={false}
              domain={[0, chartMax]}
              orientation="right"
              tick={Y_AXIS_TICK}
              tickFormatter={axisFormatter}
              tickMargin={12}
              tickLine={false}
              ticks={chartTicks}
              width={60}
            />
            <Tooltip
              content={<StatsChartTooltip valueFormatter={valueFormatter} />}
              cursor={{ fill: 'var(--color-chart-cursor)' }}
              isAnimationActive={false}
              wrapperStyle={TOOLTIP_WRAPPER_STYLE}
            />
            <Bar
              activeBar={{ fill: 'var(--color-chart-bar-hover)' }}
              barSize={chartSettings.barSize}
              dataKey="value"
              fill="var(--color-chart-bar)"
              isAnimationActive={false}
              maxBarSize={chartSettings.maxBarSize}
              name={label}
              radius={0}
            />
          </BarChart>
        </ResponsiveContainer>
      ) : null}
      <p className="visually-hidden" id={`${chartId}-summary`}>
        {summary}
      </p>
    </figure>
  );
}

function useMeasuredWidth<TElement extends HTMLElement>() {
  const ref = useRef<TElement | null>(null);
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    const element = ref.current;

    if (!element) {
      return undefined;
    }

    const updateWidth = (nextWidth: number) => {
      const roundedWidth = Math.max(0, Math.floor(nextWidth));
      setWidth((currentWidth) => (currentWidth === roundedWidth ? currentWidth : roundedWidth));
    };

    updateWidth(element.getBoundingClientRect().width);

    const observer = new ResizeObserver(([entry]) => {
      updateWidth(entry?.contentRect.width ?? 0);
    });
    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return [ref, width] as const;
}

function StatsChartTooltip({
  active,
  payload,
  valueFormatter,
}: Partial<TooltipContentProps<number, string>> & {
  valueFormatter: (value: number) => string;
}) {
  const point = payload?.[0]?.payload as ChartSeriesPoint | undefined;

  if (!active || !point) {
    return null;
  }

  return (
    <div className="stats-chart-tooltip">
      <span>{point.label}</span>
      <strong>{valueFormatter(point.value)}</strong>
      {point.detail ? <small>{point.detail}</small> : null}
    </div>
  );
}

function getPeakPoint(points: ChartSeriesPoint[]) {
  if (points.length === 0) {
    return undefined;
  }

  return points.reduce((current, point) => (point.value > current.value ? point : current), points[0]);
}

function getXAxisInterval(pointCount: number, tone: ChartTone) {
  if (pointCount <= 10) {
    return 0;
  }

  if (tone === 'volume' && pointCount === 12) {
    return 2;
  }

  return Math.max(0, Math.ceil(pointCount / 4) - 1);
}

function getNiceChartMax(value: number) {
  if (value <= 0) {
    return 1;
  }

  const magnitude = 10 ** Math.floor(Math.log10(value));
  const normalized = value / magnitude;
  const niceNormalized = normalized <= 2 ? 2 : normalized <= 5 ? 5 : 10;

  return niceNormalized * magnitude;
}

function getChartTicks(max: number) {
  return [0.25, 0.5, 0.75, 1].map((ratio) => Number((max * ratio).toFixed(2)));
}
