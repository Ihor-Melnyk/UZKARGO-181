function setPropertyRequired(attributeName, boolValue = true) {
  //обов"язкове
  var attributeProps = EdocsApi.getControlProperties(attributeName);
  attributeProps.required = boolValue;
  EdocsApi.setControlProperties(attributeProps);
}

function setPropertyHidden(attributeName, boolValue = true) {
  //приховане
  var attributeProps = EdocsApi.getControlProperties(attributeName);
  attributeProps.hidden = boolValue;
  EdocsApi.setControlProperties(attributeProps);
}

function setPropertyDisabled(attributeName, boolValue = true) {
  //недоступне
  var attributeProps = EdocsApi.getControlProperties(attributeName);
  attributeProps.disabled = boolValue;
  EdocsApi.setControlProperties(attributeProps);
}

//Скрипт 1. Зміна властивостей атрибутів
function setCreateProps() {
  if (CurrentDocument.inExtId) {
    setPropertyRequired("Branch");
  }
}

function onCardInitialize() {
  setCreateProps();
  CreateRouteTask();
  AddEmployeeTask();
  VerifyApplicationTask();
}

function onTaskExecuteCreateRoute(routeStage) {
  if (routeStage.executionResult == "executed") {
    if (!EdocsApi.getAttributeValue("Branch").value) {
      throw `Не заповнено значення поля «Віповідальна філія»`;
    }
  }
}

function CreateRouteTask() {
  debugger;
  var stateTask = EdocsApi.getCaseTaskDataByCode("CreateRoute")?.state;
  if (stateTask == "completed") {
    setPropertyDisabled("Branch");
  } else {
    setPropertyDisabled("Branch", false);
  }
}

//Скрипт 2. Зміна властивостей атрибутів при призначенні завдання
function AddEmployeeTask() {
  debugger;
  var stateTask = EdocsApi.getCaseTaskDataByCode(
    "AddEmployee" + EdocsApi.getAttributeValue("Sections").value
  )?.state;

  if (
    stateTask == "assigned" ||
    stateTask == "inProgress" ||
    stateTask == "delegated"
  ) {
    setPropertyRequired("Responsible");
    setPropertyHidden("Responsible", false);
    setPropertyDisabled("Responsible", false);

    //sendComment("Звернення на видачу ТУ погоджене. Очікуйте інформацію щодо подальших дій.");
  } else if (stateTask == "completed") {
    setPropertyRequired("Responsible");
    setPropertyHidden("Responsible", false);
    setPropertyDisabled("Responsible");
  } else {
    setPropertyRequired("Responsible", false);
    setPropertyHidden("Responsible");
    setPropertyDisabled("Responsible", false);
  }
}

function onTaskExecuteAddEmployee(routeStage) {
  debugger;
  if (routeStage.executionResult == "executed") {
    if (!EdocsApi.getAttributeValue("Responsible").value)
      throw `Не заповнено значення поля «Відповідальний працівник»`;
  }
}

