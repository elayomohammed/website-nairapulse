import React from 'react';
import TradingViewChart from '../../../components/TradingViewChart';
import "../../../styles/viewChart.css";

interface CurrencyChartsProps {
  params: { symbol?: string };
}

const DynamicCharts: React.FC<CurrencyChartsProps> = ({ params }) => {
  const symbol = params.symbol ? params.symbol : 'FX_IDC:USDNGN';

  return (
    <div className="uniform-margin">
      <div id="view-chart-container">
        <h1 id="chart-title">{`${symbol} Chart`}</h1>
        <TradingViewChart symbol={symbol.replace(/%3A/g, '')} width="100%" height={500} />
      </div>
    </div>
  );
};

export default DynamicCharts;