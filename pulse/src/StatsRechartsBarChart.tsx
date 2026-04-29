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
  const chartMax = getNiceChartMax(getPeakPoint(points)?.value ?? 0);
  const chartTicks = getChartTicks(chartMax);
  const xAxisInterval = points.length > 10 ? 2 : 0;

  return (
    <figure className={`stats-recharts ${tone}`} aria-labelledby={`${chartId}-title`} aria-describedby={`${chartId}-summary`}>
      <figcaption className="visually-hidden" id={`${chartId}-title`}>
        {label}
      </figcaption>
      <ResponsiveContainer width="100%" height="100%" minWidth={0}>
        <BarChart
          accessibilityLayer
          data={points}
          desc={summary}
          margin={{ top: 4, right: 2, bottom: 0, left: 0 }}
          throttleDelay="raf"
        >
          <CartesianGrid stroke="var(--color-chart-grid)" vertical={false} />
          <XAxis
            axisLine={{ stroke: 'var(--color-chart-baseline)' }}
            dataKey="label"
            height={24}
            interval={xAxisInterval}
            tick={{
              fill: 'var(--color-chart-axis-text)',
              fontFamily: 'var(--font-mono)',
              fontSize: 9,
            }}
            tickLine={false}
          />
          <YAxis
            allowDecimals={false}
            axisLine={false}
            domain={[0, chartMax]}
            orientation="right"
            tick={{
              fill: 'var(--color-chart-axis-text)',
              fontFamily: 'var(--font-mono)',
              fontSize: 10,
            }}
            tickFormatter={axisFormatter}
            tickLine={false}
            ticks={chartTicks}
            width={54}
          />
          <Tooltip
            content={<StatsChartTooltip valueFormatter={valueFormatter} />}
            cursor={{ fill: 'var(--color-chart-cursor)' }}
            isAnimationActive="auto"
            wrapperStyle={{ outline: 'none' }}
          />
          <Bar
            activeBar={{ fill: 'var(--color-chart-bar-hover)' }}
            barSize={tone === 'volume' ? 18 : 28}
            dataKey="value"
            fill="var(--color-chart-bar)"
            isAnimationActive="auto"
            maxBarSize={tone === 'volume' ? 18 : 28}
            name={label}
            radius={0}
          />
        </BarChart>
      </ResponsiveContainer>
      <p className="visually-hidden" id={`${chartId}-summary`}>
        {summary}
      </p>
    </figure>
  );
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
