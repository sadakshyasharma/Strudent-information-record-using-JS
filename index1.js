var selectedRow = null;

function onFormSubmit() {
  if (validate()) {
    var formData = readFormData();

    if (selectedRow == null) {
      insertNewRecord(formData);
    } else {
      updateRecord(formData);
    }
    resetForm();
  }
}

function readFormData() {
  var formData = {};
  formData["userName"] = document.getElementById("userName").value;
  formData["rollno"] = document.getElementById("rollno").value;
  formData["stdClass"] = document.getElementById("stdClass").value;
  formData["tsub"] = document.getElementById("tsub").value;
  formData["age"] = document.getElementById("age").value;
  return formData;
}
function insertNewRecord(data) {
  var table = document
    .getElementById("stdlist")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.length);
  cell0 = newRow.insertCell(0);
  cell0.innerHTML = `${formSubmissionCount}`;
  cell1 = newRow.insertCell(1);
  cell1.innerHTML = data.userName;
  cell2 = newRow.insertCell(2);
  cell2.innerHTML = data.rollno;
  cell3 = newRow.insertCell(3);
  cell3.innerHTML = data.stdClass;
  cell4 = newRow.insertCell(4);
  cell4.innerHTML = data.tsub;
  cell5 = newRow.insertCell(5);
  cell5.innerHTML = data.age;
  cell5 = newRow.insertCell(6);
  cell5.innerHTML = `<a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
  document.getElementById("userName").value = "";
  document.getElementById("rollno").value = "";
  document.getElementById("stdClass").value = "";
  document.getElementById("tsub").value = "";
  document.getElementById("age").value = "";
  selectedRow = null;
}

function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.userName;
  selectedRow.cells[1].innerHTML = formData.rollno;
  selectedRow.cells[2].innerHTML = formData.stdClass;
  selectedRow.cells[3].innerHTML = formData.tsub;
  selectedRow.cells[4].innerHTML = formData.age;
}

function validate() {
  isValid = true;

  if (document.getElementById("userName").value == "") {
    isValid = false;
    document.getElementById("userNamevalidationError").classList.remove("hide");
  } else {
    isValid = true;

    if (
      !document
        .getElementById("userNamevalidationError")
        .classList.contains("hide")
    ) {
      document.getElementById("userNamevalidationError").classList.add("hide");
    }
  }

  if (document.getElementById("rollno").value == "") {
    isValid = false;
    document.getElementById("rollnovalidationError").classList.remove("hide");
  } else {
    isValid = true;

    if (
      !document
        .getElementById("rollnovalidationError")
        .classList.contains("hide")
    ) {
      document.getElementById("rollnovalidationError").classList.add("hide");
    }
  }

  if (document.getElementById("stdClass").value == "") {
    isValid = false;
    document.getElementById("stdClassvalidationError").classList.remove("hide");
  } else {
    isValid = true;

    if (
      !document
        .getElementById("stdClassvalidationError")
        .classList.contains("hide")
    ) {
      document.getElementById("stdClassvalidationError").classList.add("hide");
    }
  }

  if (document.getElementById("tsub").value == "") {
    isValid = false;
    document.getElementById("tsubvalidationError").classList.remove("hide");
  } else {
    isValid = true;

    if (
      !document.getElementById("tsubvalidationError").classList.contains("hide")
    ) {
      document.getElementById("tsubvalidationError").classList.add("hide");
    }
  }

  if (document.getElementById("age").value == "") {
    isValid = false;
    document.getElementById("agevalidationError").classList.remove("hide");
  } else {
    isValid = true;

    if (
      !document.getElementById("agevalidationError").classList.contains("hide")
    ) {
      document.getElementById("agevalidationError").classList.add("hide");
    }
  }
  return isValid;
}

function onDelete(td) {
  row = td.parentElement.parentElement;
  let Cell = document.getElementById("stdlist").rows[row.rowIndex].cells;
  let a = parseInt(Cell[0].innerHTML);
  const dataa = `form-submission-${a}`;
  console.log(dataa);
  localStorage.removeItem(dataa);
  document.getElementById("stdlist").deleteRow(row.rowIndex);
  resetForm();
}

let formSubmissionCount = 0;

function savedata() {
  var userName, rollno, stdClass, tsub, age, data;
  userName = document.getElementById("userName").value;
  rollno = document.getElementById("rollno").value;
  stdClass = document.getElementById("stdClass").value;
  tsub = document.getElementById("tsub").value;
  age = document.getElementById("age").value;
  data = {
    userName,
    rollno,
    stdClass,
    tsub,
    age,
  };

  // generate a unique key for the form submission data
  formSubmissionCount++;
  const dataa = `form-submission-${formSubmissionCount}`;

  // store the form data in local storage using the generated key
  localStorage.setItem(dataa, JSON.stringify(data));


}
