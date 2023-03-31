function formatDate(date, join, format) {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  console.log(d);

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  if (format === "d/m/Y") {
    return [day, month, year].join(join);
  }
  return [year, month, day].join(join);
}

function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

function formatNumberWithDecimal(v) {
  v = v.replace(/\D/g, "");
  v = new String(Number(v));
  var len = v.length;
  if (1 == len) v = v.replace(/(\d)/, "0,0$1");
  else if (2 == len) v = v.replace(/(\d)/, "0,$1");
  else if (len > 2) {
    v = v.replace(/(\d{2})$/, ",$1");
    if (len > 5) {
      var x = len - 5,
        er = new RegExp("(\\d{" + x + "})(\\d)");
      v = v.replace(er, "$1.$2");
    }
  }
  return v;
}

function formatNumberInt(number, digits) {
  //number = parseInt(number);
  if (Number.isInteger(number)) {
    const number_format = new Intl.NumberFormat("pt-BR", {
      style: "decimal",
      minimumFractionDigits: digits,
    });

    return number_format.format(number);
  } else {
    return number;
  }
}

function formatMoney(value) {
  const money_format = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  });

  return money_format.format(value);
}

function dateInputMask(elm) {
  elm.addEventListener("keypress", function (e) {
    if (e.keyCode < 47 || e.keyCode > 57) {
      e.preventDefault();
    }

    var len = elm.value.length;

    if (len !== 1 || len !== 3) {
      if (e.keyCode == 47) {
        e.preventDefault();
      }
    }

    if (len === 2) {
      elm.value += "/";
    }

    if (len === 5) {
      elm.value += "/";
    }

    if (len >= 10) {
      elm.value.slice(0, 10);
    }
  });
}
