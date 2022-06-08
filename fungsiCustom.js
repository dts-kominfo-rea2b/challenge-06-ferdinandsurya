// TODO: import module bila dibutuhkan di sini
const fs = require("fs");

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3

const fileReader = (file) => {
  if (file.message) {
    let split = file.message.split(" ");
    return split[split.length - 1];
  }

  if (file[0].message) {
    let split = file[0].message.split(" ");
    return split[split.length - 1];
  }

  if (file[0].data.message) {
    let split = file[0].data.message.split(" ");
    return split[split.length - 1];
  }
}

async function bacaData(fnCallback) {
  const fileList = [file1,file2,file3];
  const result = [];

  try {
    for(const file of fileList){
      const read = await fs.promises.readFile(file, "utf-8",);
      result.push(fileReader(JSON.parse(read)));
    }

    fnCallback(null, result);
  } catch(err) {
    fnCallBack(err, null);
  }
};

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
