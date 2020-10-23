/*global jPlayerPlaylist:false */

window.demo = window.demo || {};

(function(window, $, undefined) {
    'use strict';

    var $body = $('body'),
        demo = window.demo;

    $.extend(demo, {
        config: {},

        init: function() {
            $body.addClass('ontouchstart' in window || 'onmsgesturechange' in window ? 'touch' : 'no-touch');
        },

        /**
         * Initialize the jPlayer and playlist.
         */
        setupPlayer: function() {
            new jPlayerPlaylist({
                jPlayer: '#jquery_jplayer_1',
                cssSelectorAncestor: '#jp_container_1'
            }, [{
                    title: 'Pehla Pyaar',
                    mp3: 'Music/Pehla Pyaar - Kabir Singh.mp3',
                },
                {
                    title: 'Mere Sohneya',
                    mp3: 'Music/Mere Sohneya - Kabir Singh.mp3',
                },
                {
                    title: 'Tujhe Kitna Chahne Lage',
                    mp3: 'Music/Tujhe Kitna Chahne Lage - Kabir Singh.mp3',
                },
                {
                    title: 'One Kiss',
                    mp3: 'Music/One Kiss.mp3',
                },
                {
                    title: 'Perfect',
                    mp3: 'Music/Perfect.mp3',
                },
                {
                    title: 'Yummy',
                    mp3: 'Music/Yummy.mp3',
                },
                {
                    title: 'Kaise Hua',
                    mp3: 'Music/Kaise Hua - Kabir Singh.mp3',
                },
            ], {
                swfPath: 'assets/js/vendor',
                supplied: 'mp3',
                wmode: 'window',
                useStateClassSkin: true,
                autoBlur: false,
                // smoothPlayBar: true,
                keyEnabled: true
            });
        }
    });

    // Document ready.
    jQuery(function() {
        demo.init();
        demo.setupPlayer();
    });

})(this, jQuery);