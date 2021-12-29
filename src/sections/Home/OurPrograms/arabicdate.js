$(document).ready(function () {
    $('#date-picker-exchange').pickadate({
        monthsFull: ['يناير', 'فبراير', '	مارس', '	أبريل/إبريل', 'أيار', 'حزيران', 'تموز', '	آب', 'أيلول', 'تشرين الأول', 'تشرين الثاني', 'كانون الأول'],
        monthsShort: ['يناير', 'فبراير', '	مارس', '	أبريل/إبريل', 'أيار', 'حزيران', 'تموز', '	آب', 'أيلول', 'تشرين الأول', 'تشرين الثاني', 'كانون الأول'],
        weekdaysFull: ['الأحد', 'السبت', 'الجمعه', 'الخميس', 'الأربعاء', 'الثلاثاء', 'الأثنين'],
        weekdaysShort: ['الأحد', 'السبت', 'الجمعه', 'الخميس', 'الأربعاء', 'الثلاثاء', 'الأثنين'],
        today: 'اليوم',
        clear: 'اختيار واضح',
        close: 'إلغاء',
        formatSubmit: 'yyyy/mm/dd'
    });

});