define(['com/nav/navTree'], function(NavTree) {

    var init = function(data)
    {
        $(document).ready(function() {
            new NavTree(document.getElementById('tutorials-nav'));
        });
    };

    return init();
});