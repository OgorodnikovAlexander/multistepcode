var x, Total, Plan, months, Price, GPU2, Discount, Discount_representation, Quantity, Departments, IVR, Details, Additional, variable, Company, Annual, eSIM, Plan_Quantity, SIM_type, Terms, Name_Email;

// Describe this function...
function Update_total() {
  Total = Quantity * Plan;
  Total = Total + Departments * 15;
  Total = Total + IVR * 15;
  Total = Total + GPU2;
  Total = Total * Discount;
  Total = Total * months;
  Total = (Math.ceil(Total*10))/10;
  $('[bloc=Total]').text(Total);
  Update_Order();
  Update_discount_representation();
}

// Describe this function...
function Update_Order() {
  $('[bloc=Subscribtion]').text((Math.round((Quantity * Plan * months * Discount)*10))/10);
  $('[bloc=GPU]').text((Math.round((GPU2 * months * Discount)*10))/10);
  $('[bloc=Departments]').text((Math.round((Departments * 15 * months * Discount)*10))/10);
  $('[bloc=IVR]').text((Math.round((IVR * 15 * months * Discount)*10))/10);
}

// Describe this function...
function Get_GPU_Price() {
  if (Plan == 38) {
    GPU2 = 0;
  } else if (Plan == 56) {
    GPU2 = 650;
  } else if (Plan == 94) {
    GPU2 = 550;
  }
  console.log(GPU2);
  return GPU2;
}

// Describe this function...
function Check_Details() {
  if($('.w--tab-active').attr('data-w-tab')=='Details') {
          if (getValueFromInputData('SIRET') != '' && getValueFromInputData('IBAN') != '') {
      console.log('SIRET+IBAN');
      $('#next').addClass('active');

          nextTab = 'Terms';
          we_activeTab = $(".w--tab-active").attr("data-w-tab");
          we_indexOfActiveTab = tabList.indexOf(we_activeTab);
          we_indexOfNextTab = we_indexOfActiveTab + 1;
          we_indexOfPrevTab = we_indexOfActiveTab - 1;
          we_prevTab = tabList[we_indexOfPrevTab];
          we_amountOfTabs = tabList.length;

          if (we_indexOfNextTab < we_amountOfTabs) {
            tabList[we_indexOfNextTab] = nextTab;
          } else {
            tabList.push(nextTab);
          }
          $(we_tabs_next_button).addClass(we_tabs_active_class);
          $(".w--tab-active").attr('next-tab',nextTab);
          $($('[data-w-tab=Terms]')).attr('prev-tab',we_activeTab);

          }

      }}

// Describe this function...
function Get__Plan_Prise(x) {
  if (x == 'Basic') {
    Price = 38;
  } else if (getValueFromInputData('Plan') == 'Business') {
    Price = 56;
  } else if (getValueFromInputData('Plan') == 'Enterprise') {
    Price = 94;
  }
  return Price;
}

// Describe this function...
function Add_order_line() {
  if (Departments >= 1) {
    $('.departments').show();
  } else {
    $('.departments').hide();
  }
  if (GPU2 >= 1) {
    $('.gpu').show();
  } else {
    $('.gpu').hide();
  }
  if (IVR >= 1) {
    $('.ivr').show();
  } else {
    $('.ivr').hide();
  }
  if (Quantity >= 1) {
    $('.subscribtion').show();
  } else {
    $('.subscribtion').hide();
  }
}

// Describe this function...
function Update_discount_representation() {
  if (Discount == 1) {
    Discount_representation = '0%';
  } else if (Discount == 0.8) {
    Discount_representation = '-20%';
  }
}

// Describe this function...
function Check_Email() {
  if (getValueFromInputData('Email') != '') {
    $('#next').addClass('active');

        nextTab = 'Company';
        we_activeTab = $(".w--tab-active").attr("data-w-tab");
        we_indexOfActiveTab = tabList.indexOf(we_activeTab);
        we_indexOfNextTab = we_indexOfActiveTab + 1;
        we_indexOfPrevTab = we_indexOfActiveTab - 1;
        we_prevTab = tabList[we_indexOfPrevTab];
        we_amountOfTabs = tabList.length;

        if (we_indexOfNextTab < we_amountOfTabs) {
          tabList[we_indexOfNextTab] = nextTab;
        } else {
          tabList.push(nextTab);
        }
        $(we_tabs_next_button).addClass(we_tabs_active_class);
        $(".w--tab-active").attr('next-tab',nextTab);
        $($('[data-w-tab=Company]')).attr('prev-tab',we_activeTab);

        } else {
    window.alert('Email can not be empty!');
  }
}

