# JavaScript ES6+ Spreadsheet Performance Testing

This sample demonstrates the performance analysis of the Syncfusion Spreadsheet component using JavaScript ES6+, with 50,000 employee records and comprehensive performance tracking capabilities.

## Overview

A production-ready JavaScript implementation that mirrors the React and Angular samples for testing Syncfusion EJ2 Spreadsheet performance across various operations including data loading, user interactions, file operations, and export functionality.

## Features

✅ **Large Dataset Handling**
- Tests performance with 50,000 employee records
- Realistic data generation with 10 fields per record

✅ **Performance Metrics Tracking**
- **Initial Load Time**: Measures time from page load to spreadsheet component initialization
- **Action Execution Time**: Tracks time for user interactions (scrolling, editing, sorting, filtering)
- **File Open Time**: Measures time taken to open and import files
- **Export/Save Time**: Tracks time for spreadsheet export and save operations

✅ **Modern JavaScript Stack**
- TypeScript support for type safety
- ES6+ features (arrow functions, template literals, modules)
- Vite for fast development and optimized builds
- Direct Syncfusion EJ2 Spreadsheet integration

✅ **Event-Driven Performance Tracking**
- 7 comprehensive event handlers for complete lifecycle monitoring
- Real-time performance alerts via browser notifications
- Console logging for detailed analysis

## Prerequisites

- Node.js (v16 or higher)
- npm (v8 or higher)
- Modern web browser (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)

## Installation

1. Navigate to the javascript directory:
```bash
cd javascript
```

2. Install dependencies:
```bash
npm install
```

## Running the Application

### Development Server

Start the development server with hot module replacement:
```bash
npm start
```

The application will automatically open in your browser at `http://localhost:5173/`

### Build for Production

Build optimized production bundle:
```bash
npm run build
```

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

## Project Structure

```
javascript/
├── src/
│   ├── app/
│   │   ├── app.ts         # Main application logic with performance tracking
│   │   ├── app.html       # Application template
│   │   └── app.css        # Component-specific styles
│   └── styles.css         # Global application styles
├── index.html             # HTML entry point
├── package.json           # Dependencies and npm scripts
├── tsconfig.json          # TypeScript configuration
├── tsconfig.node.json     # TypeScript Node configuration
├── vite.config.ts         # Vite configuration
├── README.md              # This file
└── .gitignore             # Git ignore configuration
```

## How It Works

### 1. Data Generation

The application generates 50,000 employee records with the following structure:

```typescript
interface TradeData {
  EmployeeID: number;        // Auto-incremented ID (10001-60000)
  Employees: string;         // Employee name
  Designation: string;       // Job title
  Location: string;          // Work location
  Status: string;            // Employment status
  Shift: string;             // Work shift
  Trustworthiness: string;   // Trust level
  Rating: number;            // Employee rating (1-5)
  Software: number;          // Software skill score (0-100)
  CurrentSalary: number;     // Annual salary (0-100000)
}
```

### 2. Performance Tracking

The application tracks performance across four key metrics:

#### Initial Load Time
- **Event**: `onCreated()`
- **Measures**: Time from page load to Spreadsheet component fully initialized
- **Typical Range**: 500-2000ms
- **Purpose**: Assess component initialization efficiency

#### Action Execution Time
- **Event**: `onActionComplete()`
- **Measures**: Duration of user actions (select, edit, scroll, sort, filter)
- **Typical Range**: 10-500ms
- **Purpose**: Evaluate component responsiveness

#### File Open Time
- **Event**: `onOpenComplete()`
- **Measures**: Time to load and render Excel/CSV files
- **Typical Range**: 500-3000ms
- **Purpose**: Assess file import efficiency

#### Export/Save Time
- **Event**: `onSaveComplete()`
- **Measures**: Time to export spreadsheet to Excel format
- **Typical Range**: 500-5000ms
- **Purpose**: Monitor export operation efficiency

### 3. Event Handlers

The application implements 7 event handlers for complete lifecycle monitoring:

#### 1. `onCreated()`
```typescript
function onCreated(): void {
  // Called when Spreadsheet component is fully initialized
  // Displays: Initial Load Time Taken : X ms
}
```
Tracks initial component load time and enables action tracking.

#### 2. `onActionBegin()`
```typescript
function onActionBegin(): void {
  // Called before any user action starts
}
```
Records the start time of user actions for performance measurement.

#### 3. `onActionComplete()`
```typescript
function onActionComplete(): void {
  // Called after user action completes
  // Displays: Time Taken : X ms
}
```
Calculates and reports the duration of user actions.

#### 4. `onBeforeOpen()`
```typescript
function onBeforeOpen(): void {
  // Called before file open operation starts
}
```
Records the start time of file import operations.

#### 5. `onOpenComplete()`
```typescript
function onOpenComplete(): void {
  // Called after file is successfully opened
  // Displays: Open Time Taken : X ms
}
```
Calculates and reports file open operation time.

#### 6. `onBeforeSave()`
```typescript
function onBeforeSave(args: any): void {
  // Called before save/export operation starts
  args.isFullPost = false; // Optimize: send only modified data
}
```
Records start time and optimizes save operation.

#### 7. `onSaveComplete()`
```typescript
function onSaveComplete(): void {
  // Called after save/export operation completes
  // Displays: Export Time Taken : X ms
}
```
Calculates and reports export/save operation time.

