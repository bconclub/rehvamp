/**
 * Rehvamp Foundation — website form intake.
 *
 * Receives JSON posts from the website and appends a row to the matching
 * tab in this spreadsheet. Tabs and header rows are created automatically
 * on first use, so you don't have to set anything up by hand.
 *
 * Setup: see README.md in this folder.
 *
 * ── Tab names ────────────────────────────────────────────────────────────
 * If your sheet already has tabs with different names, change the values
 * below to match them exactly (the keys must stay the same).
 */
var TABS = {
  contact: 'Contact Enquiries',
  newsletter: 'Newsletter Signups',
  'challenge-heal': 'HEAL Challenge',
};

// Header row for each tab, in column order.
var HEADERS = {
  contact: ['Timestamp', 'Name', 'Email', 'Enquiry Type', 'Message'],
  newsletter: ['Timestamp', 'First Name', 'Last Name', 'Email', 'Source'],
  'challenge-heal': [
    'Timestamp',
    'Full Name',
    'Email',
    'Age Range',
    'City / Location',
    'Digital-habit Focus',
    'Motivation',
    'Baseline Screen Time',
    'HEAL Practices',
    'Consistency',
    'Current Screen Time',
    'Reflection',
    'Baseline Screenshot',
    'Progress Screenshot',
    'Other Evidence',
  ],
};

// Drive folder for uploaded screenshots (created on first upload).
var UPLOAD_FOLDER = 'Rehvamp Challenge Uploads';

function doPost(e) {
  try {
    var payload = JSON.parse(e.postData.contents);
    var form = payload.form;
    var data = payload.data || {};

    if (!TABS[form]) {
      return json_({ ok: false, error: 'Unknown form: ' + form });
    }

    var sheet = getOrCreateSheet_(TABS[form], HEADERS[form]);
    var row;

    if (form === 'contact') {
      row = [
        new Date(),
        data.name || '',
        data.email || '',
        data.enquiryType || '',
        data.message || '',
      ];
    } else if (form === 'newsletter') {
      row = [
        new Date(),
        data.firstName || '',
        data.lastName || '',
        data.email || '',
        data.source || '',
      ];
    } else if (form === 'challenge-heal') {
      row = [
        new Date(),
        data.fullName || '',
        data.email || '',
        data.ageRange || '',
        data.city || '',
        data.focus || '',
        data.motivation || '',
        data.baselineScreenTime || '',
        (data.practices || []).join(', '),
        data.consistency || '',
        data.currentScreenTime || '',
        data.reflection || '',
        saveUpload_(data.baselineScreenshot, 'baseline'),
        saveUpload_(data.progressScreenshot, 'progress'),
        saveUpload_(data.otherEvidence, 'other'),
      ];
    }

    sheet.appendRow(row);
    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  }
}

// Simple health-check when the URL is opened in a browser.
function doGet() {
  return json_({ ok: true, service: 'Rehvamp form intake' });
}

function getOrCreateSheet_(name, headers) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(name);
  if (!sheet) sheet = ss.insertSheet(name);

  // Ensure the header row exists and is correct.
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(headers);
    sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
    sheet.setFrozenRows(1);
  }
  return sheet;
}

// Accepts a base64 data URL, saves it to Drive, returns a shareable link.
// Returns '' when no file was provided.
function saveUpload_(dataUrl, label) {
  if (!dataUrl || dataUrl.indexOf('data:') !== 0) return '';
  try {
    var folder = getUploadFolder_();
    var parts = dataUrl.split(',');
    var meta = parts[0]; // e.g. data:image/png;base64
    var contentType = meta.substring(5, meta.indexOf(';'));
    var bytes = Utilities.base64Decode(parts[1]);
    var ext = (contentType.split('/')[1] || 'png');
    var name = label + '-' + new Date().getTime() + '.' + ext;
    var blob = Utilities.newBlob(bytes, contentType, name);
    var file = folder.createFile(blob);
    file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
    return file.getUrl();
  } catch (err) {
    return 'upload failed: ' + String(err);
  }
}

function getUploadFolder_() {
  var folders = DriveApp.getFoldersByName(UPLOAD_FOLDER);
  return folders.hasNext() ? folders.next() : DriveApp.createFolder(UPLOAD_FOLDER);
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  );
}