// Describe this function...
function Check_Company() {
  if (getValueFromInputData('Company') != '') {
    Quantity = getValueFromInputData('Amount');
    $('#next').addClass('active');

        nextTab = 'Plan_Quantity';
        we_activeTab = $(".w--tab-active").attr("data-w-tab");
        we_indexOfActiveTab = tabList.indexOf(we_activeTab);
        we_indexOfNextTab = we_indexOfActiveTab + 1;
        we_indexOfPrevTab = we_indexOfActiveTab - 1;
        we_prevTab = tabList[we_indexOfPrevTab];
        we_amountOfTabs = tabList.length;

        if (we_indexOfNextTab < we_amountOfTabs) {
          tabList[we_indexOfNextTab] = nextTab;
        } else {
          tabList.push(nextTab);
        }
        $(we_tabs_next_button).addClass(we_tabs_active_class);
        $(".w--tab-active").attr('next-tab',nextTab);
        $($('[data-w-tab=Plan_Quantity]')).attr('prev-tab',we_activeTab);

        } else {
    window.alert('Company name can not be empty!');
  }
}

// Describe this function...
function Check_Quantity() {
  if (getValueFromInputData('Amount') > 0) {
    Quantity = getValueFromInputData('Amount');
    $('#next').addClass('active');

        nextTab = 'SIM_type';
        we_activeTab = $(".w--tab-active").attr("data-w-tab");
        we_indexOfActiveTab = tabList.indexOf(we_activeTab);
        we_indexOfNextTab = we_indexOfActiveTab + 1;
        we_indexOfPrevTab = we_indexOfActiveTab - 1;
        we_prevTab = tabList[we_indexOfPrevTab];
        we_amountOfTabs = tabList.length;

        if (we_indexOfNextTab < we_amountOfTabs) {
          tabList[we_indexOfNextTab] = nextTab;
        } else {
          tabList.push(nextTab);
        }
        $(we_tabs_next_button).addClass(we_tabs_active_class);
        $(".w--tab-active").attr('next-tab',nextTab);
        $($('[data-w-tab=SIM_type]')).attr('prev-tab',we_activeTab);

        } else {
    window.alert('SIM amount can not be less than 1!');
  }
}


$('#Annual').on('click',function() {
  if ($('#Annual:checked').length != 0) {
    Discount = 0.8;
    months = 12;
    Update_total();
  } else {
    Discount = 1;
    months = 1;
    Update_total();
  }
  $('[bloc=Discount]').text(Discount_representation);
});

$("[data-name='Email']").on("input", function () {
      Check_Email();
});
    
    $("[data-name='Email']").parent("label.w-radio").on("click", function () {
        Check_Email();
});

$("[data-name='Company']").on("input", function () {
      Check_Company();
});
    
    $("[data-name='Company']").parent("label.w-radio").on("click", function () {
        Check_Company();
});

$("[data-name='Amount']").on("input", function () {
      Check_Quantity();
  Add_order_line();
  Update_total();
});
    
    $("[data-name='Amount']").parent("label.w-radio").on("click", function () {
        Check_Quantity();
  Add_order_line();
  Update_total();
});

$('#IVR').on('click',function() {
  if ($('#IVR:checked').length != 0) {
    $('#IVR-amount').show();
    $('.ivr').show();
    IVR = getValueFromInputData('IVR-amount');
    Update_total();
  } else {
    $('#IVR-amount').hide();
    $('.ivr').hide();
    IVR = 0;
    Update_total();
  }
  $('#next').addClass('active');

      nextTab = 'Details';
      we_activeTab = $(".w--tab-active").attr("data-w-tab");
      we_indexOfActiveTab = tabList.indexOf(we_activeTab);
      we_indexOfNextTab = we_indexOfActiveTab + 1;
      we_indexOfPrevTab = we_indexOfActiveTab - 1;
      we_prevTab = tabList[we_indexOfPrevTab];
      we_amountOfTabs = tabList.length;

      if (we_indexOfNextTab < we_amountOfTabs) {
        tabList[we_indexOfNextTab] = nextTab;
      } else {
        tabList.push(nextTab);
      }
      $(we_tabs_next_button).addClass(we_tabs_active_class);
      $(".w--tab-active").attr('next-tab',nextTab);
      $($('[data-w-tab=Details]')).attr('prev-tab',we_activeTab);

      });

