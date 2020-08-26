// /theme/bluesky/amd/src/blueskycustom.js
define(['jquery'], function($) {
    return {
        init: function() {
            $('.modal').on('hidden.bs.modal', function(t) {
                var o = $(t.target).find('iframe');
                o.each(function(t, o) {
                    $(o).attr('src', $(o).attr('src'))
                });
                $('video').trigger('pause');
            });
        }
    };
});