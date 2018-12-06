$(function() {
    var $document   = $(document),
        $inputRange = $('input[type="range"]');

    // Example functionality to demonstrate a value feedback
    function valueOutput(element) {
        var value = element.value,
            output = element.parentNode.getElementsByTagName('output')[0];
        output.innerHTML = value;
    }
    for (var i = $inputRange.length - 1; i >= 0; i--) {
        valueOutput($inputRange[i]);
    };
    $document.on('input', 'input[type="range"]', function(e) {
        valueOutput(e.target);
    });
    // end

    // Example functionality to demonstrate disabled functionality
    $document .on('click', 'button[data-behaviour="toggle"]', function(e) {
      var $inputRange = $('input[type="range"]', e.target.parentNode);
      if ($inputRange[0].disabled) {
        $inputRange.prop("disabled", false);
      }
      else {
        $inputRange.prop("disabled", true);
      }

      $inputRange.rangeslider('update');
    });

    $inputRange.rangeslider({
      polyfill: false
    });
});