$("[data-name='SIM type']").on("input", function () {
      $('#next').addClass('active');

      nextTab = 'Additional';
      we_activeTab = $(".w--tab-active").attr("data-w-tab");
      we_indexOfActiveTab = tabList.indexOf(we_activeTab);
      we_indexOfNextTab = we_indexOfActiveTab + 1;
      we_indexOfPrevTab = we_indexOfActiveTab - 1;
      we_prevTab = tabList[we_indexOfPrevTab];
      we_amountOfTabs = tabList.length;

      if (we_indexOfNextTab < we_amountOfTabs) {
        tabList[we_indexOfNextTab] = nextTab;
      } else {
        tabList.push(nextTab);
      }
      $(we_tabs_next_button).addClass(we_tabs_active_class);
      $(".w--tab-active").attr('next-tab',nextTab);
      $($('[data-w-tab=Additional]')).attr('prev-tab',we_activeTab);

      if (getValueFromInputData('SIM type') == 'Regular') {
    eSIM = 'False';
  } else if (getValueFromInputData('SIM type') == 'eSIM') {
    eSIM = 'True';
  }
});
    
    $("[data-name='SIM type']").parent("label.w-radio").on("click", function () {
        $('#next').addClass('active');

      nextTab = 'Additional';
      we_activeTab = $(".w--tab-active").attr("data-w-tab");
      we_indexOfActiveTab = tabList.indexOf(we_activeTab);
      we_indexOfNextTab = we_indexOfActiveTab + 1;
      we_indexOfPrevTab = we_indexOfActiveTab - 1;
      we_prevTab = tabList[we_indexOfPrevTab];
      we_amountOfTabs = tabList.length;

      if (we_indexOfNextTab < we_amountOfTabs) {
        tabList[we_indexOfNextTab] = nextTab;
      } else {
        tabList.push(nextTab);
      }
      $(we_tabs_next_button).addClass(we_tabs_active_class);
      $(".w--tab-active").attr('next-tab',nextTab);
      $($('[data-w-tab=Additional]')).attr('prev-tab',we_activeTab);

      if (getValueFromInputData('SIM type') == 'Regular') {
    eSIM = 'False';
  } else if (getValueFromInputData('SIM type') == 'eSIM') {
    eSIM = 'True';
  }
});

$("[data-name='SIRET']").on("input", function () {
      Check_Details();
});
    
    $("[data-name='SIRET']").parent("label.w-radio").on("click", function () {
        Check_Details();
});

