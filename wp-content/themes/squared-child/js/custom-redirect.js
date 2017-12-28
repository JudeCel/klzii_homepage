jQuery(document).ready(function ($) {
    var selectedTxt = $('#currency-select option:selected').val();

    $('#currency-select').change(function () {
        var currentValue = "";
        $("#currency-select option:selected").each(function () {
            currentValue = $(this).val();
        });

        if ((currentValue !== 'null') && (currentValue !== selectedTxt)) {
            $.ajax({
                type: "GET",
                url: window.wp_data.ajax_url,
                data: {
                    action: 'get_redirect_url',
                    trgt: currentValue
                },

                success: function (response) {
                    $(location).attr('href', response);
                }
            });
            selectedTxt = currentValue;
        }
    });
});