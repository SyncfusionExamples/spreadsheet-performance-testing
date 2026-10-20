# Angular Spreadsheet Performance Testing

This is an Angular application that demonstrates the Syncfusion Spreadsheet component with performance metrics tracking for large datasets (50,000 records).

## Features

- **Large Data Handling**: Tests performance with 50,000 employee records
- **Performance Tracking**: Measures:
  - Initial Load Time
  - Action Execution Time
  - File Open Time
  - Export/Save Time
- **Syncfusion Spreadsheet Integration**: Uses the latest Syncfusion Spreadsheet component for Angular

## Prerequisites

- Node.js (v18 or higher)
- npm

## Installation

```bash
npm install
```

## Development Server

Run the development server:

```bash
npm start
```

The application will be available at `http://localhost:4200/`.

## Build

Build the project for production:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Performance Metrics

The application tracks the following performance metrics:

1. **Initial Load Time**: Time taken to load and render the spreadsheet with 50,000 records
2. **Action Time**: Time taken to complete user actions (editing, scrolling, etc.)
3. **Open Time**: Time taken to open a file
4. **Export Time**: Time taken to export/save the spreadsheet

## Project Structure

```
angular/
├── src/
│   ├── app/
│   │   ├── app.component.ts         # Main component with performance tracking
│   │   ├── app.component.html       # Spreadsheet template
│   │   ├── app.component.scss       # Styles
│   │   ├── app.config.ts            # Angular configuration
│   │   └── app.routes.ts            # Routing configuration
│   ├── main.ts                       # Application entry point
│   ├── index.html                    # Main HTML file
│   └── styles.scss                   # Global styles
├── angular.json                      # Angular CLI configuration
├── tsconfig.json                     # TypeScript configuration
└── package.json                      # Dependencies
```

## Dependencies

- **@angular/core**: Angular core framework
- **@syncfusion/ej2-angular-spreadsheet**: Syncfusion Spreadsheet component for Angular
- **@syncfusion/ej2-tailwind3-theme**: Syncfusion Tailwind 3 theme

## License

This project is licensed under the Syncfusion Community License.