updateValueInInputData(38,"Plan");
months = 12;
Plan = 38;
Discount = 0.8;
Annual = 1;
Total = 0;
Quantity = 0;
Departments = 0;
IVR = 0;
IVR = 0;
GPU2 = 0;
var we_tabs_next_button = '#next';
    var we_tabs_prev_button = '#back';
    var we_tabs_active_class = 'active';

    var we_activeTab,we_indexOfActiveTab, we_indexOfNextTab, we_indexOfPrevTab, we_prevTab, we_amountOfTabs, nextTab;

    var tabList = ['Name_Email'];

    openTab(tabList[0]);

    $(we_tabs_next_button).on("click", function () {
      var activeTab = $(".w--tab-active").attr("data-w-tab");
      var indexOfActiveTab = tabList.indexOf(activeTab);
      var indexOfNextTab = indexOfActiveTab + 1;
      var nextTab = tabList[indexOfNextTab];
      var amountOfTabs = tabList.length;
      var attrNextTab = $('.w--tab-active').attr('next-tab');

      openTab(attrNextTab);

      attrNextTab = $('.w--tab-active').attr('next-tab');

      if (typeof attrNextTab !== 'undefined' && attrNextTab !== false) {
        $(we_tabs_next_button).addClass(we_tabs_active_class);
      } else {
        $(we_tabs_next_button).removeClass(we_tabs_active_class);
      }

      if (amountOfTabs > 1) {
        $(we_tabs_prev_button).addClass(we_tabs_active_class);
      }
    });

    $(we_tabs_prev_button).on("click", function () {
      var activeTab = $(".w--tab-active").attr("data-w-tab");
      var indexOfActiveTab = tabList.indexOf(activeTab);
      var indexOfPrevTab = indexOfActiveTab - 1;
      var prevTab = tabList[indexOfPrevTab];

      var attrPrevTab = $('.w--tab-active').attr('prev-tab');

      if (indexOfActiveTab > 0) {
        openTab(attrPrevTab);
        $(we_tabs_next_button).addClass(we_tabs_active_class);
      }

      if (indexOfActiveTab <= 1) {
        $(we_tabs_prev_button).removeClass(we_tabs_active_class);
      } else {
        $(we_tabs_prev_button).addClass(we_tabs_active_class);
      }
    });

    function openTab(tab) {
      var tab_link = "a[data-w-tab=" + tab;
      tab = "div[data-w-tab=" + tab;

      $(tab).siblings().removeClass("w--tab-active");
      $(tab).addClass("w--tab-active");
      $(tab_link).siblings("a").removeClass("w--current");
      $(tab_link).addClass("w--current");
    }if($('.w--tab-active').attr('data-w-tab')=='Name_Email') {
        $('#next').addClass('active');

      nextTab = 'Plan_Quantity';
      we_activeTab = $(".w--tab-active").attr("data-w-tab");
      we_indexOfActiveTab = tabList.indexOf(we_activeTab);
      we_indexOfNextTab = we_indexOfActiveTab + 1;
      we_indexOfPrevTab = we_indexOfActiveTab - 1;
      we_prevTab = tabList[we_indexOfPrevTab];
      we_amountOfTabs = tabList.length;

      if (we_indexOfNextTab < we_amountOfTabs) {
        tabList[we_indexOfNextTab] = nextTab;
      } else {
        tabList.push(nextTab);
      }
      $(we_tabs_next_button).addClass(we_tabs_active_class);
      $(".w--tab-active").attr('next-tab',nextTab);
      $($('[data-w-tab=Plan_Quantity]')).attr('prev-tab',we_activeTab);


    }if($('.w--tab-active').attr('data-w-tab')=='Plan_Quantity') {
        $('#next').removeClass('active');

      nextTab = 'Plan_Quantity';
      we_activeTab = $(".w--tab-active").attr("data-w-tab");
      we_indexOfActiveTab = tabList.indexOf(we_activeTab);
      we_indexOfNextTab = we_indexOfActiveTab + 1;
      we_indexOfPrevTab = we_indexOfActiveTab - 1;
      we_prevTab = tabList[we_indexOfPrevTab];
      we_amountOfTabs = tabList.length;

      if (we_indexOfNextTab < we_amountOfTabs) {
        tabList[we_indexOfNextTab] = nextTab;
      } else {
        tabList.push(nextTab);
      }
      $(we_tabs_next_button).addClass(we_tabs_active_class);
      $(".w--tab-active").attr('next-tab',nextTab);
      $($('[data-w-tab=Plan_Quantity]')).attr('prev-tab',we_activeTab);


    }if($('.w--tab-active').attr('data-w-tab')=='SIM_type') {
        $('#next').addClass('active');

      nextTab = 'Additional';
      we_activeTab = $(".w--tab-active").attr("data-w-tab");
      we_indexOfActiveTab = tabList.indexOf(we_activeTab);
      we_indexOfNextTab = we_indexOfActiveTab + 1;
      we_indexOfPrevTab = we_indexOfActiveTab - 1;
      we_prevTab = tabList[we_indexOfPrevTab];
      we_amountOfTabs = tabList.length;

      if (we_indexOfNextTab < we_amountOfTabs) {
        tabList[we_indexOfNextTab] = nextTab;
      } else {
        tabList.push(nextTab);
      }
      $(we_tabs_next_button).addClass(we_tabs_active_class);
      $(".w--tab-active").attr('next-tab',nextTab);
      $($('[data-w-tab=Additional]')).attr('prev-tab',we_activeTab);


    }if($('.w--tab-active').attr('data-w-tab')=='Additional') {
        $('#next').addClass('active');

      nextTab = 'Details';
      we_activeTab = $(".w--tab-active").attr("data-w-tab");
      we_indexOfActiveTab = tabList.indexOf(we_activeTab);
      we_indexOfNextTab = we_indexOfActiveTab + 1;
      we_indexOfPrevTab = we_indexOfActiveTab - 1;
      we_prevTab = tabList[we_indexOfPrevTab];
      we_amountOfTabs = tabList.length;

      if (we_indexOfNextTab < we_amountOfTabs) {
        tabList[we_indexOfNextTab] = nextTab;
      } else {
        tabList.push(nextTab);
      }
      $(we_tabs_next_button).addClass(we_tabs_active_class);
      $(".w--tab-active").attr('next-tab',nextTab);
      $($('[data-w-tab=Details]')).attr('prev-tab',we_activeTab);


    }if($('.w--tab-active').attr('data-w-tab')=='Name_Email') {
        $('#back').hide();
  $('#next').removeClass('active');

    }if($('.w--tab-active').attr('data-w-tab')=='Company') {
        $('#back').show();
  $('#next').removeClass('active');

    }if($('.w--tab-active').attr('data-w-tab')=='Terms') {
        console.log('terms');
  $('.next-but').hide();

    }
