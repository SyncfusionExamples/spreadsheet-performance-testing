# JavaScript ES5 Spreadsheet Performance Testing

This sample showcases performance analysis across Syncfusion Spreadsheet component using vanilla JavaScript ES5, including data loading, editing, sorting, filtering, and large dataset handling with 50,000 employee records.

## Features

- **Large Data Handling**: Tests performance with 50,000 employee records
- **Performance Tracking**: Measures:
  - Initial Load Time
  - Action Execution Time
  - File Open Time
  - Export/Save Time
- **Syncfusion Spreadsheet Integration**: Uses the latest Syncfusion Spreadsheet component for JavaScript

## Prerequisites

- Node.js (v14 or higher)
- npm

## Installation

```bash
npm install
```

## Running the Sample

### Development Server

```bash
npm start
```

The application will be available at `http://localhost:8000/`.

### Alternative: Using ng serve or any HTTP server

```bash
npx http-server -p 8000
```

## Project Structure

```
javascript/
├── src/
│   ├── main.js           # Main application with performance tracking
│   └── styles.css        # Spreadsheet styling
├── index.html            # Main HTML file
├── package.json          # Dependencies and scripts
├── README.md             # Documentation
└── .gitignore            # Git ignore rules
```

## Performance Metrics

The application tracks the following performance metrics:

1. **Initial Load Time**: Time taken to load and render the spreadsheet with 50,000 records
2. **Action Time**: Time taken to complete user actions (editing, scrolling, etc.)
3. **Open Time**: Time taken to open a file
4. **Export Time**: Time taken to export/save the spreadsheet

## Data Generation

- Generates 50,000 employee records
- Fields: EmployeeID, Employees, Designation, Location, Status, Shift, Trustworthiness, Rating, Software, CurrentSalary
- Uses random data for realistic testing

## Event Handlers

- `onCreated()` - Initial load time tracking
- `onActionBegin()` - User action start tracking
- `onActionComplete()` - User action completion timing
- `onBeforeOpen()` - File open start
- `onOpenComplete()` - File open completion timing
- `onBeforeSave()` - Export/save start
- `onSaveComplete()` - Export time calculation

## Dependencies

- **@syncfusion/ej2-spreadsheet**: Main Spreadsheet component
- **@syncfusion/ej2-tailwind3-theme**: Syncfusion theme
- Other Syncfusion utilities for features

## Documentation

### Syncfusion JavaScript ES5 Documentation
- https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/index-default
- https://help.syncfusion.com/document-processing/excel/spreadsheet/javascript-es5/getting-started

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT
