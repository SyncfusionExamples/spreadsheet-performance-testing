# JavaScript ES5 Spreadsheet Performance Testing

This sample demonstrates the performance analysis of the Syncfusion Spreadsheet component using vanilla JavaScript ES5, with 50,000 employee records and comprehensive performance tracking.

## Features

- **Large Dataset Handling**: Tests performance with 50,000 employee records
- **Performance Metrics Tracking**:
  - Initial Load Time: Measures time from page load to spreadsheet component initialization
  - Action Execution Time: Tracks time for user interactions (scrolling, editing, etc.)
  - File Open Time: Measures time taken to open files
  - Export/Save Time: Tracks time for spreadsheet export and save operations
- **Syncfusion EJ2 Spreadsheet**: Full-featured spreadsheet component integration
- **Pure Vanilla JavaScript**: ES5 compatible code with no build tools required
- **Real-time Performance Alerts**: Displays performance metrics via browser alerts

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Modern web browser (Chrome, Firefox, Safari, Edge)

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

Start the development server:
```bash
npm start
```

The application will be available at `http://localhost:8000/`

### Alternative: Using any HTTP Server

```bash
npx http-server -p 8000
```

Or with cache disabled:
```bash
npm run dev
```

## Project Structure

```
javascript/
├── src/
│   ├── main.js           # Main application logic with performance tracking
│   └── styles.css        # Application styles
├── index.html            # HTML entry point
├── package.json          # Dependencies and npm scripts
├── README.md             # This file
└── .gitignore            # Git ignore configuration
```

## How It Works

### 1. Data Generation

The application generates 50,000 employee records with the following fields:
- **EmployeeID**: Auto-incremented ID (10001-60000)
- **Employees**: Employee name (Employee 1, Employee 2, ...)
- **Designation**: Job designation (Developer)
- **Location**: Work location (USA)
- **Status**: Employment status (Active)
- **Shift**: Work shift (US)
- **Trustworthiness**: Trust level (Perfect)
- **Rating**: Random rating (1-5)
- **Software**: Random software score (0-100)
- **CurrentSalary**: Random salary (0-100000)

### 2. Performance Tracking

The application tracks performance through 7 event handlers:

#### Event: `created`
- Fires when the Spreadsheet component is initialized
- Measures: Initial Load Time (from page load to component creation)
- Shows: Alert with total initialization time

#### Event: `actionBegin`
- Fires before any user action starts
- Records: Start time of the action

#### Event: `actionComplete`
- Fires after a user action completes
- Measures: Duration of the user action
- Shows: Alert with action duration

#### Event: `beforeOpen`
- Fires before opening a file
- Records: File open start time

#### Event: `openComplete`
- Fires after file is successfully opened
- Measures: Time taken to open the file
- Shows: Alert with file open time

#### Event: `beforeSave`
- Fires before saving/exporting the spreadsheet
- Records: Export/save start time
- Sets: `isFullPost = false` to optimize the save operation

#### Event: `saveComplete`
- Fires after save/export is complete
- Measures: Time taken for export/save
- Shows: Alert with export/save time

### 3. Spreadsheet Configuration

The Spreadsheet component is configured with:
- **Open URL**: `https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open`
- **Save URL**: `https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save`
- **Single Sheet**: "Trade Data" sheet with all 50,000 records
- **All 7 Event Handlers**: Connected for comprehensive performance tracking

## Performance Metrics Explained

### Initial Load Time
**What**: Time from page load to Spreadsheet component fully initialized
**When**: Displayed when component `created` event fires
**Typical Range**: 500-2000ms (depends on data size and browser performance)
**Importance**: Indicates component initialization efficiency

### Action Execution Time
**What**: Time to complete user actions like:
- Cell selection
- Cell editing
- Column/row operations
- Data sorting/filtering
- Scrolling operations

**When**: Displayed after each action completes
**Typical Range**: 10-500ms depending on action complexity
**Importance**: Measures component responsiveness to user interactions