$("[data-name='Plan']").on("input", function () {
      Plan = Get__Plan_Prise(getValueFromInputData('Plan'));
  Update_total();
});
    
    $("[data-name='Plan']").parent("label.w-radio").on("click", function () {
        Plan = Get__Plan_Prise(getValueFromInputData('Plan'));
  Update_total();
});

$("[data-name='IBAN']").on("input", function () {
      Check_Details();
});
    
    $("[data-name='IBAN']").parent("label.w-radio").on("click", function () {
        Check_Details();
});

function Multi_Step_Form_form_change() {
      Add_order_line();

    }

  $("[data-name='Multi Step Form'] input").on("input", function () {
    Multi_Step_Form_form_change();
  });

  var clickedRadioButtonValue = $("input", this).val();

$("[data-name='Multi Step Form'] label.w-radio").on("click", function () {
  clickedRadioButtonValue = $("input", this).val();
  Multi_Step_Form_form_change();
});

$("[data-name='IVR-amount']").on("input", function () {
      $('.ivr').show();
  IVR = getValueFromInputData('IVR-amount');
  Update_total();
});
    
    $("[data-name='IVR-amount']").parent("label.w-radio").on("click", function () {
        $('.ivr').show();
  IVR = getValueFromInputData('IVR-amount');
  Update_total();
});

$('#Agree').on('click',function() {
  if ($('#Agree:checked').length != 0) {
    $('#submit').show();
    $('.next-but').hide();
  } else {
    $('#submit').hide();
  }
});

$('#Department').on('click',function() {
  if ($('#Department:checked').length != 0) {
    $('#Departments-amount').show();
    $('.departments').show();
    Departments = getValueFromInputData('Departments-amount');
    Update_total();
  } else {
    $('#Departments-amount').hide();
    $('.departments').hide();
    Departments = 0;
    Update_total();
  }
  $('#next').addClass('active');

      nextTab = 'Details';
      we_activeTab = $(".w--tab-active").attr("data-w-tab");
      we_indexOfActiveTab = tabList.indexOf(we_activeTab);
      we_indexOfNextTab = we_indexOfActiveTab + 1;
      we_indexOfPrevTab = we_indexOfActiveTab - 1;
      we_prevTab = tabList[we_indexOfPrevTab];
      we_amountOfTabs = tabList.length;

      if (we_indexOfNextTab < we_amountOfTabs) {
        tabList[we_indexOfNextTab] = nextTab;
      } else {
        tabList.push(nextTab);
      }
      $(we_tabs_next_button).addClass(we_tabs_active_class);
      $(".w--tab-active").attr('next-tab',nextTab);
      $($('[data-w-tab=Details]')).attr('prev-tab',we_activeTab);

      });

