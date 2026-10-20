/**
 * Syncfusion EJ2 Spreadsheet Performance Testing
 * JavaScript ES6+ Implementation
 */

interface TradeData {
  EmployeeID: number;
  Employees: string;
  Designation: string;
  Location: string;
  Status: string;
  Shift: string;
  Trustworthiness: string;
  Rating: number;
  Software: number;
  CurrentSalary: number;
}

/**
 * Generate sample trade data with specified count
 * @param dataCount - Number of records to generate (default: 50000)
 * @returns Array of employee data objects
 */
function getTradeData(dataCount: number = 50000): TradeData[] {
  const tradeData: TradeData[] = [];

  for (let i = 1; i <= dataCount; i++) {
    tradeData.push({
      EmployeeID: 10000 + i,
      Employees: `Employee ${i}`,
      Designation: 'Developer',
      Location: 'USA',
      Status: 'Active',
      Shift: 'US',
      Trustworthiness: 'Perfect',
      Rating: Math.floor(Math.random() * 5) + 1,
      Software: Math.floor(Math.random() * 100),
      CurrentSalary: Math.floor(Math.random() * 100000)
    });
  }

  return tradeData;
}

/**
 * Performance Tracking Configuration
 */
interface PerformanceTracker {
  initialLoadStartTime: number;
  startTime: number;
  exportStartTime: number;
  openStartTime: number;
  isCreated: boolean;
}

// Generate trade data
const tradeData: TradeData[] = getTradeData(50000);

// Performance tracking state
const performanceTracker: PerformanceTracker = {
  initialLoadStartTime: performance.now(),
  startTime: 0,
  exportStartTime: 0,
  openStartTime: 0,
  isCreated: false
};

/**
 * Event Handler: Spreadsheet Created
 * Fires when the Spreadsheet component is fully initialized
 * Measures: Initial Load Time (from page load to component creation)
 */
function onCreated(): void {
  setTimeout(() => {
    const timeTaken = Math.round(
      performance.now() - performanceTracker.initialLoadStartTime
    );
    alert(`Initial Load Time Taken : ${timeTaken} ms`);
  }, 500);

  performanceTracker.isCreated = true;
}

/**
 * Event Handler: Action Begin
 * Fires before any user action starts (scrolling, editing, sorting, etc.)
 * Records: Start time of the action for performance measurement
 */
function onActionBegin(): void {
  if (performanceTracker.isCreated) {
    performanceTracker.startTime = performance.now();
  }
}

/**
 * Event Handler: Action Complete
 * Fires after a user action completes
 * Measures: Duration of the action
 */
function onActionComplete(): void {
  if (!performanceTracker.isCreated || performanceTracker.startTime === 0) {
    return;
  }

  const timeTaken = Math.round(
    performance.now() - performanceTracker.startTime
  );

  setTimeout(() => {
    alert(`Time Taken : ${timeTaken} ms`);
  }, 500);
}

/**
 * Event Handler: Before Open
 * Fires before opening a file
 * Records: Start time of the open operation
 */
function onBeforeOpen(): void {
  performanceTracker.openStartTime = performance.now();
}

/**
 * Event Handler: Open Complete
 * Fires after a file is successfully opened
 * Measures: Duration of the open operation
 */
function onOpenComplete(): void {
  const openTime = Math.round(
    performance.now() - performanceTracker.openStartTime
  );

  setTimeout(() => {
    alert(`Open Time Taken : ${openTime} ms`);
  }, 500);
}

/**
 * Event Handler: Before Save
 * Fires before saving/exporting the spreadsheet
 * Records: Start time of the save operation
 */
function onBeforeSave(args: any): void {
  console.log(args);

  // Optimize save operation - only send modified data
  args.isFullPost = false;

  performanceTracker.exportStartTime = performance.now();
}

/**
 * Event Handler: Save Complete
 * Fires after the spreadsheet is successfully saved/exported
 * Measures: Duration of the save operation
 */
function onSaveComplete(): void {
  console.log('Save operation completed');
  const exportTime = Math.round(
    performance.now() - performanceTracker.exportStartTime
  );

  setTimeout(() => {
    alert(`Export Time Taken : ${exportTime} ms`);
  }, 500);
}

/**
 * Initialize and render Syncfusion Spreadsheet
 */
function initializeSpreadsheet(): void {
  // Create Spreadsheet instance
  const spreadsheet = new ej.spreadsheet.Spreadsheet({
    openUrl: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open',
    saveUrl: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save',
    created: onCreated,
    actionBegin: onActionBegin,
    actionComplete: onActionComplete,
    beforeOpen: onBeforeOpen,
    openComplete: onOpenComplete,
    beforeSave: onBeforeSave,
    saveComplete: onSaveComplete,
    sheets: [
      {
        name: 'Trade Data',
        ranges: [
          {
            dataSource: tradeData,
            startCell: 'A1'
          }
        ]
      }
    ]
  });

  // Render the spreadsheet to the DOM
  spreadsheet.appendTo('#spreadsheet');
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  initializeSpreadsheet();
});

// Export for module systems
export { getTradeData, initializeSpreadsheet, onCreated, onActionBegin, onActionComplete, onBeforeOpen, onOpenComplete, onBeforeSave, onSaveComplete };
