/**
 * Syncfusion EJ2 Spreadsheet Performance Testing - JavaScript ES5
 * This sample demonstrates performance analysis with 50,000 employee records
 */

/**
 * Generate sample trade data with specified count
 * @param {number} dataCount - Number of records to generate (default: 50000)
 * @returns {Array} Array of employee data objects
 */
function getTradeData(dataCount) {
    dataCount = dataCount || 50000;
    var tradeData = [];

    for (var i = 1; i <= dataCount; i++) {
        tradeData.push({
            EmployeeID: 10000 + i,
            Employees: 'Employee ' + i,
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

// Generate 50,000 employee records for performance testing
var tradeData = getTradeData(50000);

// ========== Performance Tracking Variables ==========
var initialLoadStartTime = performance.now();
var startTime = 0;
var exportStartTime = 0;
var openStartTime = 0;
var isCreated = false;

/**
 * Event Handler: Spreadsheet Created
 * Fires when the Spreadsheet component is fully initialized
 * Measures: Initial Load Time (from page load to component creation)
 */
function onCreated() {
    setTimeout(function() {
        var timeTaken = Math.round(performance.now() - initialLoadStartTime);
        alert('Initial Load Time Taken : ' + timeTaken + ' ms');
    }, 500);

    isCreated = true;
}

/**
 * Event Handler: Action Begin
 * Fires before any user action starts (scrolling, editing, sorting, etc.)
 * Records: Start time of the action for performance measurement
 */
function onActionBegin(args) {
    if (isCreated) {
        startTime = performance.now();
    }
}

/**
 * Event Handler: Action Complete
 * Fires after a user action completes
 * Measures: Duration of the action and displays result in alert
 */
function onActionComplete(args) {
    if (!isCreated || startTime === 0) {
        return;
    }

    var timeTaken = Math.round(performance.now() - startTime);

    setTimeout(function() {
        alert('Time Taken : ' + timeTaken + ' ms');
    }, 500);
}

/**
 * Event Handler: Before Open
 * Fires before opening/importing a file
 * Records: File open start time for performance measurement
 */
function onBeforeOpen(args) {
    openStartTime = performance.now();
}

/**
 * Event Handler: Open Complete
 * Fires after file is successfully opened/imported
 * Measures: Total time taken to open and render the file
 */
function onOpenComplete(args) {
    var openTime = Math.round(performance.now() - openStartTime);

    setTimeout(function() {
        alert('Open Time Taken : ' + openTime + ' ms');
    }, 500);
}

/**
 * Event Handler: Before Save
 * Fires before saving/exporting the spreadsheet
 * Records: Export/save start time
 * Optimization: Sets isFullPost to false for efficient save operations
 */
function onBeforeSave(args) {
    console.log(args);

    // Optimize save operation by setting isFullPost to false
    args.isFullPost = false;

    exportStartTime = performance.now();
}

/**
 * Event Handler: Save Complete
 * Fires after save/export operation completes
 * Measures: Total time taken for export/save operation
 */
function onSaveComplete(args) {
    console.log('Export operation complete');
    var exportTime = Math.round(performance.now() - exportStartTime);

    setTimeout(function() {
        alert('Export Time Taken : ' + exportTime + ' ms');
    }, 500);
}

// ========== Spreadsheet Component Initialization ==========
/**
 * Initialize Syncfusion EJ2 Spreadsheet component
 * Configuration includes:
 * - Open URL: Service endpoint for opening files
 * - Save URL: Service endpoint for saving/exporting
 * - 7 Event handlers for performance tracking
 * - Single sheet with 50,000 employee records
 */
var spreadsheetInstance = new ej.spreadsheet.Spreadsheet({
    // Service URLs for file operations
    openUrl: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open',
    saveUrl: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save',
    
    // Event handlers for performance tracking
    created: onCreated,
    actionBegin: onActionBegin,
    actionComplete: onActionComplete,
    beforeOpen: onBeforeOpen,
    openComplete: onOpenComplete,
    beforeSave: onBeforeSave,
    saveComplete: onSaveComplete,
    
    // Sheet configuration with 50,000 records
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

// Render the Spreadsheet component into the DOM
spreadsheetInstance.appendTo('#spreadsheet');
