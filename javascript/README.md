# JavaScript Spreadsheet Performance Testing

This sample demonstrates the performance analysis of the Syncfusion Spreadsheet component using JavaScript, with 50,000 employee records.

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Preview Production Build

```sh
npm run preview
```

## Dependencies

- `@syncfusion/ej2-spreadsheet`: ^25.1.40
- `@syncfusion/ej2-tailwind3-theme`: ^25.1.40

## How It Works

This application demonstrates performance tracking of the Syncfusion Spreadsheet component with the following metrics:

1. **Initial Load Time**: Time taken for the spreadsheet component to initialize
2. **Action Execution Time**: Time taken for user interactions (scroll, edit, sort, filter)
3. **File Open Time**: Time taken to open and import files
4. **Export/Save Time**: Time taken to export and save spreadsheets

The performance metrics are displayed as alerts when each action completes.

### Data Source

The application uses 50,000 employee records with the following fields:
- EmployeeID
- Employees
- Designation
- Location
- Status
- Shift
- Trustworthiness
- Rating
- Software
- CurrentSalary

### Event Handlers

- `created`: Tracks component initialization
- `actionBegin`: Marks the start of user actions
- `actionComplete`: Measures user action duration
- `beforeOpen`: Marks the start of file open
- `openComplete`: Measures file open duration
- `beforeSave`: Marks the start of export/save
- `saveComplete`: Measures export/save duration
