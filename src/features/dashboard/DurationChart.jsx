import styled from "styled-components";
import Heading from "../../ui/Heading";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { useDarkMode } from "../../context/DarkModeContext";

const ChartBox = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 2.4rem 3.2rem;
  grid-column: 3 / span 2;

  & > *:first-child {
    margin-bottom: 1.6rem;
  }

  & .recharts-pie-label-text {
    font-weight: 600;
  }
`;

const startDataLight = [
  {
    duration: "1 ночь",
    value: 0,
    color: "#ef4444",
  },
  {
    duration: "2 ночи",
    value: 0,
    color: "#f97316",
  },
  {
    duration: "3 ночи",
    value: 0,
    color: "#eab308",
  },
  {
    duration: "4-5 ночей",
    value: 0,
    color: "#84cc16",
  },
  {
    duration: "6-7 ночей",
    value: 0,
    color: "#22c55e",
  },
  {
    duration: "8-14 ночей",
    value: 0,
    color: "#14b8a6",
  },
  {
    duration: "15-21 ночей",
    value: 0,
    color: "#3b82f6",
  },
  {
    duration: "21+ ночей",
    value: 0,
    color: "#a855f7",
  },
];

const startDataDark = [
  {
    duration: "1 ночь",
    value: 0,
    color: "#b91c1c",
  },
  {
    duration: "2 ночи",
    value: 0,
    color: "#c2410c",
  },
  {
    duration: "3 ночи",
    value: 0,
    color: "#a16207",
  },
  {
    duration: "4-5 ночей",
    value: 0,
    color: "#4d7c0f",
  },
  {
    duration: "6-7 ночей",
    value: 0,
    color: "#15803d",
  },
  {
    duration: "8-14 ночей",
    value: 0,
    color: "#0f766e",
  },
  {
    duration: "15-21 ночей",
    value: 0,
    color: "#1d4ed8",
  },
  {
    duration: "21+ ночей",
    value: 0,
    color: "#7e22ce",
  },
];

function prepareData(startData, stays) {
  // A bit ugly code, but sometimes this is what it takes when working with real data 😅

  function incArrayValue(arr, field) {
    return arr.map((obj) =>
      obj.duration === field ? { ...obj, value: obj.value + 1 } : obj
    );
  }

  const data = stays
    .reduce((arr, cur) => {
      const num = cur.numNights;
      if (num === 1) return incArrayValue(arr, "1 ночь");
      if (num === 2) return incArrayValue(arr, "2 ночи");
      if (num === 3) return incArrayValue(arr, "3 ночи");
      if ([4, 5].includes(num)) return incArrayValue(arr, "4-5 ночей");
      if ([6, 7].includes(num)) return incArrayValue(arr, "6-7 ночей");
      if (num >= 8 && num <= 14) return incArrayValue(arr, "8-14 ночей");
      if (num >= 15 && num <= 21) return incArrayValue(arr, "15-21 ночей");
      if (num >= 21) return incArrayValue(arr, "21+ ночей");
      return arr;
    }, startData)
    .filter((obj) => obj.value > 0);

  return data;
}

function DurationChart({ confirmedStays }) {
  const { isDarkMode } = useDarkMode();

  const startData = isDarkMode ? startDataDark : startDataLight;
  console.log("startData", startData);
  const data = prepareData(startData, confirmedStays);

  console.log("ConfirmedStays", confirmedStays);
  console.log("DurationChart data", data);

  return (
    <ChartBox>
      <Heading as="h2">Длительность прибывания</Heading>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            nameKey="duration"
            dataKey="value"
            innerRadius={70}
            outerRadius={100}
            cx="40%"
            cy="47%"
            paddingAngle={5}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.color}
                stroke={entry.color}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend
            verticalAlign="middle"
            align="right"
            width="30%"
            layout="vertical"
            iconSize={14}
            iconType="plainline"
          />
        </PieChart>
      </ResponsiveContainer>
    </ChartBox>
  );
}

export default DurationChart;