## Configuration

### Spreadsheet Configuration

```typescript
const spreadsheet = new ej.spreadsheet.Spreadsheet({
  // Service URLs for file operations
  openUrl: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open',
  saveUrl: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save',
  
  // Event handlers
  created: onCreated,
  actionBegin: onActionBegin,
  actionComplete: onActionComplete,
  beforeOpen: onBeforeOpen,
  openComplete: onOpenComplete,
  beforeSave: onBeforeSave,
  saveComplete: onSaveComplete,
  
  // Data configuration
  sheets: [{
    name: 'Trade Data',
    ranges: [{
      dataSource: tradeData,
      startCell: 'A1'
    }]
  }]
});
```

## Dependencies

### Production Dependencies
- `@syncfusion/ej2-base` (v25.1.40) - Base library
- `@syncfusion/ej2-buttons` (v25.1.40) - Button component
- `@syncfusion/ej2-calendars` (v25.1.40) - Calendar component
- `@syncfusion/ej2-charts` (v25.1.40) - Chart component
- `@syncfusion/ej2-compression` (v25.1.40) - Compression utilities
- `@syncfusion/ej2-data` (v25.1.40) - Data services
- `@syncfusion/ej2-dropdowns` (v25.1.40) - Dropdown component
- `@syncfusion/ej2-excel-export` (v25.1.40) - Excel export functionality
- `@syncfusion/ej2-inputs` (v25.1.40) - Input component
- `@syncfusion/ej2-popups` (v25.1.40) - Popup component
- `@syncfusion/ej2-spreadsheet` (v25.1.40) - Spreadsheet component
- `@syncfusion/ej2-tailwind3-theme` (v25.1.40) - Tailwind3 theme

### Development Dependencies
- `typescript` (v5.3.3) - TypeScript compiler
- `vite` (v5.0.8) - Build tool and development server
- `@types/node` (v20.10.6) - Node.js type definitions

## Browser Support

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | 90+ | ✅ Fully Supported |
| Firefox | 88+ | ✅ Fully Supported |
| Safari | 14+ | ✅ Fully Supported |
| Edge | 90+ | ✅ Fully Supported |

## Performance Benchmarks

Expected performance metrics on modern hardware (typical values):

| Metric | Min | Max | Typical |
|--------|-----|-----|---------|
| Initial Load Time | 500ms | 2000ms | 800ms |
| Action Execution | 10ms | 500ms | 100ms |
| File Open Time | 500ms | 3000ms | 1500ms |
| Export Time | 500ms | 5000ms | 2000ms |

*Note: Actual values depend on system specifications, browser, network conditions, and file size.*

## Development Guidelines

### TypeScript Best Practices
- Use strong typing with interfaces
- Avoid `any` type unless necessary
- Leverage TypeScript strict mode

### Performance Optimization
- Monitor bundle size with Vite
- Use lazy loading for large datasets
- Cache computed values when possible

### Code Organization
- Keep components focused and reusable
- Separate concerns into different modules
- Use clear naming conventions

## Troubleshooting

### Issue: Page shows blank after build

**Solution**: Ensure all Syncfusion dependencies are installed:
```bash
npm install
npm run build
```

### Issue: Performance metrics not displaying

**Solution**: Check browser console for errors (F12 → Console tab)
- Verify Syncfusion libraries are loaded
- Ensure DOM element with id="spreadsheet" exists

### Issue: File open/save not working

**Solution**: Verify service URLs are accessible:
- Check network tab in DevTools (F12)
- Confirm API endpoints are available
- Check CORS settings

### Issue: High memory usage with 50,000 rows

**Solution**: Consider reducing data size or implementing virtual scrolling:
```typescript
// Reduce dataset for testing
const tradeData = getTradeData(10000); // Instead of 50000
```

## Comparison with React and Angular Samples

| Feature | React | Angular | JavaScript |
|---------|-------|---------|------------|
| Framework | React 18+ | Angular 17+ | ES6+ |
| Language | JavaScript/JSX | TypeScript | TypeScript |
| Build Tool | Vite | Vite | Vite |
| Component Library | Syncfusion React | Syncfusion Angular | Syncfusion EJ2 |
| Event Handlers | 7 | 7 | 7 |
| Data Records | 50,000 | 50,000 | 50,000 |
| Performance Metrics | 4 | 4 | 4 |

## Official Documentation

- **Syncfusion EJ2 Spreadsheet API**: https://ej2.syncfusion.com/documentation/api/spreadsheet/index-default
- **JavaScript ES6+ Getting Started**: https://help.syncfusion.com/document-processing/excel/spreadsheet/javascript-es6/getting-started
- **Vite Documentation**: https://vitejs.dev/
- **TypeScript Handbook**: https://www.typescriptlang.org/docs/

## Support

For issues and questions:
- **GitHub Issues**: https://github.com/SyncfusionExamples/spreadsheet-performance-testing/issues
- **Syncfusion Support**: https://www.syncfusion.com/support/
- **Community Forums**: https://www.syncfusion.com/forums/

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Authors

- Syncfusion Examples Team
- Contributors

## Related Samples

- [React Spreadsheet Performance Testing](../react/)
- [Angular Spreadsheet Performance Testing](../angular/)
- [Blazor Spreadsheet Performance Testing](../Blazor/)
