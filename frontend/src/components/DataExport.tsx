import React from 'react';

interface DataExportProps {
  onExport: (format: string) => void;
  customReports: {
    id: number;
    name: string;
    description: string;
  }[];
  analytics: {
    metric: string;
    value: number;
  }[];
}

const DataExport: React.FC<DataExportProps> = ({ onExport, customReports, analytics }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Data Export & Reporting</h2>
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Export Data</h3>
        <button
          onClick={() => onExport('csv')}
          className="p-2 bg-blue-500 text-white rounded-lg mr-2"
        >
          Export to CSV
        </button>
        <button
          onClick={() => onExport('excel')}
          className="p-2 bg-green-500 text-white rounded-lg mr-2"
        >
          Export to Excel
        </button>
        <button
          onClick={() => onExport('pdf')}
          className="p-2 bg-red-500 text-white rounded-lg"
        >
          Export to PDF
        </button>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Custom Reports</h3>
        <ul>
          {customReports.map((report) => (
            <li key={report.id}>
              <h4 className="font-semibold">{report.name}</h4>
              <p>{report.description}</p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-semibold">Analytics</h3>
        <ul>
          {analytics.map((data, index) => (
            <li key={index}>
              {data.metric}: {data.value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DataExport;