//Скрипт 2. Зміна властивостей при призначенні завдання
function VerifyApplicationTask() {
  debugger;
  var stateTask = EdocsApi.getCaseTaskDataByCode("VerifyApplication")?.state;
  if (
    stateTask == "assigned" ||
    stateTask == "inProgress" ||
    stateTask == "delegated"
  ) {
    setPropertyRequired("KindApplication");
    setPropertyHidden("KindApplication", false);
    setPropertyDisabled("KindApplication", false);
    setPropertyRequired("MakingСhanges");
    setPropertyHidden("MakingСhanges", false);
    setPropertyDisabled("MakingСhanges", false);
    // setPropertyRequired("TelephoneContactPerson");
    setPropertyHidden("TelephoneContactPerson", false);
    setPropertyDisabled("TelephoneContactPerson", false);
    setPropertyRequired("StructureDepart");
    setPropertyHidden("StructureDepart", false);
    setPropertyDisabled("StructureDepart", false);
    setPropertyRequired("VisaHolder");
    setPropertyHidden("VisaHolder", false);
    setPropertyDisabled("VisaHolder", false);
    setPropertyRequired("RegNumber");
    setPropertyHidden("RegNumber", false);
    setPropertyDisabled("RegNumber", false);
    setPropertyRequired("RegDate");
    setPropertyHidden("RegDate", false);
    setPropertyDisabled("RegDate", false);
    setPropertyRequired("Registraion");
    setPropertyHidden("Registraion", false);
    setPropertyDisabled("Registraion", false);
  } else if (stateTask == "completed") {
    setPropertyRequired("KindApplication");
    setPropertyHidden("KindApplication", false);
    setPropertyDisabled("KindApplication");
    setPropertyRequired("MakingСhanges");
    setPropertyHidden("MakingСhanges", false);
    setPropertyDisabled("MakingСhanges");
    // setPropertyRequired("TelephoneContactPerson");
    setPropertyHidden("TelephoneContactPerson", false);
    setPropertyDisabled("TelephoneContactPerson");
    setPropertyRequired("StructureDepart");
    setPropertyHidden("StructureDepart", false);
    setPropertyDisabled("StructureDepart");
    setPropertyRequired("VisaHolder");
    setPropertyHidden("VisaHolder", false);
    setPropertyDisabled("VisaHolder");
    setPropertyRequired("RegNumber");
    setPropertyHidden("RegNumber", false);
    setPropertyDisabled("RegNumber");
    setPropertyRequired("RegDate");
    setPropertyHidden("RegDate", false);
    setPropertyDisabled("RegDate");
    setPropertyRequired("Registraion");
    setPropertyHidden("Registraion", false);
    setPropertyDisabled("Registraion");
  } else {
    setPropertyRequired("KindApplication", false);
    setPropertyHidden("KindApplication");
    setPropertyDisabled("KindApplication", false);
    setPropertyRequired("MakingСhanges", false);
    setPropertyHidden("MakingСhanges");
    setPropertyDisabled("MakingСhanges", false);
    setPropertyRequired("TelephoneContactPerson", false);
    setPropertyHidden("TelephoneContactPerson");
    setPropertyDisabled("TelephoneContactPerson", false);
    setPropertyRequired("StructureDepart", false);
    setPropertyHidden("StructureDepart");
    setPropertyDisabled("StructureDepart", false);
    setPropertyRequired("VisaHolder", false);
    setPropertyHidden("VisaHolder");
    setPropertyDisabled("VisaHolder", false);
    setPropertyRequired("RegNumber", false);
    setPropertyHidden("RegNumber");
    setPropertyDisabled("RegNumber", false);
    setPropertyRequired("RegDate", false);
    setPropertyHidden("RegDate");
    setPropertyDisabled("RegDate", false);
    setPropertyRequired("Registraion", false);
    setPropertyHidden("Registraion");
    setPropertyDisabled("Registraion", false);
  }
}

function onTaskExecuteVerifyApplication(routeStage) {
  debugger;
  if (routeStage.executionResult == "executed") {
    if (!EdocsApi.getAttributeValue("KindApplication").value)
      throw `Не заповнено значення поля "VisaHolder"`;
    if (!EdocsApi.getAttributeValue("MakingСhanges").value)
      throw `Не заповнено значення поля "Інфориаація щодо Технічних умов"`;
    if (!EdocsApi.getAttributeValue("StructureDepart").value)
      throw `Не заповнено значення поля "Постійно-діюча комісія"`;
    if (!EdocsApi.getAttributeValue("VisaHolder").value)
      throw `Не заповнено значення поля "Погоджуючі"`;
    if (!EdocsApi.getAttributeValue("RegNumber").value)
      throw `Не заповнено значення поля "Реєстраційний номер"`;
    if (!EdocsApi.getAttributeValue("RegDate").value)
      throw `Не заповнено значення поля "реєстраційна дата"`;
    if (!EdocsApi.getAttributeValue("Registraion").value)
      throw `Не заповнено значення поля "Реєстрація"`;
  }
}
