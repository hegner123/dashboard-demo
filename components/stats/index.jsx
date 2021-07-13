import { StatsBar, StatsItem, StatsList } from "./style";
import Social from "../social";
export default function Stats() {
  return (
    <StatsBar>
      <StatsList>
        <StatsItem>
          <Social />
        </StatsItem>
        <StatsItem>
          <Social />
        </StatsItem>
        <StatsItem>
          <Social />
        </StatsItem>
        <StatsItem>
          <Social />
        </StatsItem>
      </StatsList>
    </StatsBar>
  );
}