### File Open Time
**What**: Time to load and render an Excel/CSV file
**When**: Displayed after `openComplete` event
**Typical Range**: 500-3000ms
**Importance**: Indicates file import efficiency

### Export/Save Time
**What**: Time to export spreadsheet to Excel format
**When**: Displayed after `saveComplete` event
**Typical Range**: 500-5000ms
**Importance**: Indicates export/save operation efficiency

## Dependencies

This sample uses the following Syncfusion EJ2 packages:

```json
{
  "@syncfusion/ej2-base": "^25.1.40",
  "@syncfusion/ej2-buttons": "^25.1.40",
  "@syncfusion/ej2-calendars": "^25.1.40",
  "@syncfusion/ej2-charts": "^25.1.40",
  "@syncfusion/ej2-compression": "^25.1.40",
  "@syncfusion/ej2-data": "^25.1.40",
  "@syncfusion/ej2-dropdowns": "^25.1.40",
  "@syncfusion/ej2-excel-export": "^25.1.40",
  "@syncfusion/ej2-inputs": "^25.1.40",
  "@syncfusion/ej2-popups": "^25.1.40",
  "@syncfusion/ej2-spreadsheet": "^25.1.40",
  "@syncfusion/ej2-tailwind3-theme": "^25.1.40"
}
```

## Browser Support

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | 90+ | ✅ Fully Supported |
| Firefox | 88+ | ✅ Fully Supported |
| Safari | 14+ | ✅ Fully Supported |
| Edge | 90+ | ✅ Fully Supported |

## Development

### Available Scripts

- `npm start` - Run development server with default settings
- `npm run dev` - Run development server with cache disabled

### Modifying Data Size

To test with different dataset sizes, edit `src/main.js`:

```javascript
// Current: 50,000 records
var tradeData = getTradeData(50000);

// Modify to test with different sizes
var tradeData = getTradeData(10000);   // 10,000 records
var tradeData = getTradeData(100000);  // 100,000 records
```

### Performance Optimization

For testing with large datasets:
1. Disable browser extensions that might affect performance
2. Close other applications
3. Use Chrome DevTools Performance tab for detailed profiling
4. Monitor Network tab for load time analysis

## Official Documentation

- [Syncfusion EJ2 Spreadsheet API Documentation](https://ej2.syncfusion.com/javascript/documentation/api/spreadsheet/index-default)
- [Syncfusion EJ2 Spreadsheet Getting Started Guide](https://help.syncfusion.com/document-processing/excel/spreadsheet/javascript-es5/getting-started)
- [Syncfusion JavaScript Performance Best Practices](https://www.syncfusion.com/blogs/category/javascript)

## Troubleshooting

### Application not loading
- Ensure all dependencies are installed: `npm install`
- Clear browser cache and reload
- Check browser console for errors (F12)

### Performance metrics not showing
- Wait for the page to fully load
- Ensure spreadsheet component is created before performing actions
- Check that alerts are not disabled in browser settings

### Slow performance with 50,000 records
- This is expected behavior on lower-end machines
- Try reducing data size for testing
- Check browser DevTools Performance tab for bottlenecks

### Module not found errors
- Run `npm install` again
- Delete `node_modules` folder and reinstall
- Clear npm cache: `npm cache clean --force`

## Comparison with Other Implementations

This sample follows the same pattern as:
- **React Implementation**: Uses React hooks for state management
- **Angular Implementation**: Uses Angular component lifecycle

All three implementations test the same Syncfusion Spreadsheet component with identical data and performance tracking patterns.

## License

MIT License - See LICENSE file for details

## Support

For issues or questions:
- [GitHub Issues](https://github.com/SyncfusionExamples/spreadsheet-performance-testing/issues)
- [Syncfusion Support](https://www.syncfusion.com/support/directtrac/)
- [Syncfusion Forums](https://www.syncfusion.com/forums/)

## See Also

- [React Sample](../react/README.md)
- [Angular Sample](../angular/README.md)
- [Blazor Sample](../Blazor/README.md)
