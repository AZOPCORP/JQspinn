(function($) {
    var loop;
    $.fn.loading = function(params) {

        params = $.extend({
            type: '1',
            custom: [],
            message: 'LOADING ',
            speed: 100,
            fontsize: "16px"

        }, params);

        this.each(function() {
            var spin;
            var spinn = $("<span />");

            switch (params.type) {
                case '0':
                    spin = params.custom;
                    break;
                case '1':
                    spin = ['|', '/', '-', '\\', ];
                    break;
                case '2':
                    spin = ['', '.', '..', '...', ];
                    break;
                case '3':
                    spin = ['ᐁ', 'ᐅ', 'ᐂ', 'ᐊ', 'ᐍ', 'ᐆ', 'ᐃ', 'ᐋ'];
                    break;
                case '4':
                    spin = ['', 'ᚋ', 'ᚌ', 'ᚍ', 'ᚎ', 'ᚏ'];
                    break;
                case '5':
                    spin = ['', ' ▁', '▂', '▃', '▄', '▅', '▆', '▇', '█'];
                    break;
                case '6':
                    spin = ['◢', '◣', '◤', '◥'];
                    break;
                case '7':
                    spin = ['◧', '◪', '◨', '◩'];
                    break;
                case '8':
                    spin=['◻','◼','◽','◾'];
                    break;    
                case '9':
                    spin = ['◰', '◱', '◲', '◳'];
                    break;
                case '10':
                    spin = ['◴', '◵', '◶', '◷'];
                    break;
                case '11':
                    spin = ['▗', '▘', '▙', '▚', '▛', '▜', '▝', '▞', '▟'];
                    break;
                case '12':
                    spin = ['⬖', '⬙', '⬗', '⬘'];
                    break;


            }

            $(this).css("font-size", params.fontsize);

            var i = 0;


            loop = setInterval(function() {

                if (i < spin.length) {
                    spinn.html(params.message + spin[i]);
                    i++;

                } else {
                    i = 0;
                }


            }, params.speed);

            $(this).html(spinn);

        })
    }

    $.fn.loaderdestroy = function(params) {
        clearInterval(loop);
        $(this).html('');
    }


})(jQuery);