$("[data-name='Departments-amount']").on("input", function () {
      $('.departments').show();
  Departments = getValueFromInputData('Departments-amount');
  Update_total();
});
    
    $("[data-name='Departments-amount']").parent("label.w-radio").on("click", function () {
        $('.departments').show();
  Departments = getValueFromInputData('Departments-amount');
  Update_total();
});

$('#submit').on('click',function() {
  var settings_list = {
      async: true,
      crossDomain: true,
      url: 'endpoint url',
      data: {
          variable: variable,

      },
      headers: {},
      method: "GET"
    };
    $.ajax(settings_list).done(function (response) {

      var dataTemplate = $('.collection-list').children().eq(0).prop('outerHTML');
      $('.collection-list').children().eq(0).hide();
    var buildCollectionBasedOnAPI = true;
    console.log(response);
  if (Array.isArray(response)) {

      var parentCollectionClass = '.collection-list *:last-child';
      response.forEach((item) => {
      var dataTemplateActual = dataTemplate;
        dataTemplateActual = dataTemplateActual.replaceAll("http://[field_name]", item.field_name).replaceAll("[field_name]", item.field_name==undefined ? "" : item.field_name);

      $('.collection-list').append(dataTemplateActual);
        $(parentCollectionClass + " " + '.item').attr('field',item.field_name);

    });
    }
      console.log('succes');

    });
    });

$('#GPUcheckbox').on('click',function() {
  if ($('#GPUcheckbox:checked').length != 0) {
    $('.gpu').show();
    GPU2 = Get_GPU_Price();
    Update_total();
  } else {
    $('.gpu').hide();
    GPU2 = 0;
    Update_total();
  }
  $('#next').addClass('active');

      nextTab = 'Details';
      we_activeTab = $(".w--tab-active").attr("data-w-tab");
      we_indexOfActiveTab = tabList.indexOf(we_activeTab);
      we_indexOfNextTab = we_indexOfActiveTab + 1;
      we_indexOfPrevTab = we_indexOfActiveTab - 1;
      we_prevTab = tabList[we_indexOfPrevTab];
      we_amountOfTabs = tabList.length;

      if (we_indexOfNextTab < we_amountOfTabs) {
        tabList[we_indexOfNextTab] = nextTab;
      } else {
        tabList.push(nextTab);
      }
      $(we_tabs_next_button).addClass(we_tabs_active_class);
      $(".w--tab-active").attr('next-tab',nextTab);
      $($('[data-w-tab=Details]')).attr('prev-tab',we_activeTab);

      });

$(‘#IVR’).prop(‘checked’, true)

$('#Do-not-know').on('click',function() {
  if ($('#dontknow:checked').length == 0) {
    $(‘#Department’).prop(‘checked’, true)
    $('#Departments-amount').hide();
    $('.departments').hide();
    Departments = 0;
    $('#IVR-amount').hide();
    $('.ivr').hide();
    IVR = 0;
    $(‘#GPU’).prop(‘checked’, true)
    $('#GPU-amount').hide();
    $('.gpu').hide();
    GPU2 = 0;
    Update_total();
  } else {
    updateValueInInputData('',"Departments-amount");
    updateValueInInputData('',"IVR-amount");
    Departments = 0;
    IVR = 0;
    GPU2 = 0;
    Update_total();
  }
  $('#next').addClass('active');

      nextTab = 'Details';
      we_activeTab = $(".w--tab-active").attr("data-w-tab");
      we_indexOfActiveTab = tabList.indexOf(we_activeTab);
      we_indexOfNextTab = we_indexOfActiveTab + 1;
      we_indexOfPrevTab = we_indexOfActiveTab - 1;
      we_prevTab = tabList[we_indexOfPrevTab];
      we_amountOfTabs = tabList.length;

      if (we_indexOfNextTab < we_amountOfTabs) {
        tabList[we_indexOfNextTab] = nextTab;
      } else {
        tabList.push(nextTab);
      }
      $(we_tabs_next_button).addClass(we_tabs_active_class);
      $(".w--tab-active").attr('next-tab',nextTab);
      $($('[data-w-tab=Details]')).attr('prev-tab',we_activeTab);

      });
