function arbol() {
  var foldername = 'Videos sin copyright';
  var folderlisting = 'Arbol de la carpeta: ' + foldername;

  var folders = DriveApp.getFoldersByName(foldername)
  var folder = folders.next();
  var contents = folder.getFiles();
  var contents = folder.getFiles();

  var ss = SpreadsheetApp.create(folderlisting);
  var sheet = ss.getActiveSheet(); 
  var src;
  var file;
  var name;
  var link;
  var row; 

  while(contents.hasNext()){
    file = contents.next();
    name = file.getName();
    link = file.getUrl();
    src = "https://www.googleapis.com/drive/v3/files/"+file.getId()+"?alt=media&key="+"Tu Google Drive API";
    sheet.appendRow([name, link, src]);
  }
  
};
