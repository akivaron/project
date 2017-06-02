/*!
 * 
 *  * Part of the Antares Project package.
 *  *
 *  * NOTICE OF LICENSE
 *  *
 *  * Licensed under the 3-clause BSD License.
 *  *
 *  * This source file is subject to the 3-clause BSD License that is
 *  * bundled with this package in the LICENSE file.
 *  *
 *  * @package    Files
 *  * @version    0.9.1
 *  * @author     Antares Team
 *  * @license    BSD License (3-clause)
 *  * @copyright  (c) 2017, Antares Project
 *  * @link       http://antaresproject.io
 *  * 
 * 
 * 
 */
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 748);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
module.exports = function(src) {
	if (typeof execScript !== "undefined")
		execScript(src);
	else
		eval.call(null, src);
}


/***/ }),

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
 * Part of the Antares Project package.
 *
 * NOTICE OF LICENSE
 *
 * Licensed under the 3-clause BSD License.
 *
 * This source file is subject to the 3-clause BSD License that is
 * bundled with this package in the LICENSE file.
 *
 * @package    Files
 * @version    0.9.0
 * @author     Antares Team
 * @license    BSD License (3-clause)
 * @copyright  (c) 2017, Antares Project
 * @link       http://antaresproject.io
 * 
 */
var AntaresContextMenu = {
    init: function init() {

        var self = this;

        enquire.register("screen and (min-width:768px)", {

            match: function match() {}

        });

        self.arContextMenuMutate();
    },
    arContextMenu: function arContextMenu() {

        var getItems = function getItems(trigger, e) {
            var element = {},
                elements = {},
                $target = $(trigger);
            if ($(trigger).is('tr')) {
                var $target = $(trigger);
            } else if ($(trigger).is('td')) {
                var $target = $(trigger).closest('tr');
            }

            function isURL(str) {
                var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
                '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
                '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
                '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
                '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
                '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
                return pattern.test(str);
            }

            //if multiActions
            if ($target.closest('.tbl-c').find('tr.is-selected').length > 1) {
                $(trigger).closest('.tbl-c').find('#table-ma').closest('.ddown').find('.ddown__menu li').each(function (index, el) {
                    var $el = $(el),
                        $name = $el.find('>a span:first').text(),
                        $text = $el.find('>a span:first').text(),
                        $icon = $icon[1],
                        $href = $el.find('>a').attr('href');
                    element[$name] = {
                        'callback': function callback() {
                            if (isURL($href) && $href !== '#') {
                                window.location.href = $href;
                            }
                        },
                        'icon': $icon,
                        'name': $text
                    };
                    elements = $.extend({}, element);
                });
                return {
                    items: elements
                };
            }
            //if single action
            else {
                    $target.find('.cm-actions > ul > li > a').each(function (index, el) {
                        var $el = $(el),
                            $name = $el.text(),
                            $text = $el.data('text'),
                            $icon = $el.data('icon'),
                            $href = $el.attr('href');
                        element[$name] = {
                            'callback': function callback() {
                                if (isURL($href) && $href !== '#') {
                                    window.location.href = $href;
                                }
                            },
                            'icon': $icon,
                            'name': $text
                        };
                        // has submenu
                        if ($(el).closest('li').find('> ul').length) {
                            element[$name] = {
                                'name': $text,
                                // 'icon': $icon,
                                items: {}
                            };
                            var subMenuEl = $(el).closest('li').find('> ul a');
                            subMenuEl.each(function (index, el) {
                                var $el = $(el),
                                    $subName = $el.text(),
                                    $subText = $el.data('text'),
                                    $subIcon = $el.data('icon'),
                                    $subHref = $el.attr('href');
                                element[$name].items[$subName] = {
                                    'callback': function callback() {
                                        if (isURL($subHref) && $subHref !== '#') {
                                            window.location.href = $subHref;
                                        }
                                    },
                                    'icon': $subIcon,
                                    'name': $subText
                                };
                            });
                        }
                        elements = $.extend({}, element);
                    });
                    return {
                        items: elements
                    };
                }
        };
        //each roww
        $('.billevo-table tbody tr').each(function (index, item) {
            // LEFT TRIGGER
            $.contextMenu({
                selector: '.billevo-table tbody tr',
                build: function build(trigger, e) {
                    return getItems(trigger, e);
                },
                events: {
                    show: function show() {

                        $('.context-menu-active').each(function () {
                            $(this).contextMenu("hide");
                        });

                        var $self = $(this);
                        if (!$self.hasClass('is-selected')) {
                            $self.closest('table').find('tr').removeClass('is-selected');
                            $self.addClass('is-selected');
                            $self.closest('.tbl-c').find('#table-ma').attr("disabled", true);
                        }
                    }
                }
            });

            // RIGHT TRIGGER ON DOTS
            $.contextMenu({
                selector: '.billevo-table td.dt-actions',
                build: function build(trigger, e) {
                    return getItems(trigger, e);
                },
                trigger: 'left',
                events: {
                    show: function show() {

                        $('.context-menu-active').each(function () {
                            $(this).contextMenu("hide");
                        });

                        var $self = $(this);
                        if (!$self.hasClass('is-selected')) {
                            $self.closest('.tbl-c').find('#table-ma').attr("disabled", true);
                        }
                    }
                }
            });
        });
        //fix - close on body
        $('#app-wrapper').on('click', function () {
            $('.context-menu-active').each(function () {
                $(this).contextMenu("hide");
            });
        });
    },
    arContextMenuMutate: function arContextMenuMutate() {
        var self = this;
        ready('.tbl-c .dataTable tr', function (element) {
            self.arContextMenu();
        });
    }
};
$(function () {
    window.AntaresContextMenu = AntaresContextMenu;
    AntaresContextMenu.init();
});

/***/ }),

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
 * Part of the Antares Project package.
 *
 * NOTICE OF LICENSE
 *
 * Licensed under the 3-clause BSD License.
 *
 * This source file is subject to the 3-clause BSD License that is
 * bundled with this package in the LICENSE file.
 *
 * @package    Files
 * @version    0.9.0
 * @author     Antares Team
 * @license    BSD License (3-clause)
 * @copyright  (c) 2017, Antares Project
 * @link       http://antaresproject.io
 *
 */
var AntaresDatatablesFilters = {
    init: function init() {
        this.values();
        this.addFilter();
        this.closeFilter();
        this.editFilter();
    },
    values: function values() {
        $('.filter-spinner').spinner({
            min: 0,
            max: 3000,
            start: 0,
            culture: "en-US",
            step: 1,
            numberFormat: "C",
            spin: function spin(event, ui) {
                var parent = $(this).closest('.ddown__sgl');
                var values = [];
                var valMin = parseInt(parent.find('.filter-spinner--min').val().replace("$", "").replace(/,/g, ''), 10);
                var valMax = parseInt(parent.find('.filter-spinner--max').val().replace("$", "").replace(/,/g, ''), 10);
                values.push(valMin);
                values.push(valMax);
                parent.find('.filter-slider').slider("values", values);
            }
        });

        var slider = $('[data-slider]'),
            rangeSlider = $('[data-slider-range]');

        slider.slider({
            slide: function slide(event, ui) {
                if ($(this).siblings('.slider-val').length) {
                    $(this).siblings('.slider-val').val(ui.value);
                    $(this).siblings('.slider-val').valid();
                }
            }

        });

        rangeSlider.slider({
            range: true,
            min: 0,
            max: 3000,
            values: [151, 1241],
            slide: function slide(event, ui) {
                var parent = $(this).closest('.ddown__sgl ');
                parent.find(".filter-spinner--min").spinner("value", ui.values[0]);
                parent.find(".filter-spinner--max").spinner("value", ui.values[1]);
            }
        });
    },
    addFilter: function addFilter() {

        var self = this;
        $('.ddown-multi .add-filter').on('click', function () {

            var filterContainer = $(this).closest('.card-ctrls').find('.card-filter');

            var parent = $(this).closest('.ddown__sgl '),
                minVal = parent.find('.filter-spinner--min').val(),
                maxVal = parent.find('.filter-spinner--max').val();

            var typeAmmount = "";
            typeAmmount += "<div class=\"ddown ddown--filter-edit ddown--left mr24\">";
            typeAmmount += "<div data-filter-type=\"ammount\" data-filter-value=\"" + minVal + ' - ' + maxVal + "\" class=\"card-filter__sgl ddown__init\" data-tooltip-inline=\"Filter #2\"><span>" + minVal + ' - ' + maxVal + "<\/span> <i class=\"zmdi zmdi-close filter-close\"><\/i><\/div>";
            typeAmmount += "<div class=\"ddown__content\">";
            typeAmmount += "<div class=\"ddown__arrow\"><\/div>";
            typeAmmount += "<ul class=\"ddown__menu\">";
            typeAmmount += "<li class=\"ddown__label\"><span>Filter By<\/span><\/li>";
            typeAmmount += "<li class=\"ddown__sgl ddown__sgl--range\">";
            typeAmmount += "<div class=\"filter-slider ui-slider--minimal\" data-slider-range=\"true\"><\/div>";
            typeAmmount += "<div class=\"form-block ff-rnw mb0\">";
            typeAmmount += "<div class=\"spinner-basic\">";
            typeAmmount += "<input class=\"filter-spinner filter-spinner--min\" value=\"151\" data-spinner=\"true\" name=\"value\">";
            typeAmmount += "<\/div>";
            typeAmmount += "<span class=\"ml16 mr16\"> - <\/span>";
            typeAmmount += "<div class=\"spinner-basic\">";
            typeAmmount += "<input class=\"filter-spinner filter-spinner--max\" value=\"1241\" data-spinner=\"true\" name=\"value2\">";
            typeAmmount += "<\/div>";
            typeAmmount += "<\/div>";
            typeAmmount += "<a href=\"#\" class=\"btn btn--uppercase btn--md btn--default mdl-js-button mdl-js-ripple-effect add-filter\">Confirm<\/a>";
            typeAmmount += "<\/li>";
            typeAmmount += "<\/ul>";
            typeAmmount += "<\/div>";
            typeAmmount += "<\/div>";

            filterContainer.prepend(typeAmmount);
            self.values();
            self.editFilter();
            AntaresForms.elements.tooltip();
            $(this).closest('.ddown__content').find('.ddown-multi__submenu').hide();
        });
    },
    closeFilter: function closeFilter() {
        $('.card-filter ').on('click', '.filter-close', function (e) {
            e.stopPropagation();
            var $self = $(this);
            $(this).closest('.card-filter__sgl').addClass('animated fadeOutRight');
            setTimeout(function () {
                $self.closest('.ddown--filter-edit').remove();
                $self.closest('.card-filter__sgl').remove();
                var tooltipId = $self.closest('.card-filter__sgl').attr('aria-describedby'),
                    $tooltip = $('#' + tooltipId);
                $tooltip.remove();
            }, 300);
        });
    },
    editFilter: function editFilter() {
        var self = this;
        $('.ddown-multi__init').on('click', function () {
            $('.ddown').removeClass('ddown--open');
            $('.ddown .ddown__content').find('.ddown-multi__submenu').hide();
        });

        $('.ddown--filter-edit').on('click', function () {
            $('.ddown').removeClass('ddown-multi--open ddown--open');
            $('.ddown .ddown__content').find('.ddown-multi__submenu').hide();
        });

        $('.ddown--filter-edit .ddown__menu').on('click', function (e) {
            e.stopPropagation();
        });

        $('.card-filter').find('.add-filter').on('click', function () {
            minVal = $(this).closest('.ddown__sgl').find('.filter-spinner--min').val();
            maxVal = $(this).closest('.ddown__sgl').find('.filter-spinner--max').val();
            $(this).closest('.ddown').find('.card-filter__sgl').attr('data-filter-value', minVal + ' - ' + maxVal);
            $(this).closest('.ddown').find('.card-filter__sgl span').text(minVal + ' - ' + maxVal);
            $(this).closest('.ddown').removeClass('ddown--open');
        });
        self.values();
    }
};
$(function () {
    window.AntaresDatatablesFilters = AntaresDatatablesFilters;
    AntaresDatatablesFilters.init();
});

/***/ }),

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
 * Part of the Antares Project package.
 *
 * NOTICE OF LICENSE
 *
 * Licensed under the 3-clause BSD License.
 *
 * This source file is subject to the 3-clause BSD License that is
 * bundled with this package in the LICENSE file.
 *
 * @package    Files
 * @version    0.9.0
 * @author     Antares Team
 * @license    BSD License (3-clause)
 * @copyright  (c) 2017, Antares Project
 * @link       http://antaresproject.io
 *
 */
var AntaresGsFit = {
    init: function init() {

        var self = this;

        enquire.register("screen and (min-width:768px)", {

            match: function match() {
                self.GsFitMutate();
            }

        });
    },
    GsFitMutate: function GsFitMutate() {
        var self = this;
        var restrain = function restrain() {
            if (!$('table.dataTable').length) {
                return false;
            }
        };
        ready('table.dataTable[data-adjust-height]', function (element) {
            self.gridstackFit();
        });
    },
    gridstackFit: function gridstackFit() {
        var gs = $('.grid-stack').data('gridstack'),
            cH = gs.cellHeight(),
            estimatedCellHeightInPx = 32.5,
            heightFormula;

        function gridCalc(element) {

            var heightFormula;

            var $self = $(element);
            var gsElement = $self.closest('.grid-stack-item'),
                currentX = gsElement.data('data-gs-x'),
                currentY = gsElement.data('data-gs-y'),
                currentH = gsElement.data('data-gs-height'),
                currentW = gsElement.data('data-gs-width');
            gsElement.css('transition-duration', '0ms');
            setTimeout(function () {
                var gsElement = $self.closest('.grid-stack-item'),
                    currentX = gsElement.data('data-gs-x'),
                    currentY = gsElement.data('data-gs-y'),
                    currentH = gsElement.data('data-gs-height'),
                    currentW = gsElement.data('data-gs-width');
                var tableFullHeight = $self.closest('.dataTables_wrapper').outerHeight(true);
                var tblcHeaderHeight = $self.closest('.tbl-c').find('.card-ctrls').outerHeight(true);

                // Exception for TABS
                if ($self.closest('.mdl-tabs').length) {
                    heightFormula = parseInt((tableFullHeight + tblcHeaderHeight + 52) / estimatedCellHeightInPx, 10);
                } else {
                    heightFormula = parseInt((tableFullHeight + tblcHeaderHeight) / estimatedCellHeightInPx, 10);
                }
                gs.update(gsElement, currentX, currentY, currentW, heightFormula);
            }, 100);
            setTimeout(function () {
                var gsElement = $self.closest('.grid-stack-item'),
                    currentX = gsElement.data('data-gs-x'),
                    currentY = gsElement.data('data-gs-y'),
                    currentH = gsElement.data('data-gs-height'),
                    currentW = gsElement.data('data-gs-width'),
                    tableFullHeight = $self.closest('.dataTables_wrapper').outerHeight(true),
                    tblcHeaderHeight = $self.closest('.tbl-c').find('.card-ctrls').outerHeight(true);

                // Exception for TABS
                if ($self.closest('.mdl-tabs')[0]) {
                    heightFormula = parseInt((tableFullHeight + tblcHeaderHeight + 52) / estimatedCellHeightInPx, 10);
                } else {
                    heightFormula = parseInt((tableFullHeight + tblcHeaderHeight) / estimatedCellHeightInPx, 10);
                }
                var wholeHeight = $self.closest('.grid-stack-item-content').outerHeight(true),
                    heightDifference = wholeHeight - (tableFullHeight + tblcHeaderHeight),
                    correction = parseInt(heightDifference / estimatedCellHeightInPx, 10);
                if (correction > 0) {
                    gs.update(gsElement, currentX, currentY, currentW, heightFormula - correction);
                } else if (heightDifference < 0) {
                    // when small records ammount
                    gs.update(gsElement, currentX, currentY, currentW, heightFormula - correction + 1);
                }
            }, 200);
            setTimeout(function () {
                gsElement.css('transition-duration', '150ms');
                $self.closest('.tbl-c').perfectScrollbar('update');
            }, 300);
        }

        $('.tbl-c table').on('page.dt length.dt', function () {
            gridCalc(this);
        });
        gridCalc('table.dataTable');
    }
};
$(function () {
    window.AntaresGsFit = AntaresGsFit;
    AntaresGsFit.init();
});

/***/ }),

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

//context menu -- updated with zmdi icons

/*!
 * jQuery contextMenu v2.4.2 - Plugin for simple contextMenu handling
 *
 * Version: v2.4.2
 *
 * Authors: Björn Brala (SWIS.nl), Rodney Rehm, Addy Osmani (patches for FF)
 * Web: http://swisnl.github.io/jQuery-contextMenu/
 *
 * Copyright (c) 2011-2017 SWIS BV and contributors
 *
 * Licensed under
 *   MIT License http://www.opensource.org/licenses/mit-license
 *   GPL v3 http://opensource.org/licenses/GPL-3.0
 *
 * Date: 2017-01-02T09:03:00.678Z
 */

// jscs:disable
/* jshint ignore:start */
(function (factory) {
    if (true) {
        // AMD. Register as anonymous module.
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(16)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') {
        // Node / CommonJS
        factory(require('jquery'));
    } else {
        // Browser globals.
        factory(jQuery);
    }
})(function ($) {

    'use strict';

    // TODO: -
    // ARIA stuff: menuitem, menuitemcheckbox und menuitemradio
    // create <menu> structure if $.support[htmlCommand || htmlMenuitem] and !opt.disableNative

    // determine html5 compatibility

    $.support.htmlMenuitem = 'HTMLMenuItemElement' in window;
    $.support.htmlCommand = 'HTMLCommandElement' in window;
    $.support.eventSelectstart = 'onselectstart' in document.documentElement;
    /* // should the need arise, test for css user-select
     $.support.cssUserSelect = (function(){
     var t = false,
     e = document.createElement('div');
       $.each('Moz|Webkit|Khtml|O|ms|Icab|'.split('|'), function(i, prefix) {
     var propCC = prefix + (prefix ? 'U' : 'u') + 'serSelect',
     prop = (prefix ? ('-' + prefix.toLowerCase() + '-') : '') + 'user-select';
       e.style.cssText = prop + ': text;';
     if (e.style[propCC] == 'text') {
     t = true;
     return false;
     }
       return true;
     });
       return t;
     })();
     */

    if (!$.ui || !$.widget) {
        // duck punch $.cleanData like jQueryUI does to get that remove event
        $.cleanData = function (orig) {
            return function (elems) {
                var events, elem, i;
                for (i = 0; elems[i] != null; i++) {
                    elem = elems[i];
                    try {
                        // Only trigger remove when necessary to save time
                        events = $._data(elem, 'events');
                        if (events && events.remove) {
                            $(elem).triggerHandler('remove');
                        }

                        // Http://bugs.jquery.com/ticket/8235
                    } catch (e) {}
                }
                orig(elems);
            };
        }($.cleanData);
    }
    /* jshint ignore:end */
    // jscs:enable

    var // currently active contextMenu trigger
    $currentTrigger = null,

    // is contextMenu initialized with at least one menu?
    initialized = false,

    // window handle
    $win = $(window),

    // number of registered menus
    counter = 0,

    // mapping selector to namespace
    namespaces = {},

    // mapping namespace to options
    menus = {},

    // custom command type handlers
    types = {},

    // default values
    defaults = {
        // selector of contextMenu trigger
        selector: null,
        // where to append the menu to
        appendTo: null,
        // method to trigger context menu ["right", "left", "hover"]
        trigger: 'right',
        // hide menu when mouse leaves trigger / menu elements
        autoHide: false,
        // ms to wait before showing a hover-triggered context menu
        delay: 200,
        // flag denoting if a second trigger should simply move (true) or rebuild (false) an open menu
        // as long as the trigger happened on one of the trigger-element's child nodes
        reposition: true,

        //ability to select submenu
        selectableSubMenu: false,

        // Default classname configuration to be able avoid conflicts in frameworks
        classNames: {
            hover: 'context-menu-hover', // Item hover
            disabled: 'context-menu-disabled', // Item disabled
            visible: 'context-menu-visible', // Item visible
            notSelectable: 'context-menu-not-selectable', // Item not selectable

            icon: 'context-menu-icon',
            iconEdit: 'context-menu-icon-edit',
            iconCut: 'context-menu-icon-cut',
            iconCopy: 'context-menu-icon-copy',
            iconPaste: 'context-menu-icon-paste',
            iconDelete: 'context-menu-icon-delete',
            iconAdd: 'context-menu-icon-add',
            iconQuit: 'context-menu-icon-quit',
            iconLoadingClass: 'context-menu-icon-loading'
        },

        // determine position to show menu at
        determinePosition: function determinePosition($menu) {
            // position to the lower middle of the trigger element
            if ($.ui && $.ui.position) {
                // .position() is provided as a jQuery UI utility
                // (...and it won't work on hidden elements)
                $menu.css('display', 'block').position({
                    my: 'center top',
                    at: 'center bottom',
                    of: this,
                    offset: '0 5',
                    collision: 'fit'
                }).css('display', 'none');
            } else {
                // determine contextMenu position
                var offset = this.offset();
                offset.top += this.outerHeight();
                offset.left += this.outerWidth() / 2 - $menu.outerWidth() / 2;
                $menu.css(offset);
            }
        },
        // position menu
        position: function position(opt, x, y) {
            var offset;
            // determine contextMenu position
            if (!x && !y) {
                opt.determinePosition.call(this, opt.$menu);
                return;
            } else if (x === 'maintain' && y === 'maintain') {
                // x and y must not be changed (after re-show on command click)
                offset = opt.$menu.position();
            } else {
                // x and y are given (by mouse event)
                offset = { top: y, left: x };
            }

            // correct offset if viewport demands it
            var bottom = $win.scrollTop() + $win.height(),
                right = $win.scrollLeft() + $win.width(),
                height = opt.$menu.outerHeight(),
                width = opt.$menu.outerWidth();

            if (offset.top + height > bottom) {
                offset.top -= height;
            }

            if (offset.top < 0) {
                offset.top = 0;
            }

            if (offset.left + width > right) {
                offset.left -= width;
            }

            if (offset.left < 0) {
                offset.left = 0;
            }

            opt.$menu.css(offset);
        },
        // position the sub-menu
        positionSubmenu: function positionSubmenu($menu) {
            if ($menu === undefined) {
                // When user hovers over item (which has sub items) handle.focusItem will call this.
                // but the submenu does not exist yet if opt.items is a promise. just return, will
                // call positionSubmenu after promise is completed.
                return;
            }
            if ($.ui && $.ui.position) {
                // .position() is provided as a jQuery UI utility
                // (...and it won't work on hidden elements)
                $menu.css('display', 'block').position({
                    my: 'left top-5',
                    at: 'right top',
                    of: this,
                    collision: 'flipfit fit'
                }).css('display', '');
            } else {
                // determine contextMenu position
                var offset = {
                    top: -9,
                    left: this.outerWidth() - 5
                };
                $menu.css(offset);
            }
        },
        // offset to add to zIndex
        zIndex: 1,
        // show hide animation settings
        animation: {
            duration: 50,
            show: 'slideDown',
            hide: 'slideUp'
        },
        // events
        events: {
            show: $.noop,
            hide: $.noop
        },
        // default callback
        callback: null,
        // list of contextMenu items
        items: {}
    },

    // mouse position for hover activation
    hoveract = {
        timer: null,
        pageX: null,
        pageY: null
    },

    // determine zIndex
    zindex = function zindex($t) {
        var zin = 0,
            $tt = $t;

        while (true) {
            zin = Math.max(zin, parseInt($tt.css('z-index'), 10) || 0);
            $tt = $tt.parent();
            if (!$tt || !$tt.length || 'html body'.indexOf($tt.prop('nodeName').toLowerCase()) > -1) {
                break;
            }
        }
        return zin;
    },

    // event handlers
    handle = {
        // abort anything
        abortevent: function abortevent(e) {
            e.preventDefault();
            e.stopImmediatePropagation();
        },
        // contextmenu show dispatcher
        contextmenu: function contextmenu(e) {
            var $this = $(this);

            // disable actual context-menu if we are using the right mouse button as the trigger
            if (e.data.trigger === 'right') {
                e.preventDefault();
                e.stopImmediatePropagation();
            }

            // abort native-triggered events unless we're triggering on right click
            if (e.data.trigger !== 'right' && e.data.trigger !== 'demand' && e.originalEvent) {
                return;
            }

            // Let the current contextmenu decide if it should show or not based on its own trigger settings
            if (e.mouseButton !== undefined && e.data) {
                if (!(e.data.trigger === 'left' && e.mouseButton === 0) && !(e.data.trigger === 'right' && e.mouseButton === 2)) {
                    // Mouse click is not valid.
                    return;
                }
            }

            // abort event if menu is visible for this trigger
            if ($this.hasClass('context-menu-active')) {
                return;
            }

            if (!$this.hasClass('context-menu-disabled')) {
                // theoretically need to fire a show event at <menu>
                // http://www.whatwg.org/specs/web-apps/current-work/multipage/interactive-elements.html#context-menus
                // var evt = jQuery.Event("show", { data: data, pageX: e.pageX, pageY: e.pageY, relatedTarget: this });
                // e.data.$menu.trigger(evt);

                $currentTrigger = $this;
                if (e.data.build) {
                    var built = e.data.build($currentTrigger, e);
                    // abort if build() returned false
                    if (built === false) {
                        return;
                    }

                    // dynamically build menu on invocation
                    e.data = $.extend(true, {}, defaults, e.data, built || {});

                    // abort if there are no items to display
                    if (!e.data.items || $.isEmptyObject(e.data.items)) {
                        // Note: jQuery captures and ignores errors from event handlers
                        if (window.console) {
                            (console.error || console.log).call(console, 'No items specified to show in contextMenu');
                        }

                        throw new Error('No Items specified');
                    }

                    // backreference for custom command type creation
                    e.data.$trigger = $currentTrigger;

                    op.create(e.data);
                }
                var showMenu = false;
                for (var item in e.data.items) {
                    if (e.data.items.hasOwnProperty(item)) {
                        var visible;
                        if ($.isFunction(e.data.items[item].visible)) {
                            visible = e.data.items[item].visible.call($(e.currentTarget), item, e.data);
                        } else if (typeof e.data.items[item] !== 'undefined' && e.data.items[item].visible) {
                            visible = e.data.items[item].visible === true;
                        } else {
                            visible = true;
                        }
                        if (visible) {
                            showMenu = true;
                        }
                    }
                }
                if (showMenu) {
                    // show menu
                    op.show.call($this, e.data, e.pageX, e.pageY);
                }
            }
        },
        // contextMenu left-click trigger
        click: function click(e) {
            e.preventDefault();
            e.stopImmediatePropagation();
            $(this).trigger($.Event('contextmenu', { data: e.data, pageX: e.pageX, pageY: e.pageY }));
        },
        // contextMenu right-click trigger
        mousedown: function mousedown(e) {
            // register mouse down
            var $this = $(this);

            // hide any previous menus
            if ($currentTrigger && $currentTrigger.length && !$currentTrigger.is($this)) {
                $currentTrigger.data('contextMenu').$menu.trigger('contextmenu:hide');
            }

            // activate on right click
            if (e.button === 2) {
                $currentTrigger = $this.data('contextMenuActive', true);
            }
        },
        // contextMenu right-click trigger
        mouseup: function mouseup(e) {
            // show menu
            var $this = $(this);
            if ($this.data('contextMenuActive') && $currentTrigger && $currentTrigger.length && $currentTrigger.is($this) && !$this.hasClass('context-menu-disabled')) {
                e.preventDefault();
                e.stopImmediatePropagation();
                $currentTrigger = $this;
                $this.trigger($.Event('contextmenu', { data: e.data, pageX: e.pageX, pageY: e.pageY }));
            }

            $this.removeData('contextMenuActive');
        },
        // contextMenu hover trigger
        mouseenter: function mouseenter(e) {
            var $this = $(this),
                $related = $(e.relatedTarget),
                $document = $(document);

            // abort if we're coming from a menu
            if ($related.is('.context-menu-list') || $related.closest('.context-menu-list').length) {
                return;
            }

            // abort if a menu is shown
            if ($currentTrigger && $currentTrigger.length) {
                return;
            }

            hoveract.pageX = e.pageX;
            hoveract.pageY = e.pageY;
            hoveract.data = e.data;
            $document.on('mousemove.contextMenuShow', handle.mousemove);
            hoveract.timer = setTimeout(function () {
                hoveract.timer = null;
                $document.off('mousemove.contextMenuShow');
                $currentTrigger = $this;
                $this.trigger($.Event('contextmenu', {
                    data: hoveract.data,
                    pageX: hoveract.pageX,
                    pageY: hoveract.pageY
                }));
            }, e.data.delay);
        },
        // contextMenu hover trigger
        mousemove: function mousemove(e) {
            hoveract.pageX = e.pageX;
            hoveract.pageY = e.pageY;
        },
        // contextMenu hover trigger
        mouseleave: function mouseleave(e) {
            // abort if we're leaving for a menu
            var $related = $(e.relatedTarget);
            if ($related.is('.context-menu-list') || $related.closest('.context-menu-list').length) {
                return;
            }

            try {
                clearTimeout(hoveract.timer);
            } catch (e) {}

            hoveract.timer = null;
        },
        // click on layer to hide contextMenu
        layerClick: function layerClick(e) {
            var $this = $(this),
                root = $this.data('contextMenuRoot'),
                button = e.button,
                x = e.pageX,
                y = e.pageY,
                target,
                offset;

            e.preventDefault();
            e.stopImmediatePropagation();

            setTimeout(function () {
                var $window;
                var triggerAction = root.trigger === 'left' && button === 0 || root.trigger === 'right' && button === 2;

                // find the element that would've been clicked, wasn't the layer in the way
                if (document.elementFromPoint && root.$layer) {
                    root.$layer.hide();
                    target = document.elementFromPoint(x - $win.scrollLeft(), y - $win.scrollTop());

                    // also need to try and focus this element if we're in a contenteditable area,
                    // as the layer will prevent the browser mouse action we want
                    if (target.isContentEditable) {
                        var range = document.createRange(),
                            sel = window.getSelection();
                        range.selectNode(target);
                        range.collapse(true);
                        sel.removeAllRanges();
                        sel.addRange(range);
                    }

                    root.$layer.show();
                }

                if (root.reposition && triggerAction) {
                    if (document.elementFromPoint) {
                        if (root.$trigger.is(target) || root.$trigger.has(target).length) {
                            root.position.call(root.$trigger, root, x, y);
                            return;
                        }
                    } else {
                        offset = root.$trigger.offset();
                        $window = $(window);
                        // while this looks kinda awful, it's the best way to avoid
                        // unnecessarily calculating any positions
                        offset.top += $window.scrollTop();
                        if (offset.top <= e.pageY) {
                            offset.left += $window.scrollLeft();
                            if (offset.left <= e.pageX) {
                                offset.bottom = offset.top + root.$trigger.outerHeight();
                                if (offset.bottom >= e.pageY) {
                                    offset.right = offset.left + root.$trigger.outerWidth();
                                    if (offset.right >= e.pageX) {
                                        // reposition
                                        root.position.call(root.$trigger, root, x, y);
                                        return;
                                    }
                                }
                            }
                        }
                    }
                }

                if (target && triggerAction) {
                    root.$trigger.one('contextmenu:hidden', function () {
                        $(target).contextMenu({ x: x, y: y, button: button });
                    });
                }

                if (root != null && root.$menu != null) {
                    root.$menu.trigger('contextmenu:hide');
                }
            }, 50);
        },
        // key handled :hover
        keyStop: function keyStop(e, opt) {
            if (!opt.isInput) {
                e.preventDefault();
            }

            e.stopPropagation();
        },
        key: function key(e) {

            var opt = {};

            // Only get the data from $currentTrigger if it exists
            if ($currentTrigger) {
                opt = $currentTrigger.data('contextMenu') || {};
            }
            // If the trigger happen on a element that are above the contextmenu do this
            if (opt.zIndex === undefined) {
                opt.zIndex = 0;
            }
            var targetZIndex = 0;
            var getZIndexOfTriggerTarget = function getZIndexOfTriggerTarget(target) {
                if (target.style.zIndex !== '') {
                    targetZIndex = target.style.zIndex;
                } else {
                    if (target.offsetParent !== null && target.offsetParent !== undefined) {
                        getZIndexOfTriggerTarget(target.offsetParent);
                    } else if (target.parentElement !== null && target.parentElement !== undefined) {
                        getZIndexOfTriggerTarget(target.parentElement);
                    }
                }
            };
            getZIndexOfTriggerTarget(e.target);
            // If targetZIndex is heigher then opt.zIndex dont progress any futher.
            // This is used to make sure that if you are using a dialog with a input / textarea / contenteditable div
            // and its above the contextmenu it wont steal keys events
            if (targetZIndex > opt.zIndex) {
                return;
            }
            switch (e.keyCode) {
                case 9:
                case 38:
                    // up
                    handle.keyStop(e, opt);
                    // if keyCode is [38 (up)] or [9 (tab) with shift]
                    if (opt.isInput) {
                        if (e.keyCode === 9 && e.shiftKey) {
                            e.preventDefault();
                            if (opt.$selected) {
                                opt.$selected.find('input, textarea, select').blur();
                            }
                            if (opt.$menu != null) opt.$menu.trigger('prevcommand');
                            return;
                        } else if (e.keyCode === 38 && opt.$selected.find('input, textarea, select').prop('type') === 'checkbox') {
                            // checkboxes don't capture this key
                            e.preventDefault();
                            return;
                        }
                    } else if (e.keyCode !== 9 || e.shiftKey) {
                        if (opt.$menu != null) opt.$menu.trigger('prevcommand');
                        return;
                    }
                    break;
                // omitting break;
                // case 9: // tab - reached through omitted break;
                case 40:
                    // down
                    handle.keyStop(e, opt);
                    if (opt.isInput) {
                        if (e.keyCode === 9) {
                            e.preventDefault();
                            if (opt.$selected) {
                                opt.$selected.find('input, textarea, select').blur();
                            }
                            if (opt.$menu != null) opt.$menu.trigger('nextcommand');
                            return;
                        } else if (e.keyCode === 40 && opt.$selected.find('input, textarea, select').prop('type') === 'checkbox') {
                            // checkboxes don't capture this key
                            e.preventDefault();
                            return;
                        }
                    } else {
                        if (opt.$menu != null) opt.$menu.trigger('nextcommand');
                        return;
                    }
                    break;

                case 37:
                    // left
                    handle.keyStop(e, opt);
                    if (opt.isInput || !opt.$selected || !opt.$selected.length) {
                        break;
                    }

                    if (!opt.$selected.parent().hasClass('context-menu-root')) {
                        var $parent = opt.$selected.parent().parent();
                        opt.$selected.trigger('contextmenu:blur');
                        opt.$selected = $parent;
                        return;
                    }
                    break;

                case 39:
                    // right
                    handle.keyStop(e, opt);
                    if (opt.isInput || !opt.$selected || !opt.$selected.length) {
                        break;
                    }

                    var itemdata = opt.$selected.data('contextMenu') || {};
                    if (itemdata.$menu && opt.$selected.hasClass('context-menu-submenu')) {
                        opt.$selected = null;
                        itemdata.$selected = null;
                        itemdata.$menu.trigger('nextcommand');
                        return;
                    }
                    break;

                case 35: // end
                case 36:
                    // home
                    if (opt.$selected && opt.$selected.find('input, textarea, select').length) {
                        return;
                    } else {
                        (opt.$selected && opt.$selected.parent() || opt.$menu).children(':not(.' + opt.classNames.disabled + ', .' + opt.classNames.notSelectable + ')')[e.keyCode === 36 ? 'first' : 'last']().trigger('contextmenu:focus');
                        e.preventDefault();
                        return;
                    }
                    break;

                case 13:
                    // enter
                    handle.keyStop(e, opt);
                    if (opt.isInput) {
                        if (opt.$selected && !opt.$selected.is('textarea, select')) {
                            e.preventDefault();
                            return;
                        }
                        break;
                    }
                    if (typeof opt.$selected !== 'undefined' && opt.$selected !== null) {
                        opt.$selected.trigger('mouseup');
                    }
                    return;

                case 32: // space
                case 33: // page up
                case 34:
                    // page down
                    // prevent browser from scrolling down while menu is visible
                    handle.keyStop(e, opt);
                    return;

                case 27:
                    // esc
                    handle.keyStop(e, opt);
                    if (opt.$menu != null) opt.$menu.trigger('contextmenu:hide');
                    return;

                default:
                    // 0-9, a-z
                    var k = String.fromCharCode(e.keyCode).toUpperCase();
                    if (opt.accesskeys && opt.accesskeys[k]) {
                        // according to the specs accesskeys must be invoked immediately
                        opt.accesskeys[k].$node.trigger(opt.accesskeys[k].$menu ? 'contextmenu:focus' : 'mouseup');
                        return;
                    }
                    break;
            }
            // pass event to selected item,
            // stop propagation to avoid endless recursion
            e.stopPropagation();
            if (typeof opt.$selected !== 'undefined' && opt.$selected !== null) {
                opt.$selected.trigger(e);
            }
        },
        // select previous possible command in menu
        prevItem: function prevItem(e) {
            e.stopPropagation();
            var opt = $(this).data('contextMenu') || {};
            var root = $(this).data('contextMenuRoot') || {};

            // obtain currently selected menu
            if (opt.$selected) {
                var $s = opt.$selected;
                opt = opt.$selected.parent().data('contextMenu') || {};
                opt.$selected = $s;
            }

            var $children = opt.$menu.children(),
                $prev = !opt.$selected || !opt.$selected.prev().length ? $children.last() : opt.$selected.prev(),
                $round = $prev;

            // skip disabled or hidden elements
            while ($prev.hasClass(root.classNames.disabled) || $prev.hasClass(root.classNames.notSelectable) || $prev.is(':hidden')) {
                if ($prev.prev().length) {
                    $prev = $prev.prev();
                } else {
                    $prev = $children.last();
                }
                if ($prev.is($round)) {
                    // break endless loop
                    return;
                }
            }

            // leave current
            if (opt.$selected) {
                handle.itemMouseleave.call(opt.$selected.get(0), e);
            }

            // activate next
            handle.itemMouseenter.call($prev.get(0), e);

            // focus input
            var $input = $prev.find('input, textarea, select');
            if ($input.length) {
                $input.focus();
            }
        },
        // select next possible command in menu
        nextItem: function nextItem(e) {
            e.stopPropagation();
            var opt = $(this).data('contextMenu') || {};
            var root = $(this).data('contextMenuRoot') || {};

            // obtain currently selected menu
            if (opt.$selected) {
                var $s = opt.$selected;
                opt = opt.$selected.parent().data('contextMenu') || {};
                opt.$selected = $s;
            }

            var $children = opt.$menu.children(),
                $next = !opt.$selected || !opt.$selected.next().length ? $children.first() : opt.$selected.next(),
                $round = $next;

            // skip disabled
            while ($next.hasClass(root.classNames.disabled) || $next.hasClass(root.classNames.notSelectable) || $next.is(':hidden')) {
                if ($next.next().length) {
                    $next = $next.next();
                } else {
                    $next = $children.first();
                }
                if ($next.is($round)) {
                    // break endless loop
                    return;
                }
            }

            // leave current
            if (opt.$selected) {
                handle.itemMouseleave.call(opt.$selected.get(0), e);
            }

            // activate next
            handle.itemMouseenter.call($next.get(0), e);

            // focus input
            var $input = $next.find('input, textarea, select');
            if ($input.length) {
                $input.focus();
            }
        },
        // flag that we're inside an input so the key handler can act accordingly
        focusInput: function focusInput() {
            var $this = $(this).closest('.context-menu-item'),
                data = $this.data(),
                opt = data.contextMenu,
                root = data.contextMenuRoot;

            root.$selected = opt.$selected = $this;
            root.isInput = opt.isInput = true;
        },
        // flag that we're inside an input so the key handler can act accordingly
        blurInput: function blurInput() {
            var $this = $(this).closest('.context-menu-item'),
                data = $this.data(),
                opt = data.contextMenu,
                root = data.contextMenuRoot;

            root.isInput = opt.isInput = false;
        },
        // :hover on menu
        menuMouseenter: function menuMouseenter() {
            var root = $(this).data().contextMenuRoot;
            root.hovering = true;
        },
        // :hover on menu
        menuMouseleave: function menuMouseleave(e) {
            var root = $(this).data().contextMenuRoot;
            if (root.$layer && root.$layer.is(e.relatedTarget)) {
                root.hovering = false;
            }
        },
        // :hover done manually so key handling is possible
        itemMouseenter: function itemMouseenter(e) {
            var $this = $(this),
                data = $this.data(),
                opt = data.contextMenu,
                root = data.contextMenuRoot;

            root.hovering = true;

            // abort if we're re-entering
            if (e && root.$layer && root.$layer.is(e.relatedTarget)) {
                e.preventDefault();
                e.stopImmediatePropagation();
            }

            // make sure only one item is selected
            (opt.$menu ? opt : root).$menu.children('.' + root.classNames.hover).trigger('contextmenu:blur').children('.hover').trigger('contextmenu:blur');

            if ($this.hasClass(root.classNames.disabled) || $this.hasClass(root.classNames.notSelectable)) {
                opt.$selected = null;
                return;
            }

            $this.trigger('contextmenu:focus');
        },
        // :hover done manually so key handling is possible
        itemMouseleave: function itemMouseleave(e) {
            var $this = $(this),
                data = $this.data(),
                opt = data.contextMenu,
                root = data.contextMenuRoot;

            if (root !== opt && root.$layer && root.$layer.is(e.relatedTarget)) {
                if (typeof root.$selected !== 'undefined' && root.$selected !== null) {
                    root.$selected.trigger('contextmenu:blur');
                }
                e.preventDefault();
                e.stopImmediatePropagation();
                root.$selected = opt.$selected = opt.$node;
                return;
            }

            $this.trigger('contextmenu:blur');
        },
        // contextMenu item click
        itemClick: function itemClick(e) {
            var $this = $(this),
                data = $this.data(),
                opt = data.contextMenu,
                root = data.contextMenuRoot,
                key = data.contextMenuKey,
                callback;

            // abort if the key is unknown or disabled or is a menu
            if (!opt.items[key] || $this.is('.' + root.classNames.disabled + ', .context-menu-separator, .' + root.classNames.notSelectable) || $this.is('.context-menu-submenu') && root.selectableSubMenu === false) {
                return;
            }

            e.preventDefault();
            e.stopImmediatePropagation();

            if ($.isFunction(opt.callbacks[key]) && Object.prototype.hasOwnProperty.call(opt.callbacks, key)) {
                // item-specific callback
                callback = opt.callbacks[key];
            } else if ($.isFunction(root.callback)) {
                // default callback
                callback = root.callback;
            } else {
                // no callback, no action
                return;
            }

            // hide menu if callback doesn't stop that
            if (callback.call(root.$trigger, key, root) !== false) {
                root.$menu.trigger('contextmenu:hide');
            } else if (root.$menu.parent().length) {
                op.update.call(root.$trigger, root);
            }
        },
        // ignore click events on input elements
        inputClick: function inputClick(e) {
            e.stopImmediatePropagation();
        },
        // hide <menu>
        hideMenu: function hideMenu(e, data) {
            var root = $(this).data('contextMenuRoot');
            op.hide.call(root.$trigger, root, data && data.force);
        },
        // focus <command>
        focusItem: function focusItem(e) {
            e.stopPropagation();
            var $this = $(this),
                data = $this.data(),
                opt = data.contextMenu,
                root = data.contextMenuRoot;

            if ($this.hasClass(root.classNames.disabled) || $this.hasClass(root.classNames.notSelectable)) {
                return;
            }

            $this.addClass([root.classNames.hover, root.classNames.visible].join(' '))
            // select other items and included items
            .parent().find('.context-menu-item').not($this).removeClass(root.classNames.visible).filter('.' + root.classNames.hover).trigger('contextmenu:blur');

            // remember selected
            opt.$selected = root.$selected = $this;

            // position sub-menu - do after show so dumb $.ui.position can keep up
            if (opt.$node) {
                root.positionSubmenu.call(opt.$node, opt.$menu);
            }
        },
        // blur <command>
        blurItem: function blurItem(e) {
            e.stopPropagation();
            var $this = $(this),
                data = $this.data(),
                opt = data.contextMenu,
                root = data.contextMenuRoot;

            if (opt.autoHide) {
                // for tablets and touch screens this needs to remain
                $this.removeClass(root.classNames.visible);
            }
            $this.removeClass(root.classNames.hover);
            opt.$selected = null;
        }
    },

    // operations
    op = {
        show: function show(opt, x, y) {
            var $trigger = $(this),
                css = {};

            // hide any open menus
            $('#context-menu-layer').trigger('mousedown');

            // backreference for callbacks
            opt.$trigger = $trigger;

            // show event
            if (opt.events.show.call($trigger, opt) === false) {
                $currentTrigger = null;
                return;
            }

            // create or update context menu
            op.update.call($trigger, opt);

            // position menu
            opt.position.call($trigger, opt, x, y);

            // make sure we're in front
            if (opt.zIndex) {
                var additionalZValue = opt.zIndex;
                // If opt.zIndex is a function, call the function to get the right zIndex.
                if (typeof opt.zIndex === 'function') {
                    additionalZValue = opt.zIndex.call($trigger, opt);
                }
                css.zIndex = zindex($trigger) + additionalZValue;
            }

            // add layer
            op.layer.call(opt.$menu, opt, css.zIndex);

            // adjust sub-menu zIndexes
            opt.$menu.find('ul').css('zIndex', css.zIndex + 1);

            // position and show context menu
            opt.$menu.css(css)[opt.animation.show](opt.animation.duration, function () {
                $trigger.trigger('contextmenu:visible');
            });
            // make options available and set state
            $trigger.data('contextMenu', opt).addClass('context-menu-active');

            // register key handler
            $(document).off('keydown.contextMenu').on('keydown.contextMenu', handle.key);
            // register autoHide handler
            if (opt.autoHide) {
                // mouse position handler
                $(document).on('mousemove.contextMenuAutoHide', function (e) {
                    // need to capture the offset on mousemove,
                    // since the page might've been scrolled since activation
                    var pos = $trigger.offset();
                    pos.right = pos.left + $trigger.outerWidth();
                    pos.bottom = pos.top + $trigger.outerHeight();

                    if (opt.$layer && !opt.hovering && (!(e.pageX >= pos.left && e.pageX <= pos.right) || !(e.pageY >= pos.top && e.pageY <= pos.bottom))) {
                        /* Additional hover check after short time, you might just miss the edge of the menu */
                        setTimeout(function () {
                            if (!opt.hovering && opt.$menu != null) {
                                opt.$menu.trigger('contextmenu:hide');
                            }
                        }, 50);
                    }
                });
            }
        },
        hide: function hide(opt, force) {
            var $trigger = $(this);
            if (!opt) {
                opt = $trigger.data('contextMenu') || {};
            }

            // hide event
            if (!force && opt.events && opt.events.hide.call($trigger, opt) === false) {
                return;
            }

            // remove options and revert state
            $trigger.removeData('contextMenu').removeClass('context-menu-active');

            if (opt.$layer) {
                // keep layer for a bit so the contextmenu event can be aborted properly by opera
                setTimeout(function ($layer) {
                    return function () {
                        $layer.remove();
                    };
                }(opt.$layer), 10);

                try {
                    delete opt.$layer;
                } catch (e) {
                    opt.$layer = null;
                }
            }

            // remove handle
            $currentTrigger = null;
            // remove selected
            opt.$menu.find('.' + opt.classNames.hover).trigger('contextmenu:blur');
            opt.$selected = null;
            // collapse all submenus
            opt.$menu.find('.' + opt.classNames.visible).removeClass(opt.classNames.visible);
            // unregister key and mouse handlers
            // $(document).off('.contextMenuAutoHide keydown.contextMenu'); // http://bugs.jquery.com/ticket/10705
            $(document).off('.contextMenuAutoHide').off('keydown.contextMenu');
            // hide menu
            if (opt.$menu) {
                opt.$menu[opt.animation.hide](opt.animation.duration, function () {
                    // tear down dynamically built menu after animation is completed.
                    if (opt.build) {
                        opt.$menu.remove();
                        $.each(opt, function (key) {
                            switch (key) {
                                case 'ns':
                                case 'selector':
                                case 'build':
                                case 'trigger':
                                    return true;

                                default:
                                    opt[key] = undefined;
                                    try {
                                        delete opt[key];
                                    } catch (e) {}
                                    return true;
                            }
                        });
                    }

                    setTimeout(function () {
                        $trigger.trigger('contextmenu:hidden');
                    }, 10);
                });
            }
        },
        create: function create(opt, root) {
            if (root === undefined) {
                root = opt;
            }
            // create contextMenu
            opt.$menu = $('<ul class="context-menu-list"></ul>').addClass(opt.className || '').data({
                'contextMenu': opt,
                'contextMenuRoot': root
            });

            $.each(['callbacks', 'commands', 'inputs'], function (i, k) {
                opt[k] = {};
                if (!root[k]) {
                    root[k] = {};
                }
            });

            if (!root.accesskeys) {
                root.accesskeys = {};
            }

            function createNameNode(item) {
                var $name = $('<span></span>');
                if (item._accesskey) {
                    if (item._beforeAccesskey) {
                        $name.append(document.createTextNode(item._beforeAccesskey));
                    }
                    $('<span></span>').addClass('context-menu-accesskey').text(item._accesskey).appendTo($name);
                    if (item._afterAccesskey) {
                        $name.append(document.createTextNode(item._afterAccesskey));
                    }
                } else {
                    if (item.isHtmlName) {
                        // restrict use with access keys
                        if (typeof item.accesskey !== 'undefined') {
                            throw new Error('accesskeys are not compatible with HTML names and cannot be used together in the same item');
                        }
                        $name.html(item.name);
                    } else {
                        $name.text(item.name);
                    }
                }
                return $name;
            }

            // create contextMenu items
            $.each(opt.items, function (key, item) {
                var $t = $('<li class="context-menu-item"></li>').addClass(item.className || ''),
                    $label = null,
                    $input = null;

                // iOS needs to see a click-event bound to an element to actually
                // have the TouchEvents infrastructure trigger the click event
                $t.on('click', $.noop);

                // Make old school string seperator a real item so checks wont be
                // akward later.
                // And normalize 'cm_separator' into 'cm_seperator'.
                if (typeof item === 'string' || item.type === 'cm_separator') {
                    item = { type: 'cm_seperator' };
                }

                item.$node = $t.data({
                    'contextMenu': opt,
                    'contextMenuRoot': root,
                    'contextMenuKey': key
                });

                // register accesskey
                // NOTE: the accesskey attribute should be applicable to any element, but Safari5 and Chrome13 still can't do that
                if (typeof item.accesskey !== 'undefined') {
                    var aks = splitAccesskey(item.accesskey);
                    for (var i = 0, ak; ak = aks[i]; i++) {
                        if (!root.accesskeys[ak]) {
                            root.accesskeys[ak] = item;
                            var matched = item.name.match(new RegExp('^(.*?)(' + ak + ')(.*)$', 'i'));
                            if (matched) {
                                item._beforeAccesskey = matched[1];
                                item._accesskey = matched[2];
                                item._afterAccesskey = matched[3];
                            }
                            break;
                        }
                    }
                }

                if (item.type && types[item.type]) {
                    // run custom type handler
                    types[item.type].call($t, item, opt, root);
                    // register commands
                    $.each([opt, root], function (i, k) {
                        k.commands[key] = item;
                        // Overwrite only if undefined or the item is appended to the root. This so it
                        // doesn't overwrite callbacks of root elements if the name is the same.
                        if ($.isFunction(item.callback) && (k.callbacks[key] === undefined || opt.type === undefined)) {
                            k.callbacks[key] = item.callback;
                        }
                    });
                } else {
                    // add label for input
                    if (item.type === 'cm_seperator') {
                        $t.addClass('context-menu-separator ' + root.classNames.notSelectable);
                    } else if (item.type === 'html') {
                        $t.addClass('context-menu-html ' + root.classNames.notSelectable);
                    } else if (item.type === 'sub') {
                        // We don't want to execute the next else-if if it is a sub.
                    } else if (item.type) {
                        $label = $('<label></label>').appendTo($t);
                        createNameNode(item).appendTo($label);

                        $t.addClass('context-menu-input');
                        opt.hasTypes = true;
                        $.each([opt, root], function (i, k) {
                            k.commands[key] = item;
                            k.inputs[key] = item;
                        });
                    } else if (item.items) {
                        item.type = 'sub';
                    }

                    switch (item.type) {
                        case 'cm_seperator':
                            break;

                        case 'text':
                            $input = $('<input type="text" value="1" name="" />').attr('name', 'context-menu-input-' + key).val(item.value || '').appendTo($label);
                            break;

                        case 'textarea':
                            $input = $('<textarea name=""></textarea>').attr('name', 'context-menu-input-' + key).val(item.value || '').appendTo($label);

                            if (item.height) {
                                $input.height(item.height);
                            }
                            break;

                        case 'checkbox':
                            $input = $('<input type="checkbox" value="1" name="" />').attr('name', 'context-menu-input-' + key).val(item.value || '').prop('checked', !!item.selected).prependTo($label);
                            break;

                        case 'radio':
                            $input = $('<input type="radio" value="1" name="" />').attr('name', 'context-menu-input-' + item.radio).val(item.value || '').prop('checked', !!item.selected).prependTo($label);
                            break;

                        case 'select':
                            $input = $('<select name=""></select>').attr('name', 'context-menu-input-' + key).appendTo($label);
                            if (item.options) {
                                $.each(item.options, function (value, text) {
                                    $('<option></option>').val(value).text(text).appendTo($input);
                                });
                                $input.val(item.selected);
                            }
                            break;

                        case 'sub':
                            createNameNode(item).appendTo($t);
                            item.appendTo = item.$node;
                            $t.data('contextMenu', item).addClass('context-menu-submenu');
                            item.callback = null;

                            // If item contains items, and this is a promise, we should create it later
                            // check if subitems is of type promise. If it is a promise we need to create
                            // it later, after promise has been resolved.
                            if ('function' === typeof item.items.then) {
                                // probably a promise, process it, when completed it will create the sub menu's.
                                op.processPromises(item, root, item.items);
                            } else {
                                // normal submenu.
                                op.create(item, root);
                            }
                            break;

                        case 'html':
                            $(item.html).appendTo($t);
                            break;

                        default:
                            $.each([opt, root], function (i, k) {
                                k.commands[key] = item;
                                // Overwrite only if undefined or the item is appended to the root. This so it
                                // doesn't overwrite callbacks of root elements if the name is the same.
                                if ($.isFunction(item.callback) && (k.callbacks[key] === undefined || opt.type === undefined)) {
                                    k.callbacks[key] = item.callback;
                                }
                            });
                            createNameNode(item).appendTo($t);
                            break;
                    }

                    // disable key listener in <input>
                    if (item.type && item.type !== 'sub' && item.type !== 'html' && item.type !== 'cm_seperator') {
                        $input.on('focus', handle.focusInput).on('blur', handle.blurInput);

                        if (item.events) {
                            $input.on(item.events, opt);
                        }
                    }

                    // add icons
                    if (item.icon) {
                        if ($.isFunction(item.icon)) {
                            item._icon = item.icon.call(this, this, $t, key, item);
                        } else {
                            if (typeof item.icon === 'string' && item.icon.substring(0, 3) === 'fa-') {
                                // to enable font awesome
                                item._icon = root.classNames.icon + ' ' + root.classNames.icon + '--fa fa ' + item.icon;
                            } else {
                                item._icon = root.classNames.icon + ' ' + root.classNames.icon + '-' + item.icon;
                            }
                        }
                        $t.addClass(item._icon);
                    }
                }

                // cache contained elements
                item.$input = $input;
                item.$label = $label;

                // attach item to menu
                $t.appendTo(opt.$menu);

                // Disable text selection
                if (!opt.hasTypes && $.support.eventSelectstart) {
                    // browsers support user-select: none,
                    // IE has a special event for text-selection
                    // browsers supporting neither will not be preventing text-selection
                    $t.on('selectstart.disableTextSelect', handle.abortevent);
                }
            });
            // attach contextMenu to <body> (to bypass any possible overflow:hidden issues on parents of the trigger element)
            if (!opt.$node) {
                opt.$menu.css('display', 'none').addClass('context-menu-root');
            }
            opt.$menu.appendTo(opt.appendTo || document.body);
        },
        resize: function resize($menu, nested) {
            var domMenu;
            // determine widths of submenus, as CSS won't grow them automatically
            // position:absolute within position:absolute; min-width:100; max-width:200; results in width: 100;
            // kinda sucks hard...

            // determine width of absolutely positioned element
            $menu.css({ position: 'absolute', display: 'block' });
            // don't apply yet, because that would break nested elements' widths
            $menu.data('width', (domMenu = $menu.get(0)).getBoundingClientRect ? Math.ceil(domMenu.getBoundingClientRect().width) : $menu.outerWidth() + 1); // outerWidth() returns rounded pixels
            // reset styles so they allow nested elements to grow/shrink naturally
            $menu.css({
                position: 'static',
                minWidth: '0px',
                maxWidth: '100000px'
            });
            // identify width of nested menus
            $menu.find('> li > ul').each(function () {
                op.resize($(this), true);
            });
            // reset and apply changes in the end because nested
            // elements' widths wouldn't be calculatable otherwise
            if (!nested) {
                $menu.find('ul').addBack().css({
                    position: '',
                    display: '',
                    minWidth: '',
                    maxWidth: ''
                }).outerWidth(function () {
                    return $(this).data('width');
                });
            }
        },
        update: function update(opt, root) {
            var $trigger = this;
            if (root === undefined) {
                root = opt;
                op.resize(opt.$menu);
            }
            // re-check disabled for each item
            opt.$menu.children().each(function () {
                var $item = $(this),
                    key = $item.data('contextMenuKey'),
                    item = opt.items[key],
                    disabled = $.isFunction(item.disabled) && item.disabled.call($trigger, key, root) || item.disabled === true,
                    visible;
                if ($.isFunction(item.visible)) {
                    visible = item.visible.call($trigger, key, root);
                } else if (typeof item.visible !== 'undefined') {
                    visible = item.visible === true;
                } else {
                    visible = true;
                }
                $item[visible ? 'show' : 'hide']();

                // dis- / enable item
                $item[disabled ? 'addClass' : 'removeClass'](root.classNames.disabled);

                // if ($.isFunction(item.icon)) {
                //     $item.removeClass(item._icon);
                //     item._icon = item.icon.call(this, $trigger, $item, key, item);
                //     $item.addClass(item._icon);
                // }

                // add icons
                if (item.icon) {
                    if ($.isFunction(item.icon)) {
                        item._icon = item.icon.call(this, this, $t, key, item);
                    } else {
                        item._icon = root.classNames.icon + ' ' + root.classNames.icon + '-' + item.icon;
                    }
                    // $t.addClass(item._icon);
                    $item.prepend('<i></i>');
                    $item.find('i').addClass("zmdi zmdi-" + item.icon);
                }

                if (item.type) {
                    // dis- / enable input elements
                    $item.find('input, select, textarea').prop('disabled', disabled);

                    // update input states
                    switch (item.type) {
                        case 'text':
                        case 'textarea':
                            item.$input.val(item.value || '');
                            break;

                        case 'checkbox':
                        case 'radio':
                            item.$input.val(item.value || '').prop('checked', !!item.selected);
                            break;

                        case 'select':
                            item.$input.val(item.selected || '');
                            break;
                    }
                }

                if (item.$menu) {
                    // update sub-menu
                    op.update.call($trigger, item, root);
                }
            });
        },
        layer: function layer(opt, zIndex) {
            // add transparent layer for click area
            // filter and background for Internet Explorer, Issue #23
            var $layer = opt.$layer = $('<div id="context-menu-layer" style="position:fixed; z-index: -1; top:0; left:0; opacity: 0; filter: alpha(opacity=0); background-color: #000;"></div>').css({ height: $win.height(), width: $win.width(), display: 'block' }).data('contextMenuRoot', opt).insertBefore(this).on('contextmenu', handle.abortevent).on('mousedown', handle.layerClick);

            // IE6 doesn't know position:fixed;
            if (document.body.style.maxWidth === undefined) {
                // IE6 doesn't support maxWidth
                $layer.css({
                    'position': 'absolute',
                    'height': $(document).height()
                });
            }

            return $layer;
        },
        processPromises: function processPromises(opt, root, promise) {
            // Start
            opt.$node.addClass(root.classNames.iconLoadingClass);

            function completedPromise(opt, root, items) {
                // Completed promise (dev called promise.resolve). We now have a list of items which can
                // be used to create the rest of the context menu.
                if (items === undefined) {
                    // Null result, dev should have checked
                    errorPromise(undefined); //own error object
                }
                finishPromiseProcess(opt, root, items);
            }
            function errorPromise(opt, root, errorItem) {
                // User called promise.reject() with an error item, if not, provide own error item.
                if (errorItem === undefined) {
                    errorItem = { "error": { name: "No items and no error item", icon: "context-menu-icon context-menu-icon-quit" } };
                    if (window.console) {
                        (console.error || console.log).call(console, 'When you reject a promise, provide an "items" object, equal to normal sub-menu items');
                    }
                } else if (typeof errorItem === 'string') {
                    errorItem = { "error": { name: errorItem } };
                }
                finishPromiseProcess(opt, root, errorItem);
            }
            function finishPromiseProcess(opt, root, items) {
                if (root.$menu === undefined || !root.$menu.is(':visible')) {
                    return;
                }
                opt.$node.removeClass(root.classNames.iconLoadingClass);
                opt.items = items;
                op.create(opt, root, true); // Create submenu
                op.update(opt, root); // Correctly update position if user is already hovered over menu item
                root.positionSubmenu.call(opt.$node, opt.$menu); // positionSubmenu, will only do anything if user already hovered over menu item that just got new subitems.
            }

            // Wait for promise completion. .then(success, error, notify) (we don't track notify). Bind the opt
            // and root to avoid scope problems
            promise.then(completedPromise.bind(this, opt, root), errorPromise.bind(this, opt, root));
        }
    };

    // split accesskey according to http://www.whatwg.org/specs/web-apps/current-work/multipage/editing.html#assigned-access-key
    function splitAccesskey(val) {
        var t = val.split(/\s+/),
            keys = [];

        for (var i = 0, k; k = t[i]; i++) {
            k = k.charAt(0).toUpperCase(); // first character only
            // theoretically non-accessible characters should be ignored, but different systems, different keyboard layouts, ... screw it.
            // a map to look up already used access keys would be nice
            keys.push(k);
        }

        return keys;
    }

    // handle contextMenu triggers
    $.fn.contextMenu = function (operation) {
        var $t = this,
            $o = operation;
        if (this.length > 0) {
            // this is not a build on demand menu
            if (operation === undefined) {
                this.first().trigger('contextmenu');
            } else if (operation.x !== undefined && operation.y !== undefined) {
                this.first().trigger($.Event('contextmenu', { pageX: operation.x, pageY: operation.y, mouseButton: operation.button }));
            } else if (operation === 'hide') {
                var $menu = this.first().data('contextMenu') ? this.first().data('contextMenu').$menu : null;
                if ($menu) {
                    $menu.trigger('contextmenu:hide');
                }
            } else if (operation === 'destroy') {
                $.contextMenu('destroy', { context: this });
            } else if ($.isPlainObject(operation)) {
                operation.context = this;
                $.contextMenu('create', operation);
            } else if (operation) {
                this.removeClass('context-menu-disabled');
            } else if (!operation) {
                this.addClass('context-menu-disabled');
            }
        } else {
            $.each(menus, function () {
                if (this.selector === $t.selector) {
                    $o.data = this;

                    $.extend($o.data, { trigger: 'demand' });
                }
            });

            handle.contextmenu.call($o.target, $o);
        }

        return this;
    };

    // manage contextMenu instances
    $.contextMenu = function (operation, options) {
        if (typeof operation !== 'string') {
            options = operation;
            operation = 'create';
        }

        if (typeof options === 'string') {
            options = { selector: options };
        } else if (options === undefined) {
            options = {};
        }

        // merge with default options
        var o = $.extend(true, {}, defaults, options || {});
        var $document = $(document);
        var $context = $document;
        var _hasContext = false;

        if (!o.context || !o.context.length) {
            o.context = document;
        } else {
            // you never know what they throw at you...
            $context = $(o.context).first();
            o.context = $context.get(0);
            _hasContext = !$(o.context).is(document);
        }

        switch (operation) {
            case 'create':
                // no selector no joy
                if (!o.selector) {
                    throw new Error('No selector specified');
                }
                // make sure internal classes are not bound to
                if (o.selector.match(/.context-menu-(list|item|input)($|\s)/)) {
                    throw new Error('Cannot bind to selector "' + o.selector + '" as it contains a reserved className');
                }
                if (!o.build && (!o.items || $.isEmptyObject(o.items))) {
                    throw new Error('No Items specified');
                }
                counter++;
                o.ns = '.contextMenu' + counter;
                if (!_hasContext) {
                    namespaces[o.selector] = o.ns;
                }
                menus[o.ns] = o;

                // default to right click
                if (!o.trigger) {
                    o.trigger = 'right';
                }

                if (!initialized) {
                    var itemClick = o.itemClickEvent === 'click' ? 'click.contextMenu' : 'mouseup.contextMenu';
                    var contextMenuItemObj = {
                        // 'mouseup.contextMenu': handle.itemClick,
                        // 'click.contextMenu': handle.itemClick,
                        'contextmenu:focus.contextMenu': handle.focusItem,
                        'contextmenu:blur.contextMenu': handle.blurItem,
                        'contextmenu.contextMenu': handle.abortevent,
                        'mouseenter.contextMenu': handle.itemMouseenter,
                        'mouseleave.contextMenu': handle.itemMouseleave
                    };
                    contextMenuItemObj[itemClick] = handle.itemClick;
                    // make sure item click is registered first
                    $document.on({
                        'contextmenu:hide.contextMenu': handle.hideMenu,
                        'prevcommand.contextMenu': handle.prevItem,
                        'nextcommand.contextMenu': handle.nextItem,
                        'contextmenu.contextMenu': handle.abortevent,
                        'mouseenter.contextMenu': handle.menuMouseenter,
                        'mouseleave.contextMenu': handle.menuMouseleave
                    }, '.context-menu-list').on('mouseup.contextMenu', '.context-menu-input', handle.inputClick).on(contextMenuItemObj, '.context-menu-item');

                    initialized = true;
                }

                // engage native contextmenu event
                $context.on('contextmenu' + o.ns, o.selector, o, handle.contextmenu);

                if (_hasContext) {
                    // add remove hook, just in case
                    $context.on('remove' + o.ns, function () {
                        $(this).contextMenu('destroy');
                    });
                }

                switch (o.trigger) {
                    case 'hover':
                        $context.on('mouseenter' + o.ns, o.selector, o, handle.mouseenter).on('mouseleave' + o.ns, o.selector, o, handle.mouseleave);
                        break;

                    case 'left':
                        $context.on('click' + o.ns, o.selector, o, handle.click);
                        break;
                    /*
                     default:
                     // http://www.quirksmode.org/dom/events/contextmenu.html
                     $document
                     .on('mousedown' + o.ns, o.selector, o, handle.mousedown)
                     .on('mouseup' + o.ns, o.selector, o, handle.mouseup);
                     break;
                     */
                }

                // create menu
                if (!o.build) {
                    op.create(o);
                }
                break;

            case 'destroy':
                var $visibleMenu;
                if (_hasContext) {
                    // get proper options
                    var context = o.context;
                    $.each(menus, function (ns, o) {

                        if (!o) {
                            return true;
                        }

                        // Is this menu equest to the context called from
                        if (!$(context).is(o.selector)) {
                            return true;
                        }

                        $visibleMenu = $('.context-menu-list').filter(':visible');
                        if ($visibleMenu.length && $visibleMenu.data().contextMenuRoot.$trigger.is($(o.context).find(o.selector))) {
                            $visibleMenu.trigger('contextmenu:hide', { force: true });
                        }

                        try {
                            if (menus[o.ns].$menu) {
                                menus[o.ns].$menu.remove();
                            }

                            delete menus[o.ns];
                        } catch (e) {
                            menus[o.ns] = null;
                        }

                        $(o.context).off(o.ns);

                        return true;
                    });
                } else if (!o.selector) {
                    $document.off('.contextMenu .contextMenuAutoHide');
                    $.each(menus, function (ns, o) {
                        $(o.context).off(o.ns);
                    });

                    namespaces = {};
                    menus = {};
                    counter = 0;
                    initialized = false;

                    $('#context-menu-layer, .context-menu-list').remove();
                } else if (namespaces[o.selector]) {
                    $visibleMenu = $('.context-menu-list').filter(':visible');
                    if ($visibleMenu.length && $visibleMenu.data().contextMenuRoot.$trigger.is(o.selector)) {
                        $visibleMenu.trigger('contextmenu:hide', { force: true });
                    }

                    try {
                        if (menus[namespaces[o.selector]].$menu) {
                            menus[namespaces[o.selector]].$menu.remove();
                        }

                        delete menus[namespaces[o.selector]];
                    } catch (e) {
                        menus[namespaces[o.selector]] = null;
                    }

                    $document.off(namespaces[o.selector]);
                }
                break;

            case 'html5':
                // if <command> or <menuitem> are not handled by the browser,
                // or options was a bool true,
                // initialize $.contextMenu for them
                if (!$.support.htmlCommand && !$.support.htmlMenuitem || typeof options === 'boolean' && options) {
                    $('menu[type="context"]').each(function () {
                        if (this.id) {
                            $.contextMenu({
                                selector: '[contextmenu=' + this.id + ']',
                                items: $.contextMenu.fromMenu(this)
                            });
                        }
                    }).css('display', 'none');
                }
                break;

            default:
                throw new Error('Unknown operation "' + operation + '"');
        }

        return this;
    };

    // import values into <input> commands
    $.contextMenu.setInputValues = function (opt, data) {
        if (data === undefined) {
            data = {};
        }

        $.each(opt.inputs, function (key, item) {
            switch (item.type) {
                case 'text':
                case 'textarea':
                    item.value = data[key] || '';
                    break;

                case 'checkbox':
                    item.selected = data[key] ? true : false;
                    break;

                case 'radio':
                    item.selected = (data[item.radio] || '') === item.value;
                    break;

                case 'select':
                    item.selected = data[key] || '';
                    break;
            }
        });
    };

    // export values from <input> commands
    $.contextMenu.getInputValues = function (opt, data) {
        if (data === undefined) {
            data = {};
        }

        $.each(opt.inputs, function (key, item) {
            switch (item.type) {
                case 'text':
                case 'textarea':
                case 'select':
                    data[key] = item.$input.val();
                    break;

                case 'checkbox':
                    data[key] = item.$input.prop('checked');
                    break;

                case 'radio':
                    if (item.$input.prop('checked')) {
                        data[item.radio] = item.value;
                    }
                    break;
            }
        });

        return data;
    };

    // find <label for="xyz">
    function inputLabel(node) {
        return node.id && $('label[for="' + node.id + '"]').val() || node.name;
    }

    // convert <menu> to items object
    function menuChildren(items, $children, counter) {
        if (!counter) {
            counter = 0;
        }

        $children.each(function () {
            var $node = $(this),
                node = this,
                nodeName = this.nodeName.toLowerCase(),
                label,
                item;

            // extract <label><input>
            if (nodeName === 'label' && $node.find('input, textarea, select').length) {
                label = $node.text();
                $node = $node.children().first();
                node = $node.get(0);
                nodeName = node.nodeName.toLowerCase();
            }

            /*
             * <menu> accepts flow-content as children. that means <embed>, <canvas> and such are valid menu items.
             * Not being the sadistic kind, $.contextMenu only accepts:
             * <command>, <menuitem>, <hr>, <span>, <p> <input [text, radio, checkbox]>, <textarea>, <select> and of course <menu>.
             * Everything else will be imported as an html node, which is not interfaced with contextMenu.
             */

            // http://www.whatwg.org/specs/web-apps/current-work/multipage/commands.html#concept-command
            switch (nodeName) {
                // http://www.whatwg.org/specs/web-apps/current-work/multipage/interactive-elements.html#the-menu-element
                case 'menu':
                    item = { name: $node.attr('label'), items: {} };
                    counter = menuChildren(item.items, $node.children(), counter);
                    break;

                // http://www.whatwg.org/specs/web-apps/current-work/multipage/commands.html#using-the-a-element-to-define-a-command
                case 'a':
                // http://www.whatwg.org/specs/web-apps/current-work/multipage/commands.html#using-the-button-element-to-define-a-command
                case 'button':
                    item = {
                        name: $node.text(),
                        disabled: !!$node.attr('disabled'),
                        callback: function () {
                            return function () {
                                $node.click();
                            };
                        }()
                    };
                    break;

                // http://www.whatwg.org/specs/web-apps/current-work/multipage/commands.html#using-the-command-element-to-define-a-command

                case 'menuitem':
                case 'command':
                    switch ($node.attr('type')) {
                        case undefined:
                        case 'command':
                        case 'menuitem':
                            item = {
                                name: $node.attr('label'),
                                disabled: !!$node.attr('disabled'),
                                icon: $node.attr('icon'),
                                callback: function () {
                                    return function () {
                                        $node.click();
                                    };
                                }()
                            };
                            break;

                        case 'checkbox':
                            item = {
                                type: 'checkbox',
                                disabled: !!$node.attr('disabled'),
                                name: $node.attr('label'),
                                selected: !!$node.attr('checked')
                            };
                            break;
                        case 'radio':
                            item = {
                                type: 'radio',
                                disabled: !!$node.attr('disabled'),
                                name: $node.attr('label'),
                                radio: $node.attr('radiogroup'),
                                value: $node.attr('id'),
                                selected: !!$node.attr('checked')
                            };
                            break;

                        default:
                            item = undefined;
                    }
                    break;

                case 'hr':
                    item = '-------';
                    break;

                case 'input':
                    switch ($node.attr('type')) {
                        case 'text':
                            item = {
                                type: 'text',
                                name: label || inputLabel(node),
                                disabled: !!$node.attr('disabled'),
                                value: $node.val()
                            };
                            break;

                        case 'checkbox':
                            item = {
                                type: 'checkbox',
                                name: label || inputLabel(node),
                                disabled: !!$node.attr('disabled'),
                                selected: !!$node.attr('checked')
                            };
                            break;

                        case 'radio':
                            item = {
                                type: 'radio',
                                name: label || inputLabel(node),
                                disabled: !!$node.attr('disabled'),
                                radio: !!$node.attr('name'),
                                value: $node.val(),
                                selected: !!$node.attr('checked')
                            };
                            break;

                        default:
                            item = undefined;
                            break;
                    }
                    break;

                case 'select':
                    item = {
                        type: 'select',
                        name: label || inputLabel(node),
                        disabled: !!$node.attr('disabled'),
                        selected: $node.val(),
                        options: {}
                    };
                    $node.children().each(function () {
                        item.options[this.value] = $(this).text();
                    });
                    break;

                case 'textarea':
                    item = {
                        type: 'textarea',
                        name: label || inputLabel(node),
                        disabled: !!$node.attr('disabled'),
                        value: $node.val()
                    };
                    break;

                case 'label':
                    break;

                default:
                    item = { type: 'html', html: $node.clone(true) };
                    break;
            }

            if (item) {
                counter++;
                items['key' + counter] = item;
            }
        });

        return counter;
    }

    // convert html5 menu
    $.contextMenu.fromMenu = function (element) {
        var $this = $(element),
            items = {};

        menuChildren(items, $this.children());

        return items;
    };

    // make defaults accessible
    $.contextMenu.defaults = defaults;
    $.contextMenu.types = types;
    // export internal functions - undocumented, for hacking only!
    $.contextMenu.handle = handle;
    $.contextMenu.op = op;
    $.contextMenu.menus = menus;
});

/***/ }),

/***/ 16:
/***/ (function(module, exports) {

module.exports = $;

/***/ }),

/***/ 261:
/***/ (function(module, exports) {

module.exports = "/*! Buttons for DataTables 1.3.1\n * ©2016 SpryMedia Ltd - datatables.net/license\n */\n\n(function( factory ){\n\tif ( typeof define === 'function' && define.amd ) {\n\t\t// AMD\n\t\tdefine( ['jquery', 'datatables.net'], function ( $ ) {\n\t\t\treturn factory( $, window, document );\n\t\t} );\n\t}\n\telse if ( typeof exports === 'object' ) {\n\t\t// CommonJS\n\t\tmodule.exports = function (root, $) {\n\t\t\tif ( ! root ) {\n\t\t\t\troot = window;\n\t\t\t}\n\n\t\t\tif ( ! $ || ! $.fn.dataTable ) {\n\t\t\t\t$ = require('datatables.net')(root, $).$;\n\t\t\t}\n\n\t\t\treturn factory( $, root, root.document );\n\t\t};\n\t}\n\telse {\n\t\t// Browser\n\t\tfactory( jQuery, window, document );\n\t}\n}(function( $, window, document, undefined ) {\n'use strict';\nvar DataTable = $.fn.dataTable;\n\n\n// Used for namespacing events added to the document by each instance, so they\n// can be removed on destroy\nvar _instCounter = 0;\n\n// Button namespacing counter for namespacing events on individual buttons\nvar _buttonCounter = 0;\n\nvar _dtButtons = DataTable.ext.buttons;\n\n/**\n * [Buttons description]\n * @param {[type]}\n * @param {[type]}\n */\nvar Buttons = function( dt, config )\n{\n\t// If there is no config set it to an empty object\n\tif ( typeof( config ) === 'undefined' ) {\n\t\tconfig = {};\t\n\t}\n\t\n\t// Allow a boolean true for defaults\n\tif ( config === true ) {\n\t\tconfig = {};\n\t}\n\n\t// For easy configuration of buttons an array can be given\n\tif ( $.isArray( config ) ) {\n\t\tconfig = { buttons: config };\n\t}\n\n\tthis.c = $.extend( true, {}, Buttons.defaults, config );\n\n\t// Don't want a deep copy for the buttons\n\tif ( config.buttons ) {\n\t\tthis.c.buttons = config.buttons;\n\t}\n\n\tthis.s = {\n\t\tdt: new DataTable.Api( dt ),\n\t\tbuttons: [],\n\t\tlistenKeys: '',\n\t\tnamespace: 'dtb'+(_instCounter++)\n\t};\n\n\tthis.dom = {\n\t\tcontainer: $('<'+this.c.dom.container.tag+'/>')\n\t\t\t.addClass( this.c.dom.container.className )\n\t};\n\n\tthis._constructor();\n};\n\n\n$.extend( Buttons.prototype, {\n\t/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\n\t * Public methods\n\t */\n\n\t/**\n\t * Get the action of a button\n\t * @param  {int|string} Button index\n\t * @return {function}\n\t *//**\n\t * Set the action of a button\n\t * @param  {node} node Button element\n\t * @param  {function} action Function to set\n\t * @return {Buttons} Self for chaining\n\t */\n\taction: function ( node, action )\n\t{\n\t\tvar button = this._nodeToButton( node );\n\n\t\tif ( action === undefined ) {\n\t\t\treturn button.conf.action;\n\t\t}\n\n\t\tbutton.conf.action = action;\n\n\t\treturn this;\n\t},\n\n\t/**\n\t * Add an active class to the button to make to look active or get current\n\t * active state.\n\t * @param  {node} node Button element\n\t * @param  {boolean} [flag] Enable / disable flag\n\t * @return {Buttons} Self for chaining or boolean for getter\n\t */\n\tactive: function ( node, flag ) {\n\t\tvar button = this._nodeToButton( node );\n\t\tvar klass = this.c.dom.button.active;\n\t\tvar jqNode = $(button.node);\n\n\t\tif ( flag === undefined ) {\n\t\t\treturn jqNode.hasClass( klass );\n\t\t}\n\n\t\tjqNode.toggleClass( klass, flag === undefined ? true : flag );\n\n\t\treturn this;\n\t},\n\n\t/**\n\t * Add a new button\n\t * @param {object} config Button configuration object, base string name or function\n\t * @param {int|string} [idx] Button index for where to insert the button\n\t * @return {Buttons} Self for chaining\n\t */\n\tadd: function ( config, idx )\n\t{\n\t\tvar buttons = this.s.buttons;\n\n\t\tif ( typeof idx === 'string' ) {\n\t\t\tvar split = idx.split('-');\n\t\t\tvar base = this.s;\n\n\t\t\tfor ( var i=0, ien=split.length-1 ; i<ien ; i++ ) {\n\t\t\t\tbase = base.buttons[ split[i]*1 ];\n\t\t\t}\n\n\t\t\tbuttons = base.buttons;\n\t\t\tidx = split[ split.length-1 ]*1;\n\t\t}\n\n\t\tthis._expandButton( buttons, config, false, idx );\n\t\tthis._draw();\n\n\t\treturn this;\n\t},\n\n\t/**\n\t * Get the container node for the buttons\n\t * @return {jQuery} Buttons node\n\t */\n\tcontainer: function ()\n\t{\n\t\treturn this.dom.container;\n\t},\n\n\t/**\n\t * Disable a button\n\t * @param  {node} node Button node\n\t * @return {Buttons} Self for chaining\n\t */\n\tdisable: function ( node ) {\n\t\tvar button = this._nodeToButton( node );\n\n\t\t$(button.node).addClass( this.c.dom.button.disabled );\n\n\t\treturn this;\n\t},\n\n\t/**\n\t * Destroy the instance, cleaning up event handlers and removing DOM\n\t * elements\n\t * @return {Buttons} Self for chaining\n\t */\n\tdestroy: function ()\n\t{\n\t\t// Key event listener\n\t\t$('body').off( 'keyup.'+this.s.namespace );\n\n\t\t// Individual button destroy (so they can remove their own events if\n\t\t// needed). Take a copy as the array is modified by `remove`\n\t\tvar buttons = this.s.buttons.slice();\n\t\tvar i, ien;\n\t\t\n\t\tfor ( i=0, ien=buttons.length ; i<ien ; i++ ) {\n\t\t\tthis.remove( buttons[i].node );\n\t\t}\n\n\t\t// Container\n\t\tthis.dom.container.remove();\n\n\t\t// Remove from the settings object collection\n\t\tvar buttonInsts = this.s.dt.settings()[0];\n\n\t\tfor ( i=0, ien=buttonInsts.length ; i<ien ; i++ ) {\n\t\t\tif ( buttonInsts.inst === this ) {\n\t\t\t\tbuttonInsts.splice( i, 1 );\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\n\t\treturn this;\n\t},\n\n\t/**\n\t * Enable / disable a button\n\t * @param  {node} node Button node\n\t * @param  {boolean} [flag=true] Enable / disable flag\n\t * @return {Buttons} Self for chaining\n\t */\n\tenable: function ( node, flag )\n\t{\n\t\tif ( flag === false ) {\n\t\t\treturn this.disable( node );\n\t\t}\n\n\t\tvar button = this._nodeToButton( node );\n\t\t$(button.node).removeClass( this.c.dom.button.disabled );\n\n\t\treturn this;\n\t},\n\n\t/**\n\t * Get the instance name for the button set selector\n\t * @return {string} Instance name\n\t */\n\tname: function ()\n\t{\n\t\treturn this.c.name;\n\t},\n\n\t/**\n\t * Get a button's node\n\t * @param  {node} node Button node\n\t * @return {jQuery} Button element\n\t */\n\tnode: function ( node )\n\t{\n\t\tvar button = this._nodeToButton( node );\n\t\treturn $(button.node);\n\t},\n\n\t/**\n\t * Set / get a processing class on the selected button\n\t * @param  {boolean} flag true to add, false to remove, undefined to get\n\t * @return {boolean|Buttons} Getter value or this if a setter.\n\t */\n\tprocessing: function ( node, flag )\n\t{\n\t\tvar button = this._nodeToButton( node );\n\n\t\tif ( flag === undefined ) {\n\t\t\treturn $(button.node).hasClass( 'processing' );\n\t\t}\n\n\t\t$(button.node).toggleClass( 'processing', flag );\n\n\t\treturn this;\n\t},\n\n\t/**\n\t * Remove a button.\n\t * @param  {node} node Button node\n\t * @return {Buttons} Self for chaining\n\t */\n\tremove: function ( node )\n\t{\n\t\tvar button = this._nodeToButton( node );\n\t\tvar host = this._nodeToHost( node );\n\t\tvar dt = this.s.dt;\n\n\t\t// Remove any child buttons first\n\t\tif ( button.buttons.length ) {\n\t\t\tfor ( var i=button.buttons.length-1 ; i>=0 ; i-- ) {\n\t\t\t\tthis.remove( button.buttons[i].node );\n\t\t\t}\n\t\t}\n\n\t\t// Allow the button to remove event handlers, etc\n\t\tif ( button.conf.destroy ) {\n\t\t\tbutton.conf.destroy.call( dt.button(node), dt, $(node), button.conf );\n\t\t}\n\n\t\tthis._removeKey( button.conf );\n\n\t\t$(button.node).remove();\n\n\t\tvar idx = $.inArray( button, host );\n\t\thost.splice( idx, 1 );\n\n\t\treturn this;\n\t},\n\n\t/**\n\t * Get the text for a button\n\t * @param  {int|string} node Button index\n\t * @return {string} Button text\n\t *//**\n\t * Set the text for a button\n\t * @param  {int|string|function} node Button index\n\t * @param  {string} label Text\n\t * @return {Buttons} Self for chaining\n\t */\n\ttext: function ( node, label )\n\t{\n\t\tvar button = this._nodeToButton( node );\n\t\tvar buttonLiner = this.c.dom.collection.buttonLiner;\n\t\tvar linerTag = button.inCollection && buttonLiner && buttonLiner.tag ?\n\t\t\tbuttonLiner.tag :\n\t\t\tthis.c.dom.buttonLiner.tag;\n\t\tvar dt = this.s.dt;\n\t\tvar jqNode = $(button.node);\n\t\tvar text = function ( opt ) {\n\t\t\treturn typeof opt === 'function' ?\n\t\t\t\topt( dt, jqNode, button.conf ) :\n\t\t\t\topt;\n\t\t};\n\n\t\tif ( label === undefined ) {\n\t\t\treturn text( button.conf.text );\n\t\t}\n\n\t\tbutton.conf.text = label;\n\n\t\tif ( linerTag ) {\n\t\t\tjqNode.children( linerTag ).html( text(label) );\n\t\t}\n\t\telse {\n\t\t\tjqNode.html( text(label) );\n\t\t}\n\n\t\treturn this;\n\t},\n\n\n\t/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\n\t * Constructor\n\t */\n\n\t/**\n\t * Buttons constructor\n\t * @private\n\t */\n\t_constructor: function ()\n\t{\n\t\tvar that = this;\n\t\tvar dt = this.s.dt;\n\t\tvar dtSettings = dt.settings()[0];\n\t\tvar buttons =  this.c.buttons;\n\n\t\tif ( ! dtSettings._buttons ) {\n\t\t\tdtSettings._buttons = [];\n\t\t}\n\n\t\tdtSettings._buttons.push( {\n\t\t\tinst: this,\n\t\t\tname: this.c.name\n\t\t} );\n\n\t\tfor ( var i=0, ien=buttons.length ; i<ien ; i++ ) {\n\t\t\tthis.add( buttons[i] );\n\t\t}\n\n\t\tdt.on( 'destroy', function () {\n\t\t\tthat.destroy();\n\t\t} );\n\n\t\t// Global key event binding to listen for button keys\n\t\t$('body').on( 'keyup.'+this.s.namespace, function ( e ) {\n\t\t\tif ( ! document.activeElement || document.activeElement === document.body ) {\n\t\t\t\t// SUse a string of characters for fast lookup of if we need to\n\t\t\t\t// handle this\n\t\t\t\tvar character = String.fromCharCode(e.keyCode).toLowerCase();\n\n\t\t\t\tif ( that.s.listenKeys.toLowerCase().indexOf( character ) !== -1 ) {\n\t\t\t\t\tthat._keypress( character, e );\n\t\t\t\t}\n\t\t\t}\n\t\t} );\n\t},\n\n\n\t/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\n\t * Private methods\n\t */\n\n\t/**\n\t * Add a new button to the key press listener\n\t * @param {object} conf Resolved button configuration object\n\t * @private\n\t */\n\t_addKey: function ( conf )\n\t{\n\t\tif ( conf.key ) {\n\t\t\tthis.s.listenKeys += $.isPlainObject( conf.key ) ?\n\t\t\t\tconf.key.key :\n\t\t\t\tconf.key;\n\t\t}\n\t},\n\n\t/**\n\t * Insert the buttons into the container. Call without parameters!\n\t * @param  {node} [container] Recursive only - Insert point\n\t * @param  {array} [buttons] Recursive only - Buttons array\n\t * @private\n\t */\n\t_draw: function ( container, buttons )\n\t{\n\t\tif ( ! container ) {\n\t\t\tcontainer = this.dom.container;\n\t\t\tbuttons = this.s.buttons;\n\t\t}\n\n\t\tcontainer.children().detach();\n\n\t\tfor ( var i=0, ien=buttons.length ; i<ien ; i++ ) {\n\t\t\tcontainer.append( buttons[i].inserter );\n\n\t\t\tif ( buttons[i].buttons && buttons[i].buttons.length ) {\n\t\t\t\tthis._draw( buttons[i].collection, buttons[i].buttons );\n\t\t\t}\n\t\t}\n\t},\n\n\t/**\n\t * Create buttons from an array of buttons\n\t * @param  {array} attachTo Buttons array to attach to\n\t * @param  {object} button Button definition\n\t * @param  {boolean} inCollection true if the button is in a collection\n\t * @private\n\t */\n\t_expandButton: function ( attachTo, button, inCollection, attachPoint )\n\t{\n\t\tvar dt = this.s.dt;\n\t\tvar buttonCounter = 0;\n\t\tvar buttons = ! $.isArray( button ) ?\n\t\t\t[ button ] :\n\t\t\tbutton;\n\n\t\tfor ( var i=0, ien=buttons.length ; i<ien ; i++ ) {\n\t\t\tvar conf = this._resolveExtends( buttons[i] );\n\n\t\t\tif ( ! conf ) {\n\t\t\t\tcontinue;\n\t\t\t}\n\n\t\t\t// If the configuration is an array, then expand the buttons at this\n\t\t\t// point\n\t\t\tif ( $.isArray( conf ) ) {\n\t\t\t\tthis._expandButton( attachTo, conf, inCollection, attachPoint );\n\t\t\t\tcontinue;\n\t\t\t}\n\n\t\t\tvar built = this._buildButton( conf, inCollection );\n\t\t\tif ( ! built ) {\n\t\t\t\tcontinue;\n\t\t\t}\n\n\t\t\tif ( attachPoint !== undefined ) {\n\t\t\t\tattachTo.splice( attachPoint, 0, built );\n\t\t\t\tattachPoint++;\n\t\t\t}\n\t\t\telse {\n\t\t\t\tattachTo.push( built );\n\t\t\t}\n\n\t\t\tif ( built.conf.buttons ) {\n\t\t\t\tvar collectionDom = this.c.dom.collection;\n\t\t\t\tbuilt.collection = $('<'+collectionDom.tag+'/>')\n\t\t\t\t\t.addClass( collectionDom.className )\n\t\t\t\t\t.attr( 'role', 'menu') ;\n\t\t\t\tbuilt.conf._collection = built.collection;\n\n\t\t\t\tthis._expandButton( built.buttons, built.conf.buttons, true, attachPoint );\n\t\t\t}\n\n\t\t\t// init call is made here, rather than buildButton as it needs to\n\t\t\t// be selectable, and for that it needs to be in the buttons array\n\t\t\tif ( conf.init ) {\n\t\t\t\tconf.init.call( dt.button( built.node ), dt, $(built.node), conf );\n\t\t\t}\n\n\t\t\tbuttonCounter++;\n\t\t}\n\t},\n\n\t/**\n\t * Create an individual button\n\t * @param  {object} config            Resolved button configuration\n\t * @param  {boolean} inCollection `true` if a collection button\n\t * @return {jQuery} Created button node (jQuery)\n\t * @private\n\t */\n\t_buildButton: function ( config, inCollection )\n\t{\n\t\tvar buttonDom = this.c.dom.button;\n\t\tvar linerDom = this.c.dom.buttonLiner;\n\t\tvar collectionDom = this.c.dom.collection;\n\t\tvar dt = this.s.dt;\n\t\tvar text = function ( opt ) {\n\t\t\treturn typeof opt === 'function' ?\n\t\t\t\topt( dt, button, config ) :\n\t\t\t\topt;\n\t\t};\n\n\t\tif ( inCollection && collectionDom.button ) {\n\t\t\tbuttonDom = collectionDom.button;\n\t\t}\n\n\t\tif ( inCollection && collectionDom.buttonLiner ) {\n\t\t\tlinerDom = collectionDom.buttonLiner;\n\t\t}\n\n\t\t// Make sure that the button is available based on whatever requirements\n\t\t// it has. For example, Flash buttons require Flash\n\t\tif ( config.available && ! config.available( dt, config ) ) {\n\t\t\treturn false;\n\t\t}\n\n\t\tvar action = function ( e, dt, button, config ) {\n\t\t\tconfig.action.call( dt.button( button ), e, dt, button, config );\n\n\t\t\t$(dt.table().node()).triggerHandler( 'buttons-action.dt', [\n\t\t\t\tdt.button( button ), dt, button, config \n\t\t\t] );\n\t\t};\n\n\t\tvar button = $('<'+buttonDom.tag+'/>')\n\t\t\t.addClass( buttonDom.className )\n\t\t\t.attr( 'tabindex', this.s.dt.settings()[0].iTabIndex )\n\t\t\t.attr( 'aria-controls', this.s.dt.table().node().id )\n\t\t\t.on( 'click.dtb', function (e) {\n\t\t\t\te.preventDefault();\n\n\t\t\t\tif ( ! button.hasClass( buttonDom.disabled ) && config.action ) {\n\t\t\t\t\taction( e, dt, button, config );\n\t\t\t\t}\n\n\t\t\t\tbutton.blur();\n\t\t\t} )\n\t\t\t.on( 'keyup.dtb', function (e) {\n\t\t\t\tif ( e.keyCode === 13 ) {\n\t\t\t\t\tif ( ! button.hasClass( buttonDom.disabled ) && config.action ) {\n\t\t\t\t\t\taction( e, dt, button, config );\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t} );\n\n\t\t// Make `a` tags act like a link\n\t\tif ( buttonDom.tag.toLowerCase() === 'a' ) {\n\t\t\tbutton.attr( 'href', '#' );\n\t\t}\n\n\t\tif ( linerDom.tag ) {\n\t\t\tvar liner = $('<'+linerDom.tag+'/>')\n\t\t\t\t.html( text( config.text ) )\n\t\t\t\t.addClass( linerDom.className );\n\n\t\t\tif ( linerDom.tag.toLowerCase() === 'a' ) {\n\t\t\t\tliner.attr( 'href', '#' );\n\t\t\t}\n\n\t\t\tbutton.append( liner );\n\t\t}\n\t\telse {\n\t\t\tbutton.html( text( config.text ) );\n\t\t}\n\n\t\tif ( config.enabled === false ) {\n\t\t\tbutton.addClass( buttonDom.disabled );\n\t\t}\n\n\t\tif ( config.className ) {\n\t\t\tbutton.addClass( config.className );\n\t\t}\n\n\t\tif ( config.titleAttr ) {\n\t\t\tbutton.attr( 'title', text( config.titleAttr ) );\n\t\t}\n\n\t\tif ( ! config.namespace ) {\n\t\t\tconfig.namespace = '.dt-button-'+(_buttonCounter++);\n\t\t}\n\n\t\tvar buttonContainer = this.c.dom.buttonContainer;\n\t\tvar inserter;\n\t\tif ( buttonContainer && buttonContainer.tag ) {\n\t\t\tinserter = $('<'+buttonContainer.tag+'/>')\n\t\t\t\t.addClass( buttonContainer.className )\n\t\t\t\t.append( button );\n\t\t}\n\t\telse {\n\t\t\tinserter = button;\n\t\t}\n\n\t\tthis._addKey( config );\n\n\t\treturn {\n\t\t\tconf:         config,\n\t\t\tnode:         button.get(0),\n\t\t\tinserter:     inserter,\n\t\t\tbuttons:      [],\n\t\t\tinCollection: inCollection,\n\t\t\tcollection:   null\n\t\t};\n\t},\n\n\t/**\n\t * Get the button object from a node (recursive)\n\t * @param  {node} node Button node\n\t * @param  {array} [buttons] Button array, uses base if not defined\n\t * @return {object} Button object\n\t * @private\n\t */\n\t_nodeToButton: function ( node, buttons )\n\t{\n\t\tif ( ! buttons ) {\n\t\t\tbuttons = this.s.buttons;\n\t\t}\n\n\t\tfor ( var i=0, ien=buttons.length ; i<ien ; i++ ) {\n\t\t\tif ( buttons[i].node === node ) {\n\t\t\t\treturn buttons[i];\n\t\t\t}\n\n\t\t\tif ( buttons[i].buttons.length ) {\n\t\t\t\tvar ret = this._nodeToButton( node, buttons[i].buttons );\n\n\t\t\t\tif ( ret ) {\n\t\t\t\t\treturn ret;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t},\n\n\t/**\n\t * Get container array for a button from a button node (recursive)\n\t * @param  {node} node Button node\n\t * @param  {array} [buttons] Button array, uses base if not defined\n\t * @return {array} Button's host array\n\t * @private\n\t */\n\t_nodeToHost: function ( node, buttons )\n\t{\n\t\tif ( ! buttons ) {\n\t\t\tbuttons = this.s.buttons;\n\t\t}\n\n\t\tfor ( var i=0, ien=buttons.length ; i<ien ; i++ ) {\n\t\t\tif ( buttons[i].node === node ) {\n\t\t\t\treturn buttons;\n\t\t\t}\n\n\t\t\tif ( buttons[i].buttons.length ) {\n\t\t\t\tvar ret = this._nodeToHost( node, buttons[i].buttons );\n\n\t\t\t\tif ( ret ) {\n\t\t\t\t\treturn ret;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t},\n\n\t/**\n\t * Handle a key press - determine if any button's key configured matches\n\t * what was typed and trigger the action if so.\n\t * @param  {string} character The character pressed\n\t * @param  {object} e Key event that triggered this call\n\t * @private\n\t */\n\t_keypress: function ( character, e )\n\t{\n\t\tvar run = function ( conf, node ) {\n\t\t\tif ( ! conf.key ) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tif ( conf.key === character ) {\n\t\t\t\t$(node).click();\n\t\t\t}\n\t\t\telse if ( $.isPlainObject( conf.key ) ) {\n\t\t\t\tif ( conf.key.key !== character ) {\n\t\t\t\t\treturn;\n\t\t\t\t}\n\n\t\t\t\tif ( conf.key.shiftKey && ! e.shiftKey ) {\n\t\t\t\t\treturn;\n\t\t\t\t}\n\n\t\t\t\tif ( conf.key.altKey && ! e.altKey ) {\n\t\t\t\t\treturn;\n\t\t\t\t}\n\n\t\t\t\tif ( conf.key.ctrlKey && ! e.ctrlKey ) {\n\t\t\t\t\treturn;\n\t\t\t\t}\n\n\t\t\t\tif ( conf.key.metaKey && ! e.metaKey ) {\n\t\t\t\t\treturn;\n\t\t\t\t}\n\n\t\t\t\t// Made it this far - it is good\n\t\t\t\t$(node).click();\n\t\t\t}\n\t\t};\n\n\t\tvar recurse = function ( a ) {\n\t\t\tfor ( var i=0, ien=a.length ; i<ien ; i++ ) {\n\t\t\t\trun( a[i].conf, a[i].node );\n\n\t\t\t\tif ( a[i].buttons.length ) {\n\t\t\t\t\trecurse( a[i].buttons );\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\n\t\trecurse( this.s.buttons );\n\t},\n\n\t/**\n\t * Remove a key from the key listener for this instance (to be used when a\n\t * button is removed)\n\t * @param  {object} conf Button configuration\n\t * @private\n\t */\n\t_removeKey: function ( conf )\n\t{\n\t\tif ( conf.key ) {\n\t\t\tvar character = $.isPlainObject( conf.key ) ?\n\t\t\t\tconf.key.key :\n\t\t\t\tconf.key;\n\n\t\t\t// Remove only one character, as multiple buttons could have the\n\t\t\t// same listening key\n\t\t\tvar a = this.s.listenKeys.split('');\n\t\t\tvar idx = $.inArray( character, a );\n\t\t\ta.splice( idx, 1 );\n\t\t\tthis.s.listenKeys = a.join('');\n\t\t}\n\t},\n\n\t/**\n\t * Resolve a button configuration\n\t * @param  {string|function|object} conf Button config to resolve\n\t * @return {object} Button configuration\n\t * @private\n\t */\n\t_resolveExtends: function ( conf )\n\t{\n\t\tvar dt = this.s.dt;\n\t\tvar i, ien;\n\t\tvar toConfObject = function ( base ) {\n\t\t\tvar loop = 0;\n\n\t\t\t// Loop until we have resolved to a button configuration, or an\n\t\t\t// array of button configurations (which will be iterated\n\t\t\t// separately)\n\t\t\twhile ( ! $.isPlainObject(base) && ! $.isArray(base) ) {\n\t\t\t\tif ( base === undefined ) {\n\t\t\t\t\treturn;\n\t\t\t\t}\n\n\t\t\t\tif ( typeof base === 'function' ) {\n\t\t\t\t\tbase = base( dt, conf );\n\n\t\t\t\t\tif ( ! base ) {\n\t\t\t\t\t\treturn false;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\telse if ( typeof base === 'string' ) {\n\t\t\t\t\tif ( ! _dtButtons[ base ] ) {\n\t\t\t\t\t\tthrow 'Unknown button type: '+base;\n\t\t\t\t\t}\n\n\t\t\t\t\tbase = _dtButtons[ base ];\n\t\t\t\t}\n\n\t\t\t\tloop++;\n\t\t\t\tif ( loop > 30 ) {\n\t\t\t\t\t// Protect against misconfiguration killing the browser\n\t\t\t\t\tthrow 'Buttons: Too many iterations';\n\t\t\t\t}\n\t\t\t}\n\n\t\t\treturn $.isArray( base ) ?\n\t\t\t\tbase :\n\t\t\t\t$.extend( {}, base );\n\t\t};\n\n\t\tconf = toConfObject( conf );\n\n\t\twhile ( conf && conf.extend ) {\n\t\t\t// Use `toConfObject` in case the button definition being extended\n\t\t\t// is itself a string or a function\n\t\t\tif ( ! _dtButtons[ conf.extend ] ) {\n\t\t\t\tthrow 'Cannot extend unknown button type: '+conf.extend;\n\t\t\t}\n\n\t\t\tvar objArray = toConfObject( _dtButtons[ conf.extend ] );\n\t\t\tif ( $.isArray( objArray ) ) {\n\t\t\t\treturn objArray;\n\t\t\t}\n\t\t\telse if ( ! objArray ) {\n\t\t\t\t// This is a little brutal as it might be possible to have a\n\t\t\t\t// valid button without the extend, but if there is no extend\n\t\t\t\t// then the host button would be acting in an undefined state\n\t\t\t\treturn false;\n\t\t\t}\n\n\t\t\t// Stash the current class name\n\t\t\tvar originalClassName = objArray.className;\n\n\t\t\tconf = $.extend( {}, objArray, conf );\n\n\t\t\t// The extend will have overwritten the original class name if the\n\t\t\t// `conf` object also assigned a class, but we want to concatenate\n\t\t\t// them so they are list that is combined from all extended buttons\n\t\t\tif ( originalClassName && conf.className !== originalClassName ) {\n\t\t\t\tconf.className = originalClassName+' '+conf.className;\n\t\t\t}\n\n\t\t\t// Buttons to be added to a collection  -gives the ability to define\n\t\t\t// if buttons should be added to the start or end of a collection\n\t\t\tvar postfixButtons = conf.postfixButtons;\n\t\t\tif ( postfixButtons ) {\n\t\t\t\tif ( ! conf.buttons ) {\n\t\t\t\t\tconf.buttons = [];\n\t\t\t\t}\n\n\t\t\t\tfor ( i=0, ien=postfixButtons.length ; i<ien ; i++ ) {\n\t\t\t\t\tconf.buttons.push( postfixButtons[i] );\n\t\t\t\t}\n\n\t\t\t\tconf.postfixButtons = null;\n\t\t\t}\n\n\t\t\tvar prefixButtons = conf.prefixButtons;\n\t\t\tif ( prefixButtons ) {\n\t\t\t\tif ( ! conf.buttons ) {\n\t\t\t\t\tconf.buttons = [];\n\t\t\t\t}\n\n\t\t\t\tfor ( i=0, ien=prefixButtons.length ; i<ien ; i++ ) {\n\t\t\t\t\tconf.buttons.splice( i, 0, prefixButtons[i] );\n\t\t\t\t}\n\n\t\t\t\tconf.prefixButtons = null;\n\t\t\t}\n\n\t\t\t// Although we want the `conf` object to overwrite almost all of\n\t\t\t// the properties of the object being extended, the `extend`\n\t\t\t// property should come from the object being extended\n\t\t\tconf.extend = objArray.extend;\n\t\t}\n\n\t\treturn conf;\n\t}\n} );\n\n\n\n/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\n * Statics\n */\n\n/**\n * Show / hide a background layer behind a collection\n * @param  {boolean} Flag to indicate if the background should be shown or\n *   hidden \n * @param  {string} Class to assign to the background\n * @static\n */\nButtons.background = function ( show, className, fade ) {\n\tif ( fade === undefined ) {\n\t\tfade = 400;\n\t}\n\n\tif ( show ) {\n\t\t$('<div/>')\n\t\t\t.addClass( className )\n\t\t\t.css( 'display', 'none' )\n\t\t\t.appendTo( 'body' )\n\t\t\t.fadeIn( fade );\n\t}\n\telse {\n\t\t$('body > div.'+className)\n\t\t\t.fadeOut( fade, function () {\n\t\t\t\t$(this)\n\t\t\t\t\t.removeClass( className )\n\t\t\t\t\t.remove();\n\t\t\t} );\n\t}\n};\n\n/**\n * Instance selector - select Buttons instances based on an instance selector\n * value from the buttons assigned to a DataTable. This is only useful if\n * multiple instances are attached to a DataTable.\n * @param  {string|int|array} Instance selector - see `instance-selector`\n *   documentation on the DataTables site\n * @param  {array} Button instance array that was attached to the DataTables\n *   settings object\n * @return {array} Buttons instances\n * @static\n */\nButtons.instanceSelector = function ( group, buttons )\n{\n\tif ( ! group ) {\n\t\treturn $.map( buttons, function ( v ) {\n\t\t\treturn v.inst;\n\t\t} );\n\t}\n\n\tvar ret = [];\n\tvar names = $.map( buttons, function ( v ) {\n\t\treturn v.name;\n\t} );\n\n\t// Flatten the group selector into an array of single options\n\tvar process = function ( input ) {\n\t\tif ( $.isArray( input ) ) {\n\t\t\tfor ( var i=0, ien=input.length ; i<ien ; i++ ) {\n\t\t\t\tprocess( input[i] );\n\t\t\t}\n\t\t\treturn;\n\t\t}\n\n\t\tif ( typeof input === 'string' ) {\n\t\t\tif ( input.indexOf( ',' ) !== -1 ) {\n\t\t\t\t// String selector, list of names\n\t\t\t\tprocess( input.split(',') );\n\t\t\t}\n\t\t\telse {\n\t\t\t\t// String selector individual name\n\t\t\t\tvar idx = $.inArray( $.trim(input), names );\n\n\t\t\t\tif ( idx !== -1 ) {\n\t\t\t\t\tret.push( buttons[ idx ].inst );\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\telse if ( typeof input === 'number' ) {\n\t\t\t// Index selector\n\t\t\tret.push( buttons[ input ].inst );\n\t\t}\n\t};\n\t\n\tprocess( group );\n\n\treturn ret;\n};\n\n/**\n * Button selector - select one or more buttons from a selector input so some\n * operation can be performed on them.\n * @param  {array} Button instances array that the selector should operate on\n * @param  {string|int|node|jQuery|array} Button selector - see\n *   `button-selector` documentation on the DataTables site\n * @return {array} Array of objects containing `inst` and `idx` properties of\n *   the selected buttons so you know which instance each button belongs to.\n * @static\n */\nButtons.buttonSelector = function ( insts, selector )\n{\n\tvar ret = [];\n\tvar nodeBuilder = function ( a, buttons, baseIdx ) {\n\t\tvar button;\n\t\tvar idx;\n\n\t\tfor ( var i=0, ien=buttons.length ; i<ien ; i++ ) {\n\t\t\tbutton = buttons[i];\n\n\t\t\tif ( button ) {\n\t\t\t\tidx = baseIdx !== undefined ?\n\t\t\t\t\tbaseIdx+i :\n\t\t\t\t\ti+'';\n\n\t\t\t\ta.push( {\n\t\t\t\t\tnode: button.node,\n\t\t\t\t\tname: button.conf.name,\n\t\t\t\t\tidx:  idx\n\t\t\t\t} );\n\n\t\t\t\tif ( button.buttons ) {\n\t\t\t\t\tnodeBuilder( a, button.buttons, idx+'-' );\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t};\n\n\tvar run = function ( selector, inst ) {\n\t\tvar i, ien;\n\t\tvar buttons = [];\n\t\tnodeBuilder( buttons, inst.s.buttons );\n\n\t\tvar nodes = $.map( buttons, function (v) {\n\t\t\treturn v.node;\n\t\t} );\n\n\t\tif ( $.isArray( selector ) || selector instanceof $ ) {\n\t\t\tfor ( i=0, ien=selector.length ; i<ien ; i++ ) {\n\t\t\t\trun( selector[i], inst );\n\t\t\t}\n\t\t\treturn;\n\t\t}\n\n\t\tif ( selector === null || selector === undefined || selector === '*' ) {\n\t\t\t// Select all\n\t\t\tfor ( i=0, ien=buttons.length ; i<ien ; i++ ) {\n\t\t\t\tret.push( {\n\t\t\t\t\tinst: inst,\n\t\t\t\t\tnode: buttons[i].node\n\t\t\t\t} );\n\t\t\t}\n\t\t}\n\t\telse if ( typeof selector === 'number' ) {\n\t\t\t// Main button index selector\n\t\t\tret.push( {\n\t\t\t\tinst: inst,\n\t\t\t\tnode: inst.s.buttons[ selector ].node\n\t\t\t} );\n\t\t}\n\t\telse if ( typeof selector === 'string' ) {\n\t\t\tif ( selector.indexOf( ',' ) !== -1 ) {\n\t\t\t\t// Split\n\t\t\t\tvar a = selector.split(',');\n\n\t\t\t\tfor ( i=0, ien=a.length ; i<ien ; i++ ) {\n\t\t\t\t\trun( $.trim(a[i]), inst );\n\t\t\t\t}\n\t\t\t}\n\t\t\telse if ( selector.match( /^\\d+(\\-\\d+)*$/ ) ) {\n\t\t\t\t// Sub-button index selector\n\t\t\t\tvar indexes = $.map( buttons, function (v) {\n\t\t\t\t\treturn v.idx;\n\t\t\t\t} );\n\n\t\t\t\tret.push( {\n\t\t\t\t\tinst: inst,\n\t\t\t\t\tnode: buttons[ $.inArray( selector, indexes ) ].node\n\t\t\t\t} );\n\t\t\t}\n\t\t\telse if ( selector.indexOf( ':name' ) !== -1 ) {\n\t\t\t\t// Button name selector\n\t\t\t\tvar name = selector.replace( ':name', '' );\n\n\t\t\t\tfor ( i=0, ien=buttons.length ; i<ien ; i++ ) {\n\t\t\t\t\tif ( buttons[i].name === name ) {\n\t\t\t\t\t\tret.push( {\n\t\t\t\t\t\t\tinst: inst,\n\t\t\t\t\t\t\tnode: buttons[i].node\n\t\t\t\t\t\t} );\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t\telse {\n\t\t\t\t// jQuery selector on the nodes\n\t\t\t\t$( nodes ).filter( selector ).each( function () {\n\t\t\t\t\tret.push( {\n\t\t\t\t\t\tinst: inst,\n\t\t\t\t\t\tnode: this\n\t\t\t\t\t} );\n\t\t\t\t} );\n\t\t\t}\n\t\t}\n\t\telse if ( typeof selector === 'object' && selector.nodeName ) {\n\t\t\t// Node selector\n\t\t\tvar idx = $.inArray( selector, nodes );\n\n\t\t\tif ( idx !== -1 ) {\n\t\t\t\tret.push( {\n\t\t\t\t\tinst: inst,\n\t\t\t\t\tnode: nodes[ idx ]\n\t\t\t\t} );\n\t\t\t}\n\t\t}\n\t};\n\n\n\tfor ( var i=0, ien=insts.length ; i<ien ; i++ ) {\n\t\tvar inst = insts[i];\n\n\t\trun( selector, inst );\n\t}\n\n\treturn ret;\n};\n\n\n/**\n * Buttons defaults. For full documentation, please refer to the docs/option\n * directory or the DataTables site.\n * @type {Object}\n * @static\n */\nButtons.defaults = {\n\tbuttons: [ 'copy', 'excel', 'csv', 'pdf', 'print' ],\n\tname: 'main',\n\ttabIndex: 0,\n\tdom: {\n\t\tcontainer: {\n\t\t\ttag: 'div',\n\t\t\tclassName: 'dt-buttons'\n\t\t},\n\t\tcollection: {\n\t\t\ttag: 'div',\n\t\t\tclassName: 'dt-button-collection'\n\t\t},\n\t\tbutton: {\n\t\t\ttag: 'a',\n\t\t\tclassName: 'dt-button',\n\t\t\tactive: 'active',\n\t\t\tdisabled: 'disabled'\n\t\t},\n\t\tbuttonLiner: {\n\t\t\ttag: 'span',\n\t\t\tclassName: ''\n\t\t}\n\t}\n};\n\n/**\n * Version information\n * @type {string}\n * @static\n */\nButtons.version = '1.3.1';\n\n\n$.extend( _dtButtons, {\n\tcollection: {\n\t\ttext: function ( dt ) {\n\t\t\treturn dt.i18n( 'buttons.collection', 'Collection' );\n\t\t},\n\t\tclassName: 'buttons-collection',\n\t\taction: function ( e, dt, button, config ) {\n\t\t\tvar host = button;\n\t\t\tvar hostOffset = host.offset();\n\t\t\tvar tableContainer = $( dt.table().container() );\n\t\t\tvar multiLevel = false;\n\n\t\t\t// Remove any old collection\n\t\t\tif ( $('div.dt-button-background').length ) {\n\t\t\t\tmultiLevel = $('.dt-button-collection').offset();\n\t\t\t\t$('body').trigger( 'click.dtb-collection' );\n\t\t\t}\n\n\t\t\tconfig._collection\n\t\t\t\t.addClass( config.collectionLayout )\n\t\t\t\t.css( 'display', 'none' )\n\t\t\t\t.appendTo( 'body' )\n\t\t\t\t.fadeIn( config.fade );\n\n\t\t\tvar position = config._collection.css( 'position' );\n\n\t\t\tif ( multiLevel && position === 'absolute' ) {\n\t\t\t\tconfig._collection.css( {\n\t\t\t\t\ttop: multiLevel.top,\n\t\t\t\t\tleft: multiLevel.left\n\t\t\t\t} );\n\t\t\t}\n\t\t\telse if ( position === 'absolute' ) {\n\t\t\t\tconfig._collection.css( {\n\t\t\t\t\ttop: hostOffset.top + host.outerHeight(),\n\t\t\t\t\tleft: hostOffset.left\n\t\t\t\t} );\n\n\t\t\t\tvar listRight = hostOffset.left + config._collection.outerWidth();\n\t\t\t\tvar tableRight = tableContainer.offset().left + tableContainer.width();\n\t\t\t\tif ( listRight > tableRight ) {\n\t\t\t\t\tconfig._collection.css( 'left', hostOffset.left - ( listRight - tableRight ) );\n\t\t\t\t}\n\t\t\t}\n\t\t\telse {\n\t\t\t\t// Fix position - centre on screen\n\t\t\t\tvar top = config._collection.height() / 2;\n\t\t\t\tif ( top > $(window).height() / 2 ) {\n\t\t\t\t\ttop = $(window).height() / 2;\n\t\t\t\t}\n\n\t\t\t\tconfig._collection.css( 'marginTop', top*-1 );\n\t\t\t}\n\n\t\t\tif ( config.background ) {\n\t\t\t\tButtons.background( true, config.backgroundClassName, config.fade );\n\t\t\t}\n\n\t\t\t// Need to break the 'thread' for the collection button being\n\t\t\t// activated by a click - it would also trigger this event\n\t\t\tsetTimeout( function () {\n\t\t\t\t// This is bonkers, but if we don't have a click listener on the\n\t\t\t\t// background element, iOS Safari will ignore the body click\n\t\t\t\t// listener below. An empty function here is all that is\n\t\t\t\t// required to make it work...\n\t\t\t\t$('div.dt-button-background').on( 'click.dtb-collection', function () {} );\n\n\t\t\t\t$('body').on( 'click.dtb-collection', function (e) {\n\t\t\t\t\t// andSelf is deprecated in jQ1.8, but we want 1.7 compat\n\t\t\t\t\tvar back = $.fn.addBack ? 'addBack' : 'andSelf';\n\n\t\t\t\t\tif ( ! $(e.target).parents()[back]().filter( config._collection ).length ) {\n\t\t\t\t\t\tconfig._collection\n\t\t\t\t\t\t\t.fadeOut( config.fade, function () {\n\t\t\t\t\t\t\t\tconfig._collection.detach();\n\t\t\t\t\t\t\t} );\n\n\t\t\t\t\t\t$('div.dt-button-background').off( 'click.dtb-collection' );\n\t\t\t\t\t\tButtons.background( false, config.backgroundClassName, config.fade );\n\n\t\t\t\t\t\t$('body').off( 'click.dtb-collection' );\n\t\t\t\t\t\tdt.off( 'buttons-action.b-internal' );\n\t\t\t\t\t}\n\t\t\t\t} );\n\t\t\t}, 10 );\n\n\t\t\tif ( config.autoClose ) {\n\t\t\t\tdt.on( 'buttons-action.b-internal', function () {\n\t\t\t\t\t$('div.dt-button-background').click();\n\t\t\t\t} );\n\t\t\t}\n\t\t},\n\t\tbackground: true,\n\t\tcollectionLayout: '',\n\t\tbackgroundClassName: 'dt-button-background',\n\t\tautoClose: false,\n\t\tfade: 400\n\t},\n\tcopy: function ( dt, conf ) {\n\t\tif ( _dtButtons.copyHtml5 ) {\n\t\t\treturn 'copyHtml5';\n\t\t}\n\t\tif ( _dtButtons.copyFlash && _dtButtons.copyFlash.available( dt, conf ) ) {\n\t\t\treturn 'copyFlash';\n\t\t}\n\t},\n\tcsv: function ( dt, conf ) {\n\t\t// Common option that will use the HTML5 or Flash export buttons\n\t\tif ( _dtButtons.csvHtml5 && _dtButtons.csvHtml5.available( dt, conf ) ) {\n\t\t\treturn 'csvHtml5';\n\t\t}\n\t\tif ( _dtButtons.csvFlash && _dtButtons.csvFlash.available( dt, conf ) ) {\n\t\t\treturn 'csvFlash';\n\t\t}\n\t},\n\texcel: function ( dt, conf ) {\n\t\t// Common option that will use the HTML5 or Flash export buttons\n\t\tif ( _dtButtons.excelHtml5 && _dtButtons.excelHtml5.available( dt, conf ) ) {\n\t\t\treturn 'excelHtml5';\n\t\t}\n\t\tif ( _dtButtons.excelFlash && _dtButtons.excelFlash.available( dt, conf ) ) {\n\t\t\treturn 'excelFlash';\n\t\t}\n\t},\n\tpdf: function ( dt, conf ) {\n\t\t// Common option that will use the HTML5 or Flash export buttons\n\t\tif ( _dtButtons.pdfHtml5 && _dtButtons.pdfHtml5.available( dt, conf ) ) {\n\t\t\treturn 'pdfHtml5';\n\t\t}\n\t\tif ( _dtButtons.pdfFlash && _dtButtons.pdfFlash.available( dt, conf ) ) {\n\t\t\treturn 'pdfFlash';\n\t\t}\n\t},\n\tpageLength: function ( dt ) {\n\t\tvar lengthMenu = dt.settings()[0].aLengthMenu;\n\t\tvar vals = $.isArray( lengthMenu[0] ) ? lengthMenu[0] : lengthMenu;\n\t\tvar lang = $.isArray( lengthMenu[0] ) ? lengthMenu[1] : lengthMenu;\n\t\tvar text = function ( dt ) {\n\t\t\treturn dt.i18n( 'buttons.pageLength', {\n\t\t\t\t\"-1\": 'Show all rows',\n\t\t\t\t_:    'Show %d rows'\n\t\t\t}, dt.page.len() );\n\t\t};\n\n\t\treturn {\n\t\t\textend: 'collection',\n\t\t\ttext: text,\n\t\t\tclassName: 'buttons-page-length',\n\t\t\tautoClose: true,\n\t\t\tbuttons: $.map( vals, function ( val, i ) {\n\t\t\t\treturn {\n\t\t\t\t\ttext: lang[i],\n\t\t\t\t\tclassName: 'button-page-length',\n\t\t\t\t\taction: function ( e, dt ) {\n\t\t\t\t\t\tdt.page.len( val ).draw();\n\t\t\t\t\t},\n\t\t\t\t\tinit: function ( dt, node, conf ) {\n\t\t\t\t\t\tvar that = this;\n\t\t\t\t\t\tvar fn = function () {\n\t\t\t\t\t\t\tthat.active( dt.page.len() === val );\n\t\t\t\t\t\t};\n\n\t\t\t\t\t\tdt.on( 'length.dt'+conf.namespace, fn );\n\t\t\t\t\t\tfn();\n\t\t\t\t\t},\n\t\t\t\t\tdestroy: function ( dt, node, conf ) {\n\t\t\t\t\t\tdt.off( 'length.dt'+conf.namespace );\n\t\t\t\t\t}\n\t\t\t\t};\n\t\t\t} ),\n\t\t\tinit: function ( dt, node, conf ) {\n\t\t\t\tvar that = this;\n\t\t\t\tdt.on( 'length.dt'+conf.namespace, function () {\n\t\t\t\t\tthat.text( text( dt ) );\n\t\t\t\t} );\n\t\t\t},\n\t\t\tdestroy: function ( dt, node, conf ) {\n\t\t\t\tdt.off( 'length.dt'+conf.namespace );\n\t\t\t}\n\t\t};\n\t}\n} );\n\n\n/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\n * DataTables API\n *\n * For complete documentation, please refer to the docs/api directory or the\n * DataTables site\n */\n\n// Buttons group and individual button selector\nDataTable.Api.register( 'buttons()', function ( group, selector ) {\n\t// Argument shifting\n\tif ( selector === undefined ) {\n\t\tselector = group;\n\t\tgroup = undefined;\n\t}\n\n\tthis.selector.buttonGroup = group;\n\n\tvar res = this.iterator( true, 'table', function ( ctx ) {\n\t\tif ( ctx._buttons ) {\n\t\t\treturn Buttons.buttonSelector(\n\t\t\t\tButtons.instanceSelector( group, ctx._buttons ),\n\t\t\t\tselector\n\t\t\t);\n\t\t}\n\t}, true );\n\n\tres._groupSelector = group;\n\treturn res;\n} );\n\n// Individual button selector\nDataTable.Api.register( 'button()', function ( group, selector ) {\n\t// just run buttons() and truncate\n\tvar buttons = this.buttons( group, selector );\n\n\tif ( buttons.length > 1 ) {\n\t\tbuttons.splice( 1, buttons.length );\n\t}\n\n\treturn buttons;\n} );\n\n// Active buttons\nDataTable.Api.registerPlural( 'buttons().active()', 'button().active()', function ( flag ) {\n\tif ( flag === undefined ) {\n\t\treturn this.map( function ( set ) {\n\t\t\treturn set.inst.active( set.node );\n\t\t} );\n\t}\n\n\treturn this.each( function ( set ) {\n\t\tset.inst.active( set.node, flag );\n\t} );\n} );\n\n// Get / set button action\nDataTable.Api.registerPlural( 'buttons().action()', 'button().action()', function ( action ) {\n\tif ( action === undefined ) {\n\t\treturn this.map( function ( set ) {\n\t\t\treturn set.inst.action( set.node );\n\t\t} );\n\t}\n\n\treturn this.each( function ( set ) {\n\t\tset.inst.action( set.node, action );\n\t} );\n} );\n\n// Enable / disable buttons\nDataTable.Api.register( ['buttons().enable()', 'button().enable()'], function ( flag ) {\n\treturn this.each( function ( set ) {\n\t\tset.inst.enable( set.node, flag );\n\t} );\n} );\n\n// Disable buttons\nDataTable.Api.register( ['buttons().disable()', 'button().disable()'], function () {\n\treturn this.each( function ( set ) {\n\t\tset.inst.disable( set.node );\n\t} );\n} );\n\n// Get button nodes\nDataTable.Api.registerPlural( 'buttons().nodes()', 'button().node()', function () {\n\tvar jq = $();\n\n\t// jQuery will automatically reduce duplicates to a single entry\n\t$( this.each( function ( set ) {\n\t\tjq = jq.add( set.inst.node( set.node ) );\n\t} ) );\n\n\treturn jq;\n} );\n\n// Get / set button processing state\nDataTable.Api.registerPlural( 'buttons().processing()', 'button().processing()', function ( flag ) {\n\tif ( flag === undefined ) {\n\t\treturn this.map( function ( set ) {\n\t\t\treturn set.inst.processing( set.node );\n\t\t} );\n\t}\n\n\treturn this.each( function ( set ) {\n\t\tset.inst.processing( set.node, flag );\n\t} );\n} );\n\n// Get / set button text (i.e. the button labels)\nDataTable.Api.registerPlural( 'buttons().text()', 'button().text()', function ( label ) {\n\tif ( label === undefined ) {\n\t\treturn this.map( function ( set ) {\n\t\t\treturn set.inst.text( set.node );\n\t\t} );\n\t}\n\n\treturn this.each( function ( set ) {\n\t\tset.inst.text( set.node, label );\n\t} );\n} );\n\n// Trigger a button's action\nDataTable.Api.registerPlural( 'buttons().trigger()', 'button().trigger()', function () {\n\treturn this.each( function ( set ) {\n\t\tset.inst.node( set.node ).trigger( 'click' );\n\t} );\n} );\n\n// Get the container elements\nDataTable.Api.registerPlural( 'buttons().containers()', 'buttons().container()', function () {\n\tvar jq = $();\n\tvar groupSelector = this._groupSelector;\n\n\t// We need to use the group selector directly, since if there are no buttons\n\t// the result set will be empty\n\tthis.iterator( true, 'table', function ( ctx ) {\n\t\tif ( ctx._buttons ) {\n\t\t\tvar insts = Buttons.instanceSelector( groupSelector, ctx._buttons );\n\n\t\t\tfor ( var i=0, ien=insts.length ; i<ien ; i++ ) {\n\t\t\t\tjq = jq.add( insts[i].container() );\n\t\t\t}\n\t\t}\n\t} );\n\n\treturn jq;\n} );\n\n// Add a new button\nDataTable.Api.register( 'button().add()', function ( idx, conf ) {\n\tvar ctx = this.context;\n\n\t// Don't use `this` as it could be empty - select the instances directly\n\tif ( ctx.length ) {\n\t\tvar inst = Buttons.instanceSelector( this._groupSelector, ctx[0]._buttons );\n\n\t\tif ( inst.length ) {\n\t\t\tinst[0].add( conf, idx );\n\t\t}\n\t}\n\n\treturn this.button( this._groupSelector, idx );\n} );\n\n// Destroy the button sets selected\nDataTable.Api.register( 'buttons().destroy()', function () {\n\tthis.pluck( 'inst' ).unique().each( function ( inst ) {\n\t\tinst.destroy();\n\t} );\n\n\treturn this;\n} );\n\n// Remove a button\nDataTable.Api.registerPlural( 'buttons().remove()', 'buttons().remove()', function () {\n\tthis.each( function ( set ) {\n\t\tset.inst.remove( set.node );\n\t} );\n\n\treturn this;\n} );\n\n// Information box that can be used by buttons\nvar _infoTimer;\nDataTable.Api.register( 'buttons.info()', function ( title, message, time ) {\n\tvar that = this;\n\n\tif ( title === false ) {\n\t\t$('#datatables_buttons_info').fadeOut( function () {\n\t\t\t$(this).remove();\n\t\t} );\n\t\tclearTimeout( _infoTimer );\n\t\t_infoTimer = null;\n\n\t\treturn this;\n\t}\n\n\tif ( _infoTimer ) {\n\t\tclearTimeout( _infoTimer );\n\t}\n\n\tif ( $('#datatables_buttons_info').length ) {\n\t\t$('#datatables_buttons_info').remove();\n\t}\n\n\ttitle = title ? '<h2>'+title+'</h2>' : '';\n\n\t$('<div id=\"datatables_buttons_info\" class=\"dt-button-info\"/>')\n\t\t.html( title )\n\t\t.append( $('<div/>')[ typeof message === 'string' ? 'html' : 'append' ]( message ) )\n\t\t.css( 'display', 'none' )\n\t\t.appendTo( 'body' )\n\t\t.fadeIn();\n\n\tif ( time !== undefined && time !== 0 ) {\n\t\t_infoTimer = setTimeout( function () {\n\t\t\tthat.buttons.info( false );\n\t\t}, time );\n\t}\n\n\treturn this;\n} );\n\n// Get data from the table for export - this is common to a number of plug-in\n// buttons so it is included in the Buttons core library\nDataTable.Api.register( 'buttons.exportData()', function ( options ) {\n\tif ( this.context.length ) {\n\t\treturn _exportData( new DataTable.Api( this.context[0] ), options );\n\t}\n} );\n\n\nvar _exportTextarea = $('<textarea/>')[0];\nvar _exportData = function ( dt, inOpts )\n{\n\tvar config = $.extend( true, {}, {\n\t\trows:           null,\n\t\tcolumns:        '',\n\t\tmodifier:       {\n\t\t\tsearch: 'applied',\n\t\t\torder:  'applied'\n\t\t},\n\t\torthogonal:     'display',\n\t\tstripHtml:      true,\n\t\tstripNewlines:  true,\n\t\tdecodeEntities: true,\n\t\ttrim:           true,\n\t\tformat:         {\n\t\t\theader: function ( d ) {\n\t\t\t\treturn strip( d );\n\t\t\t},\n\t\t\tfooter: function ( d ) {\n\t\t\t\treturn strip( d );\n\t\t\t},\n\t\t\tbody: function ( d ) {\n\t\t\t\treturn strip( d );\n\t\t\t}\n\t\t}\n\t}, inOpts );\n\n\tvar strip = function ( str ) {\n\t\tif ( typeof str !== 'string' ) {\n\t\t\treturn str;\n\t\t}\n\n\t\t// Always remove script tags\n\t\tstr = str.replace( /<script\\b[^<]*(?:(?!<\\/script>)<[^<]*)*<\\/script>/gi, '' );\n\n\t\tif ( config.stripHtml ) {\n\t\t\tstr = str.replace( /<[^>]*>/g, '' );\n\t\t}\n\n\t\tif ( config.trim ) {\n\t\t\tstr = str.replace( /^\\s+|\\s+$/g, '' );\n\t\t}\n\n\t\tif ( config.stripNewlines ) {\n\t\t\tstr = str.replace( /\\n/g, ' ' );\n\t\t}\n\n\t\tif ( config.decodeEntities ) {\n\t\t\t_exportTextarea.innerHTML = str;\n\t\t\tstr = _exportTextarea.value;\n\t\t}\n\n\t\treturn str;\n\t};\n\n\n\tvar header = dt.columns( config.columns ).indexes().map( function (idx) {\n\t\tvar el = dt.column( idx ).header();\n\t\treturn config.format.header( el.innerHTML, idx, el );\n\t} ).toArray();\n\n\tvar footer = dt.table().footer() ?\n\t\tdt.columns( config.columns ).indexes().map( function (idx) {\n\t\t\tvar el = dt.column( idx ).footer();\n\t\t\treturn config.format.footer( el ? el.innerHTML : '', idx, el );\n\t\t} ).toArray() :\n\t\tnull;\n\n\tvar rowIndexes = dt.rows( config.rows, config.modifier ).indexes().toArray();\n\tvar selectedCells = dt.cells( rowIndexes, config.columns );\n\tvar cells = selectedCells\n\t\t.render( config.orthogonal )\n\t\t.toArray();\n\tvar cellNodes = selectedCells\n\t\t.nodes()\n\t\t.toArray();\n\n\tvar columns = header.length;\n\tvar rows = columns > 0 ? cells.length / columns : 0;\n\tvar body = new Array( rows );\n\tvar cellCounter = 0;\n\n\tfor ( var i=0, ien=rows ; i<ien ; i++ ) {\n\t\tvar row = new Array( columns );\n\n\t\tfor ( var j=0 ; j<columns ; j++ ) {\n\t\t\trow[j] = config.format.body( cells[ cellCounter ], i, j, cellNodes[ cellCounter ] );\n\t\t\tcellCounter++;\n\t\t}\n\n\t\tbody[i] = row;\n\t}\n\n\treturn {\n\t\theader: header,\n\t\tfooter: footer,\n\t\tbody:   body\n\t};\n};\n\n\n/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\n * DataTables interface\n */\n\n// Attach to DataTables objects for global access\n$.fn.dataTable.Buttons = Buttons;\n$.fn.DataTable.Buttons = Buttons;\n\n\n\n// DataTables creation - check if the buttons have been defined for this table,\n// they will have been if the `B` option was used in `dom`, otherwise we should\n// create the buttons instance here so they can be inserted into the document\n// using the API. Listen for `init` for compatibility with pre 1.10.10, but to\n// be removed in future.\n$(document).on( 'init.dt plugin-init.dt', function (e, settings) {\n\tif ( e.namespace !== 'dt' ) {\n\t\treturn;\n\t}\n\n\tvar opts = settings.oInit.buttons || DataTable.defaults.buttons;\n\n\tif ( opts && ! settings._buttons ) {\n\t\tnew Buttons( settings, opts ).container();\n\t}\n} );\n\n// DataTables `dom` feature option\nDataTable.ext.feature.push( {\n\tfnInit: function( settings ) {\n\t\tvar api = new DataTable.Api( settings );\n\t\tvar opts = api.init().buttons || DataTable.defaults.buttons;\n\n\t\treturn new Buttons( api, opts ).container();\n\t},\n\tcFeature: \"B\"\n} );\n\n\nreturn Buttons;\n}));\n"

/***/ }),

/***/ 262:
/***/ (function(module, exports) {

module.exports = "/*! Responsive 2.1.1\n * 2014-2016 SpryMedia Ltd - datatables.net/license\n */\n\n/**\n * @summary     Responsive\n * @description Responsive tables plug-in for DataTables\n * @version     2.1.1\n * @file        dataTables.responsive.js\n * @author      SpryMedia Ltd (www.sprymedia.co.uk)\n * @contact     www.sprymedia.co.uk/contact\n * @copyright   Copyright 2014-2016 SpryMedia Ltd.\n *\n * This source file is free software, available under the following license:\n *   MIT license - http://datatables.net/license/mit\n *\n * This source file is distributed in the hope that it will be useful, but\n * WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY\n * or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details.\n *\n * For details please refer to: http://www.datatables.net\n */\n(function( factory ){\n\tif ( typeof define === 'function' && define.amd ) {\n\t\t// AMD\n\t\tdefine( ['jquery', 'datatables.net'], function ( $ ) {\n\t\t\treturn factory( $, window, document );\n\t\t} );\n\t}\n\telse if ( typeof exports === 'object' ) {\n\t\t// CommonJS\n\t\tmodule.exports = function (root, $) {\n\t\t\tif ( ! root ) {\n\t\t\t\troot = window;\n\t\t\t}\n\n\t\t\tif ( ! $ || ! $.fn.dataTable ) {\n\t\t\t\t$ = require('datatables.net')(root, $).$;\n\t\t\t}\n\n\t\t\treturn factory( $, root, root.document );\n\t\t};\n\t}\n\telse {\n\t\t// Browser\n\t\tfactory( jQuery, window, document );\n\t}\n}(function( $, window, document, undefined ) {\n'use strict';\nvar DataTable = $.fn.dataTable;\n\n\n/**\n * Responsive is a plug-in for the DataTables library that makes use of\n * DataTables' ability to change the visibility of columns, changing the\n * visibility of columns so the displayed columns fit into the table container.\n * The end result is that complex tables will be dynamically adjusted to fit\n * into the viewport, be it on a desktop, tablet or mobile browser.\n *\n * Responsive for DataTables has two modes of operation, which can used\n * individually or combined:\n *\n * * Class name based control - columns assigned class names that match the\n *   breakpoint logic can be shown / hidden as required for each breakpoint.\n * * Automatic control - columns are automatically hidden when there is no\n *   room left to display them. Columns removed from the right.\n *\n * In additional to column visibility control, Responsive also has built into\n * options to use DataTables' child row display to show / hide the information\n * from the table that has been hidden. There are also two modes of operation\n * for this child row display:\n *\n * * Inline - when the control element that the user can use to show / hide\n *   child rows is displayed inside the first column of the table.\n * * Column - where a whole column is dedicated to be the show / hide control.\n *\n * Initialisation of Responsive is performed by:\n *\n * * Adding the class `responsive` or `dt-responsive` to the table. In this case\n *   Responsive will automatically be initialised with the default configuration\n *   options when the DataTable is created.\n * * Using the `responsive` option in the DataTables configuration options. This\n *   can also be used to specify the configuration options, or simply set to\n *   `true` to use the defaults.\n *\n *  @class\n *  @param {object} settings DataTables settings object for the host table\n *  @param {object} [opts] Configuration options\n *  @requires jQuery 1.7+\n *  @requires DataTables 1.10.3+\n *\n *  @example\n *      $('#example').DataTable( {\n *        responsive: true\n *      } );\n *    } );\n */\nvar Responsive = function ( settings, opts ) {\n\t// Sanity check that we are using DataTables 1.10 or newer\n\tif ( ! DataTable.versionCheck || ! DataTable.versionCheck( '1.10.3' ) ) {\n\t\tthrow 'DataTables Responsive requires DataTables 1.10.3 or newer';\n\t}\n\n\tthis.s = {\n\t\tdt: new DataTable.Api( settings ),\n\t\tcolumns: [],\n\t\tcurrent: []\n\t};\n\n\t// Check if responsive has already been initialised on this table\n\tif ( this.s.dt.settings()[0].responsive ) {\n\t\treturn;\n\t}\n\n\t// details is an object, but for simplicity the user can give it as a string\n\t// or a boolean\n\tif ( opts && typeof opts.details === 'string' ) {\n\t\topts.details = { type: opts.details };\n\t}\n\telse if ( opts && opts.details === false ) {\n\t\topts.details = { type: false };\n\t}\n\telse if ( opts && opts.details === true ) {\n\t\topts.details = { type: 'inline' };\n\t}\n\n\tthis.c = $.extend( true, {}, Responsive.defaults, DataTable.defaults.responsive, opts );\n\tsettings.responsive = this;\n\tthis._constructor();\n};\n\n$.extend( Responsive.prototype, {\n\t/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\n\t * Constructor\n\t */\n\n\t/**\n\t * Initialise the Responsive instance\n\t *\n\t * @private\n\t */\n\t_constructor: function ()\n\t{\n\t\tvar that = this;\n\t\tvar dt = this.s.dt;\n\t\tvar dtPrivateSettings = dt.settings()[0];\n\t\tvar oldWindowWidth = $(window).width();\n\n\t\tdt.settings()[0]._responsive = this;\n\n\t\t// Use DataTables' throttle function to avoid processor thrashing on\n\t\t// resize\n\t\t$(window).on( 'resize.dtr orientationchange.dtr', DataTable.util.throttle( function () {\n\t\t\t// iOS has a bug whereby resize can fire when only scrolling\n\t\t\t// See: http://stackoverflow.com/questions/8898412\n\t\t\tvar width = $(window).width();\n\n\t\t\tif ( width !== oldWindowWidth ) {\n\t\t\t\tthat._resize();\n\t\t\t\toldWindowWidth = width;\n\t\t\t}\n\t\t} ) );\n\n\t\t// DataTables doesn't currently trigger an event when a row is added, so\n\t\t// we need to hook into its private API to enforce the hidden rows when\n\t\t// new data is added\n\t\tdtPrivateSettings.oApi._fnCallbackReg( dtPrivateSettings, 'aoRowCreatedCallback', function (tr, data, idx) {\n\t\t\tif ( $.inArray( false, that.s.current ) !== -1 ) {\n\t\t\t\t$('>td, >th', tr).each( function ( i ) {\n\t\t\t\t\tvar idx = dt.column.index( 'toData', i );\n\n\t\t\t\t\tif ( that.s.current[idx] === false ) {\n\t\t\t\t\t\t$(this).css('display', 'none');\n\t\t\t\t\t}\n\t\t\t\t} );\n\t\t\t}\n\t\t} );\n\n\t\t// Destroy event handler\n\t\tdt.on( 'destroy.dtr', function () {\n\t\t\tdt.off( '.dtr' );\n\t\t\t$( dt.table().body() ).off( '.dtr' );\n\t\t\t$(window).off( 'resize.dtr orientationchange.dtr' );\n\n\t\t\t// Restore the columns that we've hidden\n\t\t\t$.each( that.s.current, function ( i, val ) {\n\t\t\t\tif ( val === false ) {\n\t\t\t\t\tthat._setColumnVis( i, true );\n\t\t\t\t}\n\t\t\t} );\n\t\t} );\n\n\t\t// Reorder the breakpoints array here in case they have been added out\n\t\t// of order\n\t\tthis.c.breakpoints.sort( function (a, b) {\n\t\t\treturn a.width < b.width ? 1 :\n\t\t\t\ta.width > b.width ? -1 : 0;\n\t\t} );\n\n\t\tthis._classLogic();\n\t\tthis._resizeAuto();\n\n\t\t// Details handler\n\t\tvar details = this.c.details;\n\n\t\tif ( details.type !== false ) {\n\t\t\tthat._detailsInit();\n\n\t\t\t// DataTables will trigger this event on every column it shows and\n\t\t\t// hides individually\n\t\t\tdt.on( 'column-visibility.dtr', function (e, ctx, col, vis) {\n\t\t\t\tthat._classLogic();\n\t\t\t\tthat._resizeAuto();\n\t\t\t\tthat._resize();\n\t\t\t} );\n\n\t\t\t// Redraw the details box on each draw which will happen if the data\n\t\t\t// has changed. This is used until DataTables implements a native\n\t\t\t// `updated` event for rows\n\t\t\tdt.on( 'draw.dtr', function () {\n\t\t\t\tthat._redrawChildren();\n\t\t\t} );\n\n\t\t\t$(dt.table().node()).addClass( 'dtr-'+details.type );\n\t\t}\n\n\t\tdt.on( 'column-reorder.dtr', function (e, settings, details) {\n\t\t\tthat._classLogic();\n\t\t\tthat._resizeAuto();\n\t\t\tthat._resize();\n\t\t} );\n\n\t\t// Change in column sizes means we need to calc\n\t\tdt.on( 'column-sizing.dtr', function () {\n\t\t\tthat._resizeAuto();\n\t\t\tthat._resize();\n\t\t});\n\n\t\t// On Ajax reload we want to reopen any child rows which are displayed\n\t\t// by responsive\n\t\tdt.on( 'preXhr.dtr', function () {\n\t\t\tvar rowIds = [];\n\t\t\tdt.rows().every( function () {\n\t\t\t\tif ( this.child.isShown() ) {\n\t\t\t\t\trowIds.push( this.id(true) );\n\t\t\t\t}\n\t\t\t} );\n\n\t\t\tdt.one( 'draw.dtr', function () {\n\t\t\t\tdt.rows( rowIds ).every( function () {\n\t\t\t\t\tthat._detailsDisplay( this, false );\n\t\t\t\t} );\n\t\t\t} );\n\t\t});\n\n\t\tdt.on( 'init.dtr', function (e, settings, details) {\n\t\t\tthat._resizeAuto();\n\t\t\tthat._resize();\n\n\t\t\t// If columns were hidden, then DataTables needs to adjust the\n\t\t\t// column sizing\n\t\t\tif ( $.inArray( false, that.s.current ) ) {\n\t\t\t\tdt.columns.adjust();\n\t\t\t}\n\t\t} );\n\n\t\t// First pass - draw the table for the current viewport size\n\t\tthis._resize();\n\t},\n\n\n\t/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\n\t * Private methods\n\t */\n\n\t/**\n\t * Calculate the visibility for the columns in a table for a given\n\t * breakpoint. The result is pre-determined based on the class logic if\n\t * class names are used to control all columns, but the width of the table\n\t * is also used if there are columns which are to be automatically shown\n\t * and hidden.\n\t *\n\t * @param  {string} breakpoint Breakpoint name to use for the calculation\n\t * @return {array} Array of boolean values initiating the visibility of each\n\t *   column.\n\t *  @private\n\t */\n\t_columnsVisiblity: function ( breakpoint )\n\t{\n\t\tvar dt = this.s.dt;\n\t\tvar columns = this.s.columns;\n\t\tvar i, ien;\n\n\t\t// Create an array that defines the column ordering based first on the\n\t\t// column's priority, and secondly the column index. This allows the\n\t\t// columns to be removed from the right if the priority matches\n\t\tvar order = columns\n\t\t\t.map( function ( col, idx ) {\n\t\t\t\treturn {\n\t\t\t\t\tcolumnIdx: idx,\n\t\t\t\t\tpriority: col.priority\n\t\t\t\t};\n\t\t\t} )\n\t\t\t.sort( function ( a, b ) {\n\t\t\t\tif ( a.priority !== b.priority ) {\n\t\t\t\t\treturn a.priority - b.priority;\n\t\t\t\t}\n\t\t\t\treturn a.columnIdx - b.columnIdx;\n\t\t\t} );\n\n\t\t// Class logic - determine which columns are in this breakpoint based\n\t\t// on the classes. If no class control (i.e. `auto`) then `-` is used\n\t\t// to indicate this to the rest of the function\n\t\tvar display = $.map( columns, function ( col ) {\n\t\t\treturn col.auto && col.minWidth === null ?\n\t\t\t\tfalse :\n\t\t\t\tcol.auto === true ?\n\t\t\t\t\t'-' :\n\t\t\t\t\t$.inArray( breakpoint, col.includeIn ) !== -1;\n\t\t} );\n\n\t\t// Auto column control - first pass: how much width is taken by the\n\t\t// ones that must be included from the non-auto columns\n\t\tvar requiredWidth = 0;\n\t\tfor ( i=0, ien=display.length ; i<ien ; i++ ) {\n\t\t\tif ( display[i] === true ) {\n\t\t\t\trequiredWidth += columns[i].minWidth;\n\t\t\t}\n\t\t}\n\n\t\t// Second pass, use up any remaining width for other columns. For\n\t\t// scrolling tables we need to subtract the width of the scrollbar. It\n\t\t// may not be requires which makes this sub-optimal, but it would\n\t\t// require another full redraw to make complete use of those extra few\n\t\t// pixels\n\t\tvar scrolling = dt.settings()[0].oScroll;\n\t\tvar bar = scrolling.sY || scrolling.sX ? scrolling.iBarWidth : 0;\n\t\tvar widthAvailable = dt.table().container().offsetWidth - bar;\n\t\tvar usedWidth = widthAvailable - requiredWidth;\n\n\t\t// Control column needs to always be included. This makes it sub-\n\t\t// optimal in terms of using the available with, but to stop layout\n\t\t// thrashing or overflow. Also we need to account for the control column\n\t\t// width first so we know how much width is available for the other\n\t\t// columns, since the control column might not be the first one shown\n\t\tfor ( i=0, ien=display.length ; i<ien ; i++ ) {\n\t\t\tif ( columns[i].control ) {\n\t\t\t\tusedWidth -= columns[i].minWidth;\n\t\t\t}\n\t\t}\n\n\t\t// Allow columns to be shown (counting by priority and then right to\n\t\t// left) until we run out of room\n\t\tvar empty = false;\n\t\tfor ( i=0, ien=order.length ; i<ien ; i++ ) {\n\t\t\tvar colIdx = order[i].columnIdx;\n\n\t\t\tif ( display[colIdx] === '-' && ! columns[colIdx].control && columns[colIdx].minWidth ) {\n\t\t\t\t// Once we've found a column that won't fit we don't let any\n\t\t\t\t// others display either, or columns might disappear in the\n\t\t\t\t// middle of the table\n\t\t\t\tif ( empty || usedWidth - columns[colIdx].minWidth < 0 ) {\n\t\t\t\t\tempty = true;\n\t\t\t\t\tdisplay[colIdx] = false;\n\t\t\t\t}\n\t\t\t\telse {\n\t\t\t\t\tdisplay[colIdx] = true;\n\t\t\t\t}\n\n\t\t\t\tusedWidth -= columns[colIdx].minWidth;\n\t\t\t}\n\t\t}\n\n\t\t// Determine if the 'control' column should be shown (if there is one).\n\t\t// This is the case when there is a hidden column (that is not the\n\t\t// control column). The two loops look inefficient here, but they are\n\t\t// trivial and will fly through. We need to know the outcome from the\n\t\t// first , before the action in the second can be taken\n\t\tvar showControl = false;\n\n\t\tfor ( i=0, ien=columns.length ; i<ien ; i++ ) {\n\t\t\tif ( ! columns[i].control && ! columns[i].never && ! display[i] ) {\n\t\t\t\tshowControl = true;\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\n\t\tfor ( i=0, ien=columns.length ; i<ien ; i++ ) {\n\t\t\tif ( columns[i].control ) {\n\t\t\t\tdisplay[i] = showControl;\n\t\t\t}\n\t\t}\n\n\t\t// Finally we need to make sure that there is at least one column that\n\t\t// is visible\n\t\tif ( $.inArray( true, display ) === -1 ) {\n\t\t\tdisplay[0] = true;\n\t\t}\n\n\t\treturn display;\n\t},\n\n\n\t/**\n\t * Create the internal `columns` array with information about the columns\n\t * for the table. This includes determining which breakpoints the column\n\t * will appear in, based upon class names in the column, which makes up the\n\t * vast majority of this method.\n\t *\n\t * @private\n\t */\n\t_classLogic: function ()\n\t{\n\t\tvar that = this;\n\t\tvar calc = {};\n\t\tvar breakpoints = this.c.breakpoints;\n\t\tvar dt = this.s.dt;\n\t\tvar columns = dt.columns().eq(0).map( function (i) {\n\t\t\tvar column = this.column(i);\n\t\t\tvar className = column.header().className;\n\t\t\tvar priority = dt.settings()[0].aoColumns[i].responsivePriority;\n\n\t\t\tif ( priority === undefined ) {\n\t\t\t\tvar dataPriority = $(column.header()).data('priority');\n\n\t\t\t\tpriority = dataPriority !== undefined ?\n\t\t\t\t\tdataPriority * 1 :\n\t\t\t\t\t10000;\n\t\t\t}\n\n\t\t\treturn {\n\t\t\t\tclassName: className,\n\t\t\t\tincludeIn: [],\n\t\t\t\tauto:      false,\n\t\t\t\tcontrol:   false,\n\t\t\t\tnever:     className.match(/\\bnever\\b/) ? true : false,\n\t\t\t\tpriority:  priority\n\t\t\t};\n\t\t} );\n\n\t\t// Simply add a breakpoint to `includeIn` array, ensuring that there are\n\t\t// no duplicates\n\t\tvar add = function ( colIdx, name ) {\n\t\t\tvar includeIn = columns[ colIdx ].includeIn;\n\n\t\t\tif ( $.inArray( name, includeIn ) === -1 ) {\n\t\t\t\tincludeIn.push( name );\n\t\t\t}\n\t\t};\n\n\t\tvar column = function ( colIdx, name, operator, matched ) {\n\t\t\tvar size, i, ien;\n\n\t\t\tif ( ! operator ) {\n\t\t\t\tcolumns[ colIdx ].includeIn.push( name );\n\t\t\t}\n\t\t\telse if ( operator === 'max-' ) {\n\t\t\t\t// Add this breakpoint and all smaller\n\t\t\t\tsize = that._find( name ).width;\n\n\t\t\t\tfor ( i=0, ien=breakpoints.length ; i<ien ; i++ ) {\n\t\t\t\t\tif ( breakpoints[i].width <= size ) {\n\t\t\t\t\t\tadd( colIdx, breakpoints[i].name );\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t\telse if ( operator === 'min-' ) {\n\t\t\t\t// Add this breakpoint and all larger\n\t\t\t\tsize = that._find( name ).width;\n\n\t\t\t\tfor ( i=0, ien=breakpoints.length ; i<ien ; i++ ) {\n\t\t\t\t\tif ( breakpoints[i].width >= size ) {\n\t\t\t\t\t\tadd( colIdx, breakpoints[i].name );\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t\telse if ( operator === 'not-' ) {\n\t\t\t\t// Add all but this breakpoint\n\t\t\t\tfor ( i=0, ien=breakpoints.length ; i<ien ; i++ ) {\n\t\t\t\t\tif ( breakpoints[i].name.indexOf( matched ) === -1 ) {\n\t\t\t\t\t\tadd( colIdx, breakpoints[i].name );\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\n\t\t// Loop over each column and determine if it has a responsive control\n\t\t// class\n\t\tcolumns.each( function ( col, i ) {\n\t\t\tvar classNames = col.className.split(' ');\n\t\t\tvar hasClass = false;\n\n\t\t\t// Split the class name up so multiple rules can be applied if needed\n\t\t\tfor ( var k=0, ken=classNames.length ; k<ken ; k++ ) {\n\t\t\t\tvar className = $.trim( classNames[k] );\n\n\t\t\t\tif ( className === 'all' ) {\n\t\t\t\t\t// Include in all\n\t\t\t\t\thasClass = true;\n\t\t\t\t\tcol.includeIn = $.map( breakpoints, function (a) {\n\t\t\t\t\t\treturn a.name;\n\t\t\t\t\t} );\n\t\t\t\t\treturn;\n\t\t\t\t}\n\t\t\t\telse if ( className === 'none' || col.never ) {\n\t\t\t\t\t// Include in none (default) and no auto\n\t\t\t\t\thasClass = true;\n\t\t\t\t\treturn;\n\t\t\t\t}\n\t\t\t\telse if ( className === 'control' ) {\n\t\t\t\t\t// Special column that is only visible, when one of the other\n\t\t\t\t\t// columns is hidden. This is used for the details control\n\t\t\t\t\thasClass = true;\n\t\t\t\t\tcol.control = true;\n\t\t\t\t\treturn;\n\t\t\t\t}\n\n\t\t\t\t$.each( breakpoints, function ( j, breakpoint ) {\n\t\t\t\t\t// Does this column have a class that matches this breakpoint?\n\t\t\t\t\tvar brokenPoint = breakpoint.name.split('-');\n\t\t\t\t\tvar re = new RegExp( '(min\\\\-|max\\\\-|not\\\\-)?('+brokenPoint[0]+')(\\\\-[_a-zA-Z0-9])?' );\n\t\t\t\t\tvar match = className.match( re );\n\n\t\t\t\t\tif ( match ) {\n\t\t\t\t\t\thasClass = true;\n\n\t\t\t\t\t\tif ( match[2] === brokenPoint[0] && match[3] === '-'+brokenPoint[1] ) {\n\t\t\t\t\t\t\t// Class name matches breakpoint name fully\n\t\t\t\t\t\t\tcolumn( i, breakpoint.name, match[1], match[2]+match[3] );\n\t\t\t\t\t\t}\n\t\t\t\t\t\telse if ( match[2] === brokenPoint[0] && ! match[3] ) {\n\t\t\t\t\t\t\t// Class name matched primary breakpoint name with no qualifier\n\t\t\t\t\t\t\tcolumn( i, breakpoint.name, match[1], match[2] );\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t} );\n\t\t\t}\n\n\t\t\t// If there was no control class, then automatic sizing is used\n\t\t\tif ( ! hasClass ) {\n\t\t\t\tcol.auto = true;\n\t\t\t}\n\t\t} );\n\n\t\tthis.s.columns = columns;\n\t},\n\n\n\t/**\n\t * Show the details for the child row\n\t *\n\t * @param  {DataTables.Api} row    API instance for the row\n\t * @param  {boolean}        update Update flag\n\t * @private\n\t */\n\t_detailsDisplay: function ( row, update )\n\t{\n\t\tvar that = this;\n\t\tvar dt = this.s.dt;\n\t\tvar details = this.c.details;\n\n\t\tif ( details && details.type !== false ) {\n\t\t\tvar res = details.display( row, update, function () {\n\t\t\t\treturn details.renderer(\n\t\t\t\t\tdt, row[0], that._detailsObj(row[0])\n\t\t\t\t);\n\t\t\t} );\n\n\t\t\tif ( res === true || res === false ) {\n\t\t\t\t$(dt.table().node()).triggerHandler( 'responsive-display.dt', [dt, row, res, update] );\n\t\t\t}\n\t\t}\n\t},\n\n\n\t/**\n\t * Initialisation for the details handler\n\t *\n\t * @private\n\t */\n\t_detailsInit: function ()\n\t{\n\t\tvar that    = this;\n\t\tvar dt      = this.s.dt;\n\t\tvar details = this.c.details;\n\n\t\t// The inline type always uses the first child as the target\n\t\tif ( details.type === 'inline' ) {\n\t\t\tdetails.target = 'td:first-child, th:first-child';\n\t\t}\n\n\t\t// Keyboard accessibility\n\t\tdt.on( 'draw.dtr', function () {\n\t\t\tthat._tabIndexes();\n\t\t} );\n\t\tthat._tabIndexes(); // Initial draw has already happened\n\n\t\t$( dt.table().body() ).on( 'keyup.dtr', 'td, th', function (e) {\n\t\t\tif ( e.keyCode === 13 && $(this).data('dtr-keyboard') ) {\n\t\t\t\t$(this).click();\n\t\t\t}\n\t\t} );\n\n\t\t// type.target can be a string jQuery selector or a column index\n\t\tvar target   = details.target;\n\t\tvar selector = typeof target === 'string' ? target : 'td, th';\n\n\t\t// Click handler to show / hide the details rows when they are available\n\t\t$( dt.table().body() )\n\t\t\t.on( 'click.dtr mousedown.dtr mouseup.dtr', selector, function (e) {\n\t\t\t\t// If the table is not collapsed (i.e. there is no hidden columns)\n\t\t\t\t// then take no action\n\t\t\t\tif ( ! $(dt.table().node()).hasClass('collapsed' ) ) {\n\t\t\t\t\treturn;\n\t\t\t\t}\n\n\t\t\t\t// Check that the row is actually a DataTable's controlled node\n\t\t\t\tif ( $.inArray( $(this).closest('tr').get(0), dt.rows().nodes().toArray() ) === -1 ) {\n\t\t\t\t\treturn;\n\t\t\t\t}\n\n\t\t\t\t// For column index, we determine if we should act or not in the\n\t\t\t\t// handler - otherwise it is already okay\n\t\t\t\tif ( typeof target === 'number' ) {\n\t\t\t\t\tvar targetIdx = target < 0 ?\n\t\t\t\t\t\tdt.columns().eq(0).length + target :\n\t\t\t\t\t\ttarget;\n\n\t\t\t\t\tif ( dt.cell( this ).index().column !== targetIdx ) {\n\t\t\t\t\t\treturn;\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\t// $().closest() includes itself in its check\n\t\t\t\tvar row = dt.row( $(this).closest('tr') );\n\n\t\t\t\t// Check event type to do an action\n\t\t\t\tif ( e.type === 'click' ) {\n\t\t\t\t\t// The renderer is given as a function so the caller can execute it\n\t\t\t\t\t// only when they need (i.e. if hiding there is no point is running\n\t\t\t\t\t// the renderer)\n\t\t\t\t\tthat._detailsDisplay( row, false );\n\t\t\t\t}\n\t\t\t\telse if ( e.type === 'mousedown' ) {\n\t\t\t\t\t// For mouse users, prevent the focus ring from showing\n\t\t\t\t\t$(this).css('outline', 'none');\n\t\t\t\t}\n\t\t\t\telse if ( e.type === 'mouseup' ) {\n\t\t\t\t\t// And then re-allow at the end of the click\n\t\t\t\t\t$(this).blur().css('outline', '');\n\t\t\t\t}\n\t\t\t} );\n\t},\n\n\n\t/**\n\t * Get the details to pass to a renderer for a row\n\t * @param  {int} rowIdx Row index\n\t * @private\n\t */\n\t_detailsObj: function ( rowIdx )\n\t{\n\t\tvar that = this;\n\t\tvar dt = this.s.dt;\n\n\t\treturn $.map( this.s.columns, function( col, i ) {\n\t\t\t// Never and control columns should not be passed to the renderer\n\t\t\tif ( col.never || col.control ) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\treturn {\n\t\t\t\ttitle:       dt.settings()[0].aoColumns[ i ].sTitle,\n\t\t\t\tdata:        dt.cell( rowIdx, i ).render( that.c.orthogonal ),\n\t\t\t\thidden:      dt.column( i ).visible() && !that.s.current[ i ],\n\t\t\t\tcolumnIndex: i,\n\t\t\t\trowIndex:    rowIdx\n\t\t\t};\n\t\t} );\n\t},\n\n\n\t/**\n\t * Find a breakpoint object from a name\n\t *\n\t * @param  {string} name Breakpoint name to find\n\t * @return {object}      Breakpoint description object\n\t * @private\n\t */\n\t_find: function ( name )\n\t{\n\t\tvar breakpoints = this.c.breakpoints;\n\n\t\tfor ( var i=0, ien=breakpoints.length ; i<ien ; i++ ) {\n\t\t\tif ( breakpoints[i].name === name ) {\n\t\t\t\treturn breakpoints[i];\n\t\t\t}\n\t\t}\n\t},\n\n\n\t/**\n\t * Re-create the contents of the child rows as the display has changed in\n\t * some way.\n\t *\n\t * @private\n\t */\n\t_redrawChildren: function ()\n\t{\n\t\tvar that = this;\n\t\tvar dt = this.s.dt;\n\n\t\tdt.rows( {page: 'current'} ).iterator( 'row', function ( settings, idx ) {\n\t\t\tvar row = dt.row( idx );\n\n\t\t\tthat._detailsDisplay( dt.row( idx ), true );\n\t\t} );\n\t},\n\n\n\t/**\n\t * Alter the table display for a resized viewport. This involves first\n\t * determining what breakpoint the window currently is in, getting the\n\t * column visibilities to apply and then setting them.\n\t *\n\t * @private\n\t */\n\t_resize: function ()\n\t{\n\t\tvar that = this;\n\t\tvar dt = this.s.dt;\n\t\tvar width = $(window).width();\n\t\tvar breakpoints = this.c.breakpoints;\n\t\tvar breakpoint = breakpoints[0].name;\n\t\tvar columns = this.s.columns;\n\t\tvar i, ien;\n\t\tvar oldVis = this.s.current.slice();\n\n\t\t// Determine what breakpoint we are currently at\n\t\tfor ( i=breakpoints.length-1 ; i>=0 ; i-- ) {\n\t\t\tif ( width <= breakpoints[i].width ) {\n\t\t\t\tbreakpoint = breakpoints[i].name;\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t\t\n\t\t// Show the columns for that break point\n\t\tvar columnsVis = this._columnsVisiblity( breakpoint );\n\t\tthis.s.current = columnsVis;\n\n\t\t// Set the class before the column visibility is changed so event\n\t\t// listeners know what the state is. Need to determine if there are\n\t\t// any columns that are not visible but can be shown\n\t\tvar collapsedClass = false;\n\t\tfor ( i=0, ien=columns.length ; i<ien ; i++ ) {\n\t\t\tif ( columnsVis[i] === false && ! columns[i].never && ! columns[i].control ) {\n\t\t\t\tcollapsedClass = true;\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\n\t\t$( dt.table().node() ).toggleClass( 'collapsed', collapsedClass );\n\n\t\tvar changed = false;\n\n\t\tdt.columns().eq(0).each( function ( colIdx, i ) {\n\t\t\tif ( columnsVis[i] !== oldVis[i] ) {\n\t\t\t\tchanged = true;\n\t\t\t\tthat._setColumnVis( colIdx, columnsVis[i] );\n\t\t\t}\n\t\t} );\n\n\t\tif ( changed ) {\n\t\t\tthis._redrawChildren();\n\n\t\t\t// Inform listeners of the change\n\t\t\t$(dt.table().node()).trigger( 'responsive-resize.dt', [dt, this.s.current] );\n\t\t}\n\t},\n\n\n\t/**\n\t * Determine the width of each column in the table so the auto column hiding\n\t * has that information to work with. This method is never going to be 100%\n\t * perfect since column widths can change slightly per page, but without\n\t * seriously compromising performance this is quite effective.\n\t *\n\t * @private\n\t */\n\t_resizeAuto: function ()\n\t{\n\t\tvar dt = this.s.dt;\n\t\tvar columns = this.s.columns;\n\n\t\t// Are we allowed to do auto sizing?\n\t\tif ( ! this.c.auto ) {\n\t\t\treturn;\n\t\t}\n\n\t\t// Are there any columns that actually need auto-sizing, or do they all\n\t\t// have classes defined\n\t\tif ( $.inArray( true, $.map( columns, function (c) { return c.auto; } ) ) === -1 ) {\n\t\t\treturn;\n\t\t}\n\n\t\t// Clone the table with the current data in it\n\t\tvar tableWidth   = dt.table().node().offsetWidth;\n\t\tvar columnWidths = dt.columns;\n\t\tvar clonedTable  = dt.table().node().cloneNode( false );\n\t\tvar clonedHeader = $( dt.table().header().cloneNode( false ) ).appendTo( clonedTable );\n\t\tvar clonedBody   = $( dt.table().body() ).clone( false, false ).empty().appendTo( clonedTable ); // use jQuery because of IE8\n\n\t\t// Header\n\t\tvar headerCells = dt.columns()\n\t\t\t.header()\n\t\t\t.filter( function (idx) {\n\t\t\t\treturn dt.column(idx).visible();\n\t\t\t} )\n\t\t\t.to$()\n\t\t\t.clone( false )\n\t\t\t.css( 'display', 'table-cell' );\n\n\t\t// Body rows - we don't need to take account of DataTables' column\n\t\t// visibility since we implement our own here (hence the `display` set)\n\t\t$(clonedBody)\n\t\t\t.append( $(dt.rows( { page: 'current' } ).nodes()).clone( false ) )\n\t\t\t.find( 'th, td' ).css( 'display', '' );\n\n\t\t// Footer\n\t\tvar footer = dt.table().footer();\n\t\tif ( footer ) {\n\t\t\tvar clonedFooter = $( footer.cloneNode( false ) ).appendTo( clonedTable );\n\t\t\tvar footerCells = dt.columns()\n\t\t\t\t.footer()\n\t\t\t\t.filter( function (idx) {\n\t\t\t\t\treturn dt.column(idx).visible();\n\t\t\t\t} )\n\t\t\t\t.to$()\n\t\t\t\t.clone( false )\n\t\t\t\t.css( 'display', 'table-cell' );\n\n\t\t\t$('<tr/>')\n\t\t\t\t.append( footerCells )\n\t\t\t\t.appendTo( clonedFooter );\n\t\t}\n\n\t\t$('<tr/>')\n\t\t\t.append( headerCells )\n\t\t\t.appendTo( clonedHeader );\n\n\t\t// In the inline case extra padding is applied to the first column to\n\t\t// give space for the show / hide icon. We need to use this in the\n\t\t// calculation\n\t\tif ( this.c.details.type === 'inline' ) {\n\t\t\t$(clonedTable).addClass( 'dtr-inline collapsed' );\n\t\t}\n\t\t\n\t\t// It is unsafe to insert elements with the same name into the DOM\n\t\t// multiple times. For example, cloning and inserting a checked radio\n\t\t// clears the chcecked state of the original radio.\n\t\t$( clonedTable ).find( '[name]' ).removeAttr( 'name' );\n\t\t\n\t\tvar inserted = $('<div/>')\n\t\t\t.css( {\n\t\t\t\twidth: 1,\n\t\t\t\theight: 1,\n\t\t\t\toverflow: 'hidden'\n\t\t\t} )\n\t\t\t.append( clonedTable );\n\n\t\tinserted.insertBefore( dt.table().node() );\n\n\t\t// The cloned header now contains the smallest that each column can be\n\t\theaderCells.each( function (i) {\n\t\t\tvar idx = dt.column.index( 'fromVisible', i );\n\t\t\tcolumns[ idx ].minWidth =  this.offsetWidth || 0;\n\t\t} );\n\n\t\tinserted.remove();\n\t},\n\n\t/**\n\t * Set a column's visibility.\n\t *\n\t * We don't use DataTables' column visibility controls in order to ensure\n\t * that column visibility can Responsive can no-exist. Since only IE8+ is\n\t * supported (and all evergreen browsers of course) the control of the\n\t * display attribute works well.\n\t *\n\t * @param {integer} col      Column index\n\t * @param {boolean} showHide Show or hide (true or false)\n\t * @private\n\t */\n\t_setColumnVis: function ( col, showHide )\n\t{\n\t\tvar dt = this.s.dt;\n\t\tvar display = showHide ? '' : 'none'; // empty string will remove the attr\n\n\t\t$( dt.column( col ).header() ).css( 'display', display );\n\t\t$( dt.column( col ).footer() ).css( 'display', display );\n\t\tdt.column( col ).nodes().to$().css( 'display', display );\n\t},\n\n\n\t/**\n\t * Update the cell tab indexes for keyboard accessibility. This is called on\n\t * every table draw - that is potentially inefficient, but also the least\n\t * complex option given that column visibility can change on the fly. Its a\n\t * shame user-focus was removed from CSS 3 UI, as it would have solved this\n\t * issue with a single CSS statement.\n\t *\n\t * @private\n\t */\n\t_tabIndexes: function ()\n\t{\n\t\tvar dt = this.s.dt;\n\t\tvar cells = dt.cells( { page: 'current' } ).nodes().to$();\n\t\tvar ctx = dt.settings()[0];\n\t\tvar target = this.c.details.target;\n\n\t\tcells.filter( '[data-dtr-keyboard]' ).removeData( '[data-dtr-keyboard]' );\n\n\t\tvar selector = typeof target === 'number' ?\n\t\t\t':eq('+target+')' :\n\t\t\ttarget;\n\n\t\t// This is a bit of a hack - we need to limit the selected nodes to just\n\t\t// those of this table\n\t\tif ( selector === 'td:first-child, th:first-child' ) {\n\t\t\tselector = '>td:first-child, >th:first-child';\n\t\t}\n\n\t\t$( selector, dt.rows( { page: 'current' } ).nodes() )\n\t\t\t.attr( 'tabIndex', ctx.iTabIndex )\n\t\t\t.data( 'dtr-keyboard', 1 );\n\t}\n} );\n\n\n/**\n * List of default breakpoints. Each item in the array is an object with two\n * properties:\n *\n * * `name` - the breakpoint name.\n * * `width` - the breakpoint width\n *\n * @name Responsive.breakpoints\n * @static\n */\nResponsive.breakpoints = [\n\t{ name: 'desktop',  width: Infinity },\n\t{ name: 'tablet-l', width: 1024 },\n\t{ name: 'tablet-p', width: 768 },\n\t{ name: 'mobile-l', width: 480 },\n\t{ name: 'mobile-p', width: 320 }\n];\n\n\n/**\n * Display methods - functions which define how the hidden data should be shown\n * in the table.\n *\n * @namespace\n * @name Responsive.defaults\n * @static\n */\nResponsive.display = {\n\tchildRow: function ( row, update, render ) {\n\t\tif ( update ) {\n\t\t\tif ( $(row.node()).hasClass('parent') ) {\n\t\t\t\trow.child( render(), 'child' ).show();\n\n\t\t\t\treturn true;\n\t\t\t}\n\t\t}\n\t\telse {\n\t\t\tif ( ! row.child.isShown()  ) {\n\t\t\t\trow.child( render(), 'child' ).show();\n\t\t\t\t$( row.node() ).addClass( 'parent' );\n\n\t\t\t\treturn true;\n\t\t\t}\n\t\t\telse {\n\t\t\t\trow.child( false );\n\t\t\t\t$( row.node() ).removeClass( 'parent' );\n\n\t\t\t\treturn false;\n\t\t\t}\n\t\t}\n\t},\n\n\tchildRowImmediate: function ( row, update, render ) {\n\t\tif ( (! update && row.child.isShown()) || ! row.responsive.hasHidden() ) {\n\t\t\t// User interaction and the row is show, or nothing to show\n\t\t\trow.child( false );\n\t\t\t$( row.node() ).removeClass( 'parent' );\n\n\t\t\treturn false;\n\t\t}\n\t\telse {\n\t\t\t// Display\n\t\t\trow.child( render(), 'child' ).show();\n\t\t\t$( row.node() ).addClass( 'parent' );\n\n\t\t\treturn true;\n\t\t}\n\t},\n\n\t// This is a wrapper so the modal options for Bootstrap and jQuery UI can\n\t// have options passed into them. This specific one doesn't need to be a\n\t// function but it is for consistency in the `modal` name\n\tmodal: function ( options ) {\n\t\treturn function ( row, update, render ) {\n\t\t\tif ( ! update ) {\n\t\t\t\t// Show a modal\n\t\t\t\tvar close = function () {\n\t\t\t\t\tmodal.remove(); // will tidy events for us\n\t\t\t\t\t$(document).off( 'keypress.dtr' );\n\t\t\t\t};\n\n\t\t\t\tvar modal = $('<div class=\"dtr-modal\"/>')\n\t\t\t\t\t.append( $('<div class=\"dtr-modal-display\"/>')\n\t\t\t\t\t\t.append( $('<div class=\"dtr-modal-content\"/>')\n\t\t\t\t\t\t\t.append( render() )\n\t\t\t\t\t\t)\n\t\t\t\t\t\t.append( $('<div class=\"dtr-modal-close\">&times;</div>' )\n\t\t\t\t\t\t\t.click( function () {\n\t\t\t\t\t\t\t\tclose();\n\t\t\t\t\t\t\t} )\n\t\t\t\t\t\t)\n\t\t\t\t\t)\n\t\t\t\t\t.append( $('<div class=\"dtr-modal-background\"/>')\n\t\t\t\t\t\t.click( function () {\n\t\t\t\t\t\t\tclose();\n\t\t\t\t\t\t} )\n\t\t\t\t\t)\n\t\t\t\t\t.appendTo( 'body' );\n\n\t\t\t\t$(document).on( 'keyup.dtr', function (e) {\n\t\t\t\t\tif ( e.keyCode === 27 ) {\n\t\t\t\t\t\te.stopPropagation();\n\n\t\t\t\t\t\tclose();\n\t\t\t\t\t}\n\t\t\t\t} );\n\t\t\t}\n\t\t\telse {\n\t\t\t\t$('div.dtr-modal-content')\n\t\t\t\t\t.empty()\n\t\t\t\t\t.append( render() );\n\t\t\t}\n\n\t\t\tif ( options && options.header ) {\n\t\t\t\t$('div.dtr-modal-content').prepend(\n\t\t\t\t\t'<h2>'+options.header( row )+'</h2>'\n\t\t\t\t);\n\t\t\t}\n\t\t};\n\t}\n};\n\n\n/**\n * Display methods - functions which define how the hidden data should be shown\n * in the table.\n *\n * @namespace\n * @name Responsive.defaults\n * @static\n */\nResponsive.renderer = {\n\tlistHidden: function () {\n\t\treturn function ( api, rowIdx, columns ) {\n\t\t\tvar data = $.map( columns, function ( col ) {\n\t\t\t\treturn col.hidden ?\n\t\t\t\t\t'<li data-dtr-index=\"'+col.columnIndex+'\" data-dt-row=\"'+col.rowIndex+'\" data-dt-column=\"'+col.columnIndex+'\">'+\n\t\t\t\t\t\t'<span class=\"dtr-title\">'+\n\t\t\t\t\t\t\tcol.title+\n\t\t\t\t\t\t'</span> '+\n\t\t\t\t\t\t'<span class=\"dtr-data\">'+\n\t\t\t\t\t\t\tcol.data+\n\t\t\t\t\t\t'</span>'+\n\t\t\t\t\t'</li>' :\n\t\t\t\t\t'';\n\t\t\t} ).join('');\n\n\t\t\treturn data ?\n\t\t\t\t$('<ul data-dtr-index=\"'+rowIdx+'\" class=\"dtr-details\"/>').append( data ) :\n\t\t\t\tfalse;\n\t\t}\n\t},\n\n\ttableAll: function ( options ) {\n\t\toptions = $.extend( {\n\t\t\ttableClass: ''\n\t\t}, options );\n\n\t\treturn function ( api, rowIdx, columns ) {\n\t\t\tvar data = $.map( columns, function ( col ) {\n\t\t\t\treturn '<tr data-dt-row=\"'+col.rowIndex+'\" data-dt-column=\"'+col.columnIndex+'\">'+\n\t\t\t\t\t\t'<td>'+col.title+':'+'</td> '+\n\t\t\t\t\t\t'<td>'+col.data+'</td>'+\n\t\t\t\t\t'</tr>';\n\t\t\t} ).join('');\n\n\t\t\treturn $('<table class=\"'+options.tableClass+' dtr-details\" width=\"100%\"/>').append( data );\n\t\t}\n\t}\n};\n\n/**\n * Responsive default settings for initialisation\n *\n * @namespace\n * @name Responsive.defaults\n * @static\n */\nResponsive.defaults = {\n\t/**\n\t * List of breakpoints for the instance. Note that this means that each\n\t * instance can have its own breakpoints. Additionally, the breakpoints\n\t * cannot be changed once an instance has been creased.\n\t *\n\t * @type {Array}\n\t * @default Takes the value of `Responsive.breakpoints`\n\t */\n\tbreakpoints: Responsive.breakpoints,\n\n\t/**\n\t * Enable / disable auto hiding calculations. It can help to increase\n\t * performance slightly if you disable this option, but all columns would\n\t * need to have breakpoint classes assigned to them\n\t *\n\t * @type {Boolean}\n\t * @default  `true`\n\t */\n\tauto: true,\n\n\t/**\n\t * Details control. If given as a string value, the `type` property of the\n\t * default object is set to that value, and the defaults used for the rest\n\t * of the object - this is for ease of implementation.\n\t *\n\t * The object consists of the following properties:\n\t *\n\t * * `display` - A function that is used to show and hide the hidden details\n\t * * `renderer` - function that is called for display of the child row data.\n\t *   The default function will show the data from the hidden columns\n\t * * `target` - Used as the selector for what objects to attach the child\n\t *   open / close to\n\t * * `type` - `false` to disable the details display, `inline` or `column`\n\t *   for the two control types\n\t *\n\t * @type {Object|string}\n\t */\n\tdetails: {\n\t\tdisplay: Responsive.display.childRow,\n\n\t\trenderer: Responsive.renderer.listHidden(),\n\n\t\ttarget: 0,\n\n\t\ttype: 'inline'\n\t},\n\n\t/**\n\t * Orthogonal data request option. This is used to define the data type\n\t * requested when Responsive gets the data to show in the child row.\n\t *\n\t * @type {String}\n\t */\n\torthogonal: 'display'\n};\n\n\n/*\n * API\n */\nvar Api = $.fn.dataTable.Api;\n\n// Doesn't do anything - work around for a bug in DT... Not documented\nApi.register( 'responsive()', function () {\n\treturn this;\n} );\n\nApi.register( 'responsive.index()', function ( li ) {\n\tli = $(li);\n\n\treturn {\n\t\tcolumn: li.data('dtr-index'),\n\t\trow:    li.parent().data('dtr-index')\n\t};\n} );\n\nApi.register( 'responsive.rebuild()', function () {\n\treturn this.iterator( 'table', function ( ctx ) {\n\t\tif ( ctx._responsive ) {\n\t\t\tctx._responsive._classLogic();\n\t\t}\n\t} );\n} );\n\nApi.register( 'responsive.recalc()', function () {\n\treturn this.iterator( 'table', function ( ctx ) {\n\t\tif ( ctx._responsive ) {\n\t\t\tctx._responsive._resizeAuto();\n\t\t\tctx._responsive._resize();\n\t\t}\n\t} );\n} );\n\nApi.register( 'responsive.hasHidden()', function () {\n\tvar ctx = this.context[0];\n\n\treturn ctx._responsive ?\n\t\t$.inArray( false, ctx._responsive.s.current ) !== -1 :\n\t\tfalse;\n} );\n\n\n/**\n * Version information\n *\n * @name Responsive.version\n * @static\n */\nResponsive.version = '2.1.1';\n\n\n$.fn.dataTable.Responsive = Responsive;\n$.fn.DataTable.Responsive = Responsive;\n\n// Attach a listener to the document which listens for DataTables initialisation\n// events so we can automatically initialise\n$(document).on( 'preInit.dt.dtr', function (e, settings, json) {\n\tif ( e.namespace !== 'dt' ) {\n\t\treturn;\n\t}\n\n\tif ( $(settings.nTable).hasClass( 'responsive' ) ||\n\t\t $(settings.nTable).hasClass( 'dt-responsive' ) ||\n\t\t settings.oInit.responsive ||\n\t\t DataTable.defaults.responsive\n\t) {\n\t\tvar init = settings.oInit.responsive;\n\n\t\tif ( init !== false ) {\n\t\t\tnew Responsive( settings, $.isPlainObject( init ) ? init : {}  );\n\t\t}\n\t}\n} );\n\n\nreturn Responsive;\n}));\n"

/***/ }),

/***/ 263:
/***/ (function(module, exports) {

module.exports = "/*! Scroller 1.4.2\n * ©2011-2016 SpryMedia Ltd - datatables.net/license\n */\n\n/**\n * @summary     Scroller\n * @description Virtual rendering for DataTables\n * @version     1.4.2\n * @file        dataTables.scroller.js\n * @author      SpryMedia Ltd (www.sprymedia.co.uk)\n * @contact     www.sprymedia.co.uk/contact\n * @copyright   Copyright 2011-2016 SpryMedia Ltd.\n *\n * This source file is free software, available under the following license:\n *   MIT license - http://datatables.net/license/mit\n *\n * This source file is distributed in the hope that it will be useful, but\n * WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY\n * or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details.\n *\n * For details please refer to: http://www.datatables.net\n */\n\n(function( factory ){\n\tif ( typeof define === 'function' && define.amd ) {\n\t\t// AMD\n\t\tdefine( ['jquery', 'datatables.net'], function ( $ ) {\n\t\t\treturn factory( $, window, document );\n\t\t} );\n\t}\n\telse if ( typeof exports === 'object' ) {\n\t\t// CommonJS\n\t\tmodule.exports = function (root, $) {\n\t\t\tif ( ! root ) {\n\t\t\t\troot = window;\n\t\t\t}\n\n\t\t\tif ( ! $ || ! $.fn.dataTable ) {\n\t\t\t\t$ = require('datatables.net')(root, $).$;\n\t\t\t}\n\n\t\t\treturn factory( $, root, root.document );\n\t\t};\n\t}\n\telse {\n\t\t// Browser\n\t\tfactory( jQuery, window, document );\n\t}\n}(function( $, window, document, undefined ) {\n'use strict';\nvar DataTable = $.fn.dataTable;\n\n\n/**\n * Scroller is a virtual rendering plug-in for DataTables which allows large\n * datasets to be drawn on screen every quickly. What the virtual rendering means\n * is that only the visible portion of the table (and a bit to either side to make\n * the scrolling smooth) is drawn, while the scrolling container gives the\n * visual impression that the whole table is visible. This is done by making use\n * of the pagination abilities of DataTables and moving the table around in the\n * scrolling container DataTables adds to the page. The scrolling container is\n * forced to the height it would be for the full table display using an extra\n * element.\n *\n * Note that rows in the table MUST all be the same height. Information in a cell\n * which expands on to multiple lines will cause some odd behaviour in the scrolling.\n *\n * Scroller is initialised by simply including the letter 'S' in the sDom for the\n * table you want to have this feature enabled on. Note that the 'S' must come\n * AFTER the 't' parameter in `dom`.\n *\n * Key features include:\n *   <ul class=\"limit_length\">\n *     <li>Speed! The aim of Scroller for DataTables is to make rendering large data sets fast</li>\n *     <li>Full compatibility with deferred rendering in DataTables for maximum speed</li>\n *     <li>Display millions of rows</li>\n *     <li>Integration with state saving in DataTables (scrolling position is saved)</li>\n *     <li>Easy to use</li>\n *   </ul>\n *\n *  @class\n *  @constructor\n *  @global\n *  @param {object} dt DataTables settings object or API instance\n *  @param {object} [opts={}] Configuration object for FixedColumns. Options \n *    are defined by {@link Scroller.defaults}\n *\n *  @requires jQuery 1.7+\n *  @requires DataTables 1.10.0+\n *\n *  @example\n *    $(document).ready(function() {\n *        $('#example').DataTable( {\n *            \"scrollY\": \"200px\",\n *            \"ajax\": \"media/dataset/large.txt\",\n *            \"dom\": \"frtiS\",\n *            \"deferRender\": true\n *        } );\n *    } );\n */\nvar Scroller = function ( dt, opts ) {\n\t/* Sanity check - you just know it will happen */\n\tif ( ! (this instanceof Scroller) ) {\n\t\talert( \"Scroller warning: Scroller must be initialised with the 'new' keyword.\" );\n\t\treturn;\n\t}\n\n\tif ( opts === undefined ) {\n\t\topts = {};\n\t}\n\n\t/**\n\t * Settings object which contains customisable information for the Scroller instance\n\t * @namespace\n\t * @private\n\t * @extends Scroller.defaults\n\t */\n\tthis.s = {\n\t\t/**\n\t\t * DataTables settings object\n\t\t *  @type     object\n\t\t *  @default  Passed in as first parameter to constructor\n\t\t */\n\t\t\"dt\": $.fn.dataTable.Api( dt ).settings()[0],\n\n\t\t/**\n\t\t * Pixel location of the top of the drawn table in the viewport\n\t\t *  @type     int\n\t\t *  @default  0\n\t\t */\n\t\t\"tableTop\": 0,\n\n\t\t/**\n\t\t * Pixel location of the bottom of the drawn table in the viewport\n\t\t *  @type     int\n\t\t *  @default  0\n\t\t */\n\t\t\"tableBottom\": 0,\n\n\t\t/**\n\t\t * Pixel location of the boundary for when the next data set should be loaded and drawn\n\t\t * when scrolling up the way.\n\t\t *  @type     int\n\t\t *  @default  0\n\t\t *  @private\n\t\t */\n\t\t\"redrawTop\": 0,\n\n\t\t/**\n\t\t * Pixel location of the boundary for when the next data set should be loaded and drawn\n\t\t * when scrolling down the way. Note that this is actually calculated as the offset from\n\t\t * the top.\n\t\t *  @type     int\n\t\t *  @default  0\n\t\t *  @private\n\t\t */\n\t\t\"redrawBottom\": 0,\n\n\t\t/**\n\t\t * Auto row height or not indicator\n\t\t *  @type     bool\n\t\t *  @default  0\n\t\t */\n\t\t\"autoHeight\": true,\n\n\t\t/**\n\t\t * Number of rows calculated as visible in the visible viewport\n\t\t *  @type     int\n\t\t *  @default  0\n\t\t */\n\t\t\"viewportRows\": 0,\n\n\t\t/**\n\t\t * setTimeout reference for state saving, used when state saving is enabled in the DataTable\n\t\t * and when the user scrolls the viewport in order to stop the cookie set taking too much\n\t\t * CPU!\n\t\t *  @type     int\n\t\t *  @default  0\n\t\t */\n\t\t\"stateTO\": null,\n\n\t\t/**\n\t\t * setTimeout reference for the redraw, used when server-side processing is enabled in the\n\t\t * DataTables in order to prevent DoSing the server\n\t\t *  @type     int\n\t\t *  @default  null\n\t\t */\n\t\t\"drawTO\": null,\n\n\t\theights: {\n\t\t\tjump: null,\n\t\t\tpage: null,\n\t\t\tvirtual: null,\n\t\t\tscroll: null,\n\n\t\t\t/**\n\t\t\t * Height of rows in the table\n\t\t\t *  @type     int\n\t\t\t *  @default  0\n\t\t\t */\n\t\t\trow: null,\n\n\t\t\t/**\n\t\t\t * Pixel height of the viewport\n\t\t\t *  @type     int\n\t\t\t *  @default  0\n\t\t\t */\n\t\t\tviewport: null\n\t\t},\n\n\t\ttopRowFloat: 0,\n\t\tscrollDrawDiff: null,\n\t\tloaderVisible: false\n\t};\n\n\t// @todo The defaults should extend a `c` property and the internal settings\n\t// only held in the `s` property. At the moment they are mixed\n\tthis.s = $.extend( this.s, Scroller.oDefaults, opts );\n\n\t// Workaround for row height being read from height object (see above comment)\n\tthis.s.heights.row = this.s.rowHeight;\n\n\t/**\n\t * DOM elements used by the class instance\n\t * @private\n\t * @namespace\n\t *\n\t */\n\tthis.dom = {\n\t\t\"force\":    document.createElement('div'),\n\t\t\"scroller\": null,\n\t\t\"table\":    null,\n\t\t\"loader\":   null\n\t};\n\n\t// Attach the instance to the DataTables instance so it can be accessed in\n\t// future. Don't initialise Scroller twice on the same table\n\tif ( this.s.dt.oScroller ) {\n\t\treturn;\n\t}\n\n\tthis.s.dt.oScroller = this;\n\n\t/* Let's do it */\n\tthis._fnConstruct();\n};\n\n\n\n$.extend( Scroller.prototype, {\n\t/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\n\t * Public methods\n\t * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */\n\n\t/**\n\t * Calculate the pixel position from the top of the scrolling container for\n\t * a given row\n\t *  @param {int} iRow Row number to calculate the position of\n\t *  @returns {int} Pixels\n\t *  @example\n\t *    $(document).ready(function() {\n\t *      $('#example').dataTable( {\n\t *        \"sScrollY\": \"200px\",\n\t *        \"sAjaxSource\": \"media/dataset/large.txt\",\n\t *        \"sDom\": \"frtiS\",\n\t *        \"bDeferRender\": true,\n\t *        \"fnInitComplete\": function (o) {\n\t *          // Find where row 25 is\n\t *          alert( o.oScroller.fnRowToPixels( 25 ) );\n\t *        }\n\t *      } );\n\t *    } );\n\t */\n\t\"fnRowToPixels\": function ( rowIdx, intParse, virtual )\n\t{\n\t\tvar pixels;\n\n\t\tif ( virtual ) {\n\t\t\tpixels = this._domain( 'virtualToPhysical', rowIdx * this.s.heights.row );\n\t\t}\n\t\telse {\n\t\t\tvar diff = rowIdx - this.s.baseRowTop;\n\t\t\tpixels = this.s.baseScrollTop + (diff * this.s.heights.row);\n\t\t}\n\n\t\treturn intParse || intParse === undefined ?\n\t\t\tparseInt( pixels, 10 ) :\n\t\t\tpixels;\n\t},\n\n\n\t/**\n\t * Calculate the row number that will be found at the given pixel position\n\t * (y-scroll).\n\t *\n\t * Please note that when the height of the full table exceeds 1 million\n\t * pixels, Scroller switches into a non-linear mode for the scrollbar to fit\n\t * all of the records into a finite area, but this function returns a linear\n\t * value (relative to the last non-linear positioning).\n\t *  @param {int} iPixels Offset from top to calculate the row number of\n\t *  @param {int} [intParse=true] If an integer value should be returned\n\t *  @param {int} [virtual=false] Perform the calculations in the virtual domain\n\t *  @returns {int} Row index\n\t *  @example\n\t *    $(document).ready(function() {\n\t *      $('#example').dataTable( {\n\t *        \"sScrollY\": \"200px\",\n\t *        \"sAjaxSource\": \"media/dataset/large.txt\",\n\t *        \"sDom\": \"frtiS\",\n\t *        \"bDeferRender\": true,\n\t *        \"fnInitComplete\": function (o) {\n\t *          // Find what row number is at 500px\n\t *          alert( o.oScroller.fnPixelsToRow( 500 ) );\n\t *        }\n\t *      } );\n\t *    } );\n\t */\n\t\"fnPixelsToRow\": function ( pixels, intParse, virtual )\n\t{\n\t\tvar diff = pixels - this.s.baseScrollTop;\n\t\tvar row = virtual ?\n\t\t\tthis._domain( 'physicalToVirtual', pixels ) / this.s.heights.row :\n\t\t\t( diff / this.s.heights.row ) + this.s.baseRowTop;\n\n\t\treturn intParse || intParse === undefined ?\n\t\t\tparseInt( row, 10 ) :\n\t\t\trow;\n\t},\n\n\n\t/**\n\t * Calculate the row number that will be found at the given pixel position (y-scroll)\n\t *  @param {int} iRow Row index to scroll to\n\t *  @param {bool} [bAnimate=true] Animate the transition or not\n\t *  @returns {void}\n\t *  @example\n\t *    $(document).ready(function() {\n\t *      $('#example').dataTable( {\n\t *        \"sScrollY\": \"200px\",\n\t *        \"sAjaxSource\": \"media/dataset/large.txt\",\n\t *        \"sDom\": \"frtiS\",\n\t *        \"bDeferRender\": true,\n\t *        \"fnInitComplete\": function (o) {\n\t *          // Immediately scroll to row 1000\n\t *          o.oScroller.fnScrollToRow( 1000 );\n\t *        }\n\t *      } );\n\t *     \n\t *      // Sometime later on use the following to scroll to row 500...\n\t *          var oSettings = $('#example').dataTable().fnSettings();\n\t *      oSettings.oScroller.fnScrollToRow( 500 );\n\t *    } );\n\t */\n\t\"fnScrollToRow\": function ( iRow, bAnimate )\n\t{\n\t\tvar that = this;\n\t\tvar ani = false;\n\t\tvar px = this.fnRowToPixels( iRow );\n\n\t\t// We need to know if the table will redraw or not before doing the\n\t\t// scroll. If it will not redraw, then we need to use the currently\n\t\t// displayed table, and scroll with the physical pixels. Otherwise, we\n\t\t// need to calculate the table's new position from the virtual\n\t\t// transform.\n\t\tvar preRows = ((this.s.displayBuffer-1)/2) * this.s.viewportRows;\n\t\tvar drawRow = iRow - preRows;\n\t\tif ( drawRow < 0 ) {\n\t\t\tdrawRow = 0;\n\t\t}\n\n\t\tif ( (px > this.s.redrawBottom || px < this.s.redrawTop) && this.s.dt._iDisplayStart !== drawRow ) {\n\t\t\tani = true;\n\t\t\tpx = this.fnRowToPixels( iRow, false, true );\n\t\t}\n\n\t\tif ( typeof bAnimate == 'undefined' || bAnimate )\n\t\t{\n\t\t\tthis.s.ani = ani;\n\t\t\t$(this.dom.scroller).animate( {\n\t\t\t\t\"scrollTop\": px\n\t\t\t}, function () {\n\t\t\t\t// This needs to happen after the animation has completed and\n\t\t\t\t// the final scroll event fired\n\t\t\t\tsetTimeout( function () {\n\t\t\t\t\tthat.s.ani = false;\n\t\t\t\t}, 25 );\n\t\t\t} );\n\t\t}\n\t\telse\n\t\t{\n\t\t\t$(this.dom.scroller).scrollTop( px );\n\t\t}\n\t},\n\n\n\t/**\n\t * Calculate and store information about how many rows are to be displayed\n\t * in the scrolling viewport, based on current dimensions in the browser's\n\t * rendering. This can be particularly useful if the table is initially\n\t * drawn in a hidden element - for example in a tab.\n\t *  @param {bool} [bRedraw=true] Redraw the table automatically after the recalculation, with\n\t *    the new dimensions forming the basis for the draw.\n\t *  @returns {void}\n\t *  @example\n\t *    $(document).ready(function() {\n\t *      // Make the example container hidden to throw off the browser's sizing\n\t *      document.getElementById('container').style.display = \"none\";\n\t *      var oTable = $('#example').dataTable( {\n\t *        \"sScrollY\": \"200px\",\n\t *        \"sAjaxSource\": \"media/dataset/large.txt\",\n\t *        \"sDom\": \"frtiS\",\n\t *        \"bDeferRender\": true,\n\t *        \"fnInitComplete\": function (o) {\n\t *          // Immediately scroll to row 1000\n\t *          o.oScroller.fnScrollToRow( 1000 );\n\t *        }\n\t *      } );\n\t *     \n\t *      setTimeout( function () {\n\t *        // Make the example container visible and recalculate the scroller sizes\n\t *        document.getElementById('container').style.display = \"block\";\n\t *        oTable.fnSettings().oScroller.fnMeasure();\n\t *      }, 3000 );\n\t */\n\t\"fnMeasure\": function ( bRedraw )\n\t{\n\t\tif ( this.s.autoHeight )\n\t\t{\n\t\t\tthis._fnCalcRowHeight();\n\t\t}\n\n\t\tvar heights = this.s.heights;\n\n\t\tif ( heights.row ) {\n\t\t\theights.viewport = $(this.dom.scroller).height();\n\t\t\tthis.s.viewportRows = parseInt( heights.viewport / heights.row, 10 )+1;\n\t\t\tthis.s.dt._iDisplayLength = this.s.viewportRows * this.s.displayBuffer;\n\t\t}\n\n\t\tif ( bRedraw === undefined || bRedraw )\n\t\t{\n\t\t\tthis.s.dt.oInstance.fnDraw( false );\n\t\t}\n\t},\n\n\n\t/**\n\t * Get information about current displayed record range. This corresponds to\n\t * the information usually displayed in the \"Info\" block of the table.\n\t *\n\t * @returns {object} info as an object:\n\t *  {\n\t *      start: {int}, // the 0-indexed record at the top of the viewport\n\t *      end:   {int}, // the 0-indexed record at the bottom of the viewport\n\t *  }\n\t*/\n\t\"fnPageInfo\": function()\n\t{\n\t\tvar \n\t\t\tdt = this.s.dt,\n\t\t\tiScrollTop = this.dom.scroller.scrollTop,\n\t\t\tiTotal = dt.fnRecordsDisplay(),\n\t\t\tiPossibleEnd = Math.ceil(this.fnPixelsToRow(iScrollTop + this.s.heights.viewport, false, this.s.ani));\n\n\t\treturn {\n\t\t\tstart: Math.floor(this.fnPixelsToRow(iScrollTop, false, this.s.ani)),\n\t\t\tend: iTotal < iPossibleEnd ? iTotal-1 : iPossibleEnd-1\n\t\t};\n\t},\n\n\n\t/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\n\t * Private methods (they are of course public in JS, but recommended as private)\n\t * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */\n\n\t/**\n\t * Initialisation for Scroller\n\t *  @returns {void}\n\t *  @private\n\t */\n\t\"_fnConstruct\": function ()\n\t{\n\t\tvar that = this;\n\n\t\t/* Sanity check */\n\t\tif ( !this.s.dt.oFeatures.bPaginate ) {\n\t\t\tthis.s.dt.oApi._fnLog( this.s.dt, 0, 'Pagination must be enabled for Scroller' );\n\t\t\treturn;\n\t\t}\n\n\t\t/* Insert a div element that we can use to force the DT scrolling container to\n\t\t * the height that would be required if the whole table was being displayed\n\t\t */\n\t\tthis.dom.force.style.position = \"relative\";\n\t\tthis.dom.force.style.top = \"0px\";\n\t\tthis.dom.force.style.left = \"0px\";\n\t\tthis.dom.force.style.width = \"1px\";\n\n\t\tthis.dom.scroller = $('div.'+this.s.dt.oClasses.sScrollBody, this.s.dt.nTableWrapper)[0];\n\t\tthis.dom.scroller.appendChild( this.dom.force );\n\t\tthis.dom.scroller.style.position = \"relative\";\n\n\t\tthis.dom.table = $('>table', this.dom.scroller)[0];\n\t\tthis.dom.table.style.position = \"absolute\";\n\t\tthis.dom.table.style.top = \"0px\";\n\t\tthis.dom.table.style.left = \"0px\";\n\n\t\t// Add class to 'announce' that we are a Scroller table\n\t\t$(this.s.dt.nTableWrapper).addClass('DTS');\n\n\t\t// Add a 'loading' indicator\n\t\tif ( this.s.loadingIndicator )\n\t\t{\n\t\t\tthis.dom.loader = $('<div class=\"dataTables_processing DTS_Loading\">'+this.s.dt.oLanguage.sLoadingRecords+'</div>')\n\t\t\t\t.css('display', 'none');\n\n\t\t\t$(this.dom.scroller.parentNode)\n\t\t\t\t.css('position', 'relative')\n\t\t\t\t.append( this.dom.loader );\n\t\t}\n\n\t\t/* Initial size calculations */\n\t\tif ( this.s.heights.row && this.s.heights.row != 'auto' )\n\t\t{\n\t\t\tthis.s.autoHeight = false;\n\t\t}\n\t\tthis.fnMeasure( false );\n\n\t\t/* Scrolling callback to see if a page change is needed - use a throttled\n\t\t * function for the save save callback so we aren't hitting it on every\n\t\t * scroll\n\t\t */\n\t\tthis.s.ingnoreScroll = true;\n\t\tthis.s.stateSaveThrottle = this.s.dt.oApi._fnThrottle( function () {\n\t\t\tthat.s.dt.oApi._fnSaveState( that.s.dt );\n\t\t}, 500 );\n\t\t$(this.dom.scroller).on( 'scroll.DTS', function (e) {\n\t\t\tthat._fnScroll.call( that );\n\t\t} );\n\n\t\t/* In iOS we catch the touchstart event in case the user tries to scroll\n\t\t * while the display is already scrolling\n\t\t */\n\t\t$(this.dom.scroller).on('touchstart.DTS', function () {\n\t\t\tthat._fnScroll.call( that );\n\t\t} );\n\n\t\t/* Update the scroller when the DataTable is redrawn */\n\t\tthis.s.dt.aoDrawCallback.push( {\n\t\t\t\"fn\": function () {\n\t\t\t\tif ( that.s.dt.bInitialised ) {\n\t\t\t\t\tthat._fnDrawCallback.call( that );\n\t\t\t\t}\n\t\t\t},\n\t\t\t\"sName\": \"Scroller\"\n\t\t} );\n\n\t\t/* On resize, update the information element, since the number of rows shown might change */\n\t\t$(window).on( 'resize.DTS', function () {\n\t\t\tthat.fnMeasure( false );\n\t\t\tthat._fnInfo();\n\t\t} );\n\n\t\t/* Add a state saving parameter to the DT state saving so we can restore the exact\n\t\t * position of the scrolling\n\t\t */\n\t\tvar initialStateSave = true;\n\t\tthis.s.dt.oApi._fnCallbackReg( this.s.dt, 'aoStateSaveParams', function (oS, oData) {\n\t\t\t/* Set iScroller to saved scroll position on initialization.\n\t\t\t */\n\t\t\tif(initialStateSave && that.s.dt.oLoadedState){\n\t\t\t\toData.iScroller = that.s.dt.oLoadedState.iScroller;\n\t\t\t\toData.iScrollerTopRow = that.s.dt.oLoadedState.iScrollerTopRow;\n\t\t\t\tinitialStateSave = false;\n\t\t\t} else {\n\t\t\t\toData.iScroller = that.dom.scroller.scrollTop;\n\t\t\t\toData.iScrollerTopRow = that.s.topRowFloat;\n\t\t\t}\n\t\t}, \"Scroller_State\" );\n\n\t\tif ( this.s.dt.oLoadedState ) {\n\t\t\tthis.s.topRowFloat = this.s.dt.oLoadedState.iScrollerTopRow || 0;\n\t\t}\n\n\t\t// Measure immediately. Scroller will have been added using preInit, so\n\t\t// we can reliably do this here. We could potentially also measure on\n\t\t// init complete, which would be useful for cases where the data is Ajax\n\t\t// loaded and longer than a single line.\n\t\t$(this.s.dt.nTable).one( 'init.dt', function () {\n\t\t\tthat.fnMeasure();\n\t\t} );\n\n\t\t/* Destructor */\n\t\tthis.s.dt.aoDestroyCallback.push( {\n\t\t\t\"sName\": \"Scroller\",\n\t\t\t\"fn\": function () {\n\t\t\t\t$(window).off( 'resize.DTS' );\n\t\t\t\t$(that.dom.scroller).off('touchstart.DTS scroll.DTS');\n\t\t\t\t$(that.s.dt.nTableWrapper).removeClass('DTS');\n\t\t\t\t$('div.DTS_Loading', that.dom.scroller.parentNode).remove();\n\t\t\t\t$(that.s.dt.nTable).off( 'init.dt' );\n\n\t\t\t\tthat.dom.table.style.position = \"\";\n\t\t\t\tthat.dom.table.style.top = \"\";\n\t\t\t\tthat.dom.table.style.left = \"\";\n\t\t\t}\n\t\t} );\n\t},\n\n\n\t/**\n\t * Scrolling function - fired whenever the scrolling position is changed.\n\t * This method needs to use the stored values to see if the table should be\n\t * redrawn as we are moving towards the end of the information that is\n\t * currently drawn or not. If needed, then it will redraw the table based on\n\t * the new position.\n\t *  @returns {void}\n\t *  @private\n\t */\n\t\"_fnScroll\": function ()\n\t{\n\t\tvar\n\t\t\tthat = this,\n\t\t\theights = this.s.heights,\n\t\t\tiScrollTop = this.dom.scroller.scrollTop,\n\t\t\tiTopRow;\n\n\t\tif ( this.s.skip ) {\n\t\t\treturn;\n\t\t}\n\n\t\tif ( this.s.ingnoreScroll ) {\n\t\t\treturn;\n\t\t}\n\n\t\t/* If the table has been sorted or filtered, then we use the redraw that\n\t\t * DataTables as done, rather than performing our own\n\t\t */\n\t\tif ( this.s.dt.bFiltered || this.s.dt.bSorted ) {\n\t\t\tthis.s.lastScrollTop = 0;\n\t\t\treturn;\n\t\t}\n\n\t\t/* Update the table's information display for what is now in the viewport */\n\t\tthis._fnInfo();\n\n\t\t/* We don't want to state save on every scroll event - that's heavy\n\t\t * handed, so use a timeout to update the state saving only when the\n\t\t * scrolling has finished\n\t\t */\n\t\tclearTimeout( this.s.stateTO );\n\t\tthis.s.stateTO = setTimeout( function () {\n\t\t\tthat.s.dt.oApi._fnSaveState( that.s.dt );\n\t\t}, 250 );\n\n\t\t/* Check if the scroll point is outside the trigger boundary which would required\n\t\t * a DataTables redraw\n\t\t */\n\t\tif ( iScrollTop < this.s.redrawTop || iScrollTop > this.s.redrawBottom ) {\n\t\t\tvar preRows = Math.ceil( ((this.s.displayBuffer-1)/2) * this.s.viewportRows );\n\n\t\t\tif ( Math.abs( iScrollTop - this.s.lastScrollTop ) > heights.viewport || this.s.ani ) {\n\t\t\t\tiTopRow = parseInt(this._domain( 'physicalToVirtual', iScrollTop ) / heights.row, 10) - preRows;\n\t\t\t\tthis.s.topRowFloat = this._domain( 'physicalToVirtual', iScrollTop ) / heights.row;\n\t\t\t}\n\t\t\telse {\n\t\t\t\tiTopRow = this.fnPixelsToRow( iScrollTop ) - preRows;\n\t\t\t\tthis.s.topRowFloat = this.fnPixelsToRow( iScrollTop, false );\n\t\t\t}\n\n\t\t\tif ( iTopRow <= 0 ) {\n\t\t\t\t/* At the start of the table */\n\t\t\t\tiTopRow = 0;\n\t\t\t}\n\t\t\telse if ( iTopRow + this.s.dt._iDisplayLength > this.s.dt.fnRecordsDisplay() ) {\n\t\t\t\t/* At the end of the table */\n\t\t\t\tiTopRow = this.s.dt.fnRecordsDisplay() - this.s.dt._iDisplayLength;\n\t\t\t\tif ( iTopRow < 0 ) {\n\t\t\t\t\tiTopRow = 0;\n\t\t\t\t}\n\t\t\t}\n\t\t\telse if ( iTopRow % 2 !== 0 ) {\n\t\t\t\t// For the row-striping classes (odd/even) we want only to start\n\t\t\t\t// on evens otherwise the stripes will change between draws and\n\t\t\t\t// look rubbish\n\t\t\t\tiTopRow++;\n\t\t\t}\n\n\t\t\tif ( iTopRow != this.s.dt._iDisplayStart ) {\n\t\t\t\t/* Cache the new table position for quick lookups */\n\t\t\t\tthis.s.tableTop = $(this.s.dt.nTable).offset().top;\n\t\t\t\tthis.s.tableBottom = $(this.s.dt.nTable).height() + this.s.tableTop;\n\n\t\t\t\tvar draw =  function () {\n\t\t\t\t\tif ( that.s.scrollDrawReq === null ) {\n\t\t\t\t\t\tthat.s.scrollDrawReq = iScrollTop;\n\t\t\t\t\t}\n\n\t\t\t\t\tthat.s.dt._iDisplayStart = iTopRow;\n\t\t\t\t\tthat.s.dt.oApi._fnDraw( that.s.dt );\n\t\t\t\t};\n\n\t\t\t\t/* Do the DataTables redraw based on the calculated start point - note that when\n\t\t\t\t * using server-side processing we introduce a small delay to not DoS the server...\n\t\t\t\t */\n\t\t\t\tif ( this.s.dt.oFeatures.bServerSide ) {\n\t\t\t\t\tclearTimeout( this.s.drawTO );\n\t\t\t\t\tthis.s.drawTO = setTimeout( draw, this.s.serverWait );\n\t\t\t\t}\n\t\t\t\telse {\n\t\t\t\t\tdraw();\n\t\t\t\t}\n\n\t\t\t\tif ( this.dom.loader && ! this.s.loaderVisible ) {\n\t\t\t\t\tthis.dom.loader.css( 'display', 'block' );\n\t\t\t\t\tthis.s.loaderVisible = true;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\telse {\n\t\t\tthis.s.topRowFloat = this._domain( 'physicalToVirtual', iScrollTop ) / heights.row;\n\t\t}\n\n\t\tthis.s.lastScrollTop = iScrollTop;\n\t\tthis.s.stateSaveThrottle();\n\t},\n\n\n\t/**\n\t * Convert from one domain to another. The physical domain is the actual\n\t * pixel count on the screen, while the virtual is if we had browsers which\n\t * had scrolling containers of infinite height (i.e. the absolute value)\n\t *\n\t *  @param {string} dir Domain transform direction, `virtualToPhysical` or\n\t *    `physicalToVirtual` \n\t *  @returns {number} Calculated transform\n\t *  @private\n\t */\n\t_domain: function ( dir, val )\n\t{\n\t\tvar heights = this.s.heights;\n\t\tvar coeff;\n\n\t\t// If the virtual and physical height match, then we use a linear\n\t\t// transform between the two, allowing the scrollbar to be linear\n\t\tif ( heights.virtual === heights.scroll ) {\n\t\t\treturn val;\n\t\t}\n\n\t\t// Otherwise, we want a non-linear scrollbar to take account of the\n\t\t// redrawing regions at the start and end of the table, otherwise these\n\t\t// can stutter badly - on large tables 30px (for example) scroll might\n\t\t// be hundreds of rows, so the table would be redrawing every few px at\n\t\t// the start and end. Use a simple quadratic to stop this. It does mean\n\t\t// the scrollbar is non-linear, but with such massive data sets, the\n\t\t// scrollbar is going to be a best guess anyway\n\t\tvar xMax = (heights.scroll - heights.viewport) / 2;\n\t\tvar yMax = (heights.virtual - heights.viewport) / 2;\n\n\t\tcoeff = yMax / ( xMax * xMax );\n\n\t\tif ( dir === 'virtualToPhysical' ) {\n\t\t\tif ( val < yMax ) {\n\t\t\t\treturn Math.pow(val / coeff, 0.5);\n\t\t\t}\n\t\t\telse {\n\t\t\t\tval = (yMax*2) - val;\n\t\t\t\treturn val < 0 ?\n\t\t\t\t\theights.scroll :\n\t\t\t\t\t(xMax*2) - Math.pow(val / coeff, 0.5);\n\t\t\t}\n\t\t}\n\t\telse if ( dir === 'physicalToVirtual' ) {\n\t\t\tif ( val < xMax ) {\n\t\t\t\treturn val * val * coeff;\n\t\t\t}\n\t\t\telse {\n\t\t\t\tval = (xMax*2) - val;\n\t\t\t\treturn val < 0 ?\n\t\t\t\t\theights.virtual :\n\t\t\t\t\t(yMax*2) - (val * val * coeff);\n\t\t\t}\n\t\t}\n\t},\n\n\n\t/**\n\t * Draw callback function which is fired when the DataTable is redrawn. The main function of\n\t * this method is to position the drawn table correctly the scrolling container for the rows\n\t * that is displays as a result of the scrolling position.\n\t *  @returns {void}\n\t *  @private\n\t */\n\t\"_fnDrawCallback\": function ()\n\t{\n\t\tvar\n\t\t\tthat = this,\n\t\t\theights = this.s.heights,\n\t\t\tiScrollTop = this.dom.scroller.scrollTop,\n\t\t\tiActualScrollTop = iScrollTop,\n\t\t\tiScrollBottom = iScrollTop + heights.viewport,\n\t\t\tiTableHeight = $(this.s.dt.nTable).height(),\n\t\t\tdisplayStart = this.s.dt._iDisplayStart,\n\t\t\tdisplayLen = this.s.dt._iDisplayLength,\n\t\t\tdisplayEnd = this.s.dt.fnRecordsDisplay();\n\n\t\t// Disable the scroll event listener while we are updating the DOM\n\t\tthis.s.skip = true;\n\n\t\t// Resize the scroll forcing element\n\t\tthis._fnScrollForce();\n\n\t\t// Reposition the scrolling for the updated virtual position if needed\n\t\tif ( displayStart === 0 ) {\n\t\t\t// Linear calculation at the top of the table\n\t\t\tiScrollTop = this.s.topRowFloat * heights.row;\n\t\t}\n\t\telse if ( displayStart + displayLen >= displayEnd ) {\n\t\t\t// Linear calculation that the bottom as well\n\t\t\tiScrollTop = heights.scroll - ((displayEnd - this.s.topRowFloat) * heights.row);\n\t\t}\n\t\telse {\n\t\t\t// Domain scaled in the middle\n\t\t\tiScrollTop = this._domain( 'virtualToPhysical', this.s.topRowFloat * heights.row );\n\t\t}\n\n\t\tthis.dom.scroller.scrollTop = iScrollTop;\n\n\t\t// Store positional information so positional calculations can be based\n\t\t// upon the current table draw position\n\t\tthis.s.baseScrollTop = iScrollTop;\n\t\tthis.s.baseRowTop = this.s.topRowFloat;\n\n\t\t// Position the table in the virtual scroller\n\t\tvar tableTop = iScrollTop - ((this.s.topRowFloat - displayStart) * heights.row);\n\t\tif ( displayStart === 0 ) {\n\t\t\ttableTop = 0;\n\t\t}\n\t\telse if ( displayStart + displayLen >= displayEnd ) {\n\t\t\ttableTop = heights.scroll - iTableHeight;\n\t\t}\n\n\t\tthis.dom.table.style.top = tableTop+'px';\n\n\t\t/* Cache some information for the scroller */\n\t\tthis.s.tableTop = tableTop;\n\t\tthis.s.tableBottom = iTableHeight + this.s.tableTop;\n\n\t\t// Calculate the boundaries for where a redraw will be triggered by the\n\t\t// scroll event listener\n\t\tvar boundaryPx = (iScrollTop - this.s.tableTop) * this.s.boundaryScale;\n\t\tthis.s.redrawTop = iScrollTop - boundaryPx;\n\t\tthis.s.redrawBottom = iScrollTop + boundaryPx;\n\n\t\tthis.s.skip = false;\n\n\t\t// Restore the scrolling position that was saved by DataTable's state\n\t\t// saving Note that this is done on the second draw when data is Ajax\n\t\t// sourced, and the first draw when DOM soured\n\t\tif ( this.s.dt.oFeatures.bStateSave && this.s.dt.oLoadedState !== null &&\n\t\t\t typeof this.s.dt.oLoadedState.iScroller != 'undefined' )\n\t\t{\n\t\t\t// A quirk of DataTables is that the draw callback will occur on an\n\t\t\t// empty set if Ajax sourced, but not if server-side processing.\n\t\t\tvar ajaxSourced = (this.s.dt.sAjaxSource || that.s.dt.ajax) && ! this.s.dt.oFeatures.bServerSide ?\n\t\t\t\ttrue :\n\t\t\t\tfalse;\n\n\t\t\tif ( ( ajaxSourced && this.s.dt.iDraw == 2) ||\n\t\t\t     (!ajaxSourced && this.s.dt.iDraw == 1) )\n\t\t\t{\n\t\t\t\tsetTimeout( function () {\n\t\t\t\t\t$(that.dom.scroller).scrollTop( that.s.dt.oLoadedState.iScroller );\n\t\t\t\t\tthat.s.redrawTop = that.s.dt.oLoadedState.iScroller - (heights.viewport/2);\n\n\t\t\t\t\t// In order to prevent layout thrashing we need another\n\t\t\t\t\t// small delay\n\t\t\t\t\tsetTimeout( function () {\n\t\t\t\t\t\tthat.s.ingnoreScroll = false;\n\t\t\t\t\t}, 0 );\n\t\t\t\t}, 0 );\n\t\t\t}\n\t\t}\n\t\telse {\n\t\t\tthat.s.ingnoreScroll = false;\n\t\t}\n\n\t\t// Because of the order of the DT callbacks, the info update will\n\t\t// take precedence over the one we want here. So a 'thread' break is\n\t\t// needed.  Only add the thread break if bInfo is set\n\t\tif ( this.s.dt.oFeatures.bInfo ) {\n\t\t\tsetTimeout( function () {\n\t\t\t\tthat._fnInfo.call( that );\n\t\t\t}, 0 );\n\t\t}\n\n\t\t// Hide the loading indicator\n\t\tif ( this.dom.loader && this.s.loaderVisible ) {\n\t\t\tthis.dom.loader.css( 'display', 'none' );\n\t\t\tthis.s.loaderVisible = false;\n\t\t}\n\t},\n\n\n\t/**\n\t * Force the scrolling container to have height beyond that of just the\n\t * table that has been drawn so the user can scroll the whole data set.\n\t *\n\t * Note that if the calculated required scrolling height exceeds a maximum\n\t * value (1 million pixels - hard-coded) the forcing element will be set\n\t * only to that maximum value and virtual / physical domain transforms will\n\t * be used to allow Scroller to display tables of any number of records.\n\t *  @returns {void}\n\t *  @private\n\t */\n\t_fnScrollForce: function ()\n\t{\n\t\tvar heights = this.s.heights;\n\t\tvar max = 1000000;\n\n\t\theights.virtual = heights.row * this.s.dt.fnRecordsDisplay();\n\t\theights.scroll = heights.virtual;\n\n\t\tif ( heights.scroll > max ) {\n\t\t\theights.scroll = max;\n\t\t}\n\n\t\t// Minimum height so there is always a row visible (the 'no rows found'\n\t\t// if reduced to zero filtering)\n\t\tthis.dom.force.style.height = heights.scroll > this.s.heights.row ?\n\t\t\theights.scroll+'px' :\n\t\t\tthis.s.heights.row+'px';\n\t},\n\n\n\t/**\n\t * Automatic calculation of table row height. This is just a little tricky here as using\n\t * initialisation DataTables has tale the table out of the document, so we need to create\n\t * a new table and insert it into the document, calculate the row height and then whip the\n\t * table out.\n\t *  @returns {void}\n\t *  @private\n\t */\n\t\"_fnCalcRowHeight\": function ()\n\t{\n\t\tvar dt = this.s.dt;\n\t\tvar origTable = dt.nTable;\n\t\tvar nTable = origTable.cloneNode( false );\n\t\tvar tbody = $('<tbody/>').appendTo( nTable );\n\t\tvar container = $(\n\t\t\t'<div class=\"'+dt.oClasses.sWrapper+' DTS\">'+\n\t\t\t\t'<div class=\"'+dt.oClasses.sScrollWrapper+'\">'+\n\t\t\t\t\t'<div class=\"'+dt.oClasses.sScrollBody+'\"></div>'+\n\t\t\t\t'</div>'+\n\t\t\t'</div>'\n\t\t);\n\n\t\t// Want 3 rows in the sizing table so :first-child and :last-child\n\t\t// CSS styles don't come into play - take the size of the middle row\n\t\t$('tbody tr:lt(4)', origTable).clone().appendTo( tbody );\n\t\twhile( $('tr', tbody).length < 3 ) {\n\t\t\ttbody.append( '<tr><td>&nbsp;</td></tr>' );\n\t\t}\n\n\t\t$('div.'+dt.oClasses.sScrollBody, container).append( nTable );\n\n\t\t// If initialised using `dom`, use the holding element as the insert point\n\t\tvar insertEl = this.s.dt.nHolding || origTable.parentNode;\n\n\t\tif ( ! $(insertEl).is(':visible') ) {\n\t\t\tinsertEl = 'body';\n\t\t}\n\n\t\tcontainer.appendTo( insertEl );\n\t\tthis.s.heights.row = $('tr', tbody).eq(1).outerHeight();\n\n\t\tcontainer.remove();\n\t},\n\n\n\t/**\n\t * Update any information elements that are controlled by the DataTable based on the scrolling\n\t * viewport and what rows are visible in it. This function basically acts in the same way as\n\t * _fnUpdateInfo in DataTables, and effectively replaces that function.\n\t *  @returns {void}\n\t *  @private\n\t */\n\t\"_fnInfo\": function ()\n\t{\n\t\tif ( !this.s.dt.oFeatures.bInfo )\n\t\t{\n\t\t\treturn;\n\t\t}\n\n\t\tvar\n\t\t\tdt = this.s.dt,\n\t\t\tlanguage = dt.oLanguage,\n\t\t\tiScrollTop = this.dom.scroller.scrollTop,\n\t\t\tiStart = Math.floor( this.fnPixelsToRow(iScrollTop, false, this.s.ani)+1 ),\n\t\t\tiMax = dt.fnRecordsTotal(),\n\t\t\tiTotal = dt.fnRecordsDisplay(),\n\t\t\tiPossibleEnd = Math.ceil( this.fnPixelsToRow(iScrollTop+this.s.heights.viewport, false, this.s.ani) ),\n\t\t\tiEnd = iTotal < iPossibleEnd ? iTotal : iPossibleEnd,\n\t\t\tsStart = dt.fnFormatNumber( iStart ),\n\t\t\tsEnd = dt.fnFormatNumber( iEnd ),\n\t\t\tsMax = dt.fnFormatNumber( iMax ),\n\t\t\tsTotal = dt.fnFormatNumber( iTotal ),\n\t\t\tsOut;\n\n\t\tif ( dt.fnRecordsDisplay() === 0 &&\n\t\t\t   dt.fnRecordsDisplay() == dt.fnRecordsTotal() )\n\t\t{\n\t\t\t/* Empty record set */\n\t\t\tsOut = language.sInfoEmpty+ language.sInfoPostFix;\n\t\t}\n\t\telse if ( dt.fnRecordsDisplay() === 0 )\n\t\t{\n\t\t\t/* Empty record set after filtering */\n\t\t\tsOut = language.sInfoEmpty +' '+\n\t\t\t\tlanguage.sInfoFiltered.replace('_MAX_', sMax)+\n\t\t\t\t\tlanguage.sInfoPostFix;\n\t\t}\n\t\telse if ( dt.fnRecordsDisplay() == dt.fnRecordsTotal() )\n\t\t{\n\t\t\t/* Normal record set */\n\t\t\tsOut = language.sInfo.\n\t\t\t\t\treplace('_START_', sStart).\n\t\t\t\t\treplace('_END_',   sEnd).\n\t\t\t\t\treplace('_MAX_',   sMax).\n\t\t\t\t\treplace('_TOTAL_', sTotal)+\n\t\t\t\tlanguage.sInfoPostFix;\n\t\t}\n\t\telse\n\t\t{\n\t\t\t/* Record set after filtering */\n\t\t\tsOut = language.sInfo.\n\t\t\t\t\treplace('_START_', sStart).\n\t\t\t\t\treplace('_END_',   sEnd).\n\t\t\t\t\treplace('_MAX_',   sMax).\n\t\t\t\t\treplace('_TOTAL_', sTotal) +' '+\n\t\t\t\tlanguage.sInfoFiltered.replace(\n\t\t\t\t\t'_MAX_',\n\t\t\t\t\tdt.fnFormatNumber(dt.fnRecordsTotal())\n\t\t\t\t)+\n\t\t\t\tlanguage.sInfoPostFix;\n\t\t}\n\n\t\tvar callback = language.fnInfoCallback;\n\t\tif ( callback ) {\n\t\t\tsOut = callback.call( dt.oInstance,\n\t\t\t\tdt, iStart, iEnd, iMax, iTotal, sOut\n\t\t\t);\n\t\t}\n\n\t\tvar n = dt.aanFeatures.i;\n\t\tif ( typeof n != 'undefined' )\n\t\t{\n\t\t\tfor ( var i=0, iLen=n.length ; i<iLen ; i++ )\n\t\t\t{\n\t\t\t\t$(n[i]).html( sOut );\n\t\t\t}\n\t\t}\n\n\t\t// DT doesn't actually (yet) trigger this event, but it will in future\n\t\t$(dt.nTable).triggerHandler( 'info.dt' );\n\t}\n} );\n\n\n\n/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\n * Statics\n * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */\n\n\n/**\n * Scroller default settings for initialisation\n *  @namespace\n *  @name Scroller.defaults\n *  @static\n */\nScroller.defaults = /** @lends Scroller.defaults */{\n\t/**\n\t * Indicate if Scroller show show trace information on the console or not. This can be\n\t * useful when debugging Scroller or if just curious as to what it is doing, but should\n\t * be turned off for production.\n\t *  @type     bool\n\t *  @default  false\n\t *  @static\n\t *  @example\n\t *    var oTable = $('#example').dataTable( {\n\t *        \"sScrollY\": \"200px\",\n\t *        \"sDom\": \"frtiS\",\n\t *        \"bDeferRender\": true,\n\t *        \"oScroller\": {\n\t *          \"trace\": true\n\t *        }\n\t *    } );\n\t */\n\t\"trace\": false,\n\n\t/**\n\t * Scroller will attempt to automatically calculate the height of rows for it's internal\n\t * calculations. However the height that is used can be overridden using this parameter.\n\t *  @type     int|string\n\t *  @default  auto\n\t *  @static\n\t *  @example\n\t *    var oTable = $('#example').dataTable( {\n\t *        \"sScrollY\": \"200px\",\n\t *        \"sDom\": \"frtiS\",\n\t *        \"bDeferRender\": true,\n\t *        \"oScroller\": {\n\t *          \"rowHeight\": 30\n\t *        }\n\t *    } );\n\t */\n\t\"rowHeight\": \"auto\",\n\n\t/**\n\t * When using server-side processing, Scroller will wait a small amount of time to allow\n\t * the scrolling to finish before requesting more data from the server. This prevents\n\t * you from DoSing your own server! The wait time can be configured by this parameter.\n\t *  @type     int\n\t *  @default  200\n\t *  @static\n\t *  @example\n\t *    var oTable = $('#example').dataTable( {\n\t *        \"sScrollY\": \"200px\",\n\t *        \"sDom\": \"frtiS\",\n\t *        \"bDeferRender\": true,\n\t *        \"oScroller\": {\n\t *          \"serverWait\": 100\n\t *        }\n\t *    } );\n\t */\n\t\"serverWait\": 200,\n\n\t/**\n\t * The display buffer is what Scroller uses to calculate how many rows it should pre-fetch\n\t * for scrolling. Scroller automatically adjusts DataTables' display length to pre-fetch\n\t * rows that will be shown in \"near scrolling\" (i.e. just beyond the current display area).\n\t * The value is based upon the number of rows that can be displayed in the viewport (i.e.\n\t * a value of 1), and will apply the display range to records before before and after the\n\t * current viewport - i.e. a factor of 3 will allow Scroller to pre-fetch 1 viewport's worth\n\t * of rows before the current viewport, the current viewport's rows and 1 viewport's worth\n\t * of rows after the current viewport. Adjusting this value can be useful for ensuring\n\t * smooth scrolling based on your data set.\n\t *  @type     int\n\t *  @default  7\n\t *  @static\n\t *  @example\n\t *    var oTable = $('#example').dataTable( {\n\t *        \"sScrollY\": \"200px\",\n\t *        \"sDom\": \"frtiS\",\n\t *        \"bDeferRender\": true,\n\t *        \"oScroller\": {\n\t *          \"displayBuffer\": 10\n\t *        }\n\t *    } );\n\t */\n\t\"displayBuffer\": 9,\n\n\t/**\n\t * Scroller uses the boundary scaling factor to decide when to redraw the table - which it\n\t * typically does before you reach the end of the currently loaded data set (in order to\n\t * allow the data to look continuous to a user scrolling through the data). If given as 0\n\t * then the table will be redrawn whenever the viewport is scrolled, while 1 would not\n\t * redraw the table until the currently loaded data has all been shown. You will want\n\t * something in the middle - the default factor of 0.5 is usually suitable.\n\t *  @type     float\n\t *  @default  0.5\n\t *  @static\n\t *  @example\n\t *    var oTable = $('#example').dataTable( {\n\t *        \"sScrollY\": \"200px\",\n\t *        \"sDom\": \"frtiS\",\n\t *        \"bDeferRender\": true,\n\t *        \"oScroller\": {\n\t *          \"boundaryScale\": 0.75\n\t *        }\n\t *    } );\n\t */\n\t\"boundaryScale\": 0.5,\n\n\t/**\n\t * Show (or not) the loading element in the background of the table. Note that you should\n\t * include the dataTables.scroller.css file for this to be displayed correctly.\n\t *  @type     boolean\n\t *  @default  false\n\t *  @static\n\t *  @example\n\t *    var oTable = $('#example').dataTable( {\n\t *        \"sScrollY\": \"200px\",\n\t *        \"sDom\": \"frtiS\",\n\t *        \"bDeferRender\": true,\n\t *        \"oScroller\": {\n\t *          \"loadingIndicator\": true\n\t *        }\n\t *    } );\n\t */\n\t\"loadingIndicator\": false\n};\n\nScroller.oDefaults = Scroller.defaults;\n\n\n\n/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\n * Constants\n * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */\n\n/**\n * Scroller version\n *  @type      String\n *  @default   See code\n *  @name      Scroller.version\n *  @static\n */\nScroller.version = \"1.4.2\";\n\n\n\n/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\n * Initialisation\n * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */\n\n// Legacy `dom` parameter initialisation support\nif ( typeof $.fn.dataTable == \"function\" &&\n     typeof $.fn.dataTableExt.fnVersionCheck == \"function\" &&\n     $.fn.dataTableExt.fnVersionCheck('1.10.0') )\n{\n\t$.fn.dataTableExt.aoFeatures.push( {\n\t\t\"fnInit\": function( oDTSettings ) {\n\t\t\tvar init = oDTSettings.oInit;\n\t\t\tvar opts = init.scroller || init.oScroller || {};\n\t\t\t\n\t\t\tnew Scroller( oDTSettings, opts );\n\t\t},\n\t\t\"cFeature\": \"S\",\n\t\t\"sFeature\": \"Scroller\"\n\t} );\n}\nelse\n{\n\talert( \"Warning: Scroller requires DataTables 1.10.0 or greater - www.datatables.net/download\");\n}\n\n// Attach a listener to the document which listens for DataTables initialisation\n// events so we can automatically initialise\n$(document).on( 'preInit.dt.dtscroller', function (e, settings) {\n\tif ( e.namespace !== 'dt' ) {\n\t\treturn;\n\t}\n\n\tvar init = settings.oInit.scroller;\n\tvar defaults = DataTable.defaults.scroller;\n\n\tif ( init || defaults ) {\n\t\tvar opts = $.extend( {}, init, defaults );\n\n\t\tif ( init !== false ) {\n\t\t\tnew Scroller( settings, opts  );\n\t\t}\n\t}\n} );\n\n\n// Attach Scroller to DataTables so it can be accessed as an 'extra'\n$.fn.dataTable.Scroller = Scroller;\n$.fn.DataTable.Scroller = Scroller;\n\n\n// DataTables 1.10 API method aliases\nvar Api = $.fn.dataTable.Api;\n\nApi.register( 'scroller()', function () {\n\treturn this;\n} );\n\n// Undocumented and deprecated - is it actually useful at all?\nApi.register( 'scroller().rowToPixels()', function ( rowIdx, intParse, virtual ) {\n\tvar ctx = this.context;\n\n\tif ( ctx.length && ctx[0].oScroller ) {\n\t\treturn ctx[0].oScroller.fnRowToPixels( rowIdx, intParse, virtual );\n\t}\n\t// undefined\n} );\n\n// Undocumented and deprecated - is it actually useful at all?\nApi.register( 'scroller().pixelsToRow()', function ( pixels, intParse, virtual ) {\n\tvar ctx = this.context;\n\n\tif ( ctx.length && ctx[0].oScroller ) {\n\t\treturn ctx[0].oScroller.fnPixelsToRow( pixels, intParse, virtual );\n\t}\n\t// undefined\n} );\n\n// Undocumented and deprecated - use `row().scrollTo()` instead\nApi.register( 'scroller().scrollToRow()', function ( row, ani ) {\n\tthis.iterator( 'table', function ( ctx ) {\n\t\tif ( ctx.oScroller ) {\n\t\t\tctx.oScroller.fnScrollToRow( row, ani );\n\t\t}\n\t} );\n\n\treturn this;\n} );\n\nApi.register( 'row().scrollTo()', function ( ani ) {\n\tvar that = this;\n\n\tthis.iterator( 'row', function ( ctx, rowIdx ) {\n\t\tif ( ctx.oScroller ) {\n\t\t\tvar displayIdx = that\n\t\t\t\t.rows( { order: 'applied', search: 'applied' } )\n\t\t\t\t.indexes()\n\t\t\t\t.indexOf( rowIdx );\n\n\t\t\tctx.oScroller.fnScrollToRow( displayIdx, ani );\n\t\t}\n\t} );\n\n\treturn this;\n} );\n\nApi.register( 'scroller.measure()', function ( redraw ) {\n\tthis.iterator( 'table', function ( ctx ) {\n\t\tif ( ctx.oScroller ) {\n\t\t\tctx.oScroller.fnMeasure( redraw );\n\t\t}\n\t} );\n\n\treturn this;\n} );\n\nApi.register( 'scroller.page()', function() {\n\tvar ctx = this.context;\n\n\tif ( ctx.length && ctx[0].oScroller ) {\n\t\treturn ctx[0].oScroller.fnPageInfo();\n\t}\n\t// undefined\n} );\n\nreturn Scroller;\n}));\n"

/***/ }),

/***/ 264:
/***/ (function(module, exports) {

module.exports = "/*! DataTables 1.10.13\n * ©2008-2016 SpryMedia Ltd - datatables.net/license\n */\n\n/**\n * @summary     DataTables\n * @description Paginate, search and order HTML tables\n * @version     1.10.13\n * @file        jquery.dataTables.js\n * @author      SpryMedia Ltd\n * @contact     www.datatables.net\n * @copyright   Copyright 2008-2016 SpryMedia Ltd.\n *\n * This source file is free software, available under the following license:\n *   MIT license - http://datatables.net/license\n *\n * This source file is distributed in the hope that it will be useful, but\n * WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY\n * or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details.\n *\n * For details please refer to: http://www.datatables.net\n */\n\n/*jslint evil: true, undef: true, browser: true */\n/*globals $,require,jQuery,define,_selector_run,_selector_opts,_selector_first,_selector_row_indexes,_ext,_Api,_api_register,_api_registerPlural,_re_new_lines,_re_html,_re_formatted_numeric,_re_escape_regex,_empty,_intVal,_numToDecimal,_isNumber,_isHtml,_htmlNumeric,_pluck,_pluck_order,_range,_stripHtml,_unique,_fnBuildAjax,_fnAjaxUpdate,_fnAjaxParameters,_fnAjaxUpdateDraw,_fnAjaxDataSrc,_fnAddColumn,_fnColumnOptions,_fnAdjustColumnSizing,_fnVisibleToColumnIndex,_fnColumnIndexToVisible,_fnVisbleColumns,_fnGetColumns,_fnColumnTypes,_fnApplyColumnDefs,_fnHungarianMap,_fnCamelToHungarian,_fnLanguageCompat,_fnBrowserDetect,_fnAddData,_fnAddTr,_fnNodeToDataIndex,_fnNodeToColumnIndex,_fnGetCellData,_fnSetCellData,_fnSplitObjNotation,_fnGetObjectDataFn,_fnSetObjectDataFn,_fnGetDataMaster,_fnClearTable,_fnDeleteIndex,_fnInvalidate,_fnGetRowElements,_fnCreateTr,_fnBuildHead,_fnDrawHead,_fnDraw,_fnReDraw,_fnAddOptionsHtml,_fnDetectHeader,_fnGetUniqueThs,_fnFeatureHtmlFilter,_fnFilterComplete,_fnFilterCustom,_fnFilterColumn,_fnFilter,_fnFilterCreateSearch,_fnEscapeRegex,_fnFilterData,_fnFeatureHtmlInfo,_fnUpdateInfo,_fnInfoMacros,_fnInitialise,_fnInitComplete,_fnLengthChange,_fnFeatureHtmlLength,_fnFeatureHtmlPaginate,_fnPageChange,_fnFeatureHtmlProcessing,_fnProcessingDisplay,_fnFeatureHtmlTable,_fnScrollDraw,_fnApplyToChildren,_fnCalculateColumnWidths,_fnThrottle,_fnConvertToWidth,_fnGetWidestNode,_fnGetMaxLenString,_fnStringToCss,_fnSortFlatten,_fnSort,_fnSortAria,_fnSortListener,_fnSortAttachListener,_fnSortingClasses,_fnSortData,_fnSaveState,_fnLoadState,_fnSettingsFromNode,_fnLog,_fnMap,_fnBindAction,_fnCallbackReg,_fnCallbackFire,_fnLengthOverflow,_fnRenderer,_fnDataSource,_fnRowAttributes*/\n\n(function( factory ) {\n\t\"use strict\";\n\n\tif ( typeof define === 'function' && define.amd ) {\n\t\t// AMD\n\t\tdefine( ['jquery'], function ( $ ) {\n\t\t\treturn factory( $, window, document );\n\t\t} );\n\t}\n\telse if ( typeof exports === 'object' ) {\n\t\t// CommonJS\n\t\tmodule.exports = function (root, $) {\n\t\t\tif ( ! root ) {\n\t\t\t\t// CommonJS environments without a window global must pass a\n\t\t\t\t// root. This will give an error otherwise\n\t\t\t\troot = window;\n\t\t\t}\n\n\t\t\tif ( ! $ ) {\n\t\t\t\t$ = typeof window !== 'undefined' ? // jQuery's factory checks for a global window\n\t\t\t\t\trequire('jquery') :\n\t\t\t\t\trequire('jquery')( root );\n\t\t\t}\n\n\t\t\treturn factory( $, root, root.document );\n\t\t};\n\t}\n\telse {\n\t\t// Browser\n\t\tfactory( jQuery, window, document );\n\t}\n}\n(function( $, window, document, undefined ) {\n\t\"use strict\";\n\n\t/**\n\t * DataTables is a plug-in for the jQuery Javascript library. It is a highly\n\t * flexible tool, based upon the foundations of progressive enhancement,\n\t * which will add advanced interaction controls to any HTML table. For a\n\t * full list of features please refer to\n\t * [DataTables.net](href=\"http://datatables.net).\n\t *\n\t * Note that the `DataTable` object is not a global variable but is aliased\n\t * to `jQuery.fn.DataTable` and `jQuery.fn.dataTable` through which it may\n\t * be  accessed.\n\t *\n\t *  @class\n\t *  @param {object} [init={}] Configuration object for DataTables. Options\n\t *    are defined by {@link DataTable.defaults}\n\t *  @requires jQuery 1.7+\n\t *\n\t *  @example\n\t *    // Basic initialisation\n\t *    $(document).ready( function {\n\t *      $('#example').dataTable();\n\t *    } );\n\t *\n\t *  @example\n\t *    // Initialisation with configuration options - in this case, disable\n\t *    // pagination and sorting.\n\t *    $(document).ready( function {\n\t *      $('#example').dataTable( {\n\t *        \"paginate\": false,\n\t *        \"sort\": false\n\t *      } );\n\t *    } );\n\t */\n\tvar DataTable = function ( options )\n\t{\n\t\t/**\n\t\t * Perform a jQuery selector action on the table's TR elements (from the tbody) and\n\t\t * return the resulting jQuery object.\n\t\t *  @param {string|node|jQuery} sSelector jQuery selector or node collection to act on\n\t\t *  @param {object} [oOpts] Optional parameters for modifying the rows to be included\n\t\t *  @param {string} [oOpts.filter=none] Select TR elements that meet the current filter\n\t\t *    criterion (\"applied\") or all TR elements (i.e. no filter).\n\t\t *  @param {string} [oOpts.order=current] Order of the TR elements in the processed array.\n\t\t *    Can be either 'current', whereby the current sorting of the table is used, or\n\t\t *    'original' whereby the original order the data was read into the table is used.\n\t\t *  @param {string} [oOpts.page=all] Limit the selection to the currently displayed page\n\t\t *    (\"current\") or not (\"all\"). If 'current' is given, then order is assumed to be\n\t\t *    'current' and filter is 'applied', regardless of what they might be given as.\n\t\t *  @returns {object} jQuery object, filtered by the given selector.\n\t\t *  @dtopt API\n\t\t *  @deprecated Since v1.10\n\t\t *\n\t\t *  @example\n\t\t *    $(document).ready(function() {\n\t\t *      var oTable = $('#example').dataTable();\n\t\t *\n\t\t *      // Highlight every second row\n\t\t *      oTable.$('tr:odd').css('backgroundColor', 'blue');\n\t\t *    } );\n\t\t *\n\t\t *  @example\n\t\t *    $(document).ready(function() {\n\t\t *      var oTable = $('#example').dataTable();\n\t\t *\n\t\t *      // Filter to rows with 'Webkit' in them, add a background colour and then\n\t\t *      // remove the filter, thus highlighting the 'Webkit' rows only.\n\t\t *      oTable.fnFilter('Webkit');\n\t\t *      oTable.$('tr', {\"search\": \"applied\"}).css('backgroundColor', 'blue');\n\t\t *      oTable.fnFilter('');\n\t\t *    } );\n\t\t */\n\t\tthis.$ = function ( sSelector, oOpts )\n\t\t{\n\t\t\treturn this.api(true).$( sSelector, oOpts );\n\t\t};\n\t\t\n\t\t\n\t\t/**\n\t\t * Almost identical to $ in operation, but in this case returns the data for the matched\n\t\t * rows - as such, the jQuery selector used should match TR row nodes or TD/TH cell nodes\n\t\t * rather than any descendants, so the data can be obtained for the row/cell. If matching\n\t\t * rows are found, the data returned is the original data array/object that was used to\n\t\t * create the row (or a generated array if from a DOM source).\n\t\t *\n\t\t * This method is often useful in-combination with $ where both functions are given the\n\t\t * same parameters and the array indexes will match identically.\n\t\t *  @param {string|node|jQuery} sSelector jQuery selector or node collection to act on\n\t\t *  @param {object} [oOpts] Optional parameters for modifying the rows to be included\n\t\t *  @param {string} [oOpts.filter=none] Select elements that meet the current filter\n\t\t *    criterion (\"applied\") or all elements (i.e. no filter).\n\t\t *  @param {string} [oOpts.order=current] Order of the data in the processed array.\n\t\t *    Can be either 'current', whereby the current sorting of the table is used, or\n\t\t *    'original' whereby the original order the data was read into the table is used.\n\t\t *  @param {string} [oOpts.page=all] Limit the selection to the currently displayed page\n\t\t *    (\"current\") or not (\"all\"). If 'current' is given, then order is assumed to be\n\t\t *    'current' and filter is 'applied', regardless of what they might be given as.\n\t\t *  @returns {array} Data for the matched elements. If any elements, as a result of the\n\t\t *    selector, were not TR, TD or TH elements in the DataTable, they will have a null\n\t\t *    entry in the array.\n\t\t *  @dtopt API\n\t\t *  @deprecated Since v1.10\n\t\t *\n\t\t *  @example\n\t\t *    $(document).ready(function() {\n\t\t *      var oTable = $('#example').dataTable();\n\t\t *\n\t\t *      // Get the data from the first row in the table\n\t\t *      var data = oTable._('tr:first');\n\t\t *\n\t\t *      // Do something useful with the data\n\t\t *      alert( \"First cell is: \"+data[0] );\n\t\t *    } );\n\t\t *\n\t\t *  @example\n\t\t *    $(document).ready(function() {\n\t\t *      var oTable = $('#example').dataTable();\n\t\t *\n\t\t *      // Filter to 'Webkit' and get all data for\n\t\t *      oTable.fnFilter('Webkit');\n\t\t *      var data = oTable._('tr', {\"search\": \"applied\"});\n\t\t *\n\t\t *      // Do something with the data\n\t\t *      alert( data.length+\" rows matched the search\" );\n\t\t *    } );\n\t\t */\n\t\tthis._ = function ( sSelector, oOpts )\n\t\t{\n\t\t\treturn this.api(true).rows( sSelector, oOpts ).data();\n\t\t};\n\t\t\n\t\t\n\t\t/**\n\t\t * Create a DataTables Api instance, with the currently selected tables for\n\t\t * the Api's context.\n\t\t * @param {boolean} [traditional=false] Set the API instance's context to be\n\t\t *   only the table referred to by the `DataTable.ext.iApiIndex` option, as was\n\t\t *   used in the API presented by DataTables 1.9- (i.e. the traditional mode),\n\t\t *   or if all tables captured in the jQuery object should be used.\n\t\t * @return {DataTables.Api}\n\t\t */\n\t\tthis.api = function ( traditional )\n\t\t{\n\t\t\treturn traditional ?\n\t\t\t\tnew _Api(\n\t\t\t\t\t_fnSettingsFromNode( this[ _ext.iApiIndex ] )\n\t\t\t\t) :\n\t\t\t\tnew _Api( this );\n\t\t};\n\t\t\n\t\t\n\t\t/**\n\t\t * Add a single new row or multiple rows of data to the table. Please note\n\t\t * that this is suitable for client-side processing only - if you are using\n\t\t * server-side processing (i.e. \"bServerSide\": true), then to add data, you\n\t\t * must add it to the data source, i.e. the server-side, through an Ajax call.\n\t\t *  @param {array|object} data The data to be added to the table. This can be:\n\t\t *    <ul>\n\t\t *      <li>1D array of data - add a single row with the data provided</li>\n\t\t *      <li>2D array of arrays - add multiple rows in a single call</li>\n\t\t *      <li>object - data object when using <i>mData</i></li>\n\t\t *      <li>array of objects - multiple data objects when using <i>mData</i></li>\n\t\t *    </ul>\n\t\t *  @param {bool} [redraw=true] redraw the table or not\n\t\t *  @returns {array} An array of integers, representing the list of indexes in\n\t\t *    <i>aoData</i> ({@link DataTable.models.oSettings}) that have been added to\n\t\t *    the table.\n\t\t *  @dtopt API\n\t\t *  @deprecated Since v1.10\n\t\t *\n\t\t *  @example\n\t\t *    // Global var for counter\n\t\t *    var giCount = 2;\n\t\t *\n\t\t *    $(document).ready(function() {\n\t\t *      $('#example').dataTable();\n\t\t *    } );\n\t\t *\n\t\t *    function fnClickAddRow() {\n\t\t *      $('#example').dataTable().fnAddData( [\n\t\t *        giCount+\".1\",\n\t\t *        giCount+\".2\",\n\t\t *        giCount+\".3\",\n\t\t *        giCount+\".4\" ]\n\t\t *      );\n\t\t *\n\t\t *      giCount++;\n\t\t *    }\n\t\t */\n\t\tthis.fnAddData = function( data, redraw )\n\t\t{\n\t\t\tvar api = this.api( true );\n\t\t\n\t\t\t/* Check if we want to add multiple rows or not */\n\t\t\tvar rows = $.isArray(data) && ( $.isArray(data[0]) || $.isPlainObject(data[0]) ) ?\n\t\t\t\tapi.rows.add( data ) :\n\t\t\t\tapi.row.add( data );\n\t\t\n\t\t\tif ( redraw === undefined || redraw ) {\n\t\t\t\tapi.draw();\n\t\t\t}\n\t\t\n\t\t\treturn rows.flatten().toArray();\n\t\t};\n\t\t\n\t\t\n\t\t/**\n\t\t * This function will make DataTables recalculate the column sizes, based on the data\n\t\t * contained in the table and the sizes applied to the columns (in the DOM, CSS or\n\t\t * through the sWidth parameter). This can be useful when the width of the table's\n\t\t * parent element changes (for example a window resize).\n\t\t *  @param {boolean} [bRedraw=true] Redraw the table or not, you will typically want to\n\t\t *  @dtopt API\n\t\t *  @deprecated Since v1.10\n\t\t *\n\t\t *  @example\n\t\t *    $(document).ready(function() {\n\t\t *      var oTable = $('#example').dataTable( {\n\t\t *        \"sScrollY\": \"200px\",\n\t\t *        \"bPaginate\": false\n\t\t *      } );\n\t\t *\n\t\t *      $(window).on('resize', function () {\n\t\t *        oTable.fnAdjustColumnSizing();\n\t\t *      } );\n\t\t *    } );\n\t\t */\n\t\tthis.fnAdjustColumnSizing = function ( bRedraw )\n\t\t{\n\t\t\tvar api = this.api( true ).columns.adjust();\n\t\t\tvar settings = api.settings()[0];\n\t\t\tvar scroll = settings.oScroll;\n\t\t\n\t\t\tif ( bRedraw === undefined || bRedraw ) {\n\t\t\t\tapi.draw( false );\n\t\t\t}\n\t\t\telse if ( scroll.sX !== \"\" || scroll.sY !== \"\" ) {\n\t\t\t\t/* If not redrawing, but scrolling, we want to apply the new column sizes anyway */\n\t\t\t\t_fnScrollDraw( settings );\n\t\t\t}\n\t\t};\n\t\t\n\t\t\n\t\t/**\n\t\t * Quickly and simply clear a table\n\t\t *  @param {bool} [bRedraw=true] redraw the table or not\n\t\t *  @dtopt API\n\t\t *  @deprecated Since v1.10\n\t\t *\n\t\t *  @example\n\t\t *    $(document).ready(function() {\n\t\t *      var oTable = $('#example').dataTable();\n\t\t *\n\t\t *      // Immediately 'nuke' the current rows (perhaps waiting for an Ajax callback...)\n\t\t *      oTable.fnClearTable();\n\t\t *    } );\n\t\t */\n\t\tthis.fnClearTable = function( bRedraw )\n\t\t{\n\t\t\tvar api = this.api( true ).clear();\n\t\t\n\t\t\tif ( bRedraw === undefined || bRedraw ) {\n\t\t\t\tapi.draw();\n\t\t\t}\n\t\t};\n\t\t\n\t\t\n\t\t/**\n\t\t * The exact opposite of 'opening' a row, this function will close any rows which\n\t\t * are currently 'open'.\n\t\t *  @param {node} nTr the table row to 'close'\n\t\t *  @returns {int} 0 on success, or 1 if failed (can't find the row)\n\t\t *  @dtopt API\n\t\t *  @deprecated Since v1.10\n\t\t *\n\t\t *  @example\n\t\t *    $(document).ready(function() {\n\t\t *      var oTable;\n\t\t *\n\t\t *      // 'open' an information row when a row is clicked on\n\t\t *      $('#example tbody tr').click( function () {\n\t\t *        if ( oTable.fnIsOpen(this) ) {\n\t\t *          oTable.fnClose( this );\n\t\t *        } else {\n\t\t *          oTable.fnOpen( this, \"Temporary row opened\", \"info_row\" );\n\t\t *        }\n\t\t *      } );\n\t\t *\n\t\t *      oTable = $('#example').dataTable();\n\t\t *    } );\n\t\t */\n\t\tthis.fnClose = function( nTr )\n\t\t{\n\t\t\tthis.api( true ).row( nTr ).child.hide();\n\t\t};\n\t\t\n\t\t\n\t\t/**\n\t\t * Remove a row for the table\n\t\t *  @param {mixed} target The index of the row from aoData to be deleted, or\n\t\t *    the TR element you want to delete\n\t\t *  @param {function|null} [callBack] Callback function\n\t\t *  @param {bool} [redraw=true] Redraw the table or not\n\t\t *  @returns {array} The row that was deleted\n\t\t *  @dtopt API\n\t\t *  @deprecated Since v1.10\n\t\t *\n\t\t *  @example\n\t\t *    $(document).ready(function() {\n\t\t *      var oTable = $('#example').dataTable();\n\t\t *\n\t\t *      // Immediately remove the first row\n\t\t *      oTable.fnDeleteRow( 0 );\n\t\t *    } );\n\t\t */\n\t\tthis.fnDeleteRow = function( target, callback, redraw )\n\t\t{\n\t\t\tvar api = this.api( true );\n\t\t\tvar rows = api.rows( target );\n\t\t\tvar settings = rows.settings()[0];\n\t\t\tvar data = settings.aoData[ rows[0][0] ];\n\t\t\n\t\t\trows.remove();\n\t\t\n\t\t\tif ( callback ) {\n\t\t\t\tcallback.call( this, settings, data );\n\t\t\t}\n\t\t\n\t\t\tif ( redraw === undefined || redraw ) {\n\t\t\t\tapi.draw();\n\t\t\t}\n\t\t\n\t\t\treturn data;\n\t\t};\n\t\t\n\t\t\n\t\t/**\n\t\t * Restore the table to it's original state in the DOM by removing all of DataTables\n\t\t * enhancements, alterations to the DOM structure of the table and event listeners.\n\t\t *  @param {boolean} [remove=false] Completely remove the table from the DOM\n\t\t *  @dtopt API\n\t\t *  @deprecated Since v1.10\n\t\t *\n\t\t *  @example\n\t\t *    $(document).ready(function() {\n\t\t *      // This example is fairly pointless in reality, but shows how fnDestroy can be used\n\t\t *      var oTable = $('#example').dataTable();\n\t\t *      oTable.fnDestroy();\n\t\t *    } );\n\t\t */\n\t\tthis.fnDestroy = function ( remove )\n\t\t{\n\t\t\tthis.api( true ).destroy( remove );\n\t\t};\n\t\t\n\t\t\n\t\t/**\n\t\t * Redraw the table\n\t\t *  @param {bool} [complete=true] Re-filter and resort (if enabled) the table before the draw.\n\t\t *  @dtopt API\n\t\t *  @deprecated Since v1.10\n\t\t *\n\t\t *  @example\n\t\t *    $(document).ready(function() {\n\t\t *      var oTable = $('#example').dataTable();\n\t\t *\n\t\t *      // Re-draw the table - you wouldn't want to do it here, but it's an example :-)\n\t\t *      oTable.fnDraw();\n\t\t *    } );\n\t\t */\n\t\tthis.fnDraw = function( complete )\n\t\t{\n\t\t\t// Note that this isn't an exact match to the old call to _fnDraw - it takes\n\t\t\t// into account the new data, but can hold position.\n\t\t\tthis.api( true ).draw( complete );\n\t\t};\n\t\t\n\t\t\n\t\t/**\n\t\t * Filter the input based on data\n\t\t *  @param {string} sInput String to filter the table on\n\t\t *  @param {int|null} [iColumn] Column to limit filtering to\n\t\t *  @param {bool} [bRegex=false] Treat as regular expression or not\n\t\t *  @param {bool} [bSmart=true] Perform smart filtering or not\n\t\t *  @param {bool} [bShowGlobal=true] Show the input global filter in it's input box(es)\n\t\t *  @param {bool} [bCaseInsensitive=true] Do case-insensitive matching (true) or not (false)\n\t\t *  @dtopt API\n\t\t *  @deprecated Since v1.10\n\t\t *\n\t\t *  @example\n\t\t *    $(document).ready(function() {\n\t\t *      var oTable = $('#example').dataTable();\n\t\t *\n\t\t *      // Sometime later - filter...\n\t\t *      oTable.fnFilter( 'test string' );\n\t\t *    } );\n\t\t */\n\t\tthis.fnFilter = function( sInput, iColumn, bRegex, bSmart, bShowGlobal, bCaseInsensitive )\n\t\t{\n\t\t\tvar api = this.api( true );\n\t\t\n\t\t\tif ( iColumn === null || iColumn === undefined ) {\n\t\t\t\tapi.search( sInput, bRegex, bSmart, bCaseInsensitive );\n\t\t\t}\n\t\t\telse {\n\t\t\t\tapi.column( iColumn ).search( sInput, bRegex, bSmart, bCaseInsensitive );\n\t\t\t}\n\t\t\n\t\t\tapi.draw();\n\t\t};\n\t\t\n\t\t\n\t\t/**\n\t\t * Get the data for the whole table, an individual row or an individual cell based on the\n\t\t * provided parameters.\n\t\t *  @param {int|node} [src] A TR row node, TD/TH cell node or an integer. If given as\n\t\t *    a TR node then the data source for the whole row will be returned. If given as a\n\t\t *    TD/TH cell node then iCol will be automatically calculated and the data for the\n\t\t *    cell returned. If given as an integer, then this is treated as the aoData internal\n\t\t *    data index for the row (see fnGetPosition) and the data for that row used.\n\t\t *  @param {int} [col] Optional column index that you want the data of.\n\t\t *  @returns {array|object|string} If mRow is undefined, then the data for all rows is\n\t\t *    returned. If mRow is defined, just data for that row, and is iCol is\n\t\t *    defined, only data for the designated cell is returned.\n\t\t *  @dtopt API\n\t\t *  @deprecated Since v1.10\n\t\t *\n\t\t *  @example\n\t\t *    // Row data\n\t\t *    $(document).ready(function() {\n\t\t *      oTable = $('#example').dataTable();\n\t\t *\n\t\t *      oTable.$('tr').click( function () {\n\t\t *        var data = oTable.fnGetData( this );\n\t\t *        // ... do something with the array / object of data for the row\n\t\t *      } );\n\t\t *    } );\n\t\t *\n\t\t *  @example\n\t\t *    // Individual cell data\n\t\t *    $(document).ready(function() {\n\t\t *      oTable = $('#example').dataTable();\n\t\t *\n\t\t *      oTable.$('td').click( function () {\n\t\t *        var sData = oTable.fnGetData( this );\n\t\t *        alert( 'The cell clicked on had the value of '+sData );\n\t\t *      } );\n\t\t *    } );\n\t\t */\n\t\tthis.fnGetData = function( src, col )\n\t\t{\n\t\t\tvar api = this.api( true );\n\t\t\n\t\t\tif ( src !== undefined ) {\n\t\t\t\tvar type = src.nodeName ? src.nodeName.toLowerCase() : '';\n\t\t\n\t\t\t\treturn col !== undefined || type == 'td' || type == 'th' ?\n\t\t\t\t\tapi.cell( src, col ).data() :\n\t\t\t\t\tapi.row( src ).data() || null;\n\t\t\t}\n\t\t\n\t\t\treturn api.data().toArray();\n\t\t};\n\t\t\n\t\t\n\t\t/**\n\t\t * Get an array of the TR nodes that are used in the table's body. Note that you will\n\t\t * typically want to use the '$' API method in preference to this as it is more\n\t\t * flexible.\n\t\t *  @param {int} [iRow] Optional row index for the TR element you want\n\t\t *  @returns {array|node} If iRow is undefined, returns an array of all TR elements\n\t\t *    in the table's body, or iRow is defined, just the TR element requested.\n\t\t *  @dtopt API\n\t\t *  @deprecated Since v1.10\n\t\t *\n\t\t *  @example\n\t\t *    $(document).ready(function() {\n\t\t *      var oTable = $('#example').dataTable();\n\t\t *\n\t\t *      // Get the nodes from the table\n\t\t *      var nNodes = oTable.fnGetNodes( );\n\t\t *    } );\n\t\t */\n\t\tthis.fnGetNodes = function( iRow )\n\t\t{\n\t\t\tvar api = this.api( true );\n\t\t\n\t\t\treturn iRow !== undefined ?\n\t\t\t\tapi.row( iRow ).node() :\n\t\t\t\tapi.rows().nodes().flatten().toArray();\n\t\t};\n\t\t\n\t\t\n\t\t/**\n\t\t * Get the array indexes of a particular cell from it's DOM element\n\t\t * and column index including hidden columns\n\t\t *  @param {node} node this can either be a TR, TD or TH in the table's body\n\t\t *  @returns {int} If nNode is given as a TR, then a single index is returned, or\n\t\t *    if given as a cell, an array of [row index, column index (visible),\n\t\t *    column index (all)] is given.\n\t\t *  @dtopt API\n\t\t *  @deprecated Since v1.10\n\t\t *\n\t\t *  @example\n\t\t *    $(document).ready(function() {\n\t\t *      $('#example tbody td').click( function () {\n\t\t *        // Get the position of the current data from the node\n\t\t *        var aPos = oTable.fnGetPosition( this );\n\t\t *\n\t\t *        // Get the data array for this row\n\t\t *        var aData = oTable.fnGetData( aPos[0] );\n\t\t *\n\t\t *        // Update the data array and return the value\n\t\t *        aData[ aPos[1] ] = 'clicked';\n\t\t *        this.innerHTML = 'clicked';\n\t\t *      } );\n\t\t *\n\t\t *      // Init DataTables\n\t\t *      oTable = $('#example').dataTable();\n\t\t *    } );\n\t\t */\n\t\tthis.fnGetPosition = function( node )\n\t\t{\n\t\t\tvar api = this.api( true );\n\t\t\tvar nodeName = node.nodeName.toUpperCase();\n\t\t\n\t\t\tif ( nodeName == 'TR' ) {\n\t\t\t\treturn api.row( node ).index();\n\t\t\t}\n\t\t\telse if ( nodeName == 'TD' || nodeName == 'TH' ) {\n\t\t\t\tvar cell = api.cell( node ).index();\n\t\t\n\t\t\t\treturn [\n\t\t\t\t\tcell.row,\n\t\t\t\t\tcell.columnVisible,\n\t\t\t\t\tcell.column\n\t\t\t\t];\n\t\t\t}\n\t\t\treturn null;\n\t\t};\n\t\t\n\t\t\n\t\t/**\n\t\t * Check to see if a row is 'open' or not.\n\t\t *  @param {node} nTr the table row to check\n\t\t *  @returns {boolean} true if the row is currently open, false otherwise\n\t\t *  @dtopt API\n\t\t *  @deprecated Since v1.10\n\t\t *\n\t\t *  @example\n\t\t *    $(document).ready(function() {\n\t\t *      var oTable;\n\t\t *\n\t\t *      // 'open' an information row when a row is clicked on\n\t\t *      $('#example tbody tr').click( function () {\n\t\t *        if ( oTable.fnIsOpen(this) ) {\n\t\t *          oTable.fnClose( this );\n\t\t *        } else {\n\t\t *          oTable.fnOpen( this, \"Temporary row opened\", \"info_row\" );\n\t\t *        }\n\t\t *      } );\n\t\t *\n\t\t *      oTable = $('#example').dataTable();\n\t\t *    } );\n\t\t */\n\t\tthis.fnIsOpen = function( nTr )\n\t\t{\n\t\t\treturn this.api( true ).row( nTr ).child.isShown();\n\t\t};\n\t\t\n\t\t\n\t\t/**\n\t\t * This function will place a new row directly after a row which is currently\n\t\t * on display on the page, with the HTML contents that is passed into the\n\t\t * function. This can be used, for example, to ask for confirmation that a\n\t\t * particular record should be deleted.\n\t\t *  @param {node} nTr The table row to 'open'\n\t\t *  @param {string|node|jQuery} mHtml The HTML to put into the row\n\t\t *  @param {string} sClass Class to give the new TD cell\n\t\t *  @returns {node} The row opened. Note that if the table row passed in as the\n\t\t *    first parameter, is not found in the table, this method will silently\n\t\t *    return.\n\t\t *  @dtopt API\n\t\t *  @deprecated Since v1.10\n\t\t *\n\t\t *  @example\n\t\t *    $(document).ready(function() {\n\t\t *      var oTable;\n\t\t *\n\t\t *      // 'open' an information row when a row is clicked on\n\t\t *      $('#example tbody tr').click( function () {\n\t\t *        if ( oTable.fnIsOpen(this) ) {\n\t\t *          oTable.fnClose( this );\n\t\t *        } else {\n\t\t *          oTable.fnOpen( this, \"Temporary row opened\", \"info_row\" );\n\t\t *        }\n\t\t *      } );\n\t\t *\n\t\t *      oTable = $('#example').dataTable();\n\t\t *    } );\n\t\t */\n\t\tthis.fnOpen = function( nTr, mHtml, sClass )\n\t\t{\n\t\t\treturn this.api( true )\n\t\t\t\t.row( nTr )\n\t\t\t\t.child( mHtml, sClass )\n\t\t\t\t.show()\n\t\t\t\t.child()[0];\n\t\t};\n\t\t\n\t\t\n\t\t/**\n\t\t * Change the pagination - provides the internal logic for pagination in a simple API\n\t\t * function. With this function you can have a DataTables table go to the next,\n\t\t * previous, first or last pages.\n\t\t *  @param {string|int} mAction Paging action to take: \"first\", \"previous\", \"next\" or \"last\"\n\t\t *    or page number to jump to (integer), note that page 0 is the first page.\n\t\t *  @param {bool} [bRedraw=true] Redraw the table or not\n\t\t *  @dtopt API\n\t\t *  @deprecated Since v1.10\n\t\t *\n\t\t *  @example\n\t\t *    $(document).ready(function() {\n\t\t *      var oTable = $('#example').dataTable();\n\t\t *      oTable.fnPageChange( 'next' );\n\t\t *    } );\n\t\t */\n\t\tthis.fnPageChange = function ( mAction, bRedraw )\n\t\t{\n\t\t\tvar api = this.api( true ).page( mAction );\n\t\t\n\t\t\tif ( bRedraw === undefined || bRedraw ) {\n\t\t\t\tapi.draw(false);\n\t\t\t}\n\t\t};\n\t\t\n\t\t\n\t\t/**\n\t\t * Show a particular column\n\t\t *  @param {int} iCol The column whose display should be changed\n\t\t *  @param {bool} bShow Show (true) or hide (false) the column\n\t\t *  @param {bool} [bRedraw=true] Redraw the table or not\n\t\t *  @dtopt API\n\t\t *  @deprecated Since v1.10\n\t\t *\n\t\t *  @example\n\t\t *    $(document).ready(function() {\n\t\t *      var oTable = $('#example').dataTable();\n\t\t *\n\t\t *      // Hide the second column after initialisation\n\t\t *      oTable.fnSetColumnVis( 1, false );\n\t\t *    } );\n\t\t */\n\t\tthis.fnSetColumnVis = function ( iCol, bShow, bRedraw )\n\t\t{\n\t\t\tvar api = this.api( true ).column( iCol ).visible( bShow );\n\t\t\n\t\t\tif ( bRedraw === undefined || bRedraw ) {\n\t\t\t\tapi.columns.adjust().draw();\n\t\t\t}\n\t\t};\n\t\t\n\t\t\n\t\t/**\n\t\t * Get the settings for a particular table for external manipulation\n\t\t *  @returns {object} DataTables settings object. See\n\t\t *    {@link DataTable.models.oSettings}\n\t\t *  @dtopt API\n\t\t *  @deprecated Since v1.10\n\t\t *\n\t\t *  @example\n\t\t *    $(document).ready(function() {\n\t\t *      var oTable = $('#example').dataTable();\n\t\t *      var oSettings = oTable.fnSettings();\n\t\t *\n\t\t *      // Show an example parameter from the settings\n\t\t *      alert( oSettings._iDisplayStart );\n\t\t *    } );\n\t\t */\n\t\tthis.fnSettings = function()\n\t\t{\n\t\t\treturn _fnSettingsFromNode( this[_ext.iApiIndex] );\n\t\t};\n\t\t\n\t\t\n\t\t/**\n\t\t * Sort the table by a particular column\n\t\t *  @param {int} iCol the data index to sort on. Note that this will not match the\n\t\t *    'display index' if you have hidden data entries\n\t\t *  @dtopt API\n\t\t *  @deprecated Since v1.10\n\t\t *\n\t\t *  @example\n\t\t *    $(document).ready(function() {\n\t\t *      var oTable = $('#example').dataTable();\n\t\t *\n\t\t *      // Sort immediately with columns 0 and 1\n\t\t *      oTable.fnSort( [ [0,'asc'], [1,'asc'] ] );\n\t\t *    } );\n\t\t */\n\t\tthis.fnSort = function( aaSort )\n\t\t{\n\t\t\tthis.api( true ).order( aaSort ).draw();\n\t\t};\n\t\t\n\t\t\n\t\t/**\n\t\t * Attach a sort listener to an element for a given column\n\t\t *  @param {node} nNode the element to attach the sort listener to\n\t\t *  @param {int} iColumn the column that a click on this node will sort on\n\t\t *  @param {function} [fnCallback] callback function when sort is run\n\t\t *  @dtopt API\n\t\t *  @deprecated Since v1.10\n\t\t *\n\t\t *  @example\n\t\t *    $(document).ready(function() {\n\t\t *      var oTable = $('#example').dataTable();\n\t\t *\n\t\t *      // Sort on column 1, when 'sorter' is clicked on\n\t\t *      oTable.fnSortListener( document.getElementById('sorter'), 1 );\n\t\t *    } );\n\t\t */\n\t\tthis.fnSortListener = function( nNode, iColumn, fnCallback )\n\t\t{\n\t\t\tthis.api( true ).order.listener( nNode, iColumn, fnCallback );\n\t\t};\n\t\t\n\t\t\n\t\t/**\n\t\t * Update a table cell or row - this method will accept either a single value to\n\t\t * update the cell with, an array of values with one element for each column or\n\t\t * an object in the same format as the original data source. The function is\n\t\t * self-referencing in order to make the multi column updates easier.\n\t\t *  @param {object|array|string} mData Data to update the cell/row with\n\t\t *  @param {node|int} mRow TR element you want to update or the aoData index\n\t\t *  @param {int} [iColumn] The column to update, give as null or undefined to\n\t\t *    update a whole row.\n\t\t *  @param {bool} [bRedraw=true] Redraw the table or not\n\t\t *  @param {bool} [bAction=true] Perform pre-draw actions or not\n\t\t *  @returns {int} 0 on success, 1 on error\n\t\t *  @dtopt API\n\t\t *  @deprecated Since v1.10\n\t\t *\n\t\t *  @example\n\t\t *    $(document).ready(function() {\n\t\t *      var oTable = $('#example').dataTable();\n\t\t *      oTable.fnUpdate( 'Example update', 0, 0 ); // Single cell\n\t\t *      oTable.fnUpdate( ['a', 'b', 'c', 'd', 'e'], $('tbody tr')[0] ); // Row\n\t\t *    } );\n\t\t */\n\t\tthis.fnUpdate = function( mData, mRow, iColumn, bRedraw, bAction )\n\t\t{\n\t\t\tvar api = this.api( true );\n\t\t\n\t\t\tif ( iColumn === undefined || iColumn === null ) {\n\t\t\t\tapi.row( mRow ).data( mData );\n\t\t\t}\n\t\t\telse {\n\t\t\t\tapi.cell( mRow, iColumn ).data( mData );\n\t\t\t}\n\t\t\n\t\t\tif ( bAction === undefined || bAction ) {\n\t\t\t\tapi.columns.adjust();\n\t\t\t}\n\t\t\n\t\t\tif ( bRedraw === undefined || bRedraw ) {\n\t\t\t\tapi.draw();\n\t\t\t}\n\t\t\treturn 0;\n\t\t};\n\t\t\n\t\t\n\t\t/**\n\t\t * Provide a common method for plug-ins to check the version of DataTables being used, in order\n\t\t * to ensure compatibility.\n\t\t *  @param {string} sVersion Version string to check for, in the format \"X.Y.Z\". Note that the\n\t\t *    formats \"X\" and \"X.Y\" are also acceptable.\n\t\t *  @returns {boolean} true if this version of DataTables is greater or equal to the required\n\t\t *    version, or false if this version of DataTales is not suitable\n\t\t *  @method\n\t\t *  @dtopt API\n\t\t *  @deprecated Since v1.10\n\t\t *\n\t\t *  @example\n\t\t *    $(document).ready(function() {\n\t\t *      var oTable = $('#example').dataTable();\n\t\t *      alert( oTable.fnVersionCheck( '1.9.0' ) );\n\t\t *    } );\n\t\t */\n\t\tthis.fnVersionCheck = _ext.fnVersionCheck;\n\t\t\n\n\t\tvar _that = this;\n\t\tvar emptyInit = options === undefined;\n\t\tvar len = this.length;\n\n\t\tif ( emptyInit ) {\n\t\t\toptions = {};\n\t\t}\n\n\t\tthis.oApi = this.internal = _ext.internal;\n\n\t\t// Extend with old style plug-in API methods\n\t\tfor ( var fn in DataTable.ext.internal ) {\n\t\t\tif ( fn ) {\n\t\t\t\tthis[fn] = _fnExternApiFunc(fn);\n\t\t\t}\n\t\t}\n\n\t\tthis.each(function() {\n\t\t\t// For each initialisation we want to give it a clean initialisation\n\t\t\t// object that can be bashed around\n\t\t\tvar o = {};\n\t\t\tvar oInit = len > 1 ? // optimisation for single table case\n\t\t\t\t_fnExtend( o, options, true ) :\n\t\t\t\toptions;\n\n\t\t\t/*global oInit,_that,emptyInit*/\n\t\t\tvar i=0, iLen, j, jLen, k, kLen;\n\t\t\tvar sId = this.getAttribute( 'id' );\n\t\t\tvar bInitHandedOff = false;\n\t\t\tvar defaults = DataTable.defaults;\n\t\t\tvar $this = $(this);\n\t\t\t\n\t\t\t\n\t\t\t/* Sanity check */\n\t\t\tif ( this.nodeName.toLowerCase() != 'table' )\n\t\t\t{\n\t\t\t\t_fnLog( null, 0, 'Non-table node initialisation ('+this.nodeName+')', 2 );\n\t\t\t\treturn;\n\t\t\t}\n\t\t\t\n\t\t\t/* Backwards compatibility for the defaults */\n\t\t\t_fnCompatOpts( defaults );\n\t\t\t_fnCompatCols( defaults.column );\n\t\t\t\n\t\t\t/* Convert the camel-case defaults to Hungarian */\n\t\t\t_fnCamelToHungarian( defaults, defaults, true );\n\t\t\t_fnCamelToHungarian( defaults.column, defaults.column, true );\n\t\t\t\n\t\t\t/* Setting up the initialisation object */\n\t\t\t_fnCamelToHungarian( defaults, $.extend( oInit, $this.data() ) );\n\t\t\t\n\t\t\t\n\t\t\t\n\t\t\t/* Check to see if we are re-initialising a table */\n\t\t\tvar allSettings = DataTable.settings;\n\t\t\tfor ( i=0, iLen=allSettings.length ; i<iLen ; i++ )\n\t\t\t{\n\t\t\t\tvar s = allSettings[i];\n\t\t\t\n\t\t\t\t/* Base check on table node */\n\t\t\t\tif ( s.nTable == this || s.nTHead.parentNode == this || (s.nTFoot && s.nTFoot.parentNode == this) )\n\t\t\t\t{\n\t\t\t\t\tvar bRetrieve = oInit.bRetrieve !== undefined ? oInit.bRetrieve : defaults.bRetrieve;\n\t\t\t\t\tvar bDestroy = oInit.bDestroy !== undefined ? oInit.bDestroy : defaults.bDestroy;\n\t\t\t\n\t\t\t\t\tif ( emptyInit || bRetrieve )\n\t\t\t\t\t{\n\t\t\t\t\t\treturn s.oInstance;\n\t\t\t\t\t}\n\t\t\t\t\telse if ( bDestroy )\n\t\t\t\t\t{\n\t\t\t\t\t\ts.oInstance.fnDestroy();\n\t\t\t\t\t\tbreak;\n\t\t\t\t\t}\n\t\t\t\t\telse\n\t\t\t\t\t{\n\t\t\t\t\t\t_fnLog( s, 0, 'Cannot reinitialise DataTable', 3 );\n\t\t\t\t\t\treturn;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\n\t\t\t\t/* If the element we are initialising has the same ID as a table which was previously\n\t\t\t\t * initialised, but the table nodes don't match (from before) then we destroy the old\n\t\t\t\t * instance by simply deleting it. This is under the assumption that the table has been\n\t\t\t\t * destroyed by other methods. Anyone using non-id selectors will need to do this manually\n\t\t\t\t */\n\t\t\t\tif ( s.sTableId == this.id )\n\t\t\t\t{\n\t\t\t\t\tallSettings.splice( i, 1 );\n\t\t\t\t\tbreak;\n\t\t\t\t}\n\t\t\t}\n\t\t\t\n\t\t\t/* Ensure the table has an ID - required for accessibility */\n\t\t\tif ( sId === null || sId === \"\" )\n\t\t\t{\n\t\t\t\tsId = \"DataTables_Table_\"+(DataTable.ext._unique++);\n\t\t\t\tthis.id = sId;\n\t\t\t}\n\t\t\t\n\t\t\t/* Create the settings object for this table and set some of the default parameters */\n\t\t\tvar oSettings = $.extend( true, {}, DataTable.models.oSettings, {\n\t\t\t\t\"sDestroyWidth\": $this[0].style.width,\n\t\t\t\t\"sInstance\":     sId,\n\t\t\t\t\"sTableId\":      sId\n\t\t\t} );\n\t\t\toSettings.nTable = this;\n\t\t\toSettings.oApi   = _that.internal;\n\t\t\toSettings.oInit  = oInit;\n\t\t\t\n\t\t\tallSettings.push( oSettings );\n\t\t\t\n\t\t\t// Need to add the instance after the instance after the settings object has been added\n\t\t\t// to the settings array, so we can self reference the table instance if more than one\n\t\t\toSettings.oInstance = (_that.length===1) ? _that : $this.dataTable();\n\t\t\t\n\t\t\t// Backwards compatibility, before we apply all the defaults\n\t\t\t_fnCompatOpts( oInit );\n\t\t\t\n\t\t\tif ( oInit.oLanguage )\n\t\t\t{\n\t\t\t\t_fnLanguageCompat( oInit.oLanguage );\n\t\t\t}\n\t\t\t\n\t\t\t// If the length menu is given, but the init display length is not, use the length menu\n\t\t\tif ( oInit.aLengthMenu && ! oInit.iDisplayLength )\n\t\t\t{\n\t\t\t\toInit.iDisplayLength = $.isArray( oInit.aLengthMenu[0] ) ?\n\t\t\t\t\toInit.aLengthMenu[0][0] : oInit.aLengthMenu[0];\n\t\t\t}\n\t\t\t\n\t\t\t// Apply the defaults and init options to make a single init object will all\n\t\t\t// options defined from defaults and instance options.\n\t\t\toInit = _fnExtend( $.extend( true, {}, defaults ), oInit );\n\t\t\t\n\t\t\t\n\t\t\t// Map the initialisation options onto the settings object\n\t\t\t_fnMap( oSettings.oFeatures, oInit, [\n\t\t\t\t\"bPaginate\",\n\t\t\t\t\"bLengthChange\",\n\t\t\t\t\"bFilter\",\n\t\t\t\t\"bSort\",\n\t\t\t\t\"bSortMulti\",\n\t\t\t\t\"bInfo\",\n\t\t\t\t\"bProcessing\",\n\t\t\t\t\"bAutoWidth\",\n\t\t\t\t\"bSortClasses\",\n\t\t\t\t\"bServerSide\",\n\t\t\t\t\"bDeferRender\"\n\t\t\t] );\n\t\t\t_fnMap( oSettings, oInit, [\n\t\t\t\t\"asStripeClasses\",\n\t\t\t\t\"ajax\",\n\t\t\t\t\"fnServerData\",\n\t\t\t\t\"fnFormatNumber\",\n\t\t\t\t\"sServerMethod\",\n\t\t\t\t\"aaSorting\",\n\t\t\t\t\"aaSortingFixed\",\n\t\t\t\t\"aLengthMenu\",\n\t\t\t\t\"sPaginationType\",\n\t\t\t\t\"sAjaxSource\",\n\t\t\t\t\"sAjaxDataProp\",\n\t\t\t\t\"iStateDuration\",\n\t\t\t\t\"sDom\",\n\t\t\t\t\"bSortCellsTop\",\n\t\t\t\t\"iTabIndex\",\n\t\t\t\t\"fnStateLoadCallback\",\n\t\t\t\t\"fnStateSaveCallback\",\n\t\t\t\t\"renderer\",\n\t\t\t\t\"searchDelay\",\n\t\t\t\t\"rowId\",\n\t\t\t\t[ \"iCookieDuration\", \"iStateDuration\" ], // backwards compat\n\t\t\t\t[ \"oSearch\", \"oPreviousSearch\" ],\n\t\t\t\t[ \"aoSearchCols\", \"aoPreSearchCols\" ],\n\t\t\t\t[ \"iDisplayLength\", \"_iDisplayLength\" ],\n\t\t\t\t[ \"bJQueryUI\", \"bJUI\" ]\n\t\t\t] );\n\t\t\t_fnMap( oSettings.oScroll, oInit, [\n\t\t\t\t[ \"sScrollX\", \"sX\" ],\n\t\t\t\t[ \"sScrollXInner\", \"sXInner\" ],\n\t\t\t\t[ \"sScrollY\", \"sY\" ],\n\t\t\t\t[ \"bScrollCollapse\", \"bCollapse\" ]\n\t\t\t] );\n\t\t\t_fnMap( oSettings.oLanguage, oInit, \"fnInfoCallback\" );\n\t\t\t\n\t\t\t/* Callback functions which are array driven */\n\t\t\t_fnCallbackReg( oSettings, 'aoDrawCallback',       oInit.fnDrawCallback,      'user' );\n\t\t\t_fnCallbackReg( oSettings, 'aoServerParams',       oInit.fnServerParams,      'user' );\n\t\t\t_fnCallbackReg( oSettings, 'aoStateSaveParams',    oInit.fnStateSaveParams,   'user' );\n\t\t\t_fnCallbackReg( oSettings, 'aoStateLoadParams',    oInit.fnStateLoadParams,   'user' );\n\t\t\t_fnCallbackReg( oSettings, 'aoStateLoaded',        oInit.fnStateLoaded,       'user' );\n\t\t\t_fnCallbackReg( oSettings, 'aoRowCallback',        oInit.fnRowCallback,       'user' );\n\t\t\t_fnCallbackReg( oSettings, 'aoRowCreatedCallback', oInit.fnCreatedRow,        'user' );\n\t\t\t_fnCallbackReg( oSettings, 'aoHeaderCallback',     oInit.fnHeaderCallback,    'user' );\n\t\t\t_fnCallbackReg( oSettings, 'aoFooterCallback',     oInit.fnFooterCallback,    'user' );\n\t\t\t_fnCallbackReg( oSettings, 'aoInitComplete',       oInit.fnInitComplete,      'user' );\n\t\t\t_fnCallbackReg( oSettings, 'aoPreDrawCallback',    oInit.fnPreDrawCallback,   'user' );\n\t\t\t\n\t\t\toSettings.rowIdFn = _fnGetObjectDataFn( oInit.rowId );\n\t\t\t\n\t\t\t/* Browser support detection */\n\t\t\t_fnBrowserDetect( oSettings );\n\t\t\t\n\t\t\tvar oClasses = oSettings.oClasses;\n\t\t\t\n\t\t\t// @todo Remove in 1.11\n\t\t\tif ( oInit.bJQueryUI )\n\t\t\t{\n\t\t\t\t/* Use the JUI classes object for display. You could clone the oStdClasses object if\n\t\t\t\t * you want to have multiple tables with multiple independent classes\n\t\t\t\t */\n\t\t\t\t$.extend( oClasses, DataTable.ext.oJUIClasses, oInit.oClasses );\n\t\t\t\n\t\t\t\tif ( oInit.sDom === defaults.sDom && defaults.sDom === \"lfrtip\" )\n\t\t\t\t{\n\t\t\t\t\t/* Set the DOM to use a layout suitable for jQuery UI's theming */\n\t\t\t\t\toSettings.sDom = '<\"H\"lfr>t<\"F\"ip>';\n\t\t\t\t}\n\t\t\t\n\t\t\t\tif ( ! oSettings.renderer ) {\n\t\t\t\t\toSettings.renderer = 'jqueryui';\n\t\t\t\t}\n\t\t\t\telse if ( $.isPlainObject( oSettings.renderer ) && ! oSettings.renderer.header ) {\n\t\t\t\t\toSettings.renderer.header = 'jqueryui';\n\t\t\t\t}\n\t\t\t}\n\t\t\telse\n\t\t\t{\n\t\t\t\t$.extend( oClasses, DataTable.ext.classes, oInit.oClasses );\n\t\t\t}\n\t\t\t$this.addClass( oClasses.sTable );\n\t\t\t\n\t\t\t\n\t\t\tif ( oSettings.iInitDisplayStart === undefined )\n\t\t\t{\n\t\t\t\t/* Display start point, taking into account the save saving */\n\t\t\t\toSettings.iInitDisplayStart = oInit.iDisplayStart;\n\t\t\t\toSettings._iDisplayStart = oInit.iDisplayStart;\n\t\t\t}\n\t\t\t\n\t\t\tif ( oInit.iDeferLoading !== null )\n\t\t\t{\n\t\t\t\toSettings.bDeferLoading = true;\n\t\t\t\tvar tmp = $.isArray( oInit.iDeferLoading );\n\t\t\t\toSettings._iRecordsDisplay = tmp ? oInit.iDeferLoading[0] : oInit.iDeferLoading;\n\t\t\t\toSettings._iRecordsTotal = tmp ? oInit.iDeferLoading[1] : oInit.iDeferLoading;\n\t\t\t}\n\t\t\t\n\t\t\t/* Language definitions */\n\t\t\tvar oLanguage = oSettings.oLanguage;\n\t\t\t$.extend( true, oLanguage, oInit.oLanguage );\n\t\t\t\n\t\t\tif ( oLanguage.sUrl )\n\t\t\t{\n\t\t\t\t/* Get the language definitions from a file - because this Ajax call makes the language\n\t\t\t\t * get async to the remainder of this function we use bInitHandedOff to indicate that\n\t\t\t\t * _fnInitialise will be fired by the returned Ajax handler, rather than the constructor\n\t\t\t\t */\n\t\t\t\t$.ajax( {\n\t\t\t\t\tdataType: 'json',\n\t\t\t\t\turl: oLanguage.sUrl,\n\t\t\t\t\tsuccess: function ( json ) {\n\t\t\t\t\t\t_fnLanguageCompat( json );\n\t\t\t\t\t\t_fnCamelToHungarian( defaults.oLanguage, json );\n\t\t\t\t\t\t$.extend( true, oLanguage, json );\n\t\t\t\t\t\t_fnInitialise( oSettings );\n\t\t\t\t\t},\n\t\t\t\t\terror: function () {\n\t\t\t\t\t\t// Error occurred loading language file, continue on as best we can\n\t\t\t\t\t\t_fnInitialise( oSettings );\n\t\t\t\t\t}\n\t\t\t\t} );\n\t\t\t\tbInitHandedOff = true;\n\t\t\t}\n\t\t\t\n\t\t\t/*\n\t\t\t * Stripes\n\t\t\t */\n\t\t\tif ( oInit.asStripeClasses === null )\n\t\t\t{\n\t\t\t\toSettings.asStripeClasses =[\n\t\t\t\t\toClasses.sStripeOdd,\n\t\t\t\t\toClasses.sStripeEven\n\t\t\t\t];\n\t\t\t}\n\t\t\t\n\t\t\t/* Remove row stripe classes if they are already on the table row */\n\t\t\tvar stripeClasses = oSettings.asStripeClasses;\n\t\t\tvar rowOne = $this.children('tbody').find('tr').eq(0);\n\t\t\tif ( $.inArray( true, $.map( stripeClasses, function(el, i) {\n\t\t\t\treturn rowOne.hasClass(el);\n\t\t\t} ) ) !== -1 ) {\n\t\t\t\t$('tbody tr', this).removeClass( stripeClasses.join(' ') );\n\t\t\t\toSettings.asDestroyStripes = stripeClasses.slice();\n\t\t\t}\n\t\t\t\n\t\t\t/*\n\t\t\t * Columns\n\t\t\t * See if we should load columns automatically or use defined ones\n\t\t\t */\n\t\t\tvar anThs = [];\n\t\t\tvar aoColumnsInit;\n\t\t\tvar nThead = this.getElementsByTagName('thead');\n\t\t\tif ( nThead.length !== 0 )\n\t\t\t{\n\t\t\t\t_fnDetectHeader( oSettings.aoHeader, nThead[0] );\n\t\t\t\tanThs = _fnGetUniqueThs( oSettings );\n\t\t\t}\n\t\t\t\n\t\t\t/* If not given a column array, generate one with nulls */\n\t\t\tif ( oInit.aoColumns === null )\n\t\t\t{\n\t\t\t\taoColumnsInit = [];\n\t\t\t\tfor ( i=0, iLen=anThs.length ; i<iLen ; i++ )\n\t\t\t\t{\n\t\t\t\t\taoColumnsInit.push( null );\n\t\t\t\t}\n\t\t\t}\n\t\t\telse\n\t\t\t{\n\t\t\t\taoColumnsInit = oInit.aoColumns;\n\t\t\t}\n\t\t\t\n\t\t\t/* Add the columns */\n\t\t\tfor ( i=0, iLen=aoColumnsInit.length ; i<iLen ; i++ )\n\t\t\t{\n\t\t\t\t_fnAddColumn( oSettings, anThs ? anThs[i] : null );\n\t\t\t}\n\t\t\t\n\t\t\t/* Apply the column definitions */\n\t\t\t_fnApplyColumnDefs( oSettings, oInit.aoColumnDefs, aoColumnsInit, function (iCol, oDef) {\n\t\t\t\t_fnColumnOptions( oSettings, iCol, oDef );\n\t\t\t} );\n\t\t\t\n\t\t\t/* HTML5 attribute detection - build an mData object automatically if the\n\t\t\t * attributes are found\n\t\t\t */\n\t\t\tif ( rowOne.length ) {\n\t\t\t\tvar a = function ( cell, name ) {\n\t\t\t\t\treturn cell.getAttribute( 'data-'+name ) !== null ? name : null;\n\t\t\t\t};\n\t\t\t\n\t\t\t\t$( rowOne[0] ).children('th, td').each( function (i, cell) {\n\t\t\t\t\tvar col = oSettings.aoColumns[i];\n\t\t\t\n\t\t\t\t\tif ( col.mData === i ) {\n\t\t\t\t\t\tvar sort = a( cell, 'sort' ) || a( cell, 'order' );\n\t\t\t\t\t\tvar filter = a( cell, 'filter' ) || a( cell, 'search' );\n\t\t\t\n\t\t\t\t\t\tif ( sort !== null || filter !== null ) {\n\t\t\t\t\t\t\tcol.mData = {\n\t\t\t\t\t\t\t\t_:      i+'.display',\n\t\t\t\t\t\t\t\tsort:   sort !== null   ? i+'.@data-'+sort   : undefined,\n\t\t\t\t\t\t\t\ttype:   sort !== null   ? i+'.@data-'+sort   : undefined,\n\t\t\t\t\t\t\t\tfilter: filter !== null ? i+'.@data-'+filter : undefined\n\t\t\t\t\t\t\t};\n\t\t\t\n\t\t\t\t\t\t\t_fnColumnOptions( oSettings, i );\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t} );\n\t\t\t}\n\t\t\t\n\t\t\tvar features = oSettings.oFeatures;\n\t\t\tvar loadedInit = function () {\n\t\t\t\t/*\n\t\t\t\t * Sorting\n\t\t\t\t * @todo For modularisation (1.11) this needs to do into a sort start up handler\n\t\t\t\t */\n\t\t\t\n\t\t\t\t// If aaSorting is not defined, then we use the first indicator in asSorting\n\t\t\t\t// in case that has been altered, so the default sort reflects that option\n\t\t\t\tif ( oInit.aaSorting === undefined ) {\n\t\t\t\t\tvar sorting = oSettings.aaSorting;\n\t\t\t\t\tfor ( i=0, iLen=sorting.length ; i<iLen ; i++ ) {\n\t\t\t\t\t\tsorting[i][1] = oSettings.aoColumns[ i ].asSorting[0];\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\n\t\t\t\t/* Do a first pass on the sorting classes (allows any size changes to be taken into\n\t\t\t\t * account, and also will apply sorting disabled classes if disabled\n\t\t\t\t */\n\t\t\t\t_fnSortingClasses( oSettings );\n\t\t\t\n\t\t\t\tif ( features.bSort ) {\n\t\t\t\t\t_fnCallbackReg( oSettings, 'aoDrawCallback', function () {\n\t\t\t\t\t\tif ( oSettings.bSorted ) {\n\t\t\t\t\t\t\tvar aSort = _fnSortFlatten( oSettings );\n\t\t\t\t\t\t\tvar sortedColumns = {};\n\t\t\t\n\t\t\t\t\t\t\t$.each( aSort, function (i, val) {\n\t\t\t\t\t\t\t\tsortedColumns[ val.src ] = val.dir;\n\t\t\t\t\t\t\t} );\n\t\t\t\n\t\t\t\t\t\t\t_fnCallbackFire( oSettings, null, 'order', [oSettings, aSort, sortedColumns] );\n\t\t\t\t\t\t\t_fnSortAria( oSettings );\n\t\t\t\t\t\t}\n\t\t\t\t\t} );\n\t\t\t\t}\n\t\t\t\n\t\t\t\t_fnCallbackReg( oSettings, 'aoDrawCallback', function () {\n\t\t\t\t\tif ( oSettings.bSorted || _fnDataSource( oSettings ) === 'ssp' || features.bDeferRender ) {\n\t\t\t\t\t\t_fnSortingClasses( oSettings );\n\t\t\t\t\t}\n\t\t\t\t}, 'sc' );\n\t\t\t\n\t\t\t\n\t\t\t\t/*\n\t\t\t\t * Final init\n\t\t\t\t * Cache the header, body and footer as required, creating them if needed\n\t\t\t\t */\n\t\t\t\n\t\t\t\t// Work around for Webkit bug 83867 - store the caption-side before removing from doc\n\t\t\t\tvar captions = $this.children('caption').each( function () {\n\t\t\t\t\tthis._captionSide = $(this).css('caption-side');\n\t\t\t\t} );\n\t\t\t\n\t\t\t\tvar thead = $this.children('thead');\n\t\t\t\tif ( thead.length === 0 ) {\n\t\t\t\t\tthead = $('<thead/>').appendTo($this);\n\t\t\t\t}\n\t\t\t\toSettings.nTHead = thead[0];\n\t\t\t\n\t\t\t\tvar tbody = $this.children('tbody');\n\t\t\t\tif ( tbody.length === 0 ) {\n\t\t\t\t\ttbody = $('<tbody/>').appendTo($this);\n\t\t\t\t}\n\t\t\t\toSettings.nTBody = tbody[0];\n\t\t\t\n\t\t\t\tvar tfoot = $this.children('tfoot');\n\t\t\t\tif ( tfoot.length === 0 && captions.length > 0 && (oSettings.oScroll.sX !== \"\" || oSettings.oScroll.sY !== \"\") ) {\n\t\t\t\t\t// If we are a scrolling table, and no footer has been given, then we need to create\n\t\t\t\t\t// a tfoot element for the caption element to be appended to\n\t\t\t\t\ttfoot = $('<tfoot/>').appendTo($this);\n\t\t\t\t}\n\t\t\t\n\t\t\t\tif ( tfoot.length === 0 || tfoot.children().length === 0 ) {\n\t\t\t\t\t$this.addClass( oClasses.sNoFooter );\n\t\t\t\t}\n\t\t\t\telse if ( tfoot.length > 0 ) {\n\t\t\t\t\toSettings.nTFoot = tfoot[0];\n\t\t\t\t\t_fnDetectHeader( oSettings.aoFooter, oSettings.nTFoot );\n\t\t\t\t}\n\t\t\t\n\t\t\t\t/* Check if there is data passing into the constructor */\n\t\t\t\tif ( oInit.aaData ) {\n\t\t\t\t\tfor ( i=0 ; i<oInit.aaData.length ; i++ ) {\n\t\t\t\t\t\t_fnAddData( oSettings, oInit.aaData[ i ] );\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\telse if ( oSettings.bDeferLoading || _fnDataSource( oSettings ) == 'dom' ) {\n\t\t\t\t\t/* Grab the data from the page - only do this when deferred loading or no Ajax\n\t\t\t\t\t * source since there is no point in reading the DOM data if we are then going\n\t\t\t\t\t * to replace it with Ajax data\n\t\t\t\t\t */\n\t\t\t\t\t_fnAddTr( oSettings, $(oSettings.nTBody).children('tr') );\n\t\t\t\t}\n\t\t\t\n\t\t\t\t/* Copy the data index array */\n\t\t\t\toSettings.aiDisplay = oSettings.aiDisplayMaster.slice();\n\t\t\t\n\t\t\t\t/* Initialisation complete - table can be drawn */\n\t\t\t\toSettings.bInitialised = true;\n\t\t\t\n\t\t\t\t/* Check if we need to initialise the table (it might not have been handed off to the\n\t\t\t\t * language processor)\n\t\t\t\t */\n\t\t\t\tif ( bInitHandedOff === false ) {\n\t\t\t\t\t_fnInitialise( oSettings );\n\t\t\t\t}\n\t\t\t};\n\t\t\t\n\t\t\t/* Must be done after everything which can be overridden by the state saving! */\n\t\t\tif ( oInit.bStateSave )\n\t\t\t{\n\t\t\t\tfeatures.bStateSave = true;\n\t\t\t\t_fnCallbackReg( oSettings, 'aoDrawCallback', _fnSaveState, 'state_save' );\n\t\t\t\t_fnLoadState( oSettings, oInit, loadedInit );\n\t\t\t}\n\t\t\telse {\n\t\t\t\tloadedInit();\n\t\t\t}\n\t\t\t\n\t\t} );\n\t\t_that = null;\n\t\treturn this;\n\t};\n\n\t\n\t/*\n\t * It is useful to have variables which are scoped locally so only the\n\t * DataTables functions can access them and they don't leak into global space.\n\t * At the same time these functions are often useful over multiple files in the\n\t * core and API, so we list, or at least document, all variables which are used\n\t * by DataTables as private variables here. This also ensures that there is no\n\t * clashing of variable names and that they can easily referenced for reuse.\n\t */\n\t\n\t\n\t// Defined else where\n\t//  _selector_run\n\t//  _selector_opts\n\t//  _selector_first\n\t//  _selector_row_indexes\n\t\n\tvar _ext; // DataTable.ext\n\tvar _Api; // DataTable.Api\n\tvar _api_register; // DataTable.Api.register\n\tvar _api_registerPlural; // DataTable.Api.registerPlural\n\t\n\tvar _re_dic = {};\n\tvar _re_new_lines = /[\\r\\n]/g;\n\tvar _re_html = /<.*?>/g;\n\t\n\t// This is not strict ISO8601 - Date.parse() is quite lax, although\n\t// implementations differ between browsers.\n\tvar _re_date = /^\\d{2,4}[\\.\\/\\-]\\d{1,2}[\\.\\/\\-]\\d{1,2}([T ]{1}\\d{1,2}[:\\.]\\d{2}([\\.:]\\d{2})?)?$/;\n\t\n\t// Escape regular expression special characters\n\tvar _re_escape_regex = new RegExp( '(\\\\' + [ '/', '.', '*', '+', '?', '|', '(', ')', '[', ']', '{', '}', '\\\\', '$', '^', '-' ].join('|\\\\') + ')', 'g' );\n\t\n\t// http://en.wikipedia.org/wiki/Foreign_exchange_market\n\t// - \\u20BD - Russian ruble.\n\t// - \\u20a9 - South Korean Won\n\t// - \\u20BA - Turkish Lira\n\t// - \\u20B9 - Indian Rupee\n\t// - R - Brazil (R$) and South Africa\n\t// - fr - Swiss Franc\n\t// - kr - Swedish krona, Norwegian krone and Danish krone\n\t// - \\u2009 is thin space and \\u202F is narrow no-break space, both used in many\n\t//   standards as thousands separators.\n\tvar _re_formatted_numeric = /[',$£€¥%\\u2009\\u202F\\u20BD\\u20a9\\u20BArfk]/gi;\n\t\n\t\n\tvar _empty = function ( d ) {\n\t\treturn !d || d === true || d === '-' ? true : false;\n\t};\n\t\n\t\n\tvar _intVal = function ( s ) {\n\t\tvar integer = parseInt( s, 10 );\n\t\treturn !isNaN(integer) && isFinite(s) ? integer : null;\n\t};\n\t\n\t// Convert from a formatted number with characters other than `.` as the\n\t// decimal place, to a Javascript number\n\tvar _numToDecimal = function ( num, decimalPoint ) {\n\t\t// Cache created regular expressions for speed as this function is called often\n\t\tif ( ! _re_dic[ decimalPoint ] ) {\n\t\t\t_re_dic[ decimalPoint ] = new RegExp( _fnEscapeRegex( decimalPoint ), 'g' );\n\t\t}\n\t\treturn typeof num === 'string' && decimalPoint !== '.' ?\n\t\t\tnum.replace( /\\./g, '' ).replace( _re_dic[ decimalPoint ], '.' ) :\n\t\t\tnum;\n\t};\n\t\n\t\n\tvar _isNumber = function ( d, decimalPoint, formatted ) {\n\t\tvar strType = typeof d === 'string';\n\t\n\t\t// If empty return immediately so there must be a number if it is a\n\t\t// formatted string (this stops the string \"k\", or \"kr\", etc being detected\n\t\t// as a formatted number for currency\n\t\tif ( _empty( d ) ) {\n\t\t\treturn true;\n\t\t}\n\t\n\t\tif ( decimalPoint && strType ) {\n\t\t\td = _numToDecimal( d, decimalPoint );\n\t\t}\n\t\n\t\tif ( formatted && strType ) {\n\t\t\td = d.replace( _re_formatted_numeric, '' );\n\t\t}\n\t\n\t\treturn !isNaN( parseFloat(d) ) && isFinite( d );\n\t};\n\t\n\t\n\t// A string without HTML in it can be considered to be HTML still\n\tvar _isHtml = function ( d ) {\n\t\treturn _empty( d ) || typeof d === 'string';\n\t};\n\t\n\t\n\tvar _htmlNumeric = function ( d, decimalPoint, formatted ) {\n\t\tif ( _empty( d ) ) {\n\t\t\treturn true;\n\t\t}\n\t\n\t\tvar html = _isHtml( d );\n\t\treturn ! html ?\n\t\t\tnull :\n\t\t\t_isNumber( _stripHtml( d ), decimalPoint, formatted ) ?\n\t\t\t\ttrue :\n\t\t\t\tnull;\n\t};\n\t\n\t\n\tvar _pluck = function ( a, prop, prop2 ) {\n\t\tvar out = [];\n\t\tvar i=0, ien=a.length;\n\t\n\t\t// Could have the test in the loop for slightly smaller code, but speed\n\t\t// is essential here\n\t\tif ( prop2 !== undefined ) {\n\t\t\tfor ( ; i<ien ; i++ ) {\n\t\t\t\tif ( a[i] && a[i][ prop ] ) {\n\t\t\t\t\tout.push( a[i][ prop ][ prop2 ] );\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\telse {\n\t\t\tfor ( ; i<ien ; i++ ) {\n\t\t\t\tif ( a[i] ) {\n\t\t\t\t\tout.push( a[i][ prop ] );\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\n\t\treturn out;\n\t};\n\t\n\t\n\t// Basically the same as _pluck, but rather than looping over `a` we use `order`\n\t// as the indexes to pick from `a`\n\tvar _pluck_order = function ( a, order, prop, prop2 )\n\t{\n\t\tvar out = [];\n\t\tvar i=0, ien=order.length;\n\t\n\t\t// Could have the test in the loop for slightly smaller code, but speed\n\t\t// is essential here\n\t\tif ( prop2 !== undefined ) {\n\t\t\tfor ( ; i<ien ; i++ ) {\n\t\t\t\tif ( a[ order[i] ][ prop ] ) {\n\t\t\t\t\tout.push( a[ order[i] ][ prop ][ prop2 ] );\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\telse {\n\t\t\tfor ( ; i<ien ; i++ ) {\n\t\t\t\tout.push( a[ order[i] ][ prop ] );\n\t\t\t}\n\t\t}\n\t\n\t\treturn out;\n\t};\n\t\n\t\n\tvar _range = function ( len, start )\n\t{\n\t\tvar out = [];\n\t\tvar end;\n\t\n\t\tif ( start === undefined ) {\n\t\t\tstart = 0;\n\t\t\tend = len;\n\t\t}\n\t\telse {\n\t\t\tend = start;\n\t\t\tstart = len;\n\t\t}\n\t\n\t\tfor ( var i=start ; i<end ; i++ ) {\n\t\t\tout.push( i );\n\t\t}\n\t\n\t\treturn out;\n\t};\n\t\n\t\n\tvar _removeEmpty = function ( a )\n\t{\n\t\tvar out = [];\n\t\n\t\tfor ( var i=0, ien=a.length ; i<ien ; i++ ) {\n\t\t\tif ( a[i] ) { // careful - will remove all falsy values!\n\t\t\t\tout.push( a[i] );\n\t\t\t}\n\t\t}\n\t\n\t\treturn out;\n\t};\n\t\n\t\n\tvar _stripHtml = function ( d ) {\n\t\treturn d.replace( _re_html, '' );\n\t};\n\t\n\t\n\t/**\n\t * Find the unique elements in a source array.\n\t *\n\t * @param  {array} src Source array\n\t * @return {array} Array of unique items\n\t * @ignore\n\t */\n\tvar _unique = function ( src )\n\t{\n\t\t// A faster unique method is to use object keys to identify used values,\n\t\t// but this doesn't work with arrays or objects, which we must also\n\t\t// consider. See jsperf.com/compare-array-unique-versions/4 for more\n\t\t// information.\n\t\tvar\n\t\t\tout = [],\n\t\t\tval,\n\t\t\ti, ien=src.length,\n\t\t\tj, k=0;\n\t\n\t\tagain: for ( i=0 ; i<ien ; i++ ) {\n\t\t\tval = src[i];\n\t\n\t\t\tfor ( j=0 ; j<k ; j++ ) {\n\t\t\t\tif ( out[j] === val ) {\n\t\t\t\t\tcontinue again;\n\t\t\t\t}\n\t\t\t}\n\t\n\t\t\tout.push( val );\n\t\t\tk++;\n\t\t}\n\t\n\t\treturn out;\n\t};\n\t\n\t\n\t/**\n\t * DataTables utility methods\n\t * \n\t * This namespace provides helper methods that DataTables uses internally to\n\t * create a DataTable, but which are not exclusively used only for DataTables.\n\t * These methods can be used by extension authors to save the duplication of\n\t * code.\n\t *\n\t *  @namespace\n\t */\n\tDataTable.util = {\n\t\t/**\n\t\t * Throttle the calls to a function. Arguments and context are maintained\n\t\t * for the throttled function.\n\t\t *\n\t\t * @param {function} fn Function to be called\n\t\t * @param {integer} freq Call frequency in mS\n\t\t * @return {function} Wrapped function\n\t\t */\n\t\tthrottle: function ( fn, freq ) {\n\t\t\tvar\n\t\t\t\tfrequency = freq !== undefined ? freq : 200,\n\t\t\t\tlast,\n\t\t\t\ttimer;\n\t\n\t\t\treturn function () {\n\t\t\t\tvar\n\t\t\t\t\tthat = this,\n\t\t\t\t\tnow  = +new Date(),\n\t\t\t\t\targs = arguments;\n\t\n\t\t\t\tif ( last && now < last + frequency ) {\n\t\t\t\t\tclearTimeout( timer );\n\t\n\t\t\t\t\ttimer = setTimeout( function () {\n\t\t\t\t\t\tlast = undefined;\n\t\t\t\t\t\tfn.apply( that, args );\n\t\t\t\t\t}, frequency );\n\t\t\t\t}\n\t\t\t\telse {\n\t\t\t\t\tlast = now;\n\t\t\t\t\tfn.apply( that, args );\n\t\t\t\t}\n\t\t\t};\n\t\t},\n\t\n\t\n\t\t/**\n\t\t * Escape a string such that it can be used in a regular expression\n\t\t *\n\t\t *  @param {string} val string to escape\n\t\t *  @returns {string} escaped string\n\t\t */\n\t\tescapeRegex: function ( val ) {\n\t\t\treturn val.replace( _re_escape_regex, '\\\\$1' );\n\t\t}\n\t};\n\t\n\t\n\t\n\t/**\n\t * Create a mapping object that allows camel case parameters to be looked up\n\t * for their Hungarian counterparts. The mapping is stored in a private\n\t * parameter called `_hungarianMap` which can be accessed on the source object.\n\t *  @param {object} o\n\t *  @memberof DataTable#oApi\n\t */\n\tfunction _fnHungarianMap ( o )\n\t{\n\t\tvar\n\t\t\thungarian = 'a aa ai ao as b fn i m o s ',\n\t\t\tmatch,\n\t\t\tnewKey,\n\t\t\tmap = {};\n\t\n\t\t$.each( o, function (key, val) {\n\t\t\tmatch = key.match(/^([^A-Z]+?)([A-Z])/);\n\t\n\t\t\tif ( match && hungarian.indexOf(match[1]+' ') !== -1 )\n\t\t\t{\n\t\t\t\tnewKey = key.replace( match[0], match[2].toLowerCase() );\n\t\t\t\tmap[ newKey ] = key;\n\t\n\t\t\t\tif ( match[1] === 'o' )\n\t\t\t\t{\n\t\t\t\t\t_fnHungarianMap( o[key] );\n\t\t\t\t}\n\t\t\t}\n\t\t} );\n\t\n\t\to._hungarianMap = map;\n\t}\n\t\n\t\n\t/**\n\t * Convert from camel case parameters to Hungarian, based on a Hungarian map\n\t * created by _fnHungarianMap.\n\t *  @param {object} src The model object which holds all parameters that can be\n\t *    mapped.\n\t *  @param {object} user The object to convert from camel case to Hungarian.\n\t *  @param {boolean} force When set to `true`, properties which already have a\n\t *    Hungarian value in the `user` object will be overwritten. Otherwise they\n\t *    won't be.\n\t *  @memberof DataTable#oApi\n\t */\n\tfunction _fnCamelToHungarian ( src, user, force )\n\t{\n\t\tif ( ! src._hungarianMap ) {\n\t\t\t_fnHungarianMap( src );\n\t\t}\n\t\n\t\tvar hungarianKey;\n\t\n\t\t$.each( user, function (key, val) {\n\t\t\thungarianKey = src._hungarianMap[ key ];\n\t\n\t\t\tif ( hungarianKey !== undefined && (force || user[hungarianKey] === undefined) )\n\t\t\t{\n\t\t\t\t// For objects, we need to buzz down into the object to copy parameters\n\t\t\t\tif ( hungarianKey.charAt(0) === 'o' )\n\t\t\t\t{\n\t\t\t\t\t// Copy the camelCase options over to the hungarian\n\t\t\t\t\tif ( ! user[ hungarianKey ] ) {\n\t\t\t\t\t\tuser[ hungarianKey ] = {};\n\t\t\t\t\t}\n\t\t\t\t\t$.extend( true, user[hungarianKey], user[key] );\n\t\n\t\t\t\t\t_fnCamelToHungarian( src[hungarianKey], user[hungarianKey], force );\n\t\t\t\t}\n\t\t\t\telse {\n\t\t\t\t\tuser[hungarianKey] = user[ key ];\n\t\t\t\t}\n\t\t\t}\n\t\t} );\n\t}\n\t\n\t\n\t/**\n\t * Language compatibility - when certain options are given, and others aren't, we\n\t * need to duplicate the values over, in order to provide backwards compatibility\n\t * with older language files.\n\t *  @param {object} oSettings dataTables settings object\n\t *  @memberof DataTable#oApi\n\t */\n\tfunction _fnLanguageCompat( lang )\n\t{\n\t\tvar defaults = DataTable.defaults.oLanguage;\n\t\tvar zeroRecords = lang.sZeroRecords;\n\t\n\t\t/* Backwards compatibility - if there is no sEmptyTable given, then use the same as\n\t\t * sZeroRecords - assuming that is given.\n\t\t */\n\t\tif ( ! lang.sEmptyTable && zeroRecords &&\n\t\t\tdefaults.sEmptyTable === \"No data available in table\" )\n\t\t{\n\t\t\t_fnMap( lang, lang, 'sZeroRecords', 'sEmptyTable' );\n\t\t}\n\t\n\t\t/* Likewise with loading records */\n\t\tif ( ! lang.sLoadingRecords && zeroRecords &&\n\t\t\tdefaults.sLoadingRecords === \"Loading...\" )\n\t\t{\n\t\t\t_fnMap( lang, lang, 'sZeroRecords', 'sLoadingRecords' );\n\t\t}\n\t\n\t\t// Old parameter name of the thousands separator mapped onto the new\n\t\tif ( lang.sInfoThousands ) {\n\t\t\tlang.sThousands = lang.sInfoThousands;\n\t\t}\n\t\n\t\tvar decimal = lang.sDecimal;\n\t\tif ( decimal ) {\n\t\t\t_addNumericSort( decimal );\n\t\t}\n\t}\n\t\n\t\n\t/**\n\t * Map one parameter onto another\n\t *  @param {object} o Object to map\n\t *  @param {*} knew The new parameter name\n\t *  @param {*} old The old parameter name\n\t */\n\tvar _fnCompatMap = function ( o, knew, old ) {\n\t\tif ( o[ knew ] !== undefined ) {\n\t\t\to[ old ] = o[ knew ];\n\t\t}\n\t};\n\t\n\t\n\t/**\n\t * Provide backwards compatibility for the main DT options. Note that the new\n\t * options are mapped onto the old parameters, so this is an external interface\n\t * change only.\n\t *  @param {object} init Object to map\n\t */\n\tfunction _fnCompatOpts ( init )\n\t{\n\t\t_fnCompatMap( init, 'ordering',      'bSort' );\n\t\t_fnCompatMap( init, 'orderMulti',    'bSortMulti' );\n\t\t_fnCompatMap( init, 'orderClasses',  'bSortClasses' );\n\t\t_fnCompatMap( init, 'orderCellsTop', 'bSortCellsTop' );\n\t\t_fnCompatMap( init, 'order',         'aaSorting' );\n\t\t_fnCompatMap( init, 'orderFixed',    'aaSortingFixed' );\n\t\t_fnCompatMap( init, 'paging',        'bPaginate' );\n\t\t_fnCompatMap( init, 'pagingType',    'sPaginationType' );\n\t\t_fnCompatMap( init, 'pageLength',    'iDisplayLength' );\n\t\t_fnCompatMap( init, 'searching',     'bFilter' );\n\t\n\t\t// Boolean initialisation of x-scrolling\n\t\tif ( typeof init.sScrollX === 'boolean' ) {\n\t\t\tinit.sScrollX = init.sScrollX ? '100%' : '';\n\t\t}\n\t\tif ( typeof init.scrollX === 'boolean' ) {\n\t\t\tinit.scrollX = init.scrollX ? '100%' : '';\n\t\t}\n\t\n\t\t// Column search objects are in an array, so it needs to be converted\n\t\t// element by element\n\t\tvar searchCols = init.aoSearchCols;\n\t\n\t\tif ( searchCols ) {\n\t\t\tfor ( var i=0, ien=searchCols.length ; i<ien ; i++ ) {\n\t\t\t\tif ( searchCols[i] ) {\n\t\t\t\t\t_fnCamelToHungarian( DataTable.models.oSearch, searchCols[i] );\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\t\n\t\n\t/**\n\t * Provide backwards compatibility for column options. Note that the new options\n\t * are mapped onto the old parameters, so this is an external interface change\n\t * only.\n\t *  @param {object} init Object to map\n\t */\n\tfunction _fnCompatCols ( init )\n\t{\n\t\t_fnCompatMap( init, 'orderable',     'bSortable' );\n\t\t_fnCompatMap( init, 'orderData',     'aDataSort' );\n\t\t_fnCompatMap( init, 'orderSequence', 'asSorting' );\n\t\t_fnCompatMap( init, 'orderDataType', 'sortDataType' );\n\t\n\t\t// orderData can be given as an integer\n\t\tvar dataSort = init.aDataSort;\n\t\tif ( dataSort && ! $.isArray( dataSort ) ) {\n\t\t\tinit.aDataSort = [ dataSort ];\n\t\t}\n\t}\n\t\n\t\n\t/**\n\t * Browser feature detection for capabilities, quirks\n\t *  @param {object} settings dataTables settings object\n\t *  @memberof DataTable#oApi\n\t */\n\tfunction _fnBrowserDetect( settings )\n\t{\n\t\t// We don't need to do this every time DataTables is constructed, the values\n\t\t// calculated are specific to the browser and OS configuration which we\n\t\t// don't expect to change between initialisations\n\t\tif ( ! DataTable.__browser ) {\n\t\t\tvar browser = {};\n\t\t\tDataTable.__browser = browser;\n\t\n\t\t\t// Scrolling feature / quirks detection\n\t\t\tvar n = $('<div/>')\n\t\t\t\t.css( {\n\t\t\t\t\tposition: 'fixed',\n\t\t\t\t\ttop: 0,\n\t\t\t\t\tleft: $(window).scrollLeft()*-1, // allow for scrolling\n\t\t\t\t\theight: 1,\n\t\t\t\t\twidth: 1,\n\t\t\t\t\toverflow: 'hidden'\n\t\t\t\t} )\n\t\t\t\t.append(\n\t\t\t\t\t$('<div/>')\n\t\t\t\t\t\t.css( {\n\t\t\t\t\t\t\tposition: 'absolute',\n\t\t\t\t\t\t\ttop: 1,\n\t\t\t\t\t\t\tleft: 1,\n\t\t\t\t\t\t\twidth: 100,\n\t\t\t\t\t\t\toverflow: 'scroll'\n\t\t\t\t\t\t} )\n\t\t\t\t\t\t.append(\n\t\t\t\t\t\t\t$('<div/>')\n\t\t\t\t\t\t\t\t.css( {\n\t\t\t\t\t\t\t\t\twidth: '100%',\n\t\t\t\t\t\t\t\t\theight: 10\n\t\t\t\t\t\t\t\t} )\n\t\t\t\t\t\t)\n\t\t\t\t)\n\t\t\t\t.appendTo( 'body' );\n\t\n\t\t\tvar outer = n.children();\n\t\t\tvar inner = outer.children();\n\t\n\t\t\t// Numbers below, in order, are:\n\t\t\t// inner.offsetWidth, inner.clientWidth, outer.offsetWidth, outer.clientWidth\n\t\t\t//\n\t\t\t// IE6 XP:                           100 100 100  83\n\t\t\t// IE7 Vista:                        100 100 100  83\n\t\t\t// IE 8+ Windows:                     83  83 100  83\n\t\t\t// Evergreen Windows:                 83  83 100  83\n\t\t\t// Evergreen Mac with scrollbars:     85  85 100  85\n\t\t\t// Evergreen Mac without scrollbars: 100 100 100 100\n\t\n\t\t\t// Get scrollbar width\n\t\t\tbrowser.barWidth = outer[0].offsetWidth - outer[0].clientWidth;\n\t\n\t\t\t// IE6/7 will oversize a width 100% element inside a scrolling element, to\n\t\t\t// include the width of the scrollbar, while other browsers ensure the inner\n\t\t\t// element is contained without forcing scrolling\n\t\t\tbrowser.bScrollOversize = inner[0].offsetWidth === 100 && outer[0].clientWidth !== 100;\n\t\n\t\t\t// In rtl text layout, some browsers (most, but not all) will place the\n\t\t\t// scrollbar on the left, rather than the right.\n\t\t\tbrowser.bScrollbarLeft = Math.round( inner.offset().left ) !== 1;\n\t\n\t\t\t// IE8- don't provide height and width for getBoundingClientRect\n\t\t\tbrowser.bBounding = n[0].getBoundingClientRect().width ? true : false;\n\t\n\t\t\tn.remove();\n\t\t}\n\t\n\t\t$.extend( settings.oBrowser, DataTable.__browser );\n\t\tsettings.oScroll.iBarWidth = DataTable.__browser.barWidth;\n\t}\n\t\n\t\n\t/**\n\t * Array.prototype reduce[Right] method, used for browsers which don't support\n\t * JS 1.6. Done this way to reduce code size, since we iterate either way\n\t *  @param {object} settings dataTables settings object\n\t *  @memberof DataTable#oApi\n\t */\n\tfunction _fnReduce ( that, fn, init, start, end, inc )\n\t{\n\t\tvar\n\t\t\ti = start,\n\t\t\tvalue,\n\t\t\tisSet = false;\n\t\n\t\tif ( init !== undefined ) {\n\t\t\tvalue = init;\n\t\t\tisSet = true;\n\t\t}\n\t\n\t\twhile ( i !== end ) {\n\t\t\tif ( ! that.hasOwnProperty(i) ) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\n\t\t\tvalue = isSet ?\n\t\t\t\tfn( value, that[i], i, that ) :\n\t\t\t\tthat[i];\n\t\n\t\t\tisSet = true;\n\t\t\ti += inc;\n\t\t}\n\t\n\t\treturn value;\n\t}\n\t\n\t/**\n\t * Add a column to the list used for the table with default values\n\t *  @param {object} oSettings dataTables settings object\n\t *  @param {node} nTh The th element for this column\n\t *  @memberof DataTable#oApi\n\t */\n\tfunction _fnAddColumn( oSettings, nTh )\n\t{\n\t\t// Add column to aoColumns array\n\t\tvar oDefaults = DataTable.defaults.column;\n\t\tvar iCol = oSettings.aoColumns.length;\n\t\tvar oCol = $.extend( {}, DataTable.models.oColumn, oDefaults, {\n\t\t\t\"nTh\": nTh ? nTh : document.createElement('th'),\n\t\t\t\"sTitle\":    oDefaults.sTitle    ? oDefaults.sTitle    : nTh ? nTh.innerHTML : '',\n\t\t\t\"aDataSort\": oDefaults.aDataSort ? oDefaults.aDataSort : [iCol],\n\t\t\t\"mData\": oDefaults.mData ? oDefaults.mData : iCol,\n\t\t\tidx: iCol\n\t\t} );\n\t\toSettings.aoColumns.push( oCol );\n\t\n\t\t// Add search object for column specific search. Note that the `searchCols[ iCol ]`\n\t\t// passed into extend can be undefined. This allows the user to give a default\n\t\t// with only some of the parameters defined, and also not give a default\n\t\tvar searchCols = oSettings.aoPreSearchCols;\n\t\tsearchCols[ iCol ] = $.extend( {}, DataTable.models.oSearch, searchCols[ iCol ] );\n\t\n\t\t// Use the default column options function to initialise classes etc\n\t\t_fnColumnOptions( oSettings, iCol, $(nTh).data() );\n\t}\n\t\n\t\n\t/**\n\t * Apply options for a column\n\t *  @param {object} oSettings dataTables settings object\n\t *  @param {int} iCol column index to consider\n\t *  @param {object} oOptions object with sType, bVisible and bSearchable etc\n\t *  @memberof DataTable#oApi\n\t */\n\tfunction _fnColumnOptions( oSettings, iCol, oOptions )\n\t{\n\t\tvar oCol = oSettings.aoColumns[ iCol ];\n\t\tvar oClasses = oSettings.oClasses;\n\t\tvar th = $(oCol.nTh);\n\t\n\t\t// Try to get width information from the DOM. We can't get it from CSS\n\t\t// as we'd need to parse the CSS stylesheet. `width` option can override\n\t\tif ( ! oCol.sWidthOrig ) {\n\t\t\t// Width attribute\n\t\t\toCol.sWidthOrig = th.attr('width') || null;\n\t\n\t\t\t// Style attribute\n\t\t\tvar t = (th.attr('style') || '').match(/width:\\s*(\\d+[pxem%]+)/);\n\t\t\tif ( t ) {\n\t\t\t\toCol.sWidthOrig = t[1];\n\t\t\t}\n\t\t}\n\t\n\t\t/* User specified column options */\n\t\tif ( oOptions !== undefined && oOptions !== null )\n\t\t{\n\t\t\t// Backwards compatibility\n\t\t\t_fnCompatCols( oOptions );\n\t\n\t\t\t// Map camel case parameters to their Hungarian counterparts\n\t\t\t_fnCamelToHungarian( DataTable.defaults.column, oOptions );\n\t\n\t\t\t/* Backwards compatibility for mDataProp */\n\t\t\tif ( oOptions.mDataProp !== undefined && !oOptions.mData )\n\t\t\t{\n\t\t\t\toOptions.mData = oOptions.mDataProp;\n\t\t\t}\n\t\n\t\t\tif ( oOptions.sType )\n\t\t\t{\n\t\t\t\toCol._sManualType = oOptions.sType;\n\t\t\t}\n\t\n\t\t\t// `class` is a reserved word in Javascript, so we need to provide\n\t\t\t// the ability to use a valid name for the camel case input\n\t\t\tif ( oOptions.className && ! oOptions.sClass )\n\t\t\t{\n\t\t\t\toOptions.sClass = oOptions.className;\n\t\t\t}\n\t\n\t\t\t$.extend( oCol, oOptions );\n\t\t\t_fnMap( oCol, oOptions, \"sWidth\", \"sWidthOrig\" );\n\t\n\t\t\t/* iDataSort to be applied (backwards compatibility), but aDataSort will take\n\t\t\t * priority if defined\n\t\t\t */\n\t\t\tif ( oOptions.iDataSort !== undefined )\n\t\t\t{\n\t\t\t\toCol.aDataSort = [ oOptions.iDataSort ];\n\t\t\t}\n\t\t\t_fnMap( oCol, oOptions, \"aDataSort\" );\n\t\t}\n\t\n\t\t/* Cache the data get and set functions for speed */\n\t\tvar mDataSrc = oCol.mData;\n\t\tvar mData = _fnGetObjectDataFn( mDataSrc );\n\t\tvar mRender = oCol.mRender ? _fnGetObjectDataFn( oCol.mRender ) : null;\n\t\n\t\tvar attrTest = function( src ) {\n\t\t\treturn typeof src === 'string' && src.indexOf('@') !== -1;\n\t\t};\n\t\toCol._bAttrSrc = $.isPlainObject( mDataSrc ) && (\n\t\t\tattrTest(mDataSrc.sort) || attrTest(mDataSrc.type) || attrTest(mDataSrc.filter)\n\t\t);\n\t\toCol._setter = null;\n\t\n\t\toCol.fnGetData = function (rowData, type, meta) {\n\t\t\tvar innerData = mData( rowData, type, undefined, meta );\n\t\n\t\t\treturn mRender && type ?\n\t\t\t\tmRender( innerData, type, rowData, meta ) :\n\t\t\t\tinnerData;\n\t\t};\n\t\toCol.fnSetData = function ( rowData, val, meta ) {\n\t\t\treturn _fnSetObjectDataFn( mDataSrc )( rowData, val, meta );\n\t\t};\n\t\n\t\t// Indicate if DataTables should read DOM data as an object or array\n\t\t// Used in _fnGetRowElements\n\t\tif ( typeof mDataSrc !== 'number' ) {\n\t\t\toSettings._rowReadObject = true;\n\t\t}\n\t\n\t\t/* Feature sorting overrides column specific when off */\n\t\tif ( !oSettings.oFeatures.bSort )\n\t\t{\n\t\t\toCol.bSortable = false;\n\t\t\tth.addClass( oClasses.sSortableNone ); // Have to add class here as order event isn't called\n\t\t}\n\t\n\t\t/* Check that the class assignment is correct for sorting */\n\t\tvar bAsc = $.inArray('asc', oCol.asSorting) !== -1;\n\t\tvar bDesc = $.inArray('desc', oCol.asSorting) !== -1;\n\t\tif ( !oCol.bSortable || (!bAsc && !bDesc) )\n\t\t{\n\t\t\toCol.sSortingClass = oClasses.sSortableNone;\n\t\t\toCol.sSortingClassJUI = \"\";\n\t\t}\n\t\telse if ( bAsc && !bDesc )\n\t\t{\n\t\t\toCol.sSortingClass = oClasses.sSortableAsc;\n\t\t\toCol.sSortingClassJUI = oClasses.sSortJUIAscAllowed;\n\t\t}\n\t\telse if ( !bAsc && bDesc )\n\t\t{\n\t\t\toCol.sSortingClass = oClasses.sSortableDesc;\n\t\t\toCol.sSortingClassJUI = oClasses.sSortJUIDescAllowed;\n\t\t}\n\t\telse\n\t\t{\n\t\t\toCol.sSortingClass = oClasses.sSortable;\n\t\t\toCol.sSortingClassJUI = oClasses.sSortJUI;\n\t\t}\n\t}\n\t\n\t\n\t/**\n\t * Adjust the table column widths for new data. Note: you would probably want to\n\t * do a redraw after calling this function!\n\t *  @param {object} settings dataTables settings object\n\t *  @memberof DataTable#oApi\n\t */\n\tfunction _fnAdjustColumnSizing ( settings )\n\t{\n\t\t/* Not interested in doing column width calculation if auto-width is disabled */\n\t\tif ( settings.oFeatures.bAutoWidth !== false )\n\t\t{\n\t\t\tvar columns = settings.aoColumns;\n\t\n\t\t\t_fnCalculateColumnWidths( settings );\n\t\t\tfor ( var i=0 , iLen=columns.length ; i<iLen ; i++ )\n\t\t\t{\n\t\t\t\tcolumns[i].nTh.style.width = columns[i].sWidth;\n\t\t\t}\n\t\t}\n\t\n\t\tvar scroll = settings.oScroll;\n\t\tif ( scroll.sY !== '' || scroll.sX !== '')\n\t\t{\n\t\t\t_fnScrollDraw( settings );\n\t\t}\n\t\n\t\t_fnCallbackFire( settings, null, 'column-sizing', [settings] );\n\t}\n\t\n\t\n\t/**\n\t * Covert the index of a visible column to the index in the data array (take account\n\t * of hidden columns)\n\t *  @param {object} oSettings dataTables settings object\n\t *  @param {int} iMatch Visible column index to lookup\n\t *  @returns {int} i the data index\n\t *  @memberof DataTable#oApi\n\t */\n\tfunction _fnVisibleToColumnIndex( oSettings, iMatch )\n\t{\n\t\tvar aiVis = _fnGetColumns( oSettings, 'bVisible' );\n\t\n\t\treturn typeof aiVis[iMatch] === 'number' ?\n\t\t\taiVis[iMatch] :\n\t\t\tnull;\n\t}\n\t\n\t\n\t/**\n\t * Covert the index of an index in the data array and convert it to the visible\n\t *   column index (take account of hidden columns)\n\t *  @param {int} iMatch Column index to lookup\n\t *  @param {object} oSettings dataTables settings object\n\t *  @returns {int} i the data index\n\t *  @memberof DataTable#oApi\n\t */\n\tfunction _fnColumnIndexToVisible( oSettings, iMatch )\n\t{\n\t\tvar aiVis = _fnGetColumns( oSettings, 'bVisible' );\n\t\tvar iPos = $.inArray( iMatch, aiVis );\n\t\n\t\treturn iPos !== -1 ? iPos : null;\n\t}\n\t\n\t\n\t/**\n\t * Get the number of visible columns\n\t *  @param {object} oSettings dataTables settings object\n\t *  @returns {int} i the number of visible columns\n\t *  @memberof DataTable#oApi\n\t */\n\tfunction _fnVisbleColumns( oSettings )\n\t{\n\t\tvar vis = 0;\n\t\n\t\t// No reduce in IE8, use a loop for now\n\t\t$.each( oSettings.aoColumns, function ( i, col ) {\n\t\t\tif ( col.bVisible && $(col.nTh).css('display') !== 'none' ) {\n\t\t\t\tvis++;\n\t\t\t}\n\t\t} );\n\t\n\t\treturn vis;\n\t}\n\t\n\t\n\t/**\n\t * Get an array of column indexes that match a given property\n\t *  @param {object} oSettings dataTables settings object\n\t *  @param {string} sParam Parameter in aoColumns to look for - typically\n\t *    bVisible or bSearchable\n\t *  @returns {array} Array of indexes with matched properties\n\t *  @memberof DataTable#oApi\n\t */\n\tfunction _fnGetColumns( oSettings, sParam )\n\t{\n\t\tvar a = [];\n\t\n\t\t$.map( oSettings.aoColumns, function(val, i) {\n\t\t\tif ( val[sParam] ) {\n\t\t\t\ta.push( i );\n\t\t\t}\n\t\t} );\n\t\n\t\treturn a;\n\t}\n\t\n\t\n\t/**\n\t * Calculate the 'type' of a column\n\t *  @param {object} settings dataTables settings object\n\t *  @memberof DataTable#oApi\n\t */\n\tfunction _fnColumnTypes ( settings )\n\t{\n\t\tvar columns = settings.aoColumns;\n\t\tvar data = settings.aoData;\n\t\tvar types = DataTable.ext.type.detect;\n\t\tvar i, ien, j, jen, k, ken;\n\t\tvar col, cell, detectedType, cache;\n\t\n\t\t// For each column, spin over the \n\t\tfor ( i=0, ien=columns.length ; i<ien ; i++ ) {\n\t\t\tcol = columns[i];\n\t\t\tcache = [];\n\t\n\t\t\tif ( ! col.sType && col._sManualType ) {\n\t\t\t\tcol.sType = col._sManualType;\n\t\t\t}\n\t\t\telse if ( ! col.sType ) {\n\t\t\t\tfor ( j=0, jen=types.length ; j<jen ; j++ ) {\n\t\t\t\t\tfor ( k=0, ken=data.length ; k<ken ; k++ ) {\n\t\t\t\t\t\t// Use a cache array so we only need to get the type data\n\t\t\t\t\t\t// from the formatter once (when using multiple detectors)\n\t\t\t\t\t\tif ( cache[k] === undefined ) {\n\t\t\t\t\t\t\tcache[k] = _fnGetCellData( settings, k, i, 'type' );\n\t\t\t\t\t\t}\n\t\n\t\t\t\t\t\tdetectedType = types[j]( cache[k], settings );\n\t\n\t\t\t\t\t\t// If null, then this type can't apply to this column, so\n\t\t\t\t\t\t// rather than testing all cells, break out. There is an\n\t\t\t\t\t\t// exception for the last type which is `html`. We need to\n\t\t\t\t\t\t// scan all rows since it is possible to mix string and HTML\n\t\t\t\t\t\t// types\n\t\t\t\t\t\tif ( ! detectedType && j !== types.length-1 ) {\n\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t}\n\t\n\t\t\t\t\t\t// Only a single match is needed for html type since it is\n\t\t\t\t\t\t// bottom of the pile and very similar to string\n\t\t\t\t\t\tif ( detectedType === 'html' ) {\n\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\n\t\t\t\t\t// Type is valid for all data points in the column - use this\n\t\t\t\t\t// type\n\t\t\t\t\tif ( detectedType ) {\n\t\t\t\t\t\tcol.sType = detectedType;\n\t\t\t\t\t\tbreak;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\n\t\t\t\t// Fall back - if no type was detected, always use string\n\t\t\t\tif ( ! col.sType ) {\n\t\t\t\t\tcol.sType = 'string';\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\t\n\t\n\t/**\n\t * Take the column definitions and static columns arrays and calculate how\n\t * they relate to column indexes. The callback function will then apply the\n\t * definition found for a column to a suitable configuration object.\n\t *  @param {object} oSettings dataTables settings object\n\t *  @param {array} aoColDefs The aoColumnDefs array that is to be applied\n\t *  @param {array} aoCols The aoColumns array that defines columns individually\n\t *  @param {function} fn Callback function - takes two parameters, the calculated\n\t *    column index and the definition for that column.\n\t *  @memberof DataTable#oApi\n\t */\n\tfunction _fnApplyColumnDefs( oSettings, aoColDefs, aoCols, fn )\n\t{\n\t\tvar i, iLen, j, jLen, k, kLen, def;\n\t\tvar columns = oSettings.aoColumns;\n\t\n\t\t// Column definitions with aTargets\n\t\tif ( aoColDefs )\n\t\t{\n\t\t\t/* Loop over the definitions array - loop in reverse so first instance has priority */\n\t\t\tfor ( i=aoColDefs.length-1 ; i>=0 ; i-- )\n\t\t\t{\n\t\t\t\tdef = aoColDefs[i];\n\t\n\t\t\t\t/* Each definition can target multiple columns, as it is an array */\n\t\t\t\tvar aTargets = def.targets !== undefined ?\n\t\t\t\t\tdef.targets :\n\t\t\t\t\tdef.aTargets;\n\t\n\t\t\t\tif ( ! $.isArray( aTargets ) )\n\t\t\t\t{\n\t\t\t\t\taTargets = [ aTargets ];\n\t\t\t\t}\n\t\n\t\t\t\tfor ( j=0, jLen=aTargets.length ; j<jLen ; j++ )\n\t\t\t\t{\n\t\t\t\t\tif ( typeof aTargets[j] === 'number' && aTargets[j] >= 0 )\n\t\t\t\t\t{\n\t\t\t\t\t\t/* Add columns that we don't yet know about */\n\t\t\t\t\t\twhile( columns.length <= aTargets[j] )\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t_fnAddColumn( oSettings );\n\t\t\t\t\t\t}\n\t\n\t\t\t\t\t\t/* Integer, basic index */\n\t\t\t\t\t\tfn( aTargets[j], def );\n\t\t\t\t\t}\n\t\t\t\t\telse if ( typeof aTargets[j] === 'number' && aTargets[j] < 0 )\n\t\t\t\t\t{\n\t\t\t\t\t\t/* Negative integer, right to left column counting */\n\t\t\t\t\t\tfn( columns.length+aTargets[j], def );\n\t\t\t\t\t}\n\t\t\t\t\telse if ( typeof aTargets[j] === 'string' )\n\t\t\t\t\t{\n\t\t\t\t\t\t/* Class name matching on TH element */\n\t\t\t\t\t\tfor ( k=0, kLen=columns.length ; k<kLen ; k++ )\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\tif ( aTargets[j] == \"_all\" ||\n\t\t\t\t\t\t\t     $(columns[k].nTh).hasClass( aTargets[j] ) )\n\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\tfn( k, def );\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\n\t\t// Statically defined columns array\n\t\tif ( aoCols )\n\t\t{\n\t\t\tfor ( i=0, iLen=aoCols.length ; i<iLen ; i++ )\n\t\t\t{\n\t\t\t\tfn( i, aoCols[i] );\n\t\t\t}\n\t\t}\n\t}\n\t\n\t/**\n\t * Add a data array to the table, creating DOM node etc. This is the parallel to\n\t * _fnGatherData, but for adding rows from a Javascript source, rather than a\n\t * DOM source.\n\t *  @param {object} oSettings dataTables settings object\n\t *  @param {array} aData data array to be added\n\t *  @param {node} [nTr] TR element to add to the table - optional. If not given,\n\t *    DataTables will create a row automatically\n\t *  @param {array} [anTds] Array of TD|TH elements for the row - must be given\n\t *    if nTr is.\n\t *  @returns {int} >=0 if successful (index of new aoData entry), -1 if failed\n\t *  @memberof DataTable#oApi\n\t */\n\tfunction _fnAddData ( oSettings, aDataIn, nTr, anTds )\n\t{\n\t\t/* Create the object for storing information about this new row */\n\t\tvar iRow = oSettings.aoData.length;\n\t\tvar oData = $.extend( true, {}, DataTable.models.oRow, {\n\t\t\tsrc: nTr ? 'dom' : 'data',\n\t\t\tidx: iRow\n\t\t} );\n\t\n\t\toData._aData = aDataIn;\n\t\toSettings.aoData.push( oData );\n\t\n\t\t/* Create the cells */\n\t\tvar nTd, sThisType;\n\t\tvar columns = oSettings.aoColumns;\n\t\n\t\t// Invalidate the column types as the new data needs to be revalidated\n\t\tfor ( var i=0, iLen=columns.length ; i<iLen ; i++ )\n\t\t{\n\t\t\tcolumns[i].sType = null;\n\t\t}\n\t\n\t\t/* Add to the display array */\n\t\toSettings.aiDisplayMaster.push( iRow );\n\t\n\t\tvar id = oSettings.rowIdFn( aDataIn );\n\t\tif ( id !== undefined ) {\n\t\t\toSettings.aIds[ id ] = oData;\n\t\t}\n\t\n\t\t/* Create the DOM information, or register it if already present */\n\t\tif ( nTr || ! oSettings.oFeatures.bDeferRender )\n\t\t{\n\t\t\t_fnCreateTr( oSettings, iRow, nTr, anTds );\n\t\t}\n\t\n\t\treturn iRow;\n\t}\n\t\n\t\n\t/**\n\t * Add one or more TR elements to the table. Generally we'd expect to\n\t * use this for reading data from a DOM sourced table, but it could be\n\t * used for an TR element. Note that if a TR is given, it is used (i.e.\n\t * it is not cloned).\n\t *  @param {object} settings dataTables settings object\n\t *  @param {array|node|jQuery} trs The TR element(s) to add to the table\n\t *  @returns {array} Array of indexes for the added rows\n\t *  @memberof DataTable#oApi\n\t */\n\tfunction _fnAddTr( settings, trs )\n\t{\n\t\tvar row;\n\t\n\t\t// Allow an individual node to be passed in\n\t\tif ( ! (trs instanceof $) ) {\n\t\t\ttrs = $(trs);\n\t\t}\n\t\n\t\treturn trs.map( function (i, el) {\n\t\t\trow = _fnGetRowElements( settings, el );\n\t\t\treturn _fnAddData( settings, row.data, el, row.cells );\n\t\t} );\n\t}\n\t\n\t\n\t/**\n\t * Take a TR element and convert it to an index in aoData\n\t *  @param {object} oSettings dataTables settings object\n\t *  @param {node} n the TR element to find\n\t *  @returns {int} index if the node is found, null if not\n\t *  @memberof DataTable#oApi\n\t */\n\tfunction _fnNodeToDataIndex( oSettings, n )\n\t{\n\t\treturn (n._DT_RowIndex!==undefined) ? n._DT_RowIndex : null;\n\t}\n\t\n\t\n\t/**\n\t * Take a TD element and convert it into a column data index (not the visible index)\n\t *  @param {object} oSettings dataTables settings object\n\t *  @param {int} iRow The row number the TD/TH can be found in\n\t *  @param {node} n The TD/TH element to find\n\t *  @returns {int} index if the node is found, -1 if not\n\t *  @memberof DataTable#oApi\n\t */\n\tfunction _fnNodeToColumnIndex( oSettings, iRow, n )\n\t{\n\t\treturn $.inArray( n, oSettings.aoData[ iRow ].anCells );\n\t}\n\t\n\t\n\t/**\n\t * Get the data for a given cell from the internal cache, taking into account data mapping\n\t *  @param {object} settings dataTables settings object\n\t *  @param {int} rowIdx aoData row id\n\t *  @param {int} colIdx Column index\n\t *  @param {string} type data get type ('display', 'type' 'filter' 'sort')\n\t *  @returns {*} Cell data\n\t *  @memberof DataTable#oApi\n\t */\n\tfunction _fnGetCellData( settings, rowIdx, colIdx, type )\n\t{\n\t\tvar draw           = settings.iDraw;\n\t\tvar col            = settings.aoColumns[colIdx];\n\t\tvar rowData        = settings.aoData[rowIdx]._aData;\n\t\tvar defaultContent = col.sDefaultContent;\n\t\tvar cellData       = col.fnGetData( rowData, type, {\n\t\t\tsettings: settings,\n\t\t\trow:      rowIdx,\n\t\t\tcol:      colIdx\n\t\t} );\n\t\n\t\tif ( cellData === undefined ) {\n\t\t\tif ( settings.iDrawError != draw && defaultContent === null ) {\n\t\t\t\t_fnLog( settings, 0, \"Requested unknown parameter \"+\n\t\t\t\t\t(typeof col.mData=='function' ? '{function}' : \"'\"+col.mData+\"'\")+\n\t\t\t\t\t\" for row \"+rowIdx+\", column \"+colIdx, 4 );\n\t\t\t\tsettings.iDrawError = draw;\n\t\t\t}\n\t\t\treturn defaultContent;\n\t\t}\n\t\n\t\t// When the data source is null and a specific data type is requested (i.e.\n\t\t// not the original data), we can use default column data\n\t\tif ( (cellData === rowData || cellData === null) && defaultContent !== null && type !== undefined ) {\n\t\t\tcellData = defaultContent;\n\t\t}\n\t\telse if ( typeof cellData === 'function' ) {\n\t\t\t// If the data source is a function, then we run it and use the return,\n\t\t\t// executing in the scope of the data object (for instances)\n\t\t\treturn cellData.call( rowData );\n\t\t}\n\t\n\t\tif ( cellData === null && type == 'display' ) {\n\t\t\treturn '';\n\t\t}\n\t\treturn cellData;\n\t}\n\t\n\t\n\t/**\n\t * Set the value for a specific cell, into the internal data cache\n\t *  @param {object} settings dataTables settings object\n\t *  @param {int} rowIdx aoData row id\n\t *  @param {int} colIdx Column index\n\t *  @param {*} val Value to set\n\t *  @memberof DataTable#oApi\n\t */\n\tfunction _fnSetCellData( settings, rowIdx, colIdx, val )\n\t{\n\t\tvar col     = settings.aoColumns[colIdx];\n\t\tvar rowData = settings.aoData[rowIdx]._aData;\n\t\n\t\tcol.fnSetData( rowData, val, {\n\t\t\tsettings: settings,\n\t\t\trow:      rowIdx,\n\t\t\tcol:      colIdx\n\t\t}  );\n\t}\n\t\n\t\n\t// Private variable that is used to match action syntax in the data property object\n\tvar __reArray = /\\[.*?\\]$/;\n\tvar __reFn = /\\(\\)$/;\n\t\n\t/**\n\t * Split string on periods, taking into account escaped periods\n\t * @param  {string} str String to split\n\t * @return {array} Split string\n\t */\n\tfunction _fnSplitObjNotation( str )\n\t{\n\t\treturn $.map( str.match(/(\\\\.|[^\\.])+/g) || [''], function ( s ) {\n\t\t\treturn s.replace(/\\\\\\./g, '.');\n\t\t} );\n\t}\n\t\n\t\n\t/**\n\t * Return a function that can be used to get data from a source object, taking\n\t * into account the ability to use nested objects as a source\n\t *  @param {string|int|function} mSource The data source for the object\n\t *  @returns {function} Data get function\n\t *  @memberof DataTable#oApi\n\t */\n\tfunction _fnGetObjectDataFn( mSource )\n\t{\n\t\tif ( $.isPlainObject( mSource ) )\n\t\t{\n\t\t\t/* Build an object of get functions, and wrap them in a single call */\n\t\t\tvar o = {};\n\t\t\t$.each( mSource, function (key, val) {\n\t\t\t\tif ( val ) {\n\t\t\t\t\to[key] = _fnGetObjectDataFn( val );\n\t\t\t\t}\n\t\t\t} );\n\t\n\t\t\treturn function (data, type, row, meta) {\n\t\t\t\tvar t = o[type] || o._;\n\t\t\t\treturn t !== undefined ?\n\t\t\t\t\tt(data, type, row, meta) :\n\t\t\t\t\tdata;\n\t\t\t};\n\t\t}\n\t\telse if ( mSource === null )\n\t\t{\n\t\t\t/* Give an empty string for rendering / sorting etc */\n\t\t\treturn function (data) { // type, row and meta also passed, but not used\n\t\t\t\treturn data;\n\t\t\t};\n\t\t}\n\t\telse if ( typeof mSource === 'function' )\n\t\t{\n\t\t\treturn function (data, type, row, meta) {\n\t\t\t\treturn mSource( data, type, row, meta );\n\t\t\t};\n\t\t}\n\t\telse if ( typeof mSource === 'string' && (mSource.indexOf('.') !== -1 ||\n\t\t\t      mSource.indexOf('[') !== -1 || mSource.indexOf('(') !== -1) )\n\t\t{\n\t\t\t/* If there is a . in the source string then the data source is in a\n\t\t\t * nested object so we loop over the data for each level to get the next\n\t\t\t * level down. On each loop we test for undefined, and if found immediately\n\t\t\t * return. This allows entire objects to be missing and sDefaultContent to\n\t\t\t * be used if defined, rather than throwing an error\n\t\t\t */\n\t\t\tvar fetchData = function (data, type, src) {\n\t\t\t\tvar arrayNotation, funcNotation, out, innerSrc;\n\t\n\t\t\t\tif ( src !== \"\" )\n\t\t\t\t{\n\t\t\t\t\tvar a = _fnSplitObjNotation( src );\n\t\n\t\t\t\t\tfor ( var i=0, iLen=a.length ; i<iLen ; i++ )\n\t\t\t\t\t{\n\t\t\t\t\t\t// Check if we are dealing with special notation\n\t\t\t\t\t\tarrayNotation = a[i].match(__reArray);\n\t\t\t\t\t\tfuncNotation = a[i].match(__reFn);\n\t\n\t\t\t\t\t\tif ( arrayNotation )\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t// Array notation\n\t\t\t\t\t\t\ta[i] = a[i].replace(__reArray, '');\n\t\n\t\t\t\t\t\t\t// Condition allows simply [] to be passed in\n\t\t\t\t\t\t\tif ( a[i] !== \"\" ) {\n\t\t\t\t\t\t\t\tdata = data[ a[i] ];\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tout = [];\n\t\n\t\t\t\t\t\t\t// Get the remainder of the nested object to get\n\t\t\t\t\t\t\ta.splice( 0, i+1 );\n\t\t\t\t\t\t\tinnerSrc = a.join('.');\n\t\n\t\t\t\t\t\t\t// Traverse each entry in the array getting the properties requested\n\t\t\t\t\t\t\tif ( $.isArray( data ) ) {\n\t\t\t\t\t\t\t\tfor ( var j=0, jLen=data.length ; j<jLen ; j++ ) {\n\t\t\t\t\t\t\t\t\tout.push( fetchData( data[j], type, innerSrc ) );\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\n\t\t\t\t\t\t\t// If a string is given in between the array notation indicators, that\n\t\t\t\t\t\t\t// is used to join the strings together, otherwise an array is returned\n\t\t\t\t\t\t\tvar join = arrayNotation[0].substring(1, arrayNotation[0].length-1);\n\t\t\t\t\t\t\tdata = (join===\"\") ? out : out.join(join);\n\t\n\t\t\t\t\t\t\t// The inner call to fetchData has already traversed through the remainder\n\t\t\t\t\t\t\t// of the source requested, so we exit from the loop\n\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t}\n\t\t\t\t\t\telse if ( funcNotation )\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t// Function call\n\t\t\t\t\t\t\ta[i] = a[i].replace(__reFn, '');\n\t\t\t\t\t\t\tdata = data[ a[i] ]();\n\t\t\t\t\t\t\tcontinue;\n\t\t\t\t\t\t}\n\t\n\t\t\t\t\t\tif ( data === null || data[ a[i] ] === undefined )\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\treturn undefined;\n\t\t\t\t\t\t}\n\t\t\t\t\t\tdata = data[ a[i] ];\n\t\t\t\t\t}\n\t\t\t\t}\n\t\n\t\t\t\treturn data;\n\t\t\t};\n\t\n\t\t\treturn function (data, type) { // row and meta also passed, but not used\n\t\t\t\treturn fetchData( data, type, mSource );\n\t\t\t};\n\t\t}\n\t\telse\n\t\t{\n\t\t\t/* Array or flat object mapping */\n\t\t\treturn function (data, type) { // row and meta also passed, but not used\n\t\t\t\treturn data[mSource];\n\t\t\t};\n\t\t}\n\t}\n\t\n\t\n\t/**\n\t * Return a function that can be used to set data from a source object, taking\n\t * into account the ability to use nested objects as a source\n\t *  @param {string|int|function} mSource The data source for the object\n\t *  @returns {function} Data set function\n\t *  @memberof DataTable#oApi\n\t */\n\tfunction _fnSetObjectDataFn( mSource )\n\t{\n\t\tif ( $.isPlainObject( mSource ) )\n\t\t{\n\t\t\t/* Unlike get, only the underscore (global) option is used for for\n\t\t\t * setting data since we don't know the type here. This is why an object\n\t\t\t * option is not documented for `mData` (which is read/write), but it is\n\t\t\t * for `mRender` which is read only.\n\t\t\t */\n\t\t\treturn _fnSetObjectDataFn( mSource._ );\n\t\t}\n\t\telse if ( mSource === null )\n\t\t{\n\t\t\t/* Nothing to do when the data source is null */\n\t\t\treturn function () {};\n\t\t}\n\t\telse if ( typeof mSource === 'function' )\n\t\t{\n\t\t\treturn function (data, val, meta) {\n\t\t\t\tmSource( data, 'set', val, meta );\n\t\t\t};\n\t\t}\n\t\telse if ( typeof mSource === 'string' && (mSource.indexOf('.') !== -1 ||\n\t\t\t      mSource.indexOf('[') !== -1 || mSource.indexOf('(') !== -1) )\n\t\t{\n\t\t\t/* Like the get, we need to get data from a nested object */\n\t\t\tvar setData = function (data, val, src) {\n\t\t\t\tvar a = _fnSplitObjNotation( src ), b;\n\t\t\t\tvar aLast = a[a.length-1];\n\t\t\t\tvar arrayNotation, funcNotation, o, innerSrc;\n\t\n\t\t\t\tfor ( var i=0, iLen=a.length-1 ; i<iLen ; i++ )\n\t\t\t\t{\n\t\t\t\t\t// Check if we are dealing with an array notation request\n\t\t\t\t\tarrayNotation = a[i].match(__reArray);\n\t\t\t\t\tfuncNotation = a[i].match(__reFn);\n\t\n\t\t\t\t\tif ( arrayNotation )\n\t\t\t\t\t{\n\t\t\t\t\t\ta[i] = a[i].replace(__reArray, '');\n\t\t\t\t\t\tdata[ a[i] ] = [];\n\t\n\t\t\t\t\t\t// Get the remainder of the nested object to set so we can recurse\n\t\t\t\t\t\tb = a.slice();\n\t\t\t\t\t\tb.splice( 0, i+1 );\n\t\t\t\t\t\tinnerSrc = b.join('.');\n\t\n\t\t\t\t\t\t// Traverse each entry in the array setting the properties requested\n\t\t\t\t\t\tif ( $.isArray( val ) )\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\tfor ( var j=0, jLen=val.length ; j<jLen ; j++ )\n\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\to = {};\n\t\t\t\t\t\t\t\tsetData( o, val[j], innerSrc );\n\t\t\t\t\t\t\t\tdata[ a[i] ].push( o );\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t\telse\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t// We've been asked to save data to an array, but it\n\t\t\t\t\t\t\t// isn't array data to be saved. Best that can be done\n\t\t\t\t\t\t\t// is to just save the value.\n\t\t\t\t\t\t\tdata[ a[i] ] = val;\n\t\t\t\t\t\t}\n\t\n\t\t\t\t\t\t// The inner call to setData has already traversed through the remainder\n\t\t\t\t\t\t// of the source and has set the data, thus we can exit here\n\t\t\t\t\t\treturn;\n\t\t\t\t\t}\n\t\t\t\t\telse if ( funcNotation )\n\t\t\t\t\t{\n\t\t\t\t\t\t// Function call\n\t\t\t\t\t\ta[i] = a[i].replace(__reFn, '');\n\t\t\t\t\t\tdata = data[ a[i] ]( val );\n\t\t\t\t\t}\n\t\n\t\t\t\t\t// If the nested object doesn't currently exist - since we are\n\t\t\t\t\t// trying to set the value - create it\n\t\t\t\t\tif ( data[ a[i] ] === null || data[ a[i] ] === undefined )\n\t\t\t\t\t{\n\t\t\t\t\t\tdata[ a[i] ] = {};\n\t\t\t\t\t}\n\t\t\t\t\tdata = data[ a[i] ];\n\t\t\t\t}\n\t\n\t\t\t\t// Last item in the input - i.e, the actual set\n\t\t\t\tif ( aLast.match(__reFn ) )\n\t\t\t\t{\n\t\t\t\t\t// Function call\n\t\t\t\t\tdata = data[ aLast.replace(__reFn, '') ]( val );\n\t\t\t\t}\n\t\t\t\telse\n\t\t\t\t{\n\t\t\t\t\t// If array notation is used, we just want to strip it and use the property name\n\t\t\t\t\t// and assign the value. If it isn't used, then we get the result we want anyway\n\t\t\t\t\tdata[ aLast.replace(__reArray, '') ] = val;\n\t\t\t\t}\n\t\t\t};\n\t\n\t\t\treturn function (data, val) { // meta is also passed in, but not used\n\t\t\t\treturn setData( data, val, mSource );\n\t\t\t};\n\t\t}\n\t\telse\n\t\t{\n\t\t\t/* Array or flat object mapping */\n\t\t\treturn function (data, val) { // meta is also passed in, but not used\n\t\t\t\tdata[mSource] = val;\n\t\t\t};\n\t\t}\n\t}\n\t\n\t\n\t/**\n\t * Return an array with the full table data\n\t *  @param {object} oSettings dataTables settings object\n\t *  @returns array {array} aData Master data array\n\t *  @memberof DataTable#oApi\n\t */\n\tfunction _fnGetDataMaster ( settings )\n\t{\n\t\treturn _pluck( settings.aoData, '_aData' );\n\t}\n\t\n\t\n\t/**\n\t * Nuke the table\n\t *  @param {object} oSettings dataTables settings object\n\t *  @memberof DataTable#oApi\n\t */\n\tfunction _fnClearTable( settings )\n\t{\n\t\tsettings.aoData.length = 0;\n\t\tsettings.aiDisplayMaster.length = 0;\n\t\tsettings.aiDisplay.length = 0;\n\t\tsettings.aIds = {};\n\t}\n\t\n\t\n\t /**\n\t * Take an array of integers (index array) and remove a target integer (value - not\n\t * the key!)\n\t *  @param {array} a Index array to target\n\t *  @param {int} iTarget value to find\n\t *  @memberof DataTable#oApi\n\t */\n\tfunction _fnDeleteIndex( a, iTarget, splice )\n\t{\n\t\tvar iTargetIndex = -1;\n\t\n\t\tfor ( var i=0, iLen=a.length ; i<iLen ; i++ )\n\t\t{\n\t\t\tif ( a[i] == iTarget )\n\t\t\t{\n\t\t\t\tiTargetIndex = i;\n\t\t\t}\n\t\t\telse if ( a[i] > iTarget )\n\t\t\t{\n\t\t\t\ta[i]--;\n\t\t\t}\n\t\t}\n\t\n\t\tif ( iTargetIndex != -1 && splice === undefined )\n\t\t{\n\t\t\ta.splice( iTargetIndex, 1 );\n\t\t}\n\t}\n\t\n\t\n\t/**\n\t * Mark cached data as invalid such that a re-read of the data will occur when\n\t * the cached data is next requested. Also update from the data source object.\n\t *\n\t * @param {object} settings DataTables settings object\n\t * @param {int}    rowIdx   Row index to invalidate\n\t * @param {string} [src]    Source to invalidate from: undefined, 'auto', 'dom'\n\t *     or 'data'\n\t * @param {int}    [colIdx] Column index to invalidate. If undefined the whole\n\t *     row will be invalidated\n\t * @memberof DataTable#oApi\n\t *\n\t * @todo For the modularisation of v1.11 this will need to become a callback, so\n\t *   the sort and filter methods can subscribe to it. That will required\n\t *   initialisation options for sorting, which is why it is not already baked in\n\t */\n\tfunction _fnInvalidate( settings, rowIdx, src, colIdx )\n\t{\n\t\tvar row = settings.aoData[ rowIdx ];\n\t\tvar i, ien;\n\t\tvar cellWrite = function ( cell, col ) {\n\t\t\t// This is very frustrating, but in IE if you just write directly\n\t\t\t// to innerHTML, and elements that are overwritten are GC'ed,\n\t\t\t// even if there is a reference to them elsewhere\n\t\t\twhile ( cell.childNodes.length ) {\n\t\t\t\tcell.removeChild( cell.firstChild );\n\t\t\t}\n\t\n\t\t\tcell.innerHTML = _fnGetCellData( settings, rowIdx, col, 'display' );\n\t\t};\n\t\n\t\t// Are we reading last data from DOM or the data object?\n\t\tif ( src === 'dom' || ((! src || src === 'auto') && row.src === 'dom') ) {\n\t\t\t// Read the data from the DOM\n\t\t\trow._aData = _fnGetRowElements(\n\t\t\t\t\tsettings, row, colIdx, colIdx === undefined ? undefined : row._aData\n\t\t\t\t)\n\t\t\t\t.data;\n\t\t}\n\t\telse {\n\t\t\t// Reading from data object, update the DOM\n\t\t\tvar cells = row.anCells;\n\t\n\t\t\tif ( cells ) {\n\t\t\t\tif ( colIdx !== undefined ) {\n\t\t\t\t\tcellWrite( cells[colIdx], colIdx );\n\t\t\t\t}\n\t\t\t\telse {\n\t\t\t\t\tfor ( i=0, ien=cells.length ; i<ien ; i++ ) {\n\t\t\t\t\t\tcellWrite( cells[i], i );\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\n\t\t// For both row and cell invalidation, the cached data for sorting and\n\t\t// filtering is nulled out\n\t\trow._aSortData = null;\n\t\trow._aFilterData = null;\n\t\n\t\t// Invalidate the type for a specific column (if given) or all columns since\n\t\t// the data might have changed\n\t\tvar cols = settings.aoColumns;\n\t\tif ( colIdx !== undefined ) {\n\t\t\tcols[ colIdx ].sType = null;\n\t\t}\n\t\telse {\n\t\t\tfor ( i=0, ien=cols.length ; i<ien ; i++ ) {\n\t\t\t\tcols[i].sType = null;\n\t\t\t}\n\t\n\t\t\t// Update DataTables special `DT_*` attributes for the row\n\t\t\t_fnRowAttributes( settings, row );\n\t\t}\n\t}\n\t\n\t\n\t/**\n\t * Build a data source object from an HTML row, reading the contents of the\n\t * cells that are in the row.\n\t *\n\t * @param {object} settings DataTables settings object\n\t * @param {node|object} TR element from which to read data or existing row\n\t *   object from which to re-read the data from the cells\n\t * @param {int} [colIdx] Optional column index\n\t * @param {array|object} [d] Data source object. If `colIdx` is given then this\n\t *   parameter should also be given and will be used to write the data into.\n\t *   Only the column in question will be written\n\t * @returns {object} Object with two parameters: `data` the data read, in\n\t *   document order, and `cells` and array of nodes (they can be useful to the\n\t *   caller, so rather than needing a second traversal to get them, just return\n\t *   them from here).\n\t * @memberof DataTable#oApi\n\t */\n\tfunction _fnGetRowElements( settings, row, colIdx, d )\n\t{\n\t\tvar\n\t\t\ttds = [],\n\t\t\ttd = row.firstChild,\n\t\t\tname, col, o, i=0, contents,\n\t\t\tcolumns = settings.aoColumns,\n\t\t\tobjectRead = settings._rowReadObject;\n\t\n\t\t// Allow the data object to be passed in, or construct\n\t\td = d !== undefined ?\n\t\t\td :\n\t\t\tobjectRead ?\n\t\t\t\t{} :\n\t\t\t\t[];\n\t\n\t\tvar attr = function ( str, td  ) {\n\t\t\tif ( typeof str === 'string' ) {\n\t\t\t\tvar idx = str.indexOf('@');\n\t\n\t\t\t\tif ( idx !== -1 ) {\n\t\t\t\t\tvar attr = str.substring( idx+1 );\n\t\t\t\t\tvar setter = _fnSetObjectDataFn( str );\n\t\t\t\t\tsetter( d, td.getAttribute( attr ) );\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t\n\t\t// Read data from a cell and store into the data object\n\t\tvar cellProcess = function ( cell ) {\n\t\t\tif ( colIdx === undefined || colIdx === i ) {\n\t\t\t\tcol = columns[i];\n\t\t\t\tcontents = $.trim(cell.innerHTML);\n\t\n\t\t\t\tif ( col && col._bAttrSrc ) {\n\t\t\t\t\tvar setter = _fnSetObjectDataFn( col.mData._ );\n\t\t\t\t\tsetter( d, contents );\n\t\n\t\t\t\t\tattr( col.mData.sort, cell );\n\t\t\t\t\tattr( col.mData.type, cell );\n\t\t\t\t\tattr( col.mData.filter, cell );\n\t\t\t\t}\n\t\t\t\telse {\n\t\t\t\t\t// Depending on the `data` option for the columns the data can\n\t\t\t\t\t// be read to either an object or an array.\n\t\t\t\t\tif ( objectRead ) {\n\t\t\t\t\t\tif ( ! col._setter ) {\n\t\t\t\t\t\t\t// Cache the setter function\n\t\t\t\t\t\t\tcol._setter = _fnSetObjectDataFn( col.mData );\n\t\t\t\t\t\t}\n\t\t\t\t\t\tcol._setter( d, contents );\n\t\t\t\t\t}\n\t\t\t\t\telse {\n\t\t\t\t\t\td[i] = contents;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\n\t\t\ti++;\n\t\t};\n\t\n\t\tif ( td ) {\n\t\t\t// `tr` element was passed in\n\t\t\twhile ( td ) {\n\t\t\t\tname = td.nodeName.toUpperCase();\n\t\n\t\t\t\tif ( name == \"TD\" || name == \"TH\" ) {\n\t\t\t\t\tcellProcess( td );\n\t\t\t\t\ttds.push( td );\n\t\t\t\t}\n\t\n\t\t\t\ttd = td.nextSibling;\n\t\t\t}\n\t\t}\n\t\telse {\n\t\t\t// Existing row object passed in\n\t\t\ttds = row.anCells;\n\t\n\t\t\tfor ( var j=0, jen=tds.length ; j<jen ; j++ ) {\n\t\t\t\tcellProcess( tds[j] );\n\t\t\t}\n\t\t}\n\t\n\t\t// Read the ID from the DOM if present\n\t\tvar rowNode = row.firstChild ? row : row.nTr;\n\t\n\t\tif ( rowNode ) {\n\t\t\tvar id = rowNode.getAttribute( 'id' );\n\t\n\t\t\tif ( id ) {\n\t\t\t\t_fnSetObjectDataFn( settings.rowId )( d, id );\n\t\t\t}\n\t\t}\n\t\n\t\treturn {\n\t\t\tdata: d,\n\t\t\tcells: tds\n\t\t};\n\t}\n\t/**\n\t * Create a new TR element (and it's TD children) for a row\n\t *  @param {object} oSettings dataTables settings object\n\t *  @param {int} iRow Row to consider\n\t *  @param {node} [nTrIn] TR element to add to the table - optional. If not given,\n\t *    DataTables will create a row automatically\n\t *  @param {array} [anTds] Array of TD|TH elements for the row - must be given\n\t *    if nTr is.\n\t *  @memberof DataTable#oApi\n\t */\n\tfunction _fnCreateTr ( oSettings, iRow, nTrIn, anTds )\n\t{\n\t\tvar\n\t\t\trow = oSettings.aoData[iRow],\n\t\t\trowData = row._aData,\n\t\t\tcells = [],\n\t\t\tnTr, nTd, oCol,\n\t\t\ti, iLen;\n\t\n\t\tif ( row.nTr === null )\n\t\t{\n\t\t\tnTr = nTrIn || document.createElement('tr');\n\t\n\t\t\trow.nTr = nTr;\n\t\t\trow.anCells = cells;\n\t\n\t\t\t/* Use a private property on the node to allow reserve mapping from the node\n\t\t\t * to the aoData array for fast look up\n\t\t\t */\n\t\t\tnTr._DT_RowIndex = iRow;\n\t\n\t\t\t/* Special parameters can be given by the data source to be used on the row */\n\t\t\t_fnRowAttributes( oSettings, row );\n\t\n\t\t\t/* Process each column */\n\t\t\tfor ( i=0, iLen=oSettings.aoColumns.length ; i<iLen ; i++ )\n\t\t\t{\n\t\t\t\toCol = oSettings.aoColumns[i];\n\t\n\t\t\t\tnTd = nTrIn ? anTds[i] : document.createElement( oCol.sCellType );\n\t\t\t\tnTd._DT_CellIndex = {\n\t\t\t\t\trow: iRow,\n\t\t\t\t\tcolumn: i\n\t\t\t\t};\n\t\t\t\t\n\t\t\t\tcells.push( nTd );\n\t\n\t\t\t\t// Need to create the HTML if new, or if a rendering function is defined\n\t\t\t\tif ( (!nTrIn || oCol.mRender || oCol.mData !== i) &&\n\t\t\t\t\t (!$.isPlainObject(oCol.mData) || oCol.mData._ !== i+'.display')\n\t\t\t\t) {\n\t\t\t\t\tnTd.innerHTML = _fnGetCellData( oSettings, iRow, i, 'display' );\n\t\t\t\t}\n\t\n\t\t\t\t/* Add user defined class */\n\t\t\t\tif ( oCol.sClass )\n\t\t\t\t{\n\t\t\t\t\tnTd.className += ' '+oCol.sClass;\n\t\t\t\t}\n\t\n\t\t\t\t// Visibility - add or remove as required\n\t\t\t\tif ( oCol.bVisible && ! nTrIn )\n\t\t\t\t{\n\t\t\t\t\tnTr.appendChild( nTd );\n\t\t\t\t}\n\t\t\t\telse if ( ! oCol.bVisible && nTrIn )\n\t\t\t\t{\n\t\t\t\t\tnTd.parentNode.removeChild( nTd );\n\t\t\t\t}\n\t\n\t\t\t\tif ( oCol.fnCreatedCell )\n\t\t\t\t{\n\t\t\t\t\toCol.fnCreatedCell.call( oSettings.oInstance,\n\t\t\t\t\t\tnTd, _fnGetCellData( oSettings, iRow, i ), rowData, iRow, i\n\t\t\t\t\t);\n\t\t\t\t}\n\t\t\t}\n\t\n\t\t\t_fnCallbackFire( oSettings, 'aoRowCreatedCallback', null, [nTr, rowData, iRow] );\n\t\t}\n\t\n\t\t// Remove once webkit bug 131819 and Chromium bug 365619 have been resolved\n\t\t// and deployed\n\t\trow.nTr.setAttribute( 'role', 'row' );\n\t}\n\t\n\t\n\t/**\n\t * Add attributes to a row based on the special `DT_*` parameters in a data\n\t * source object.\n\t *  @param {object} settings DataTables settings object\n\t *  @param {object} DataTables row object for the row to be modified\n\t *  @memberof DataTable#oApi\n\t */\n\tfunction _fnRowAttributes( settings, row )\n\t{\n\t\tvar tr = row.nTr;\n\t\tvar data = row._aData;\n\t\n\t\tif ( tr ) {\n\t\t\tvar id = settings.rowIdFn( data );\n\t\n\t\t\tif ( id ) {\n\t\t\t\ttr.id = id;\n\t\t\t}\n\t\n\t\t\tif ( data.DT_RowClass ) {\n\t\t\t\t// Remove any classes added by DT_RowClass before\n\t\t\t\tvar a = data.DT_RowClass.split(' ');\n\t\t\t\trow.__rowc = row.__rowc ?\n\t\t\t\t\t_unique( row.__rowc.concat( a ) ) :\n\t\t\t\t\ta;\n\t\n\t\t\t\t$(tr)\n\t\t\t\t\t.removeClass( row.__rowc.join(' ') )\n\t\t\t\t\t.addClass( data.DT_RowClass );\n\t\t\t}\n\t\n\t\t\tif ( data.DT_RowAttr ) {\n\t\t\t\t$(tr).attr( data.DT_RowAttr );\n\t\t\t}\n\t\n\t\t\tif ( data.DT_RowData ) {\n\t\t\t\t$(tr).data( data.DT_RowData );\n\t\t\t}\n\t\t}\n\t}\n\t\n\t\n\t/**\n\t * Create the HTML header for the table\n\t *  @param {object} oSettings dataTables settings object\n\t *  @memberof DataTable#oApi\n\t */\n\tfunction _fnBuildHead( oSettings )\n\t{\n\t\tvar i, ien, cell, row, column;\n\t\tvar thead = oSettings.nTHead;\n\t\tvar tfoot = oSettings.nTFoot;\n\t\tvar createHeader = $('th, td', thead).length === 0;\n\t\tvar classes = oSettings.oClasses;\n\t\tvar columns = oSettings.aoColumns;\n\t\n\t\tif ( createHeader ) {\n\t\t\trow = $('<tr/>').appendTo( thead );\n\t\t}\n\t\n\t\tfor ( i=0, ien=columns.length ; i<ien ; i++ ) {\n\t\t\tcolumn = columns[i];\n\t\t\tcell = $( column.nTh ).addClass( column.sClass );\n\t\n\t\t\tif ( createHeader ) {\n\t\t\t\tcell.appendTo( row );\n\t\t\t}\n\t\n\t\t\t// 1.11 move into sorting\n\t\t\tif ( oSettings.oFeatures.bSort ) {\n\t\t\t\tcell.addClass( column.sSortingClass );\n\t\n\t\t\t\tif ( column.bSortable !== false ) {\n\t\t\t\t\tcell\n\t\t\t\t\t\t.attr( 'tabindex', oSettings.iTabIndex )\n\t\t\t\t\t\t.attr( 'aria-controls', oSettings.sTableId );\n\t\n\t\t\t\t\t_fnSortAttachListener( oSettings, column.nTh, i );\n\t\t\t\t}\n\t\t\t}\n\t\n\t\t\tif ( column.sTitle != cell[0].innerHTML ) {\n\t\t\t\tcell.html( column.sTitle );\n\t\t\t}\n\t\n\t\t\t_fnRenderer( oSettings, 'header' )(\n\t\t\t\toSettings, cell, column, classes\n\t\t\t);\n\t\t}\n\t\n\t\tif ( createHeader ) {\n\t\t\t_fnDetectHeader( oSettings.aoHeader, thead );\n\t\t}\n\t\t\n\t\t/* ARIA role for the rows */\n\t \t$(thead).find('>tr').attr('role', 'row');\n\t\n\t\t/* Deal with the footer - add classes if required */\n\t\t$(thead).find('>tr>th, >tr>td').addClass( classes.sHeaderTH );\n\t\t$(tfoot).find('>tr>th, >tr>td').addClass( classes.sFooterTH );\n\t\n\t\t// Cache the footer cells. Note that we only take the cells from the first\n\t\t// row in the footer. If there is more than one row the user wants to\n\t\t// interact with, they need to use the table().foot() method. Note also this\n\t\t// allows cells to be used for multiple columns using colspan\n\t\tif ( tfoot !== null ) {\n\t\t\tvar cells = oSettings.aoFooter[0];\n\t\n\t\t\tfor ( i=0, ien=cells.length ; i<ien ; i++ ) {\n\t\t\t\tcolumn = columns[i];\n\t\t\t\tcolumn.nTf = cells[i].cell;\n\t\n\t\t\t\tif ( column.sClass ) {\n\t\t\t\t\t$(column.nTf).addClass( column.sClass );\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\t\n\t\n\t/**\n\t * Draw the header (or footer) element based on the column visibility states. The\n\t * methodology here is to use the layout array from _fnDetectHeader, modified for\n\t * the instantaneous column visibility, to construct the new layout. The grid is\n\t * traversed over cell at a time in a rows x columns grid fashion, although each\n\t * cell insert can cover multiple elements in the grid - which is tracks using the\n\t * aApplied array. Cell inserts in the grid will only occur where there isn't\n\t * already a cell in that position.\n\t *  @param {object} oSettings dataTables settings object\n\t *  @param array {objects} aoSource Layout array from _fnDetectHeader\n\t *  @param {boolean} [bIncludeHidden=false] If true then include the hidden columns in the calc,\n\t *  @memberof DataTable#oApi\n\t */\n\tfunction _fnDrawHead( oSettings, aoSource, bIncludeHidden )\n\t{\n\t\tvar i, iLen, j, jLen, k, kLen, n, nLocalTr;\n\t\tvar aoLocal = [];\n\t\tvar aApplied = [];\n\t\tvar iColumns = oSettings.aoColumns.length;\n\t\tvar iRowspan, iColspan;\n\t\n\t\tif ( ! aoSource )\n\t\t{\n\t\t\treturn;\n\t\t}\n\t\n\t\tif (  bIncludeHidden === undefined )\n\t\t{\n\t\t\tbIncludeHidden = false;\n\t\t}\n\t\n\t\t/* Make a copy of the master layout array, but without the visible columns in it */\n\t\tfor ( i=0, iLen=aoSource.length ; i<iLen ; i++ )\n\t\t{\n\t\t\taoLocal[i] = aoSource[i].slice();\n\t\t\taoLocal[i].nTr = aoSource[i].nTr;\n\t\n\t\t\t/* Remove any columns which are currently hidden */\n\t\t\tfor ( j=iColumns-1 ; j>=0 ; j-- )\n\t\t\t{\n\t\t\t\tif ( !oSettings.aoColumns[j].bVisible && !bIncludeHidden )\n\t\t\t\t{\n\t\t\t\t\taoLocal[i].splice( j, 1 );\n\t\t\t\t}\n\t\t\t}\n\t\n\t\t\t/* Prep the applied array - it needs an element for each row */\n\t\t\taApplied.push( [] );\n\t\t}\n\t\n\t\tfor ( i=0, iLen=aoLocal.length ; i<iLen ; i++ )\n\t\t{\n\t\t\tnLocalTr = aoLocal[i].nTr;\n\t\n\t\t\t/* All cells are going to be replaced, so empty out the row */\n\t\t\tif ( nLocalTr )\n\t\t\t{\n\t\t\t\twhile( (n = nLocalTr.firstChild) )\n\t\t\t\t{\n\t\t\t\t\tnLocalTr.removeChild( n );\n\t\t\t\t}\n\t\t\t}\n\t\n\t\t\tfor ( j=0, jLen=aoLocal[i].length ; j<jLen ; j++ )\n\t\t\t{\n\t\t\t\tiRowspan = 1;\n\t\t\t\tiColspan = 1;\n\t\n\t\t\t\t/* Check to see if there is already a cell (row/colspan) covering our target\n\t\t\t\t * insert point. If there is, then there is nothing to do.\n\t\t\t\t */\n\t\t\t\tif ( aApplied[i][j] === undefined )\n\t\t\t\t{\n\t\t\t\t\tnLocalTr.appendChild( aoLocal[i][j].cell );\n\t\t\t\t\taApplied[i][j] = 1;\n\t\n\t\t\t\t\t/* Expand the cell to cover as many rows as needed */\n\t\t\t\t\twhile ( aoLocal[i+iRowspan] !== undefined &&\n\t\t\t\t\t        aoLocal[i][j].cell == aoLocal[i+iRowspan][j].cell )\n\t\t\t\t\t{\n\t\t\t\t\t\taApplied[i+iRowspan][j] = 1;\n\t\t\t\t\t\tiRowspan++;\n\t\t\t\t\t}\n\t\n\t\t\t\t\t/* Expand the cell to cover as many columns as needed */\n\t\t\t\t\twhile ( aoLocal[i][j+iColspan] !== undefined &&\n\t\t\t\t\t        aoLocal[i][j].cell == aoLocal[i][j+iColspan].cell )\n\t\t\t\t\t{\n\t\t\t\t\t\t/* Must update the applied array over the rows for the columns */\n\t\t\t\t\t\tfor ( k=0 ; k<iRowspan ; k++ )\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\taApplied[i+k][j+iColspan] = 1;\n\t\t\t\t\t\t}\n\t\t\t\t\t\tiColspan++;\n\t\t\t\t\t}\n\t\n\t\t\t\t\t/* Do the actual expansion in the DOM */\n\t\t\t\t\t$(aoLocal[i][j].cell)\n\t\t\t\t\t\t.attr('rowspan', iRowspan)\n\t\t\t\t\t\t.attr('colspan', iColspan);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\t\n\t\n\t/**\n\t * Insert the required TR nodes into the table for display\n\t *  @param {object} oSettings dataTables settings object\n\t *  @memberof DataTable#oApi\n\t */\n\tfunction _fnDraw( oSettings )\n\t{\n\t\t/* Provide a pre-callback function which can be used to cancel the draw is false is returned */\n\t\tvar aPreDraw = _fnCallbackFire( oSettings, 'aoPreDrawCallback', 'preDraw', [oSettings] );\n\t\tif ( $.inArray( false, aPreDraw ) !== -1 )\n\t\t{\n\t\t\t_fnProcessingDisplay( oSettings, false );\n\t\t\treturn;\n\t\t}\n\t\n\t\tvar i, iLen, n;\n\t\tvar anRows = [];\n\t\tvar iRowCount = 0;\n\t\tvar asStripeClasses = oSettings.asStripeClasses;\n\t\tvar iStripes = asStripeClasses.length;\n\t\tvar iOpenRows = oSettings.aoOpenRows.length;\n\t\tvar oLang = oSettings.oLanguage;\n\t\tvar iInitDisplayStart = oSettings.iInitDisplayStart;\n\t\tvar bServerSide = _fnDataSource( oSettings ) == 'ssp';\n\t\tvar aiDisplay = oSettings.aiDisplay;\n\t\n\t\toSettings.bDrawing = true;\n\t\n\t\t/* Check and see if we have an initial draw position from state saving */\n\t\tif ( iInitDisplayStart !== undefined && iInitDisplayStart !== -1 )\n\t\t{\n\t\t\toSettings._iDisplayStart = bServerSide ?\n\t\t\t\tiInitDisplayStart :\n\t\t\t\tiInitDisplayStart >= oSettings.fnRecordsDisplay() ?\n\t\t\t\t\t0 :\n\t\t\t\t\tiInitDisplayStart;\n\t\n\t\t\toSettings.iInitDisplayStart = -1;\n\t\t}\n\t\n\t\tvar iDisplayStart = oSettings._iDisplayStart;\n\t\tvar iDisplayEnd = oSettings.fnDisplayEnd();\n\t\n\t\t/* Server-side processing draw intercept */\n\t\tif ( oSettings.bDeferLoading )\n\t\t{\n\t\t\toSettings.bDeferLoading = false;\n\t\t\toSettings.iDraw++;\n\t\t\t_fnProcessingDisplay( oSettings, false );\n\t\t}\n\t\telse if ( !bServerSide )\n\t\t{\n\t\t\toSettings.iDraw++;\n\t\t}\n\t\telse if ( !oSettings.bDestroying && !_fnAjaxUpdate( oSettings ) )\n\t\t{\n\t\t\treturn;\n\t\t}\n\t\n\t\tif ( aiDisplay.length !== 0 )\n\t\t{\n\t\t\tvar iStart = bServerSide ? 0 : iDisplayStart;\n\t\t\tvar iEnd = bServerSide ? oSettings.aoData.length : iDisplayEnd;\n\t\n\t\t\tfor ( var j=iStart ; j<iEnd ; j++ )\n\t\t\t{\n\t\t\t\tvar iDataIndex = aiDisplay[j];\n\t\t\t\tvar aoData = oSettings.aoData[ iDataIndex ];\n\t\t\t\tif ( aoData.nTr === null )\n\t\t\t\t{\n\t\t\t\t\t_fnCreateTr( oSettings, iDataIndex );\n\t\t\t\t}\n\t\n\t\t\t\tvar nRow = aoData.nTr;\n\t\n\t\t\t\t/* Remove the old striping classes and then add the new one */\n\t\t\t\tif ( iStripes !== 0 )\n\t\t\t\t{\n\t\t\t\t\tvar sStripe = asStripeClasses[ iRowCount % iStripes ];\n\t\t\t\t\tif ( aoData._sRowStripe != sStripe )\n\t\t\t\t\t{\n\t\t\t\t\t\t$(nRow).removeClass( aoData._sRowStripe ).addClass( sStripe );\n\t\t\t\t\t\taoData._sRowStripe = sStripe;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\n\t\t\t\t// Row callback functions - might want to manipulate the row\n\t\t\t\t// iRowCount and j are not currently documented. Are they at all\n\t\t\t\t// useful?\n\t\t\t\t_fnCallbackFire( oSettings, 'aoRowCallback', null,\n\t\t\t\t\t[nRow, aoData._aData, iRowCount, j] );\n\t\n\t\t\t\tanRows.push( nRow );\n\t\t\t\tiRowCount++;\n\t\t\t}\n\t\t}\n\t\telse\n\t\t{\n\t\t\t/* Table is empty - create a row with an empty message in it */\n\t\t\tvar sZero = oLang.sZeroRecords;\n\t\t\tif ( oSettings.iDraw == 1 &&  _fnDataSource( oSettings ) == 'ajax' )\n\t\t\t{\n\t\t\t\tsZero = oLang.sLoadingRecords;\n\t\t\t}\n\t\t\telse if ( oLang.sEmptyTable && oSettings.fnRecordsTotal() === 0 )\n\t\t\t{\n\t\t\t\tsZero = oLang.sEmptyTable;\n\t\t\t}\n\t\n\t\t\tanRows[ 0 ] = $( '<tr/>', { 'class': iStripes ? asStripeClasses[0] : '' } )\n\t\t\t\t.append( $('<td />', {\n\t\t\t\t\t'valign':  'top',\n\t\t\t\t\t'colSpan': _fnVisbleColumns( oSettings ),\n\t\t\t\t\t'class':   oSettings.oClasses.sRowEmpty\n\t\t\t\t} ).html( sZero ) )[0];\n\t\t}\n\t\n\t\t/* Header and footer callbacks */\n\t\t_fnCallbackFire( oSettings, 'aoHeaderCallback', 'header', [ $(oSettings.nTHead).children('tr')[0],\n\t\t\t_fnGetDataMaster( oSettings ), iDisplayStart, iDisplayEnd, aiDisplay ] );\n\t\n\t\t_fnCallbackFire( oSettings, 'aoFooterCallback', 'footer', [ $(oSettings.nTFoot).children('tr')[0],\n\t\t\t_fnGetDataMaster( oSettings ), iDisplayStart, iDisplayEnd, aiDisplay ] );\n\t\n\t\tvar body = $(oSettings.nTBody);\n\t\n\t\tbody.children().detach();\n\t\tbody.append( $(anRows) );\n\t\n\t\t/* Call all required callback functions for the end of a draw */\n\t\t_fnCallbackFire( oSettings, 'aoDrawCallback', 'draw', [oSettings] );\n\t\n\t\t/* Draw is complete, sorting and filtering must be as well */\n\t\toSettings.bSorted = false;\n\t\toSettings.bFiltered = false;\n\t\toSettings.bDrawing = false;\n\t}\n\t\n\t\n\t/**\n\t * Redraw the table - taking account of the various features which are enabled\n\t *  @param {object} oSettings dataTables settings object\n\t *  @param {boolean} [holdPosition] Keep the current paging position. By default\n\t *    the paging is reset to the first page\n\t *  @memberof DataTable#oApi\n\t */\n\tfunction _fnReDraw( settings, holdPosition )\n\t{\n\t\tvar\n\t\t\tfeatures = settings.oFeatures,\n\t\t\tsort     = features.bSort,\n\t\t\tfilter   = features.bFilter;\n\t\n\t\tif ( sort ) {\n\t\t\t_fnSort( settings );\n\t\t}\n\t\n\t\tif ( filter ) {\n\t\t\t_fnFilterComplete( settings, settings.oPreviousSearch );\n\t\t}\n\t\telse {\n\t\t\t// No filtering, so we want to just use the display master\n\t\t\tsettings.aiDisplay = settings.aiDisplayMaster.slice();\n\t\t}\n\t\n\t\tif ( holdPosition !== true ) {\n\t\t\tsettings._iDisplayStart = 0;\n\t\t}\n\t\n\t\t// Let any modules know about the draw hold position state (used by\n\t\t// scrolling internally)\n\t\tsettings._drawHold = holdPosition;\n\t\n\t\t_fnDraw( settings );\n\t\n\t\tsettings._drawHold = false;\n\t}\n\t\n\t\n\t/**\n\t * Add the options to the page HTML for the table\n\t *  @param {object} oSettings dataTables settings object\n\t *  @memberof DataTable#oApi\n\t */\n\tfunction _fnAddOptionsHtml ( oSettings )\n\t{\n\t\tvar classes = oSettings.oClasses;\n\t\tvar table = $(oSettings.nTable);\n\t\tvar holding = $('<div/>').insertBefore( table ); // Holding element for speed\n\t\tvar features = oSettings.oFeatures;\n\t\n\t\t// All DataTables are wrapped in a div\n\t\tvar insert = $('<div/>', {\n\t\t\tid:      oSettings.sTableId+'_wrapper',\n\t\t\t'class': classes.sWrapper + (oSettings.nTFoot ? '' : ' '+classes.sNoFooter)\n\t\t} );\n\t\n\t\toSettings.nHolding = holding[0];\n\t\toSettings.nTableWrapper = insert[0];\n\t\toSettings.nTableReinsertBefore = oSettings.nTable.nextSibling;\n\t\n\t\t/* Loop over the user set positioning and place the elements as needed */\n\t\tvar aDom = oSettings.sDom.split('');\n\t\tvar featureNode, cOption, nNewNode, cNext, sAttr, j;\n\t\tfor ( var i=0 ; i<aDom.length ; i++ )\n\t\t{\n\t\t\tfeatureNode = null;\n\t\t\tcOption = aDom[i];\n\t\n\t\t\tif ( cOption == '<' )\n\t\t\t{\n\t\t\t\t/* New container div */\n\t\t\t\tnNewNode = $('<div/>')[0];\n\t\n\t\t\t\t/* Check to see if we should append an id and/or a class name to the container */\n\t\t\t\tcNext = aDom[i+1];\n\t\t\t\tif ( cNext == \"'\" || cNext == '\"' )\n\t\t\t\t{\n\t\t\t\t\tsAttr = \"\";\n\t\t\t\t\tj = 2;\n\t\t\t\t\twhile ( aDom[i+j] != cNext )\n\t\t\t\t\t{\n\t\t\t\t\t\tsAttr += aDom[i+j];\n\t\t\t\t\t\tj++;\n\t\t\t\t\t}\n\t\n\t\t\t\t\t/* Replace jQuery UI constants @todo depreciated */\n\t\t\t\t\tif ( sAttr == \"H\" )\n\t\t\t\t\t{\n\t\t\t\t\t\tsAttr = classes.sJUIHeader;\n\t\t\t\t\t}\n\t\t\t\t\telse if ( sAttr == \"F\" )\n\t\t\t\t\t{\n\t\t\t\t\t\tsAttr = classes.sJUIFooter;\n\t\t\t\t\t}\n\t\n\t\t\t\t\t/* The attribute can be in the format of \"#id.class\", \"#id\" or \"class\" This logic\n\t\t\t\t\t * breaks the string into parts and applies them as needed\n\t\t\t\t\t */\n\t\t\t\t\tif ( sAttr.indexOf('.') != -1 )\n\t\t\t\t\t{\n\t\t\t\t\t\tvar aSplit = sAttr.split('.');\n\t\t\t\t\t\tnNewNode.id = aSplit[0].substr(1, aSplit[0].length-1);\n\t\t\t\t\t\tnNewNode.className = aSplit[1];\n\t\t\t\t\t}\n\t\t\t\t\telse if ( sAttr.charAt(0) == \"#\" )\n\t\t\t\t\t{\n\t\t\t\t\t\tnNewNode.id = sAttr.substr(1, sAttr.length-1);\n\t\t\t\t\t}\n\t\t\t\t\telse\n\t\t\t\t\t{\n\t\t\t\t\t\tnNewNode.className = sAttr;\n\t\t\t\t\t}\n\t\n\t\t\t\t\ti += j; /* Move along the position array */\n\t\t\t\t}\n\t\n\t\t\t\tinsert.append( nNewNode );\n\t\t\t\tinsert = $(nNewNode);\n\t\t\t}\n\t\t\telse if ( cOption == '>' )\n\t\t\t{\n\t\t\t\t/* End container div */\n\t\t\t\tinsert = insert.parent();\n\t\t\t}\n\t\t\t// @todo Move options into their own plugins?\n\t\t\telse if ( cOption == 'l' && features.bPaginate && features.bLengthChange )\n\t\t\t{\n\t\t\t\t/* Length */\n\t\t\t\tfeatureNode = _fnFeatureHtmlLength( oSettings );\n\t\t\t}\n\t\t\telse if ( cOption == 'f' && features.bFilter )\n\t\t\t{\n\t\t\t\t/* Filter */\n\t\t\t\tfeatureNode = _fnFeatureHtmlFilter( oSettings );\n\t\t\t}\n\t\t\telse if ( cOption == 'r' && features.bProcessing )\n\t\t\t{\n\t\t\t\t/* pRocessing */\n\t\t\t\tfeatureNode = _fnFeatureHtmlProcessing( oSettings );\n\t\t\t}\n\t\t\telse if ( cOption == 't' )\n\t\t\t{\n\t\t\t\t/* Table */\n\t\t\t\tfeatureNode = _fnFeatureHtmlTable( oSettings );\n\t\t\t}\n\t\t\telse if ( cOption ==  'i' && features.bInfo )\n\t\t\t{\n\t\t\t\t/* Info */\n\t\t\t\tfeatureNode = _fnFeatureHtmlInfo( oSettings );\n\t\t\t}\n\t\t\telse if ( cOption == 'p' && features.bPaginate )\n\t\t\t{\n\t\t\t\t/* Pagination */\n\t\t\t\tfeatureNode = _fnFeatureHtmlPaginate( oSettings );\n\t\t\t}\n\t\t\telse if ( DataTable.ext.feature.length !== 0 )\n\t\t\t{\n\t\t\t\t/* Plug-in features */\n\t\t\t\tvar aoFeatures = DataTable.ext.feature;\n\t\t\t\tfor ( var k=0, kLen=aoFeatures.length ; k<kLen ; k++ )\n\t\t\t\t{\n\t\t\t\t\tif ( cOption == aoFeatures[k].cFeature )\n\t\t\t\t\t{\n\t\t\t\t\t\tfeatureNode = aoFeatures[k].fnInit( oSettings );\n\t\t\t\t\t\tbreak;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\n\t\t\t/* Add to the 2D features array */\n\t\t\tif ( featureNode )\n\t\t\t{\n\t\t\t\tvar aanFeatures = oSettings.aanFeatures;\n\t\n\t\t\t\tif ( ! aanFeatures[cOption] )\n\t\t\t\t{\n\t\t\t\t\taanFeatures[cOption] = [];\n\t\t\t\t}\n\t\n\t\t\t\taanFeatures[cOption].push( featureNode );\n\t\t\t\tinsert.append( featureNode );\n\t\t\t}\n\t\t}\n\t\n\t\t/* Built our DOM structure - replace the holding div with what we want */\n\t\tholding.replaceWith( insert );\n\t\toSettings.nHolding = null;\n\t}\n\t\n\t\n\t/**\n\t * Use the DOM source to create up an array of header cells. The idea here is to\n\t * create a layout grid (array) of rows x columns, which contains a reference\n\t * to the cell that that point in the grid (regardless of col/rowspan), such that\n\t * any column / row could be removed and the new grid constructed\n\t *  @param array {object} aLayout Array to store the calculated layout in\n\t *  @param {node} nThead The header/footer element for the table\n\t *  @memberof DataTable#oApi\n\t */\n\tfunction _fnDetectHeader ( aLayout, nThead )\n\t{\n\t\tvar nTrs = $(nThead).children('tr');\n\t\tvar nTr, nCell;\n\t\tvar i, k, l, iLen, jLen, iColShifted, iColumn, iColspan, iRowspan;\n\t\tvar bUnique;\n\t\tvar fnShiftCol = function ( a, i, j ) {\n\t\t\tvar k = a[i];\n\t                while ( k[j] ) {\n\t\t\t\tj++;\n\t\t\t}\n\t\t\treturn j;\n\t\t};\n\t\n\t\taLayout.splice( 0, aLayout.length );\n\t\n\t\t/* We know how many rows there are in the layout - so prep it */\n\t\tfor ( i=0, iLen=nTrs.length ; i<iLen ; i++ )\n\t\t{\n\t\t\taLayout.push( [] );\n\t\t}\n\t\n\t\t/* Calculate a layout array */\n\t\tfor ( i=0, iLen=nTrs.length ; i<iLen ; i++ )\n\t\t{\n\t\t\tnTr = nTrs[i];\n\t\t\tiColumn = 0;\n\t\n\t\t\t/* For every cell in the row... */\n\t\t\tnCell = nTr.firstChild;\n\t\t\twhile ( nCell ) {\n\t\t\t\tif ( nCell.nodeName.toUpperCase() == \"TD\" ||\n\t\t\t\t     nCell.nodeName.toUpperCase() == \"TH\" )\n\t\t\t\t{\n\t\t\t\t\t/* Get the col and rowspan attributes from the DOM and sanitise them */\n\t\t\t\t\tiColspan = nCell.getAttribute('colspan') * 1;\n\t\t\t\t\tiRowspan = nCell.getAttribute('rowspan') * 1;\n\t\t\t\t\tiColspan = (!iColspan || iColspan===0 || iColspan===1) ? 1 : iColspan;\n\t\t\t\t\tiRowspan = (!iRowspan || iRowspan===0 || iRowspan===1) ? 1 : iRowspan;\n\t\n\t\t\t\t\t/* There might be colspan cells already in this row, so shift our target\n\t\t\t\t\t * accordingly\n\t\t\t\t\t */\n\t\t\t\t\tiColShifted = fnShiftCol( aLayout, i, iColumn );\n\t\n\t\t\t\t\t/* Cache calculation for unique columns */\n\t\t\t\t\tbUnique = iColspan === 1 ? true : false;\n\t\n\t\t\t\t\t/* If there is col / rowspan, copy the information into the layout grid */\n\t\t\t\t\tfor ( l=0 ; l<iColspan ; l++ )\n\t\t\t\t\t{\n\t\t\t\t\t\tfor ( k=0 ; k<iRowspan ; k++ )\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\taLayout[i+k][iColShifted+l] = {\n\t\t\t\t\t\t\t\t\"cell\": nCell,\n\t\t\t\t\t\t\t\t\"unique\": bUnique\n\t\t\t\t\t\t\t};\n\t\t\t\t\t\t\taLayout[i+k].nTr = nTr;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tnCell = nCell.nextSibling;\n\t\t\t}\n\t\t}\n\t}\n\t\n\t\n\t/**\n\t * Get an array of unique th elements, one for each column\n\t *  @param {object} oSettings dataTables settings object\n\t *  @param {node} nHeader automatically detect the layout from this node - optional\n\t *  @param {array} aLayout thead/tfoot layout from _fnDetectHeader - optional\n\t *  @returns array {node} aReturn list of unique th's\n\t *  @memberof DataTable#oApi\n\t */\n\tfunction _fnGetUniqueThs ( oSettings, nHeader, aLayout )\n\t{\n\t\tvar aReturn = [];\n\t\tif ( !aLayout )\n\t\t{\n\t\t\taLayout = oSettings.aoHeader;\n\t\t\tif ( nHeader )\n\t\t\t{\n\t\t\t\taLayout = [];\n\t\t\t\t_fnDetectHeader( aLayout, nHeader );\n\t\t\t}\n\t\t}\n\t\n\t\tfor ( var i=0, iLen=aLayout.length ; i<iLen ; i++ )\n\t\t{\n\t\t\tfor ( var j=0, jLen=aLayout[i].length ; j<jLen ; j++ )\n\t\t\t{\n\t\t\t\tif ( aLayout[i][j].unique &&\n\t\t\t\t\t (!aReturn[j] || !oSettings.bSortCellsTop) )\n\t\t\t\t{\n\t\t\t\t\taReturn[j] = aLayout[i][j].cell;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\n\t\treturn aReturn;\n\t}\n\t\n\t/**\n\t * Create an Ajax call based on the table's settings, taking into account that\n\t * parameters can have multiple forms, and backwards compatibility.\n\t *\n\t * @param {object} oSettings dataTables settings object\n\t * @param {array} data Data to send to the server, required by\n\t *     DataTables - may be augmented by developer callbacks\n\t * @param {function} fn Callback function to run when data is obtained\n\t */\n\tfunction _fnBuildAjax( oSettings, data, fn )\n\t{\n\t\t// Compatibility with 1.9-, allow fnServerData and event to manipulate\n\t\t_fnCallbackFire( oSettings, 'aoServerParams', 'serverParams', [data] );\n\t\n\t\t// Convert to object based for 1.10+ if using the old array scheme which can\n\t\t// come from server-side processing or serverParams\n\t\tif ( data && $.isArray(data) ) {\n\t\t\tvar tmp = {};\n\t\t\tvar rbracket = /(.*?)\\[\\]$/;\n\t\n\t\t\t$.each( data, function (key, val) {\n\t\t\t\tvar match = val.name.match(rbracket);\n\t\n\t\t\t\tif ( match ) {\n\t\t\t\t\t// Support for arrays\n\t\t\t\t\tvar name = match[0];\n\t\n\t\t\t\t\tif ( ! tmp[ name ] ) {\n\t\t\t\t\t\ttmp[ name ] = [];\n\t\t\t\t\t}\n\t\t\t\t\ttmp[ name ].push( val.value );\n\t\t\t\t}\n\t\t\t\telse {\n\t\t\t\t\ttmp[val.name] = val.value;\n\t\t\t\t}\n\t\t\t} );\n\t\t\tdata = tmp;\n\t\t}\n\t\n\t\tvar ajaxData;\n\t\tvar ajax = oSettings.ajax;\n\t\tvar instance = oSettings.oInstance;\n\t\tvar callback = function ( json ) {\n\t\t\t_fnCallbackFire( oSettings, null, 'xhr', [oSettings, json, oSettings.jqXHR] );\n\t\t\tfn( json );\n\t\t};\n\t\n\t\tif ( $.isPlainObject( ajax ) && ajax.data )\n\t\t{\n\t\t\tajaxData = ajax.data;\n\t\n\t\t\tvar newData = $.isFunction( ajaxData ) ?\n\t\t\t\tajaxData( data, oSettings ) :  // fn can manipulate data or return\n\t\t\t\tajaxData;                      // an object object or array to merge\n\t\n\t\t\t// If the function returned something, use that alone\n\t\t\tdata = $.isFunction( ajaxData ) && newData ?\n\t\t\t\tnewData :\n\t\t\t\t$.extend( true, data, newData );\n\t\n\t\t\t// Remove the data property as we've resolved it already and don't want\n\t\t\t// jQuery to do it again (it is restored at the end of the function)\n\t\t\tdelete ajax.data;\n\t\t}\n\t\n\t\tvar baseAjax = {\n\t\t\t\"data\": data,\n\t\t\t\"success\": function (json) {\n\t\t\t\tvar error = json.error || json.sError;\n\t\t\t\tif ( error ) {\n\t\t\t\t\t_fnLog( oSettings, 0, error );\n\t\t\t\t}\n\t\n\t\t\t\toSettings.json = json;\n\t\t\t\tcallback( json );\n\t\t\t},\n\t\t\t\"dataType\": \"json\",\n\t\t\t\"cache\": false,\n\t\t\t\"type\": oSettings.sServerMethod,\n\t\t\t\"error\": function (xhr, error, thrown) {\n\t\t\t\tvar ret = _fnCallbackFire( oSettings, null, 'xhr', [oSettings, null, oSettings.jqXHR] );\n\t\n\t\t\t\tif ( $.inArray( true, ret ) === -1 ) {\n\t\t\t\t\tif ( error == \"parsererror\" ) {\n\t\t\t\t\t\t_fnLog( oSettings, 0, 'Invalid JSON response', 1 );\n\t\t\t\t\t}\n\t\t\t\t\telse if ( xhr.readyState === 4 ) {\n\t\t\t\t\t\t_fnLog( oSettings, 0, 'Ajax error', 7 );\n\t\t\t\t\t}\n\t\t\t\t}\n\t\n\t\t\t\t_fnProcessingDisplay( oSettings, false );\n\t\t\t}\n\t\t};\n\t\n\t\t// Store the data submitted for the API\n\t\toSettings.oAjaxData = data;\n\t\n\t\t// Allow plug-ins and external processes to modify the data\n\t\t_fnCallbackFire( oSettings, null, 'preXhr', [oSettings, data] );\n\t\n\t\tif ( oSettings.fnServerData )\n\t\t{\n\t\t\t// DataTables 1.9- compatibility\n\t\t\toSettings.fnServerData.call( instance,\n\t\t\t\toSettings.sAjaxSource,\n\t\t\t\t$.map( data, function (val, key) { // Need to convert back to 1.9 trad format\n\t\t\t\t\treturn { name: key, value: val };\n\t\t\t\t} ),\n\t\t\t\tcallback,\n\t\t\t\toSettings\n\t\t\t);\n\t\t}\n\t\telse if ( oSettings.sAjaxSource || typeof ajax === 'string' )\n\t\t{\n\t\t\t// DataTables 1.9- compatibility\n\t\t\toSettings.jqXHR = $.ajax( $.extend( baseAjax, {\n\t\t\t\turl: ajax || oSettings.sAjaxSource\n\t\t\t} ) );\n\t\t}\n\t\telse if ( $.isFunction( ajax ) )\n\t\t{\n\t\t\t// Is a function - let the caller define what needs to be done\n\t\t\toSettings.jqXHR = ajax.call( instance, data, callback, oSettings );\n\t\t}\n\t\telse\n\t\t{\n\t\t\t// Object to extend the base settings\n\t\t\toSettings.jqXHR = $.ajax( $.extend( baseAjax, ajax ) );\n\t\n\t\t\t// Restore for next time around\n\t\t\tajax.data = ajaxData;\n\t\t}\n\t}\n\t\n\t\n\t/**\n\t * Update the table using an Ajax call\n\t *  @param {object} settings dataTables settings object\n\t *  @returns {boolean} Block the table drawing or not\n\t *  @memberof DataTable#oApi\n\t */\n\tfunction _fnAjaxUpdate( settings )\n\t{\n\t\tif ( settings.bAjaxDataGet ) {\n\t\t\tsettings.iDraw++;\n\t\t\t_fnProcessingDisplay( settings, true );\n\t\n\t\t\t_fnBuildAjax(\n\t\t\t\tsettings,\n\t\t\t\t_fnAjaxParameters( settings ),\n\t\t\t\tfunction(json) {\n\t\t\t\t\t_fnAjaxUpdateDraw( settings, json );\n\t\t\t\t}\n\t\t\t);\n\t\n\t\t\treturn false;\n\t\t}\n\t\treturn true;\n\t}\n\t\n\t\n\t/**\n\t * Build up the parameters in an object needed for a server-side processing\n\t * request. Note that this is basically done twice, is different ways - a modern\n\t * method which is used by default in DataTables 1.10 which uses objects and\n\t * arrays, or the 1.9- method with is name / value pairs. 1.9 method is used if\n\t * the sAjaxSource option is used in the initialisation, or the legacyAjax\n\t * option is set.\n\t *  @param {object} oSettings dataTables settings object\n\t *  @returns {bool} block the table drawing or not\n\t *  @memberof DataTable#oApi\n\t */\n\tfunction _fnAjaxParameters( settings )\n\t{\n\t\tvar\n\t\t\tcolumns = settings.aoColumns,\n\t\t\tcolumnCount = columns.length,\n\t\t\tfeatures = settings.oFeatures,\n\t\t\tpreSearch = settings.oPreviousSearch,\n\t\t\tpreColSearch = settings.aoPreSearchCols,\n\t\t\ti, data = [], dataProp, column, columnSearch,\n\t\t\tsort = _fnSortFlatten( settings ),\n\t\t\tdisplayStart = settings._iDisplayStart,\n\t\t\tdisplayLength = features.bPaginate !== false ?\n\t\t\t\tsettings._iDisplayLength :\n\t\t\t\t-1;\n\t\n\t\tvar param = function ( name, value ) {\n\t\t\tdata.push( { 'name': name, 'value': value } );\n\t\t};\n\t\n\t\t// DataTables 1.9- compatible method\n\t\tparam( 'sEcho',          settings.iDraw );\n\t\tparam( 'iColumns',       columnCount );\n\t\tparam( 'sColumns',       _pluck( columns, 'sName' ).join(',') );\n\t\tparam( 'iDisplayStart',  displayStart );\n\t\tparam( 'iDisplayLength', displayLength );\n\t\n\t\t// DataTables 1.10+ method\n\t\tvar d = {\n\t\t\tdraw:    settings.iDraw,\n\t\t\tcolumns: [],\n\t\t\torder:   [],\n\t\t\tstart:   displayStart,\n\t\t\tlength:  displayLength,\n\t\t\tsearch:  {\n\t\t\t\tvalue: preSearch.sSearch,\n\t\t\t\tregex: preSearch.bRegex\n\t\t\t}\n\t\t};\n\t\n\t\tfor ( i=0 ; i<columnCount ; i++ ) {\n\t\t\tcolumn = columns[i];\n\t\t\tcolumnSearch = preColSearch[i];\n\t\t\tdataProp = typeof column.mData==\"function\" ? 'function' : column.mData ;\n\t\n\t\t\td.columns.push( {\n\t\t\t\tdata:       dataProp,\n\t\t\t\tname:       column.sName,\n\t\t\t\tsearchable: column.bSearchable,\n\t\t\t\torderable:  column.bSortable,\n\t\t\t\tsearch:     {\n\t\t\t\t\tvalue: columnSearch.sSearch,\n\t\t\t\t\tregex: columnSearch.bRegex\n\t\t\t\t}\n\t\t\t} );\n\t\n\t\t\tparam( \"mDataProp_\"+i, dataProp );\n\t\n\t\t\tif ( features.bFilter ) {\n\t\t\t\tparam( 'sSearch_'+i,     columnSearch.sSearch );\n\t\t\t\tparam( 'bRegex_'+i,      columnSearch.bRegex );\n\t\t\t\tparam( 'bSearchable_'+i, column.bSearchable );\n\t\t\t}\n\t\n\t\t\tif ( features.bSort ) {\n\t\t\t\tparam( 'bSortable_'+i, column.bSortable );\n\t\t\t}\n\t\t}\n\t\n\t\tif ( features.bFilter ) {\n\t\t\tparam( 'sSearch', preSearch.sSearch );\n\t\t\tparam( 'bRegex', preSearch.bRegex );\n\t\t}\n\t\n\t\tif ( features.bSort ) {\n\t\t\t$.each( sort, function ( i, val ) {\n\t\t\t\td.order.push( { column: val.col, dir: val.dir } );\n\t\n\t\t\t\tparam( 'iSortCol_'+i, val.col );\n\t\t\t\tparam( 'sSortDir_'+i, val.dir );\n\t\t\t} );\n\t\n\t\t\tparam( 'iSortingCols', sort.length );\n\t\t}\n\t\n\t\t// If the legacy.ajax parameter is null, then we automatically decide which\n\t\t// form to use, based on sAjaxSource\n\t\tvar legacy = DataTable.ext.legacy.ajax;\n\t\tif ( legacy === null ) {\n\t\t\treturn settings.sAjaxSource ? data : d;\n\t\t}\n\t\n\t\t// Otherwise, if legacy has been specified then we use that to decide on the\n\t\t// form\n\t\treturn legacy ? data : d;\n\t}\n\t\n\t\n\t/**\n\t * Data the data from the server (nuking the old) and redraw the table\n\t *  @param {object} oSettings dataTables settings object\n\t *  @param {object} json json data return from the server.\n\t *  @param {string} json.sEcho Tracking flag for DataTables to match requests\n\t *  @param {int} json.iTotalRecords Number of records in the data set, not accounting for filtering\n\t *  @param {int} json.iTotalDisplayRecords Number of records in the data set, accounting for filtering\n\t *  @param {array} json.aaData The data to display on this page\n\t *  @param {string} [json.sColumns] Column ordering (sName, comma separated)\n\t *  @memberof DataTable#oApi\n\t */\n\tfunction _fnAjaxUpdateDraw ( settings, json )\n\t{\n\t\t// v1.10 uses camelCase variables, while 1.9 uses Hungarian notation.\n\t\t// Support both\n\t\tvar compat = function ( old, modern ) {\n\t\t\treturn json[old] !== undefined ? json[old] : json[modern];\n\t\t};\n\t\n\t\tvar data = _fnAjaxDataSrc( settings, json );\n\t\tvar draw            = compat( 'sEcho',                'draw' );\n\t\tvar recordsTotal    = compat( 'iTotalRecords',        'recordsTotal' );\n\t\tvar recordsFiltered = compat( 'iTotalDisplayRecords', 'recordsFiltered' );\n\t\n\t\tif ( draw ) {\n\t\t\t// Protect against out of sequence returns\n\t\t\tif ( draw*1 < settings.iDraw ) {\n\t\t\t\treturn;\n\t\t\t}\n\t\t\tsettings.iDraw = draw * 1;\n\t\t}\n\t\n\t\t_fnClearTable( settings );\n\t\tsettings._iRecordsTotal   = parseInt(recordsTotal, 10);\n\t\tsettings._iRecordsDisplay = parseInt(recordsFiltered, 10);\n\t\n\t\tfor ( var i=0, ien=data.length ; i<ien ; i++ ) {\n\t\t\t_fnAddData( settings, data[i] );\n\t\t}\n\t\tsettings.aiDisplay = settings.aiDisplayMaster.slice();\n\t\n\t\tsettings.bAjaxDataGet = false;\n\t\t_fnDraw( settings );\n\t\n\t\tif ( ! settings._bInitComplete ) {\n\t\t\t_fnInitComplete( settings, json );\n\t\t}\n\t\n\t\tsettings.bAjaxDataGet = true;\n\t\t_fnProcessingDisplay( settings, false );\n\t}\n\t\n\t\n\t/**\n\t * Get the data from the JSON data source to use for drawing a table. Using\n\t * `_fnGetObjectDataFn` allows the data to be sourced from a property of the\n\t * source object, or from a processing function.\n\t *  @param {object} oSettings dataTables settings object\n\t *  @param  {object} json Data source object / array from the server\n\t *  @return {array} Array of data to use\n\t */\n\tfunction _fnAjaxDataSrc ( oSettings, json )\n\t{\n\t\tvar dataSrc = $.isPlainObject( oSettings.ajax ) && oSettings.ajax.dataSrc !== undefined ?\n\t\t\toSettings.ajax.dataSrc :\n\t\t\toSettings.sAjaxDataProp; // Compatibility with 1.9-.\n\t\n\t\t// Compatibility with 1.9-. In order to read from aaData, check if the\n\t\t// default has been changed, if not, check for aaData\n\t\tif ( dataSrc === 'data' ) {\n\t\t\treturn json.aaData || json[dataSrc];\n\t\t}\n\t\n\t\treturn dataSrc !== \"\" ?\n\t\t\t_fnGetObjectDataFn( dataSrc )( json ) :\n\t\t\tjson;\n\t}\n\t\n\t/**\n\t * Generate the node required for filtering text\n\t *  @returns {node} Filter control element\n\t *  @param {object} oSettings dataTables settings object\n\t *  @memberof DataTable#oApi\n\t */\n\tfunction _fnFeatureHtmlFilter ( settings )\n\t{\n\t\tvar classes = settings.oClasses;\n\t\tvar tableId = settings.sTableId;\n\t\tvar language = settings.oLanguage;\n\t\tvar previousSearch = settings.oPreviousSearch;\n\t\tvar features = settings.aanFeatures;\n\t\tvar input = '<input type=\"search\" class=\"'+classes.sFilterInput+'\"/>';\n\t\n\t\tvar str = language.sSearch;\n\t\tstr = str.match(/_INPUT_/) ?\n\t\t\tstr.replace('_INPUT_', input) :\n\t\t\tstr+input;\n\t\n\t\tvar filter = $('<div/>', {\n\t\t\t\t'id': ! features.f ? tableId+'_filter' : null,\n\t\t\t\t'class': classes.sFilter\n\t\t\t} )\n\t\t\t.append( $('<label/>' ).append( str ) );\n\t\n\t\tvar searchFn = function() {\n\t\t\t/* Update all other filter input elements for the new display */\n\t\t\tvar n = features.f;\n\t\t\tvar val = !this.value ? \"\" : this.value; // mental IE8 fix :-(\n\t\n\t\t\t/* Now do the filter */\n\t\t\tif ( val != previousSearch.sSearch ) {\n\t\t\t\t_fnFilterComplete( settings, {\n\t\t\t\t\t\"sSearch\": val,\n\t\t\t\t\t\"bRegex\": previousSearch.bRegex,\n\t\t\t\t\t\"bSmart\": previousSearch.bSmart ,\n\t\t\t\t\t\"bCaseInsensitive\": previousSearch.bCaseInsensitive\n\t\t\t\t} );\n\t\n\t\t\t\t// Need to redraw, without resorting\n\t\t\t\tsettings._iDisplayStart = 0;\n\t\t\t\t_fnDraw( settings );\n\t\t\t}\n\t\t};\n\t\n\t\tvar searchDelay = settings.searchDelay !== null ?\n\t\t\tsettings.searchDelay :\n\t\t\t_fnDataSource( settings ) === 'ssp' ?\n\t\t\t\t400 :\n\t\t\t\t0;\n\t\n\t\tvar jqFilter = $('input', filter)\n\t\t\t.val( previousSearch.sSearch )\n\t\t\t.attr( 'placeholder', language.sSearchPlaceholder )\n\t\t\t.on(\n\t\t\t\t'keyup.DT search.DT input.DT paste.DT cut.DT',\n\t\t\t\tsearchDelay ?\n\t\t\t\t\t_fnThrottle( searchFn, searchDelay ) :\n\t\t\t\t\tsearchFn\n\t\t\t)\n\t\t\t.on( 'keypress.DT', function(e) {\n\t\t\t\t/* Prevent form submission */\n\t\t\t\tif ( e.keyCode == 13 ) {\n\t\t\t\t\treturn false;\n\t\t\t\t}\n\t\t\t} )\n\t\t\t.attr('aria-controls', tableId);\n\t\n\t\t// Update the input elements whenever the table is filtered\n\t\t$(settings.nTable).on( 'search.dt.DT', function ( ev, s ) {\n\t\t\tif ( settings === s ) {\n\t\t\t\t// IE9 throws an 'unknown error' if document.activeElement is used\n\t\t\t\t// inside an iframe or frame...\n\t\t\t\ttry {\n\t\t\t\t\tif ( jqFilter[0] !== document.activeElement ) {\n\t\t\t\t\t\tjqFilter.val( previousSearch.sSearch );\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tcatch ( e ) {}\n\t\t\t}\n\t\t} );\n\t\n\t\treturn filter[0];\n\t}\n\t\n\t\n\t/**\n\t * Filter the table using both the global filter and column based filtering\n\t *  @param {object} oSettings dataTables settings object\n\t *  @param {object} oSearch search information\n\t *  @param {int} [iForce] force a research of the master array (1) or not (undefined or 0)\n\t *  @memberof DataTable#oApi\n\t */\n\tfunction _fnFilterComplete ( oSettings, oInput, iForce )\n\t{\n\t\tvar oPrevSearch = oSettings.oPreviousSearch;\n\t\tvar aoPrevSearch = oSettings.aoPreSearchCols;\n\t\tvar fnSaveFilter = function ( oFilter ) {\n\t\t\t/* Save the filtering values */\n\t\t\toPrevSearch.sSearch = oFilter.sSearch;\n\t\t\toPrevSearch.bRegex = oFilter.bRegex;\n\t\t\toPrevSearch.bSmart = oFilter.bSmart;\n\t\t\toPrevSearch.bCaseInsensitive = oFilter.bCaseInsensitive;\n\t\t};\n\t\tvar fnRegex = function ( o ) {\n\t\t\t// Backwards compatibility with the bEscapeRegex option\n\t\t\treturn o.bEscapeRegex !== undefined ? !o.bEscapeRegex : o.bRegex;\n\t\t};\n\t\n\t\t// Resolve any column types that are unknown due to addition or invalidation\n\t\t// @todo As per sort - can this be moved into an event handler?\n\t\t_fnColumnTypes( oSettings );\n\t\n\t\t/* In server-side processing all filtering is done by the server, so no point hanging around here */\n\t\tif ( _fnDataSource( oSettings ) != 'ssp' )\n\t\t{\n\t\t\t/* Global filter */\n\t\t\t_fnFilter( oSettings, oInput.sSearch, iForce, fnRegex(oInput), oInput.bSmart, oInput.bCaseInsensitive );\n\t\t\tfnSaveFilter( oInput );\n\t\n\t\t\t/* Now do the individual column filter */\n\t\t\tfor ( var i=0 ; i<aoPrevSearch.length ; i++ )\n\t\t\t{\n\t\t\t\t_fnFilterColumn( oSettings, aoPrevSearch[i].sSearch, i, fnRegex(aoPrevSearch[i]),\n\t\t\t\t\taoPrevSearch[i].bSmart, aoPrevSearch[i].bCaseInsensitive );\n\t\t\t}\n\t\n\t\t\t/* Custom filtering */\n\t\t\t_fnFilterCustom( oSettings );\n\t\t}\n\t\telse\n\t\t{\n\t\t\tfnSaveFilter( oInput );\n\t\t}\n\t\n\t\t/* Tell the draw function we have been filtering */\n\t\toSettings.bFiltered = true;\n\t\t_fnCallbackFire( oSettings, null, 'search', [oSettings] );\n\t}\n\t\n\t\n\t/**\n\t * Apply custom filtering functions\n\t *  @param {object} oSettings dataTables settings object\n\t *  @memberof DataTable#oApi\n\t */\n\tfunction _fnFilterCustom( settings )\n\t{\n\t\tvar filters = DataTable.ext.search;\n\t\tvar displayRows = settings.aiDisplay;\n\t\tvar row, rowIdx;\n\t\n\t\tfor ( var i=0, ien=filters.length ; i<ien ; i++ ) {\n\t\t\tvar rows = [];\n\t\n\t\t\t// Loop over each row and see if it should be included\n\t\t\tfor ( var j=0, jen=displayRows.length ; j<jen ; j++ ) {\n\t\t\t\trowIdx = displayRows[ j ];\n\t\t\t\trow = settings.aoData[ rowIdx ];\n\t\n\t\t\t\tif ( filters[i]( settings, row._aFilterData, rowIdx, row._aData, j ) ) {\n\t\t\t\t\trows.push( rowIdx );\n\t\t\t\t}\n\t\t\t}\n\t\n\t\t\t// So the array reference doesn't break set the results into the\n\t\t\t// existing array\n\t\t\tdisplayRows.length = 0;\n\t\t\t$.merge( displayRows, rows );\n\t\t}\n\t}\n\t\n\t\n\t/**\n\t * Filter the table on a per-column basis\n\t *  @param {object} oSettings dataTables settings object\n\t *  @param {string} sInput string to filter on\n\t *  @param {int} iColumn column to filter\n\t *  @param {bool} bRegex treat search string as a regular expression or not\n\t *  @param {bool} bSmart use smart filtering or not\n\t *  @param {bool} bCaseInsensitive Do case insenstive matching or not\n\t *  @memberof DataTable#oApi\n\t */\n\tfunction _fnFilterColumn ( settings, searchStr, colIdx, regex, smart, caseInsensitive )\n\t{\n\t\tif ( searchStr === '' ) {\n\t\t\treturn;\n\t\t}\n\t\n\t\tvar data;\n\t\tvar out = [];\n\t\tvar display = settings.aiDisplay;\n\t\tvar rpSearch = _fnFilterCreateSearch( searchStr, regex, smart, caseInsensitive );\n\t\n\t\tfor ( var i=0 ; i<display.length ; i++ ) {\n\t\t\tdata = settings.aoData[ display[i] ]._aFilterData[ colIdx ];\n\t\n\t\t\tif ( rpSearch.test( data ) ) {\n\t\t\t\tout.push( display[i] );\n\t\t\t}\n\t\t}\n\t\n\t\tsettings.aiDisplay = out;\n\t}\n\t\n\t\n\t/**\n\t * Filter the data table based on user input and draw the table\n\t *  @param {object} settings dataTables settings object\n\t *  @param {string} input string to filter on\n\t *  @param {int} force optional - force a research of the master array (1) or not (undefined or 0)\n\t *  @param {bool} regex treat as a regular expression or not\n\t *  @param {bool} smart perform smart filtering or not\n\t *  @param {bool} caseInsensitive Do case insenstive matching or not\n\t *  @memberof DataTable#oApi\n\t */\n\tfunction _fnFilter( settings, input, force, regex, smart, caseInsensitive )\n\t{\n\t\tvar rpSearch = _fnFilterCreateSearch( input, regex, smart, caseInsensitive );\n\t\tvar prevSearch = settings.oPreviousSearch.sSearch;\n\t\tvar displayMaster = settings.aiDisplayMaster;\n\t\tvar display, invalidated, i;\n\t\tvar filtered = [];\n\t\n\t\t// Need to take account of custom filtering functions - always filter\n\t\tif ( DataTable.ext.search.length !== 0 ) {\n\t\t\tforce = true;\n\t\t}\n\t\n\t\t// Check if any of the rows were invalidated\n\t\tinvalidated = _fnFilterData( settings );\n\t\n\t\t// If the input is blank - we just want the full data set\n\t\tif ( input.length <= 0 ) {\n\t\t\tsettings.aiDisplay = displayMaster.slice();\n\t\t}\n\t\telse {\n\t\t\t// New search - start from the master array\n\t\t\tif ( invalidated ||\n\t\t\t\t force ||\n\t\t\t\t prevSearch.length > input.length ||\n\t\t\t\t input.indexOf(prevSearch) !== 0 ||\n\t\t\t\t settings.bSorted // On resort, the display master needs to be\n\t\t\t\t                  // re-filtered since indexes will have changed\n\t\t\t) {\n\t\t\t\tsettings.aiDisplay = displayMaster.slice();\n\t\t\t}\n\t\n\t\t\t// Search the display array\n\t\t\tdisplay = settings.aiDisplay;\n\t\n\t\t\tfor ( i=0 ; i<display.length ; i++ ) {\n\t\t\t\tif ( rpSearch.test( settings.aoData[ display[i] ]._sFilterRow ) ) {\n\t\t\t\t\tfiltered.push( display[i] );\n\t\t\t\t}\n\t\t\t}\n\t\n\t\t\tsettings.aiDisplay = filtered;\n\t\t}\n\t}\n\t\n\t\n\t/**\n\t * Build a regular expression object suitable for searching a table\n\t *  @param {string} sSearch string to search for\n\t *  @param {bool} bRegex treat as a regular expression or not\n\t *  @param {bool} bSmart perform smart filtering or not\n\t *  @param {bool} bCaseInsensitive Do case insensitive matching or not\n\t *  @returns {RegExp} constructed object\n\t *  @memberof DataTable#oApi\n\t */\n\tfunction _fnFilterCreateSearch( search, regex, smart, caseInsensitive )\n\t{\n\t\tsearch = regex ?\n\t\t\tsearch :\n\t\t\t_fnEscapeRegex( search );\n\t\t\n\t\tif ( smart ) {\n\t\t\t/* For smart filtering we want to allow the search to work regardless of\n\t\t\t * word order. We also want double quoted text to be preserved, so word\n\t\t\t * order is important - a la google. So this is what we want to\n\t\t\t * generate:\n\t\t\t * \n\t\t\t * ^(?=.*?\\bone\\b)(?=.*?\\btwo three\\b)(?=.*?\\bfour\\b).*$\n\t\t\t */\n\t\t\tvar a = $.map( search.match( /\"[^\"]+\"|[^ ]+/g ) || [''], function ( word ) {\n\t\t\t\tif ( word.charAt(0) === '\"' ) {\n\t\t\t\t\tvar m = word.match( /^\"(.*)\"$/ );\n\t\t\t\t\tword = m ? m[1] : word;\n\t\t\t\t}\n\t\n\t\t\t\treturn word.replace('\"', '');\n\t\t\t} );\n\t\n\t\t\tsearch = '^(?=.*?'+a.join( ')(?=.*?' )+').*$';\n\t\t}\n\t\n\t\treturn new RegExp( search, caseInsensitive ? 'i' : '' );\n\t}\n\t\n\t\n\t/**\n\t * Escape a string such that it can be used in a regular expression\n\t *  @param {string} sVal string to escape\n\t *  @returns {string} escaped string\n\t *  @memberof DataTable#oApi\n\t */\n\tvar _fnEscapeRegex = DataTable.util.escapeRegex;\n\t\n\tvar __filter_div = $('<div>')[0];\n\tvar __filter_div_textContent = __filter_div.textContent !== undefined;\n\t\n\t// Update the filtering data for each row if needed (by invalidation or first run)\n\tfunction _fnFilterData ( settings )\n\t{\n\t\tvar columns = settings.aoColumns;\n\t\tvar column;\n\t\tvar i, j, ien, jen, filterData, cellData, row;\n\t\tvar fomatters = DataTable.ext.type.search;\n\t\tvar wasInvalidated = false;\n\t\n\t\tfor ( i=0, ien=settings.aoData.length ; i<ien ; i++ ) {\n\t\t\trow = settings.aoData[i];\n\t\n\t\t\tif ( ! row._aFilterData ) {\n\t\t\t\tfilterData = [];\n\t\n\t\t\t\tfor ( j=0, jen=columns.length ; j<jen ; j++ ) {\n\t\t\t\t\tcolumn = columns[j];\n\t\n\t\t\t\t\tif ( column.bSearchable ) {\n\t\t\t\t\t\tcellData = _fnGetCellData( settings, i, j, 'filter' );\n\t\n\t\t\t\t\t\tif ( fomatters[ column.sType ] ) {\n\t\t\t\t\t\t\tcellData = fomatters[ column.sType ]( cellData );\n\t\t\t\t\t\t}\n\t\n\t\t\t\t\t\t// Search in DataTables 1.10 is string based. In 1.11 this\n\t\t\t\t\t\t// should be altered to also allow strict type checking.\n\t\t\t\t\t\tif ( cellData === null ) {\n\t\t\t\t\t\t\tcellData = '';\n\t\t\t\t\t\t}\n\t\n\t\t\t\t\t\tif ( typeof cellData !== 'string' && cellData.toString ) {\n\t\t\t\t\t\t\tcellData = cellData.toString();\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\telse {\n\t\t\t\t\t\tcellData = '';\n\t\t\t\t\t}\n\t\n\t\t\t\t\t// If it looks like there is an HTML entity in the string,\n\t\t\t\t\t// attempt to decode it so sorting works as expected. Note that\n\t\t\t\t\t// we could use a single line of jQuery to do this, but the DOM\n\t\t\t\t\t// method used here is much faster http://jsperf.com/html-decode\n\t\t\t\t\tif ( cellData.indexOf && cellData.indexOf('&') !== -1 ) {\n\t\t\t\t\t\t__filter_div.innerHTML = cellData;\n\t\t\t\t\t\tcellData = __filter_div_textContent ?\n\t\t\t\t\t\t\t__filter_div.textContent :\n\t\t\t\t\t\t\t__filter_div.innerText;\n\t\t\t\t\t}\n\t\n\t\t\t\t\tif ( cellData.replace ) {\n\t\t\t\t\t\tcellData = cellData.replace(/[\\r\\n]/g, '');\n\t\t\t\t\t}\n\t\n\t\t\t\t\tfilterData.push( cellData );\n\t\t\t\t}\n\t\n\t\t\t\trow._aFilterData = filterData;\n\t\t\t\trow._sFilterRow = filterData.join('  ');\n\t\t\t\twasInvalidated = true;\n\t\t\t}\n\t\t}\n\t\n\t\treturn wasInvalidated;\n\t}\n\t\n\t\n\t/**\n\t * Convert from the internal Hungarian notation to camelCase for external\n\t * interaction\n\t *  @param {object} obj Object to convert\n\t *  @returns {object} Inverted object\n\t *  @memberof DataTable#oApi\n\t */\n\tfunction _fnSearchToCamel ( obj )\n\t{\n\t\treturn {\n\t\t\tsearch:          obj.sSearch,\n\t\t\tsmart:           obj.bSmart,\n\t\t\tregex:           obj.bRegex,\n\t\t\tcaseInsensitive: obj.bCaseInsensitive\n\t\t};\n\t}\n\t\n\t\n\t\n\t/**\n\t * Convert from camelCase notation to the internal Hungarian. We could use the\n\t * Hungarian convert function here, but this is cleaner\n\t *  @param {object} obj Object to convert\n\t *  @returns {object} Inverted object\n\t *  @memberof DataTable#oApi\n\t */\n\tfunction _fnSearchToHung ( obj )\n\t{\n\t\treturn {\n\t\t\tsSearch:          obj.search,\n\t\t\tbSmart:           obj.smart,\n\t\t\tbRegex:           obj.regex,\n\t\t\tbCaseInsensitive: obj.caseInsensitive\n\t\t};\n\t}\n\t\n\t/**\n\t * Generate the node required for the info display\n\t *  @param {object} oSettings dataTables settings object\n\t *  @returns {node} Information element\n\t *  @memberof DataTable#oApi\n\t */\n\tfunction _fnFeatureHtmlInfo ( settings )\n\t{\n\t\tvar\n\t\t\ttid = settings.sTableId,\n\t\t\tnodes = settings.aanFeatures.i,\n\t\t\tn = $('<div/>', {\n\t\t\t\t'class': settings.oClasses.sInfo,\n\t\t\t\t'id': ! nodes ? tid+'_info' : null\n\t\t\t} );\n\t\n\t\tif ( ! nodes ) {\n\t\t\t// Update display on each draw\n\t\t\tsettings.aoDrawCallback.push( {\n\t\t\t\t\"fn\": _fnUpdateInfo,\n\t\t\t\t\"sName\": \"information\"\n\t\t\t} );\n\t\n\t\t\tn\n\t\t\t\t.attr( 'role', 'status' )\n\t\t\t\t.attr( 'aria-live', 'polite' );\n\t\n\t\t\t// Table is described by our info div\n\t\t\t$(settings.nTable).attr( 'aria-describedby', tid+'_info' );\n\t\t}\n\t\n\t\treturn n[0];\n\t}\n\t\n\t\n\t/**\n\t * Update the information elements in the display\n\t *  @param {object} settings dataTables settings object\n\t *  @memberof DataTable#oApi\n\t */\n\tfunction _fnUpdateInfo ( settings )\n\t{\n\t\t/* Show information about the table */\n\t\tvar nodes = settings.aanFeatures.i;\n\t\tif ( nodes.length === 0 ) {\n\t\t\treturn;\n\t\t}\n\t\n\t\tvar\n\t\t\tlang  = settings.oLanguage,\n\t\t\tstart = settings._iDisplayStart+1,\n\t\t\tend   = settings.fnDisplayEnd(),\n\t\t\tmax   = settings.fnRecordsTotal(),\n\t\t\ttotal = settings.fnRecordsDisplay(),\n\t\t\tout   = total ?\n\t\t\t\tlang.sInfo :\n\t\t\t\tlang.sInfoEmpty;\n\t\n\t\tif ( total !== max ) {\n\t\t\t/* Record set after filtering */\n\t\t\tout += ' ' + lang.sInfoFiltered;\n\t\t}\n\t\n\t\t// Convert the macros\n\t\tout += lang.sInfoPostFix;\n\t\tout = _fnInfoMacros( settings, out );\n\t\n\t\tvar callback = lang.fnInfoCallback;\n\t\tif ( callback !== null ) {\n\t\t\tout = callback.call( settings.oInstance,\n\t\t\t\tsettings, start, end, max, total, out\n\t\t\t);\n\t\t}\n\t\n\t\t$(nodes).html( out );\n\t}\n\t\n\t\n\tfunction _fnInfoMacros ( settings, str )\n\t{\n\t\t// When infinite scrolling, we are always starting at 1. _iDisplayStart is used only\n\t\t// internally\n\t\tvar\n\t\t\tformatter  = settings.fnFormatNumber,\n\t\t\tstart      = settings._iDisplayStart+1,\n\t\t\tlen        = settings._iDisplayLength,\n\t\t\tvis        = settings.fnRecordsDisplay(),\n\t\t\tall        = len === -1;\n\t\n\t\treturn str.\n\t\t\treplace(/_START_/g, formatter.call( settings, start ) ).\n\t\t\treplace(/_END_/g,   formatter.call( settings, settings.fnDisplayEnd() ) ).\n\t\t\treplace(/_MAX_/g,   formatter.call( settings, settings.fnRecordsTotal() ) ).\n\t\t\treplace(/_TOTAL_/g, formatter.call( settings, vis ) ).\n\t\t\treplace(/_PAGE_/g,  formatter.call( settings, all ? 1 : Math.ceil( start / len ) ) ).\n\t\t\treplace(/_PAGES_/g, formatter.call( settings, all ? 1 : Math.ceil( vis / len ) ) );\n\t}\n\t\n\t\n\t\n\t/**\n\t * Draw the table for the first time, adding all required features\n\t *  @param {object} settings dataTables settings object\n\t *  @memberof DataTable#oApi\n\t */\n\tfunction _fnInitialise ( settings )\n\t{\n\t\tvar i, iLen, iAjaxStart=settings.iInitDisplayStart;\n\t\tvar columns = settings.aoColumns, column;\n\t\tvar features = settings.oFeatures;\n\t\tvar deferLoading = settings.bDeferLoading; // value modified by the draw\n\t\n\t\t/* Ensure that the table data is fully initialised */\n\t\tif ( ! settings.bInitialised ) {\n\t\t\tsetTimeout( function(){ _fnInitialise( settings ); }, 200 );\n\t\t\treturn;\n\t\t}\n\t\n\t\t/* Show the display HTML options */\n\t\t_fnAddOptionsHtml( settings );\n\t\n\t\t/* Build and draw the header / footer for the table */\n\t\t_fnBuildHead( settings );\n\t\t_fnDrawHead( settings, settings.aoHeader );\n\t\t_fnDrawHead( settings, settings.aoFooter );\n\t\n\t\t/* Okay to show that something is going on now */\n\t\t_fnProcessingDisplay( settings, true );\n\t\n\t\t/* Calculate sizes for columns */\n\t\tif ( features.bAutoWidth ) {\n\t\t\t_fnCalculateColumnWidths( settings );\n\t\t}\n\t\n\t\tfor ( i=0, iLen=columns.length ; i<iLen ; i++ ) {\n\t\t\tcolumn = columns[i];\n\t\n\t\t\tif ( column.sWidth ) {\n\t\t\t\tcolumn.nTh.style.width = _fnStringToCss( column.sWidth );\n\t\t\t}\n\t\t}\n\t\n\t\t_fnCallbackFire( settings, null, 'preInit', [settings] );\n\t\n\t\t// If there is default sorting required - let's do it. The sort function\n\t\t// will do the drawing for us. Otherwise we draw the table regardless of the\n\t\t// Ajax source - this allows the table to look initialised for Ajax sourcing\n\t\t// data (show 'loading' message possibly)\n\t\t_fnReDraw( settings );\n\t\n\t\t// Server-side processing init complete is done by _fnAjaxUpdateDraw\n\t\tvar dataSrc = _fnDataSource( settings );\n\t\tif ( dataSrc != 'ssp' || deferLoading ) {\n\t\t\t// if there is an ajax source load the data\n\t\t\tif ( dataSrc == 'ajax' ) {\n\t\t\t\t_fnBuildAjax( settings, [], function(json) {\n\t\t\t\t\tvar aData = _fnAjaxDataSrc( settings, json );\n\t\n\t\t\t\t\t// Got the data - add it to the table\n\t\t\t\t\tfor ( i=0 ; i<aData.length ; i++ ) {\n\t\t\t\t\t\t_fnAddData( settings, aData[i] );\n\t\t\t\t\t}\n\t\n\t\t\t\t\t// Reset the init display for cookie saving. We've already done\n\t\t\t\t\t// a filter, and therefore cleared it before. So we need to make\n\t\t\t\t\t// it appear 'fresh'\n\t\t\t\t\tsettings.iInitDisplayStart = iAjaxStart;\n\t\n\t\t\t\t\t_fnReDraw( settings );\n\t\n\t\t\t\t\t_fnProcessingDisplay( settings, false );\n\t\t\t\t\t_fnInitComplete( settings, json );\n\t\t\t\t}, settings );\n\t\t\t}\n\t\t\telse {\n\t\t\t\t_fnProcessingDisplay( settings, false );\n\t\t\t\t_fnInitComplete( settings );\n\t\t\t}\n\t\t}\n\t}\n\t\n\t\n\t/**\n\t * Draw the table for the first time, adding all required features\n\t *  @param {object} oSettings dataTables settings object\n\t *  @param {object} [json] JSON from the server that completed the table, if using Ajax source\n\t *    with client-side processing (optional)\n\t *  @memberof DataTable#oApi\n\t */\n\tfunction _fnInitComplete ( settings, json )\n\t{\n\t\tsettings._bInitComplete = true;\n\t\n\t\t// When data was added after the initialisation (data or Ajax) we need to\n\t\t// calculate the column sizing\n\t\tif ( json || settings.oInit.aaData ) {\n\t\t\t_fnAdjustColumnSizing( settings );\n\t\t}\n\t\n\t\t_fnCallbackFire( settings, null, 'plugin-init', [settings, json] );\n\t\t_fnCallbackFire( settings, 'aoInitComplete', 'init', [settings, json] );\n\t}\n\t\n\t\n\tfunction _fnLengthChange ( settings, val )\n\t{\n\t\tvar len = parseInt( val, 10 );\n\t\tsettings._iDisplayLength = len;\n\t\n\t\t_fnLengthOverflow( settings );\n\t\n\t\t// Fire length change event\n\t\t_fnCallbackFire( settings, null, 'length', [settings, len] );\n\t}\n\t\n\t\n\t/**\n\t * Generate the node required for user display length changing\n\t *  @param {object} settings dataTables settings object\n\t *  @returns {node} Display length feature node\n\t *  @memberof DataTable#oApi\n\t */\n\tfunction _fnFeatureHtmlLength ( settings )\n\t{\n\t\tvar\n\t\t\tclasses  = settings.oClasses,\n\t\t\ttableId  = settings.sTableId,\n\t\t\tmenu     = settings.aLengthMenu,\n\t\t\td2       = $.isArray( menu[0] ),\n\t\t\tlengths  = d2 ? menu[0] : menu,\n\t\t\tlanguage = d2 ? menu[1] : menu;\n\t\n\t\tvar select = $('<select/>', {\n\t\t\t'name':          tableId+'_length',\n\t\t\t'aria-controls': tableId,\n\t\t\t'class':         classes.sLengthSelect\n\t\t} );\n\t\n\t\tfor ( var i=0, ien=lengths.length ; i<ien ; i++ ) {\n\t\t\tselect[0][ i ] = new Option( language[i], lengths[i] );\n\t\t}\n\t\n\t\tvar div = $('<div><label/></div>').addClass( classes.sLength );\n\t\tif ( ! settings.aanFeatures.l ) {\n\t\t\tdiv[0].id = tableId+'_length';\n\t\t}\n\t\n\t\tdiv.children().append(\n\t\t\tsettings.oLanguage.sLengthMenu.replace( '_MENU_', select[0].outerHTML )\n\t\t);\n\t\n\t\t// Can't use `select` variable as user might provide their own and the\n\t\t// reference is broken by the use of outerHTML\n\t\t$('select', div)\n\t\t\t.val( settings._iDisplayLength )\n\t\t\t.on( 'change.DT', function(e) {\n\t\t\t\t_fnLengthChange( settings, $(this).val() );\n\t\t\t\t_fnDraw( settings );\n\t\t\t} );\n\t\n\t\t// Update node value whenever anything changes the table's length\n\t\t$(settings.nTable).on( 'length.dt.DT', function (e, s, len) {\n\t\t\tif ( settings === s ) {\n\t\t\t\t$('select', div).val( len );\n\t\t\t}\n\t\t} );\n\t\n\t\treturn div[0];\n\t}\n\t\n\t\n\t\n\t/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\n\t * Note that most of the paging logic is done in\n\t * DataTable.ext.pager\n\t */\n\t\n\t/**\n\t * Generate the node required for default pagination\n\t *  @param {object} oSettings dataTables settings object\n\t *  @returns {node} Pagination feature node\n\t *  @memberof DataTable#oApi\n\t */\n\tfunction _fnFeatureHtmlPaginate ( settings )\n\t{\n\t\tvar\n\t\t\ttype   = settings.sPaginationType,\n\t\t\tplugin = DataTable.ext.pager[ type ],\n\t\t\tmodern = typeof plugin === 'function',\n\t\t\tredraw = function( settings ) {\n\t\t\t\t_fnDraw( settings );\n\t\t\t},\n\t\t\tnode = $('<div/>').addClass( settings.oClasses.sPaging + type )[0],\n\t\t\tfeatures = settings.aanFeatures;\n\t\n\t\tif ( ! modern ) {\n\t\t\tplugin.fnInit( settings, node, redraw );\n\t\t}\n\t\n\t\t/* Add a draw callback for the pagination on first instance, to update the paging display */\n\t\tif ( ! features.p )\n\t\t{\n\t\t\tnode.id = settings.sTableId+'_paginate';\n\t\n\t\t\tsettings.aoDrawCallback.push( {\n\t\t\t\t\"fn\": function( settings ) {\n\t\t\t\t\tif ( modern ) {\n\t\t\t\t\t\tvar\n\t\t\t\t\t\t\tstart      = settings._iDisplayStart,\n\t\t\t\t\t\t\tlen        = settings._iDisplayLength,\n\t\t\t\t\t\t\tvisRecords = settings.fnRecordsDisplay(),\n\t\t\t\t\t\t\tall        = len === -1,\n\t\t\t\t\t\t\tpage = all ? 0 : Math.ceil( start / len ),\n\t\t\t\t\t\t\tpages = all ? 1 : Math.ceil( visRecords / len ),\n\t\t\t\t\t\t\tbuttons = plugin(page, pages),\n\t\t\t\t\t\t\ti, ien;\n\t\n\t\t\t\t\t\tfor ( i=0, ien=features.p.length ; i<ien ; i++ ) {\n\t\t\t\t\t\t\t_fnRenderer( settings, 'pageButton' )(\n\t\t\t\t\t\t\t\tsettings, features.p[i], i, buttons, page, pages\n\t\t\t\t\t\t\t);\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\telse {\n\t\t\t\t\t\tplugin.fnUpdate( settings, redraw );\n\t\t\t\t\t}\n\t\t\t\t},\n\t\t\t\t\"sName\": \"pagination\"\n\t\t\t} );\n\t\t}\n\t\n\t\treturn node;\n\t}\n\t\n\t\n\t/**\n\t * Alter the display settings to change the page\n\t *  @param {object} settings DataTables settings object\n\t *  @param {string|int} action Paging action to take: \"first\", \"previous\",\n\t *    \"next\" or \"last\" or page number to jump to (integer)\n\t *  @param [bool] redraw Automatically draw the update or not\n\t *  @returns {bool} true page has changed, false - no change\n\t *  @memberof DataTable#oApi\n\t */\n\tfunction _fnPageChange ( settings, action, redraw )\n\t{\n\t\tvar\n\t\t\tstart     = settings._iDisplayStart,\n\t\t\tlen       = settings._iDisplayLength,\n\t\t\trecords   = settings.fnRecordsDisplay();\n\t\n\t\tif ( records === 0 || len === -1 )\n\t\t{\n\t\t\tstart = 0;\n\t\t}\n\t\telse if ( typeof action === \"number\" )\n\t\t{\n\t\t\tstart = action * len;\n\t\n\t\t\tif ( start > records )\n\t\t\t{\n\t\t\t\tstart = 0;\n\t\t\t}\n\t\t}\n\t\telse if ( action == \"first\" )\n\t\t{\n\t\t\tstart = 0;\n\t\t}\n\t\telse if ( action == \"previous\" )\n\t\t{\n\t\t\tstart = len >= 0 ?\n\t\t\t\tstart - len :\n\t\t\t\t0;\n\t\n\t\t\tif ( start < 0 )\n\t\t\t{\n\t\t\t  start = 0;\n\t\t\t}\n\t\t}\n\t\telse if ( action == \"next\" )\n\t\t{\n\t\t\tif ( start + len < records )\n\t\t\t{\n\t\t\t\tstart += len;\n\t\t\t}\n\t\t}\n\t\telse if ( action == \"last\" )\n\t\t{\n\t\t\tstart = Math.floor( (records-1) / len) * len;\n\t\t}\n\t\telse\n\t\t{\n\t\t\t_fnLog( settings, 0, \"Unknown paging action: \"+action, 5 );\n\t\t}\n\t\n\t\tvar changed = settings._iDisplayStart !== start;\n\t\tsettings._iDisplayStart = start;\n\t\n\t\tif ( changed ) {\n\t\t\t_fnCallbackFire( settings, null, 'page', [settings] );\n\t\n\t\t\tif ( redraw ) {\n\t\t\t\t_fnDraw( settings );\n\t\t\t}\n\t\t}\n\t\n\t\treturn changed;\n\t}\n\t\n\t\n\t\n\t/**\n\t * Generate the node required for the processing node\n\t *  @param {object} settings dataTables settings object\n\t *  @returns {node} Processing element\n\t *  @memberof DataTable#oApi\n\t */\n\tfunction _fnFeatureHtmlProcessing ( settings )\n\t{\n\t\treturn $('<div/>', {\n\t\t\t\t'id': ! settings.aanFeatures.r ? settings.sTableId+'_processing' : null,\n\t\t\t\t'class': settings.oClasses.sProcessing\n\t\t\t} )\n\t\t\t.html( settings.oLanguage.sProcessing )\n\t\t\t.insertBefore( settings.nTable )[0];\n\t}\n\t\n\t\n\t/**\n\t * Display or hide the processing indicator\n\t *  @param {object} settings dataTables settings object\n\t *  @param {bool} show Show the processing indicator (true) or not (false)\n\t *  @memberof DataTable#oApi\n\t */\n\tfunction _fnProcessingDisplay ( settings, show )\n\t{\n\t\tif ( settings.oFeatures.bProcessing ) {\n\t\t\t$(settings.aanFeatures.r).css( 'display', show ? 'block' : 'none' );\n\t\t}\n\t\n\t\t_fnCallbackFire( settings, null, 'processing', [settings, show] );\n\t}\n\t\n\t/**\n\t * Add any control elements for the table - specifically scrolling\n\t *  @param {object} settings dataTables settings object\n\t *  @returns {node} Node to add to the DOM\n\t *  @memberof DataTable#oApi\n\t */\n\tfunction _fnFeatureHtmlTable ( settings )\n\t{\n\t\tvar table = $(settings.nTable);\n\t\n\t\t// Add the ARIA grid role to the table\n\t\ttable.attr( 'role', 'grid' );\n\t\n\t\t// Scrolling from here on in\n\t\tvar scroll = settings.oScroll;\n\t\n\t\tif ( scroll.sX === '' && scroll.sY === '' ) {\n\t\t\treturn settings.nTable;\n\t\t}\n\t\n\t\tvar scrollX = scroll.sX;\n\t\tvar scrollY = scroll.sY;\n\t\tvar classes = settings.oClasses;\n\t\tvar caption = table.children('caption');\n\t\tvar captionSide = caption.length ? caption[0]._captionSide : null;\n\t\tvar headerClone = $( table[0].cloneNode(false) );\n\t\tvar footerClone = $( table[0].cloneNode(false) );\n\t\tvar footer = table.children('tfoot');\n\t\tvar _div = '<div/>';\n\t\tvar size = function ( s ) {\n\t\t\treturn !s ? null : _fnStringToCss( s );\n\t\t};\n\t\n\t\tif ( ! footer.length ) {\n\t\t\tfooter = null;\n\t\t}\n\t\n\t\t/*\n\t\t * The HTML structure that we want to generate in this function is:\n\t\t *  div - scroller\n\t\t *    div - scroll head\n\t\t *      div - scroll head inner\n\t\t *        table - scroll head table\n\t\t *          thead - thead\n\t\t *    div - scroll body\n\t\t *      table - table (master table)\n\t\t *        thead - thead clone for sizing\n\t\t *        tbody - tbody\n\t\t *    div - scroll foot\n\t\t *      div - scroll foot inner\n\t\t *        table - scroll foot table\n\t\t *          tfoot - tfoot\n\t\t */\n\t\tvar scroller = $( _div, { 'class': classes.sScrollWrapper } )\n\t\t\t.append(\n\t\t\t\t$(_div, { 'class': classes.sScrollHead } )\n\t\t\t\t\t.css( {\n\t\t\t\t\t\toverflow: 'hidden',\n\t\t\t\t\t\tposition: 'relative',\n\t\t\t\t\t\tborder: 0,\n\t\t\t\t\t\twidth: scrollX ? size(scrollX) : '100%'\n\t\t\t\t\t} )\n\t\t\t\t\t.append(\n\t\t\t\t\t\t$(_div, { 'class': classes.sScrollHeadInner } )\n\t\t\t\t\t\t\t.css( {\n\t\t\t\t\t\t\t\t'box-sizing': 'content-box',\n\t\t\t\t\t\t\t\twidth: scroll.sXInner || '100%'\n\t\t\t\t\t\t\t} )\n\t\t\t\t\t\t\t.append(\n\t\t\t\t\t\t\t\theaderClone\n\t\t\t\t\t\t\t\t\t.removeAttr('id')\n\t\t\t\t\t\t\t\t\t.css( 'margin-left', 0 )\n\t\t\t\t\t\t\t\t\t.append( captionSide === 'top' ? caption : null )\n\t\t\t\t\t\t\t\t\t.append(\n\t\t\t\t\t\t\t\t\t\ttable.children('thead')\n\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t)\n\t\t\t\t\t)\n\t\t\t)\n\t\t\t.append(\n\t\t\t\t$(_div, { 'class': classes.sScrollBody } )\n\t\t\t\t\t.css( {\n\t\t\t\t\t\tposition: 'relative',\n\t\t\t\t\t\toverflow: 'auto',\n\t\t\t\t\t\twidth: size( scrollX )\n\t\t\t\t\t} )\n\t\t\t\t\t.append( table )\n\t\t\t);\n\t\n\t\tif ( footer ) {\n\t\t\tscroller.append(\n\t\t\t\t$(_div, { 'class': classes.sScrollFoot } )\n\t\t\t\t\t.css( {\n\t\t\t\t\t\toverflow: 'hidden',\n\t\t\t\t\t\tborder: 0,\n\t\t\t\t\t\twidth: scrollX ? size(scrollX) : '100%'\n\t\t\t\t\t} )\n\t\t\t\t\t.append(\n\t\t\t\t\t\t$(_div, { 'class': classes.sScrollFootInner } )\n\t\t\t\t\t\t\t.append(\n\t\t\t\t\t\t\t\tfooterClone\n\t\t\t\t\t\t\t\t\t.removeAttr('id')\n\t\t\t\t\t\t\t\t\t.css( 'margin-left', 0 )\n\t\t\t\t\t\t\t\t\t.append( captionSide === 'bottom' ? caption : null )\n\t\t\t\t\t\t\t\t\t.append(\n\t\t\t\t\t\t\t\t\t\ttable.children('tfoot')\n\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t)\n\t\t\t\t\t)\n\t\t\t);\n\t\t}\n\t\n\t\tvar children = scroller.children();\n\t\tvar scrollHead = children[0];\n\t\tvar scrollBody = children[1];\n\t\tvar scrollFoot = footer ? children[2] : null;\n\t\n\t\t// When the body is scrolled, then we also want to scroll the headers\n\t\tif ( scrollX ) {\n\t\t\t$(scrollBody).on( 'scroll.DT', function (e) {\n\t\t\t\tvar scrollLeft = this.scrollLeft;\n\t\n\t\t\t\tscrollHead.scrollLeft = scrollLeft;\n\t\n\t\t\t\tif ( footer ) {\n\t\t\t\t\tscrollFoot.scrollLeft = scrollLeft;\n\t\t\t\t}\n\t\t\t} );\n\t\t}\n\t\n\t\t$(scrollBody).css(\n\t\t\tscrollY && scroll.bCollapse ? 'max-height' : 'height', \n\t\t\tscrollY\n\t\t);\n\t\n\t\tsettings.nScrollHead = scrollHead;\n\t\tsettings.nScrollBody = scrollBody;\n\t\tsettings.nScrollFoot = scrollFoot;\n\t\n\t\t// On redraw - align columns\n\t\tsettings.aoDrawCallback.push( {\n\t\t\t\"fn\": _fnScrollDraw,\n\t\t\t\"sName\": \"scrolling\"\n\t\t} );\n\t\n\t\treturn scroller[0];\n\t}\n\t\n\t\n\t\n\t/**\n\t * Update the header, footer and body tables for resizing - i.e. column\n\t * alignment.\n\t *\n\t * Welcome to the most horrible function DataTables. The process that this\n\t * function follows is basically:\n\t *   1. Re-create the table inside the scrolling div\n\t *   2. Take live measurements from the DOM\n\t *   3. Apply the measurements to align the columns\n\t *   4. Clean up\n\t *\n\t *  @param {object} settings dataTables settings object\n\t *  @memberof DataTable#oApi\n\t */\n\tfunction _fnScrollDraw ( settings )\n\t{\n\t\t// Given that this is such a monster function, a lot of variables are use\n\t\t// to try and keep the minimised size as small as possible\n\t\tvar\n\t\t\tscroll         = settings.oScroll,\n\t\t\tscrollX        = scroll.sX,\n\t\t\tscrollXInner   = scroll.sXInner,\n\t\t\tscrollY        = scroll.sY,\n\t\t\tbarWidth       = scroll.iBarWidth,\n\t\t\tdivHeader      = $(settings.nScrollHead),\n\t\t\tdivHeaderStyle = divHeader[0].style,\n\t\t\tdivHeaderInner = divHeader.children('div'),\n\t\t\tdivHeaderInnerStyle = divHeaderInner[0].style,\n\t\t\tdivHeaderTable = divHeaderInner.children('table'),\n\t\t\tdivBodyEl      = settings.nScrollBody,\n\t\t\tdivBody        = $(divBodyEl),\n\t\t\tdivBodyStyle   = divBodyEl.style,\n\t\t\tdivFooter      = $(settings.nScrollFoot),\n\t\t\tdivFooterInner = divFooter.children('div'),\n\t\t\tdivFooterTable = divFooterInner.children('table'),\n\t\t\theader         = $(settings.nTHead),\n\t\t\ttable          = $(settings.nTable),\n\t\t\ttableEl        = table[0],\n\t\t\ttableStyle     = tableEl.style,\n\t\t\tfooter         = settings.nTFoot ? $(settings.nTFoot) : null,\n\t\t\tbrowser        = settings.oBrowser,\n\t\t\tie67           = browser.bScrollOversize,\n\t\t\tdtHeaderCells  = _pluck( settings.aoColumns, 'nTh' ),\n\t\t\theaderTrgEls, footerTrgEls,\n\t\t\theaderSrcEls, footerSrcEls,\n\t\t\theaderCopy, footerCopy,\n\t\t\theaderWidths=[], footerWidths=[],\n\t\t\theaderContent=[], footerContent=[],\n\t\t\tidx, correction, sanityWidth,\n\t\t\tzeroOut = function(nSizer) {\n\t\t\t\tvar style = nSizer.style;\n\t\t\t\tstyle.paddingTop = \"0\";\n\t\t\t\tstyle.paddingBottom = \"0\";\n\t\t\t\tstyle.borderTopWidth = \"0\";\n\t\t\t\tstyle.borderBottomWidth = \"0\";\n\t\t\t\tstyle.height = 0;\n\t\t\t};\n\t\n\t\t// If the scrollbar visibility has changed from the last draw, we need to\n\t\t// adjust the column sizes as the table width will have changed to account\n\t\t// for the scrollbar\n\t\tvar scrollBarVis = divBodyEl.scrollHeight > divBodyEl.clientHeight;\n\t\t\n\t\tif ( settings.scrollBarVis !== scrollBarVis && settings.scrollBarVis !== undefined ) {\n\t\t\tsettings.scrollBarVis = scrollBarVis;\n\t\t\t_fnAdjustColumnSizing( settings );\n\t\t\treturn; // adjust column sizing will call this function again\n\t\t}\n\t\telse {\n\t\t\tsettings.scrollBarVis = scrollBarVis;\n\t\t}\n\t\n\t\t/*\n\t\t * 1. Re-create the table inside the scrolling div\n\t\t */\n\t\n\t\t// Remove the old minimised thead and tfoot elements in the inner table\n\t\ttable.children('thead, tfoot').remove();\n\t\n\t\tif ( footer ) {\n\t\t\tfooterCopy = footer.clone().prependTo( table );\n\t\t\tfooterTrgEls = footer.find('tr'); // the original tfoot is in its own table and must be sized\n\t\t\tfooterSrcEls = footerCopy.find('tr');\n\t\t}\n\t\n\t\t// Clone the current header and footer elements and then place it into the inner table\n\t\theaderCopy = header.clone().prependTo( table );\n\t\theaderTrgEls = header.find('tr'); // original header is in its own table\n\t\theaderSrcEls = headerCopy.find('tr');\n\t\theaderCopy.find('th, td').removeAttr('tabindex');\n\t\n\t\n\t\t/*\n\t\t * 2. Take live measurements from the DOM - do not alter the DOM itself!\n\t\t */\n\t\n\t\t// Remove old sizing and apply the calculated column widths\n\t\t// Get the unique column headers in the newly created (cloned) header. We want to apply the\n\t\t// calculated sizes to this header\n\t\tif ( ! scrollX )\n\t\t{\n\t\t\tdivBodyStyle.width = '100%';\n\t\t\tdivHeader[0].style.width = '100%';\n\t\t}\n\t\n\t\t$.each( _fnGetUniqueThs( settings, headerCopy ), function ( i, el ) {\n\t\t\tidx = _fnVisibleToColumnIndex( settings, i );\n\t\t\tel.style.width = settings.aoColumns[idx].sWidth;\n\t\t} );\n\t\n\t\tif ( footer ) {\n\t\t\t_fnApplyToChildren( function(n) {\n\t\t\t\tn.style.width = \"\";\n\t\t\t}, footerSrcEls );\n\t\t}\n\t\n\t\t// Size the table as a whole\n\t\tsanityWidth = table.outerWidth();\n\t\tif ( scrollX === \"\" ) {\n\t\t\t// No x scrolling\n\t\t\ttableStyle.width = \"100%\";\n\t\n\t\t\t// IE7 will make the width of the table when 100% include the scrollbar\n\t\t\t// - which is shouldn't. When there is a scrollbar we need to take this\n\t\t\t// into account.\n\t\t\tif ( ie67 && (table.find('tbody').height() > divBodyEl.offsetHeight ||\n\t\t\t\tdivBody.css('overflow-y') == \"scroll\")\n\t\t\t) {\n\t\t\t\ttableStyle.width = _fnStringToCss( table.outerWidth() - barWidth);\n\t\t\t}\n\t\n\t\t\t// Recalculate the sanity width\n\t\t\tsanityWidth = table.outerWidth();\n\t\t}\n\t\telse if ( scrollXInner !== \"\" ) {\n\t\t\t// legacy x scroll inner has been given - use it\n\t\t\ttableStyle.width = _fnStringToCss(scrollXInner);\n\t\n\t\t\t// Recalculate the sanity width\n\t\t\tsanityWidth = table.outerWidth();\n\t\t}\n\t\n\t\t// Hidden header should have zero height, so remove padding and borders. Then\n\t\t// set the width based on the real headers\n\t\n\t\t// Apply all styles in one pass\n\t\t_fnApplyToChildren( zeroOut, headerSrcEls );\n\t\n\t\t// Read all widths in next pass\n\t\t_fnApplyToChildren( function(nSizer) {\n\t\t\theaderContent.push( nSizer.innerHTML );\n\t\t\theaderWidths.push( _fnStringToCss( $(nSizer).css('width') ) );\n\t\t}, headerSrcEls );\n\t\n\t\t// Apply all widths in final pass\n\t\t_fnApplyToChildren( function(nToSize, i) {\n\t\t\t// Only apply widths to the DataTables detected header cells - this\n\t\t\t// prevents complex headers from having contradictory sizes applied\n\t\t\tif ( $.inArray( nToSize, dtHeaderCells ) !== -1 ) {\n\t\t\t\tnToSize.style.width = headerWidths[i];\n\t\t\t}\n\t\t}, headerTrgEls );\n\t\n\t\t$(headerSrcEls).height(0);\n\t\n\t\t/* Same again with the footer if we have one */\n\t\tif ( footer )\n\t\t{\n\t\t\t_fnApplyToChildren( zeroOut, footerSrcEls );\n\t\n\t\t\t_fnApplyToChildren( function(nSizer) {\n\t\t\t\tfooterContent.push( nSizer.innerHTML );\n\t\t\t\tfooterWidths.push( _fnStringToCss( $(nSizer).css('width') ) );\n\t\t\t}, footerSrcEls );\n\t\n\t\t\t_fnApplyToChildren( function(nToSize, i) {\n\t\t\t\tnToSize.style.width = footerWidths[i];\n\t\t\t}, footerTrgEls );\n\t\n\t\t\t$(footerSrcEls).height(0);\n\t\t}\n\t\n\t\n\t\t/*\n\t\t * 3. Apply the measurements\n\t\t */\n\t\n\t\t// \"Hide\" the header and footer that we used for the sizing. We need to keep\n\t\t// the content of the cell so that the width applied to the header and body\n\t\t// both match, but we want to hide it completely. We want to also fix their\n\t\t// width to what they currently are\n\t\t_fnApplyToChildren( function(nSizer, i) {\n\t\t\tnSizer.innerHTML = '<div class=\"dataTables_sizing\" style=\"height:0;overflow:hidden;\">'+headerContent[i]+'</div>';\n\t\t\tnSizer.style.width = headerWidths[i];\n\t\t}, headerSrcEls );\n\t\n\t\tif ( footer )\n\t\t{\n\t\t\t_fnApplyToChildren( function(nSizer, i) {\n\t\t\t\tnSizer.innerHTML = '<div class=\"dataTables_sizing\" style=\"height:0;overflow:hidden;\">'+footerContent[i]+'</div>';\n\t\t\t\tnSizer.style.width = footerWidths[i];\n\t\t\t}, footerSrcEls );\n\t\t}\n\t\n\t\t// Sanity check that the table is of a sensible width. If not then we are going to get\n\t\t// misalignment - try to prevent this by not allowing the table to shrink below its min width\n\t\tif ( table.outerWidth() < sanityWidth )\n\t\t{\n\t\t\t// The min width depends upon if we have a vertical scrollbar visible or not */\n\t\t\tcorrection = ((divBodyEl.scrollHeight > divBodyEl.offsetHeight ||\n\t\t\t\tdivBody.css('overflow-y') == \"scroll\")) ?\n\t\t\t\t\tsanityWidth+barWidth :\n\t\t\t\t\tsanityWidth;\n\t\n\t\t\t// IE6/7 are a law unto themselves...\n\t\t\tif ( ie67 && (divBodyEl.scrollHeight >\n\t\t\t\tdivBodyEl.offsetHeight || divBody.css('overflow-y') == \"scroll\")\n\t\t\t) {\n\t\t\t\ttableStyle.width = _fnStringToCss( correction-barWidth );\n\t\t\t}\n\t\n\t\t\t// And give the user a warning that we've stopped the table getting too small\n\t\t\tif ( scrollX === \"\" || scrollXInner !== \"\" ) {\n\t\t\t\t_fnLog( settings, 1, 'Possible column misalignment', 6 );\n\t\t\t}\n\t\t}\n\t\telse\n\t\t{\n\t\t\tcorrection = '100%';\n\t\t}\n\t\n\t\t// Apply to the container elements\n\t\tdivBodyStyle.width = _fnStringToCss( correction );\n\t\tdivHeaderStyle.width = _fnStringToCss( correction );\n\t\n\t\tif ( footer ) {\n\t\t\tsettings.nScrollFoot.style.width = _fnStringToCss( correction );\n\t\t}\n\t\n\t\n\t\t/*\n\t\t * 4. Clean up\n\t\t */\n\t\tif ( ! scrollY ) {\n\t\t\t/* IE7< puts a vertical scrollbar in place (when it shouldn't be) due to subtracting\n\t\t\t * the scrollbar height from the visible display, rather than adding it on. We need to\n\t\t\t * set the height in order to sort this. Don't want to do it in any other browsers.\n\t\t\t */\n\t\t\tif ( ie67 ) {\n\t\t\t\tdivBodyStyle.height = _fnStringToCss( tableEl.offsetHeight+barWidth );\n\t\t\t}\n\t\t}\n\t\n\t\t/* Finally set the width's of the header and footer tables */\n\t\tvar iOuterWidth = table.outerWidth();\n\t\tdivHeaderTable[0].style.width = _fnStringToCss( iOuterWidth );\n\t\tdivHeaderInnerStyle.width = _fnStringToCss( iOuterWidth );\n\t\n\t\t// Figure out if there are scrollbar present - if so then we need a the header and footer to\n\t\t// provide a bit more space to allow \"overflow\" scrolling (i.e. past the scrollbar)\n\t\tvar bScrolling = table.height() > divBodyEl.clientHeight || divBody.css('overflow-y') == \"scroll\";\n\t\tvar padding = 'padding' + (browser.bScrollbarLeft ? 'Left' : 'Right' );\n\t\tdivHeaderInnerStyle[ padding ] = bScrolling ? barWidth+\"px\" : \"0px\";\n\t\n\t\tif ( footer ) {\n\t\t\tdivFooterTable[0].style.width = _fnStringToCss( iOuterWidth );\n\t\t\tdivFooterInner[0].style.width = _fnStringToCss( iOuterWidth );\n\t\t\tdivFooterInner[0].style[padding] = bScrolling ? barWidth+\"px\" : \"0px\";\n\t\t}\n\t\n\t\t// Correct DOM ordering for colgroup - comes before the thead\n\t\ttable.children('colgroup').insertBefore( table.children('thead') );\n\t\n\t\t/* Adjust the position of the header in case we loose the y-scrollbar */\n\t\tdivBody.scroll();\n\t\n\t\t// If sorting or filtering has occurred, jump the scrolling back to the top\n\t\t// only if we aren't holding the position\n\t\tif ( (settings.bSorted || settings.bFiltered) && ! settings._drawHold ) {\n\t\t\tdivBodyEl.scrollTop = 0;\n\t\t}\n\t}\n\t\n\t\n\t\n\t/**\n\t * Apply a given function to the display child nodes of an element array (typically\n\t * TD children of TR rows\n\t *  @param {function} fn Method to apply to the objects\n\t *  @param array {nodes} an1 List of elements to look through for display children\n\t *  @param array {nodes} an2 Another list (identical structure to the first) - optional\n\t *  @memberof DataTable#oApi\n\t */\n\tfunction _fnApplyToChildren( fn, an1, an2 )\n\t{\n\t\tvar index=0, i=0, iLen=an1.length;\n\t\tvar nNode1, nNode2;\n\t\n\t\twhile ( i < iLen ) {\n\t\t\tnNode1 = an1[i].firstChild;\n\t\t\tnNode2 = an2 ? an2[i].firstChild : null;\n\t\n\t\t\twhile ( nNode1 ) {\n\t\t\t\tif ( nNode1.nodeType === 1 ) {\n\t\t\t\t\tif ( an2 ) {\n\t\t\t\t\t\tfn( nNode1, nNode2, index );\n\t\t\t\t\t}\n\t\t\t\t\telse {\n\t\t\t\t\t\tfn( nNode1, index );\n\t\t\t\t\t}\n\t\n\t\t\t\t\tindex++;\n\t\t\t\t}\n\t\n\t\t\t\tnNode1 = nNode1.nextSibling;\n\t\t\t\tnNode2 = an2 ? nNode2.nextSibling : null;\n\t\t\t}\n\t\n\t\t\ti++;\n\t\t}\n\t}\n\t\n\t\n\t\n\tvar __re_html_remove = /<.*?>/g;\n\t\n\t\n\t/**\n\t * Calculate the width of columns for the table\n\t *  @param {object} oSettings dataTables settings object\n\t *  @memberof DataTable#oApi\n\t */\n\tfunction _fnCalculateColumnWidths ( oSettings )\n\t{\n\t\tvar\n\t\t\ttable = oSettings.nTable,\n\t\t\tcolumns = oSettings.aoColumns,\n\t\t\tscroll = oSettings.oScroll,\n\t\t\tscrollY = scroll.sY,\n\t\t\tscrollX = scroll.sX,\n\t\t\tscrollXInner = scroll.sXInner,\n\t\t\tcolumnCount = columns.length,\n\t\t\tvisibleColumns = _fnGetColumns( oSettings, 'bVisible' ),\n\t\t\theaderCells = $('th', oSettings.nTHead),\n\t\t\ttableWidthAttr = table.getAttribute('width'), // from DOM element\n\t\t\ttableContainer = table.parentNode,\n\t\t\tuserInputs = false,\n\t\t\ti, column, columnIdx, width, outerWidth,\n\t\t\tbrowser = oSettings.oBrowser,\n\t\t\tie67 = browser.bScrollOversize;\n\t\n\t\tvar styleWidth = table.style.width;\n\t\tif ( styleWidth && styleWidth.indexOf('%') !== -1 ) {\n\t\t\ttableWidthAttr = styleWidth;\n\t\t}\n\t\n\t\t/* Convert any user input sizes into pixel sizes */\n\t\tfor ( i=0 ; i<visibleColumns.length ; i++ ) {\n\t\t\tcolumn = columns[ visibleColumns[i] ];\n\t\n\t\t\tif ( column.sWidth !== null ) {\n\t\t\t\tcolumn.sWidth = _fnConvertToWidth( column.sWidthOrig, tableContainer );\n\t\n\t\t\t\tuserInputs = true;\n\t\t\t}\n\t\t}\n\t\n\t\t/* If the number of columns in the DOM equals the number that we have to\n\t\t * process in DataTables, then we can use the offsets that are created by\n\t\t * the web- browser. No custom sizes can be set in order for this to happen,\n\t\t * nor scrolling used\n\t\t */\n\t\tif ( ie67 || ! userInputs && ! scrollX && ! scrollY &&\n\t\t     columnCount == _fnVisbleColumns( oSettings ) &&\n\t\t     columnCount == headerCells.length\n\t\t) {\n\t\t\tfor ( i=0 ; i<columnCount ; i++ ) {\n\t\t\t\tvar colIdx = _fnVisibleToColumnIndex( oSettings, i );\n\t\n\t\t\t\tif ( colIdx !== null ) {\n\t\t\t\t\tcolumns[ colIdx ].sWidth = _fnStringToCss( headerCells.eq(i).width() );\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\telse\n\t\t{\n\t\t\t// Otherwise construct a single row, worst case, table with the widest\n\t\t\t// node in the data, assign any user defined widths, then insert it into\n\t\t\t// the DOM and allow the browser to do all the hard work of calculating\n\t\t\t// table widths\n\t\t\tvar tmpTable = $(table).clone() // don't use cloneNode - IE8 will remove events on the main table\n\t\t\t\t.css( 'visibility', 'hidden' )\n\t\t\t\t.removeAttr( 'id' );\n\t\n\t\t\t// Clean up the table body\n\t\t\ttmpTable.find('tbody tr').remove();\n\t\t\tvar tr = $('<tr/>').appendTo( tmpTable.find('tbody') );\n\t\n\t\t\t// Clone the table header and footer - we can't use the header / footer\n\t\t\t// from the cloned table, since if scrolling is active, the table's\n\t\t\t// real header and footer are contained in different table tags\n\t\t\ttmpTable.find('thead, tfoot').remove();\n\t\t\ttmpTable\n\t\t\t\t.append( $(oSettings.nTHead).clone() )\n\t\t\t\t.append( $(oSettings.nTFoot).clone() );\n\t\n\t\t\t// Remove any assigned widths from the footer (from scrolling)\n\t\t\ttmpTable.find('tfoot th, tfoot td').css('width', '');\n\t\n\t\t\t// Apply custom sizing to the cloned header\n\t\t\theaderCells = _fnGetUniqueThs( oSettings, tmpTable.find('thead')[0] );\n\t\n\t\t\tfor ( i=0 ; i<visibleColumns.length ; i++ ) {\n\t\t\t\tcolumn = columns[ visibleColumns[i] ];\n\t\n\t\t\t\theaderCells[i].style.width = column.sWidthOrig !== null && column.sWidthOrig !== '' ?\n\t\t\t\t\t_fnStringToCss( column.sWidthOrig ) :\n\t\t\t\t\t'';\n\t\n\t\t\t\t// For scrollX we need to force the column width otherwise the\n\t\t\t\t// browser will collapse it. If this width is smaller than the\n\t\t\t\t// width the column requires, then it will have no effect\n\t\t\t\tif ( column.sWidthOrig && scrollX ) {\n\t\t\t\t\t$( headerCells[i] ).append( $('<div/>').css( {\n\t\t\t\t\t\twidth: column.sWidthOrig,\n\t\t\t\t\t\tmargin: 0,\n\t\t\t\t\t\tpadding: 0,\n\t\t\t\t\t\tborder: 0,\n\t\t\t\t\t\theight: 1\n\t\t\t\t\t} ) );\n\t\t\t\t}\n\t\t\t}\n\t\n\t\t\t// Find the widest cell for each column and put it into the table\n\t\t\tif ( oSettings.aoData.length ) {\n\t\t\t\tfor ( i=0 ; i<visibleColumns.length ; i++ ) {\n\t\t\t\t\tcolumnIdx = visibleColumns[i];\n\t\t\t\t\tcolumn = columns[ columnIdx ];\n\t\n\t\t\t\t\t$( _fnGetWidestNode( oSettings, columnIdx ) )\n\t\t\t\t\t\t.clone( false )\n\t\t\t\t\t\t.append( column.sContentPadding )\n\t\t\t\t\t\t.appendTo( tr );\n\t\t\t\t}\n\t\t\t}\n\t\n\t\t\t// Tidy the temporary table - remove name attributes so there aren't\n\t\t\t// duplicated in the dom (radio elements for example)\n\t\t\t$('[name]', tmpTable).removeAttr('name');\n\t\n\t\t\t// Table has been built, attach to the document so we can work with it.\n\t\t\t// A holding element is used, positioned at the top of the container\n\t\t\t// with minimal height, so it has no effect on if the container scrolls\n\t\t\t// or not. Otherwise it might trigger scrolling when it actually isn't\n\t\t\t// needed\n\t\t\tvar holder = $('<div/>').css( scrollX || scrollY ?\n\t\t\t\t\t{\n\t\t\t\t\t\tposition: 'absolute',\n\t\t\t\t\t\ttop: 0,\n\t\t\t\t\t\tleft: 0,\n\t\t\t\t\t\theight: 1,\n\t\t\t\t\t\tright: 0,\n\t\t\t\t\t\toverflow: 'hidden'\n\t\t\t\t\t} :\n\t\t\t\t\t{}\n\t\t\t\t)\n\t\t\t\t.append( tmpTable )\n\t\t\t\t.appendTo( tableContainer );\n\t\n\t\t\t// When scrolling (X or Y) we want to set the width of the table as \n\t\t\t// appropriate. However, when not scrolling leave the table width as it\n\t\t\t// is. This results in slightly different, but I think correct behaviour\n\t\t\tif ( scrollX && scrollXInner ) {\n\t\t\t\ttmpTable.width( scrollXInner );\n\t\t\t}\n\t\t\telse if ( scrollX ) {\n\t\t\t\ttmpTable.css( 'width', 'auto' );\n\t\t\t\ttmpTable.removeAttr('width');\n\t\n\t\t\t\t// If there is no width attribute or style, then allow the table to\n\t\t\t\t// collapse\n\t\t\t\tif ( tmpTable.width() < tableContainer.clientWidth && tableWidthAttr ) {\n\t\t\t\t\ttmpTable.width( tableContainer.clientWidth );\n\t\t\t\t}\n\t\t\t}\n\t\t\telse if ( scrollY ) {\n\t\t\t\ttmpTable.width( tableContainer.clientWidth );\n\t\t\t}\n\t\t\telse if ( tableWidthAttr ) {\n\t\t\t\ttmpTable.width( tableWidthAttr );\n\t\t\t}\n\t\n\t\t\t// Get the width of each column in the constructed table - we need to\n\t\t\t// know the inner width (so it can be assigned to the other table's\n\t\t\t// cells) and the outer width so we can calculate the full width of the\n\t\t\t// table. This is safe since DataTables requires a unique cell for each\n\t\t\t// column, but if ever a header can span multiple columns, this will\n\t\t\t// need to be modified.\n\t\t\tvar total = 0;\n\t\t\tfor ( i=0 ; i<visibleColumns.length ; i++ ) {\n\t\t\t\tvar cell = $(headerCells[i]);\n\t\t\t\tvar border = cell.outerWidth() - cell.width();\n\t\n\t\t\t\t// Use getBounding... where possible (not IE8-) because it can give\n\t\t\t\t// sub-pixel accuracy, which we then want to round up!\n\t\t\t\tvar bounding = browser.bBounding ?\n\t\t\t\t\tMath.ceil( headerCells[i].getBoundingClientRect().width ) :\n\t\t\t\t\tcell.outerWidth();\n\t\n\t\t\t\t// Total is tracked to remove any sub-pixel errors as the outerWidth\n\t\t\t\t// of the table might not equal the total given here (IE!).\n\t\t\t\ttotal += bounding;\n\t\n\t\t\t\t// Width for each column to use\n\t\t\t\tcolumns[ visibleColumns[i] ].sWidth = _fnStringToCss( bounding - border );\n\t\t\t}\n\t\n\t\t\ttable.style.width = _fnStringToCss( total );\n\t\n\t\t\t// Finished with the table - ditch it\n\t\t\tholder.remove();\n\t\t}\n\t\n\t\t// If there is a width attr, we want to attach an event listener which\n\t\t// allows the table sizing to automatically adjust when the window is\n\t\t// resized. Use the width attr rather than CSS, since we can't know if the\n\t\t// CSS is a relative value or absolute - DOM read is always px.\n\t\tif ( tableWidthAttr ) {\n\t\t\ttable.style.width = _fnStringToCss( tableWidthAttr );\n\t\t}\n\t\n\t\tif ( (tableWidthAttr || scrollX) && ! oSettings._reszEvt ) {\n\t\t\tvar bindResize = function () {\n\t\t\t\t$(window).on('resize.DT-'+oSettings.sInstance, _fnThrottle( function () {\n\t\t\t\t\t_fnAdjustColumnSizing( oSettings );\n\t\t\t\t} ) );\n\t\t\t};\n\t\n\t\t\t// IE6/7 will crash if we bind a resize event handler on page load.\n\t\t\t// To be removed in 1.11 which drops IE6/7 support\n\t\t\tif ( ie67 ) {\n\t\t\t\tsetTimeout( bindResize, 1000 );\n\t\t\t}\n\t\t\telse {\n\t\t\t\tbindResize();\n\t\t\t}\n\t\n\t\t\toSettings._reszEvt = true;\n\t\t}\n\t}\n\t\n\t\n\t/**\n\t * Throttle the calls to a function. Arguments and context are maintained for\n\t * the throttled function\n\t *  @param {function} fn Function to be called\n\t *  @param {int} [freq=200] call frequency in mS\n\t *  @returns {function} wrapped function\n\t *  @memberof DataTable#oApi\n\t */\n\tvar _fnThrottle = DataTable.util.throttle;\n\t\n\t\n\t/**\n\t * Convert a CSS unit width to pixels (e.g. 2em)\n\t *  @param {string} width width to be converted\n\t *  @param {node} parent parent to get the with for (required for relative widths) - optional\n\t *  @returns {int} width in pixels\n\t *  @memberof DataTable#oApi\n\t */\n\tfunction _fnConvertToWidth ( width, parent )\n\t{\n\t\tif ( ! width ) {\n\t\t\treturn 0;\n\t\t}\n\t\n\t\tvar n = $('<div/>')\n\t\t\t.css( 'width', _fnStringToCss( width ) )\n\t\t\t.appendTo( parent || document.body );\n\t\n\t\tvar val = n[0].offsetWidth;\n\t\tn.remove();\n\t\n\t\treturn val;\n\t}\n\t\n\t\n\t/**\n\t * Get the widest node\n\t *  @param {object} settings dataTables settings object\n\t *  @param {int} colIdx column of interest\n\t *  @returns {node} widest table node\n\t *  @memberof DataTable#oApi\n\t */\n\tfunction _fnGetWidestNode( settings, colIdx )\n\t{\n\t\tvar idx = _fnGetMaxLenString( settings, colIdx );\n\t\tif ( idx < 0 ) {\n\t\t\treturn null;\n\t\t}\n\t\n\t\tvar data = settings.aoData[ idx ];\n\t\treturn ! data.nTr ? // Might not have been created when deferred rendering\n\t\t\t$('<td/>').html( _fnGetCellData( settings, idx, colIdx, 'display' ) )[0] :\n\t\t\tdata.anCells[ colIdx ];\n\t}\n\t\n\t\n\t/**\n\t * Get the maximum strlen for each data column\n\t *  @param {object} settings dataTables settings object\n\t *  @param {int} colIdx column of interest\n\t *  @returns {string} max string length for each column\n\t *  @memberof DataTable#oApi\n\t */\n\tfunction _fnGetMaxLenString( settings, colIdx )\n\t{\n\t\tvar s, max=-1, maxIdx = -1;\n\t\n\t\tfor ( var i=0, ien=settings.aoData.length ; i<ien ; i++ ) {\n\t\t\ts = _fnGetCellData( settings, i, colIdx, 'display' )+'';\n\t\t\ts = s.replace( __re_html_remove, '' );\n\t\t\ts = s.replace( /&nbsp;/g, ' ' );\n\t\n\t\t\tif ( s.length > max ) {\n\t\t\t\tmax = s.length;\n\t\t\t\tmaxIdx = i;\n\t\t\t}\n\t\t}\n\t\n\t\treturn maxIdx;\n\t}\n\t\n\t\n\t/**\n\t * Append a CSS unit (only if required) to a string\n\t *  @param {string} value to css-ify\n\t *  @returns {string} value with css unit\n\t *  @memberof DataTable#oApi\n\t */\n\tfunction _fnStringToCss( s )\n\t{\n\t\tif ( s === null ) {\n\t\t\treturn '0px';\n\t\t}\n\t\n\t\tif ( typeof s == 'number' ) {\n\t\t\treturn s < 0 ?\n\t\t\t\t'0px' :\n\t\t\t\ts+'px';\n\t\t}\n\t\n\t\t// Check it has a unit character already\n\t\treturn s.match(/\\d$/) ?\n\t\t\ts+'px' :\n\t\t\ts;\n\t}\n\t\n\t\n\t\n\tfunction _fnSortFlatten ( settings )\n\t{\n\t\tvar\n\t\t\ti, iLen, k, kLen,\n\t\t\taSort = [],\n\t\t\taiOrig = [],\n\t\t\taoColumns = settings.aoColumns,\n\t\t\taDataSort, iCol, sType, srcCol,\n\t\t\tfixed = settings.aaSortingFixed,\n\t\t\tfixedObj = $.isPlainObject( fixed ),\n\t\t\tnestedSort = [],\n\t\t\tadd = function ( a ) {\n\t\t\t\tif ( a.length && ! $.isArray( a[0] ) ) {\n\t\t\t\t\t// 1D array\n\t\t\t\t\tnestedSort.push( a );\n\t\t\t\t}\n\t\t\t\telse {\n\t\t\t\t\t// 2D array\n\t\t\t\t\t$.merge( nestedSort, a );\n\t\t\t\t}\n\t\t\t};\n\t\n\t\t// Build the sort array, with pre-fix and post-fix options if they have been\n\t\t// specified\n\t\tif ( $.isArray( fixed ) ) {\n\t\t\tadd( fixed );\n\t\t}\n\t\n\t\tif ( fixedObj && fixed.pre ) {\n\t\t\tadd( fixed.pre );\n\t\t}\n\t\n\t\tadd( settings.aaSorting );\n\t\n\t\tif (fixedObj && fixed.post ) {\n\t\t\tadd( fixed.post );\n\t\t}\n\t\n\t\tfor ( i=0 ; i<nestedSort.length ; i++ )\n\t\t{\n\t\t\tsrcCol = nestedSort[i][0];\n\t\t\taDataSort = aoColumns[ srcCol ].aDataSort;\n\t\n\t\t\tfor ( k=0, kLen=aDataSort.length ; k<kLen ; k++ )\n\t\t\t{\n\t\t\t\tiCol = aDataSort[k];\n\t\t\t\tsType = aoColumns[ iCol ].sType || 'string';\n\t\n\t\t\t\tif ( nestedSort[i]._idx === undefined ) {\n\t\t\t\t\tnestedSort[i]._idx = $.inArray( nestedSort[i][1], aoColumns[iCol].asSorting );\n\t\t\t\t}\n\t\n\t\t\t\taSort.push( {\n\t\t\t\t\tsrc:       srcCol,\n\t\t\t\t\tcol:       iCol,\n\t\t\t\t\tdir:       nestedSort[i][1],\n\t\t\t\t\tindex:     nestedSort[i]._idx,\n\t\t\t\t\ttype:      sType,\n\t\t\t\t\tformatter: DataTable.ext.type.order[ sType+\"-pre\" ]\n\t\t\t\t} );\n\t\t\t}\n\t\t}\n\t\n\t\treturn aSort;\n\t}\n\t\n\t/**\n\t * Change the order of the table\n\t *  @param {object} oSettings dataTables settings object\n\t *  @memberof DataTable#oApi\n\t *  @todo This really needs split up!\n\t */\n\tfunction _fnSort ( oSettings )\n\t{\n\t\tvar\n\t\t\ti, ien, iLen, j, jLen, k, kLen,\n\t\t\tsDataType, nTh,\n\t\t\taiOrig = [],\n\t\t\toExtSort = DataTable.ext.type.order,\n\t\t\taoData = oSettings.aoData,\n\t\t\taoColumns = oSettings.aoColumns,\n\t\t\taDataSort, data, iCol, sType, oSort,\n\t\t\tformatters = 0,\n\t\t\tsortCol,\n\t\t\tdisplayMaster = oSettings.aiDisplayMaster,\n\t\t\taSort;\n\t\n\t\t// Resolve any column types that are unknown due to addition or invalidation\n\t\t// @todo Can this be moved into a 'data-ready' handler which is called when\n\t\t//   data is going to be used in the table?\n\t\t_fnColumnTypes( oSettings );\n\t\n\t\taSort = _fnSortFlatten( oSettings );\n\t\n\t\tfor ( i=0, ien=aSort.length ; i<ien ; i++ ) {\n\t\t\tsortCol = aSort[i];\n\t\n\t\t\t// Track if we can use the fast sort algorithm\n\t\t\tif ( sortCol.formatter ) {\n\t\t\t\tformatters++;\n\t\t\t}\n\t\n\t\t\t// Load the data needed for the sort, for each cell\n\t\t\t_fnSortData( oSettings, sortCol.col );\n\t\t}\n\t\n\t\t/* No sorting required if server-side or no sorting array */\n\t\tif ( _fnDataSource( oSettings ) != 'ssp' && aSort.length !== 0 )\n\t\t{\n\t\t\t// Create a value - key array of the current row positions such that we can use their\n\t\t\t// current position during the sort, if values match, in order to perform stable sorting\n\t\t\tfor ( i=0, iLen=displayMaster.length ; i<iLen ; i++ ) {\n\t\t\t\taiOrig[ displayMaster[i] ] = i;\n\t\t\t}\n\t\n\t\t\t/* Do the sort - here we want multi-column sorting based on a given data source (column)\n\t\t\t * and sorting function (from oSort) in a certain direction. It's reasonably complex to\n\t\t\t * follow on it's own, but this is what we want (example two column sorting):\n\t\t\t *  fnLocalSorting = function(a,b){\n\t\t\t *    var iTest;\n\t\t\t *    iTest = oSort['string-asc']('data11', 'data12');\n\t\t\t *      if (iTest !== 0)\n\t\t\t *        return iTest;\n\t\t\t *    iTest = oSort['numeric-desc']('data21', 'data22');\n\t\t\t *    if (iTest !== 0)\n\t\t\t *      return iTest;\n\t\t\t *    return oSort['numeric-asc']( aiOrig[a], aiOrig[b] );\n\t\t\t *  }\n\t\t\t * Basically we have a test for each sorting column, if the data in that column is equal,\n\t\t\t * test the next column. If all columns match, then we use a numeric sort on the row\n\t\t\t * positions in the original data array to provide a stable sort.\n\t\t\t *\n\t\t\t * Note - I know it seems excessive to have two sorting methods, but the first is around\n\t\t\t * 15% faster, so the second is only maintained for backwards compatibility with sorting\n\t\t\t * methods which do not have a pre-sort formatting function.\n\t\t\t */\n\t\t\tif ( formatters === aSort.length ) {\n\t\t\t\t// All sort types have formatting functions\n\t\t\t\tdisplayMaster.sort( function ( a, b ) {\n\t\t\t\t\tvar\n\t\t\t\t\t\tx, y, k, test, sort,\n\t\t\t\t\t\tlen=aSort.length,\n\t\t\t\t\t\tdataA = aoData[a]._aSortData,\n\t\t\t\t\t\tdataB = aoData[b]._aSortData;\n\t\n\t\t\t\t\tfor ( k=0 ; k<len ; k++ ) {\n\t\t\t\t\t\tsort = aSort[k];\n\t\n\t\t\t\t\t\tx = dataA[ sort.col ];\n\t\t\t\t\t\ty = dataB[ sort.col ];\n\t\n\t\t\t\t\t\ttest = x<y ? -1 : x>y ? 1 : 0;\n\t\t\t\t\t\tif ( test !== 0 ) {\n\t\t\t\t\t\t\treturn sort.dir === 'asc' ? test : -test;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\n\t\t\t\t\tx = aiOrig[a];\n\t\t\t\t\ty = aiOrig[b];\n\t\t\t\t\treturn x<y ? -1 : x>y ? 1 : 0;\n\t\t\t\t} );\n\t\t\t}\n\t\t\telse {\n\t\t\t\t// Depreciated - remove in 1.11 (providing a plug-in option)\n\t\t\t\t// Not all sort types have formatting methods, so we have to call their sorting\n\t\t\t\t// methods.\n\t\t\t\tdisplayMaster.sort( function ( a, b ) {\n\t\t\t\t\tvar\n\t\t\t\t\t\tx, y, k, l, test, sort, fn,\n\t\t\t\t\t\tlen=aSort.length,\n\t\t\t\t\t\tdataA = aoData[a]._aSortData,\n\t\t\t\t\t\tdataB = aoData[b]._aSortData;\n\t\n\t\t\t\t\tfor ( k=0 ; k<len ; k++ ) {\n\t\t\t\t\t\tsort = aSort[k];\n\t\n\t\t\t\t\t\tx = dataA[ sort.col ];\n\t\t\t\t\t\ty = dataB[ sort.col ];\n\t\n\t\t\t\t\t\tfn = oExtSort[ sort.type+\"-\"+sort.dir ] || oExtSort[ \"string-\"+sort.dir ];\n\t\t\t\t\t\ttest = fn( x, y );\n\t\t\t\t\t\tif ( test !== 0 ) {\n\t\t\t\t\t\t\treturn test;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\n\t\t\t\t\tx = aiOrig[a];\n\t\t\t\t\ty = aiOrig[b];\n\t\t\t\t\treturn x<y ? -1 : x>y ? 1 : 0;\n\t\t\t\t} );\n\t\t\t}\n\t\t}\n\t\n\t\t/* Tell the draw function that we have sorted the data */\n\t\toSettings.bSorted = true;\n\t}\n\t\n\t\n\tfunction _fnSortAria ( settings )\n\t{\n\t\tvar label;\n\t\tvar nextSort;\n\t\tvar columns = settings.aoColumns;\n\t\tvar aSort = _fnSortFlatten( settings );\n\t\tvar oAria = settings.oLanguage.oAria;\n\t\n\t\t// ARIA attributes - need to loop all columns, to update all (removing old\n\t\t// attributes as needed)\n\t\tfor ( var i=0, iLen=columns.length ; i<iLen ; i++ )\n\t\t{\n\t\t\tvar col = columns[i];\n\t\t\tvar asSorting = col.asSorting;\n\t\t\tvar sTitle = col.sTitle.replace( /<.*?>/g, \"\" );\n\t\t\tvar th = col.nTh;\n\t\n\t\t\t// IE7 is throwing an error when setting these properties with jQuery's\n\t\t\t// attr() and removeAttr() methods...\n\t\t\tth.removeAttribute('aria-sort');\n\t\n\t\t\t/* In ARIA only the first sorting column can be marked as sorting - no multi-sort option */\n\t\t\tif ( col.bSortable ) {\n\t\t\t\tif ( aSort.length > 0 && aSort[0].col == i ) {\n\t\t\t\t\tth.setAttribute('aria-sort', aSort[0].dir==\"asc\" ? \"ascending\" : \"descending\" );\n\t\t\t\t\tnextSort = asSorting[ aSort[0].index+1 ] || asSorting[0];\n\t\t\t\t}\n\t\t\t\telse {\n\t\t\t\t\tnextSort = asSorting[0];\n\t\t\t\t}\n\t\n\t\t\t\tlabel = sTitle + ( nextSort === \"asc\" ?\n\t\t\t\t\toAria.sSortAscending :\n\t\t\t\t\toAria.sSortDescending\n\t\t\t\t);\n\t\t\t}\n\t\t\telse {\n\t\t\t\tlabel = sTitle;\n\t\t\t}\n\t\n\t\t\tth.setAttribute('aria-label', label);\n\t\t}\n\t}\n\t\n\t\n\t/**\n\t * Function to run on user sort request\n\t *  @param {object} settings dataTables settings object\n\t *  @param {node} attachTo node to attach the handler to\n\t *  @param {int} colIdx column sorting index\n\t *  @param {boolean} [append=false] Append the requested sort to the existing\n\t *    sort if true (i.e. multi-column sort)\n\t *  @param {function} [callback] callback function\n\t *  @memberof DataTable#oApi\n\t */\n\tfunction _fnSortListener ( settings, colIdx, append, callback )\n\t{\n\t\tvar col = settings.aoColumns[ colIdx ];\n\t\tvar sorting = settings.aaSorting;\n\t\tvar asSorting = col.asSorting;\n\t\tvar nextSortIdx;\n\t\tvar next = function ( a, overflow ) {\n\t\t\tvar idx = a._idx;\n\t\t\tif ( idx === undefined ) {\n\t\t\t\tidx = $.inArray( a[1], asSorting );\n\t\t\t}\n\t\n\t\t\treturn idx+1 < asSorting.length ?\n\t\t\t\tidx+1 :\n\t\t\t\toverflow ?\n\t\t\t\t\tnull :\n\t\t\t\t\t0;\n\t\t};\n\t\n\t\t// Convert to 2D array if needed\n\t\tif ( typeof sorting[0] === 'number' ) {\n\t\t\tsorting = settings.aaSorting = [ sorting ];\n\t\t}\n\t\n\t\t// If appending the sort then we are multi-column sorting\n\t\tif ( append && settings.oFeatures.bSortMulti ) {\n\t\t\t// Are we already doing some kind of sort on this column?\n\t\t\tvar sortIdx = $.inArray( colIdx, _pluck(sorting, '0') );\n\t\n\t\t\tif ( sortIdx !== -1 ) {\n\t\t\t\t// Yes, modify the sort\n\t\t\t\tnextSortIdx = next( sorting[sortIdx], true );\n\t\n\t\t\t\tif ( nextSortIdx === null && sorting.length === 1 ) {\n\t\t\t\t\tnextSortIdx = 0; // can't remove sorting completely\n\t\t\t\t}\n\t\n\t\t\t\tif ( nextSortIdx === null ) {\n\t\t\t\t\tsorting.splice( sortIdx, 1 );\n\t\t\t\t}\n\t\t\t\telse {\n\t\t\t\t\tsorting[sortIdx][1] = asSorting[ nextSortIdx ];\n\t\t\t\t\tsorting[sortIdx]._idx = nextSortIdx;\n\t\t\t\t}\n\t\t\t}\n\t\t\telse {\n\t\t\t\t// No sort on this column yet\n\t\t\t\tsorting.push( [ colIdx, asSorting[0], 0 ] );\n\t\t\t\tsorting[sorting.length-1]._idx = 0;\n\t\t\t}\n\t\t}\n\t\telse if ( sorting.length && sorting[0][0] == colIdx ) {\n\t\t\t// Single column - already sorting on this column, modify the sort\n\t\t\tnextSortIdx = next( sorting[0] );\n\t\n\t\t\tsorting.length = 1;\n\t\t\tsorting[0][1] = asSorting[ nextSortIdx ];\n\t\t\tsorting[0]._idx = nextSortIdx;\n\t\t}\n\t\telse {\n\t\t\t// Single column - sort only on this column\n\t\t\tsorting.length = 0;\n\t\t\tsorting.push( [ colIdx, asSorting[0] ] );\n\t\t\tsorting[0]._idx = 0;\n\t\t}\n\t\n\t\t// Run the sort by calling a full redraw\n\t\t_fnReDraw( settings );\n\t\n\t\t// callback used for async user interaction\n\t\tif ( typeof callback == 'function' ) {\n\t\t\tcallback( settings );\n\t\t}\n\t}\n\t\n\t\n\t/**\n\t * Attach a sort handler (click) to a node\n\t *  @param {object} settings dataTables settings object\n\t *  @param {node} attachTo node to attach the handler to\n\t *  @param {int} colIdx column sorting index\n\t *  @param {function} [callback] callback function\n\t *  @memberof DataTable#oApi\n\t */\n\tfunction _fnSortAttachListener ( settings, attachTo, colIdx, callback )\n\t{\n\t\tvar col = settings.aoColumns[ colIdx ];\n\t\n\t\t_fnBindAction( attachTo, {}, function (e) {\n\t\t\t/* If the column is not sortable - don't to anything */\n\t\t\tif ( col.bSortable === false ) {\n\t\t\t\treturn;\n\t\t\t}\n\t\n\t\t\t// If processing is enabled use a timeout to allow the processing\n\t\t\t// display to be shown - otherwise to it synchronously\n\t\t\tif ( settings.oFeatures.bProcessing ) {\n\t\t\t\t_fnProcessingDisplay( settings, true );\n\t\n\t\t\t\tsetTimeout( function() {\n\t\t\t\t\t_fnSortListener( settings, colIdx, e.shiftKey, callback );\n\t\n\t\t\t\t\t// In server-side processing, the draw callback will remove the\n\t\t\t\t\t// processing display\n\t\t\t\t\tif ( _fnDataSource( settings ) !== 'ssp' ) {\n\t\t\t\t\t\t_fnProcessingDisplay( settings, false );\n\t\t\t\t\t}\n\t\t\t\t}, 0 );\n\t\t\t}\n\t\t\telse {\n\t\t\t\t_fnSortListener( settings, colIdx, e.shiftKey, callback );\n\t\t\t}\n\t\t} );\n\t}\n\t\n\t\n\t/**\n\t * Set the sorting classes on table's body, Note: it is safe to call this function\n\t * when bSort and bSortClasses are false\n\t *  @param {object} oSettings dataTables settings object\n\t *  @memberof DataTable#oApi\n\t */\n\tfunction _fnSortingClasses( settings )\n\t{\n\t\tvar oldSort = settings.aLastSort;\n\t\tvar sortClass = settings.oClasses.sSortColumn;\n\t\tvar sort = _fnSortFlatten( settings );\n\t\tvar features = settings.oFeatures;\n\t\tvar i, ien, colIdx;\n\t\n\t\tif ( features.bSort && features.bSortClasses ) {\n\t\t\t// Remove old sorting classes\n\t\t\tfor ( i=0, ien=oldSort.length ; i<ien ; i++ ) {\n\t\t\t\tcolIdx = oldSort[i].src;\n\t\n\t\t\t\t// Remove column sorting\n\t\t\t\t$( _pluck( settings.aoData, 'anCells', colIdx ) )\n\t\t\t\t\t.removeClass( sortClass + (i<2 ? i+1 : 3) );\n\t\t\t}\n\t\n\t\t\t// Add new column sorting\n\t\t\tfor ( i=0, ien=sort.length ; i<ien ; i++ ) {\n\t\t\t\tcolIdx = sort[i].src;\n\t\n\t\t\t\t$( _pluck( settings.aoData, 'anCells', colIdx ) )\n\t\t\t\t\t.addClass( sortClass + (i<2 ? i+1 : 3) );\n\t\t\t}\n\t\t}\n\t\n\t\tsettings.aLastSort = sort;\n\t}\n\t\n\t\n\t// Get the data to sort a column, be it from cache, fresh (populating the\n\t// cache), or from a sort formatter\n\tfunction _fnSortData( settings, idx )\n\t{\n\t\t// Custom sorting function - provided by the sort data type\n\t\tvar column = settings.aoColumns[ idx ];\n\t\tvar customSort = DataTable.ext.order[ column.sSortDataType ];\n\t\tvar customData;\n\t\n\t\tif ( customSort ) {\n\t\t\tcustomData = customSort.call( settings.oInstance, settings, idx,\n\t\t\t\t_fnColumnIndexToVisible( settings, idx )\n\t\t\t);\n\t\t}\n\t\n\t\t// Use / populate cache\n\t\tvar row, cellData;\n\t\tvar formatter = DataTable.ext.type.order[ column.sType+\"-pre\" ];\n\t\n\t\tfor ( var i=0, ien=settings.aoData.length ; i<ien ; i++ ) {\n\t\t\trow = settings.aoData[i];\n\t\n\t\t\tif ( ! row._aSortData ) {\n\t\t\t\trow._aSortData = [];\n\t\t\t}\n\t\n\t\t\tif ( ! row._aSortData[idx] || customSort ) {\n\t\t\t\tcellData = customSort ?\n\t\t\t\t\tcustomData[i] : // If there was a custom sort function, use data from there\n\t\t\t\t\t_fnGetCellData( settings, i, idx, 'sort' );\n\t\n\t\t\t\trow._aSortData[ idx ] = formatter ?\n\t\t\t\t\tformatter( cellData ) :\n\t\t\t\t\tcellData;\n\t\t\t}\n\t\t}\n\t}\n\t\n\t\n\t\n\t/**\n\t * Save the state of a table\n\t *  @param {object} oSettings dataTables settings object\n\t *  @memberof DataTable#oApi\n\t */\n\tfunction _fnSaveState ( settings )\n\t{\n\t\tif ( !settings.oFeatures.bStateSave || settings.bDestroying )\n\t\t{\n\t\t\treturn;\n\t\t}\n\t\n\t\t/* Store the interesting variables */\n\t\tvar state = {\n\t\t\ttime:    +new Date(),\n\t\t\tstart:   settings._iDisplayStart,\n\t\t\tlength:  settings._iDisplayLength,\n\t\t\torder:   $.extend( true, [], settings.aaSorting ),\n\t\t\tsearch:  _fnSearchToCamel( settings.oPreviousSearch ),\n\t\t\tcolumns: $.map( settings.aoColumns, function ( col, i ) {\n\t\t\t\treturn {\n\t\t\t\t\tvisible: col.bVisible,\n\t\t\t\t\tsearch: _fnSearchToCamel( settings.aoPreSearchCols[i] )\n\t\t\t\t};\n\t\t\t} )\n\t\t};\n\t\n\t\t_fnCallbackFire( settings, \"aoStateSaveParams\", 'stateSaveParams', [settings, state] );\n\t\n\t\tsettings.oSavedState = state;\n\t\tsettings.fnStateSaveCallback.call( settings.oInstance, settings, state );\n\t}\n\t\n\t\n\t/**\n\t * Attempt to load a saved table state\n\t *  @param {object} oSettings dataTables settings object\n\t *  @param {object} oInit DataTables init object so we can override settings\n\t *  @param {function} callback Callback to execute when the state has been loaded\n\t *  @memberof DataTable#oApi\n\t */\n\tfunction _fnLoadState ( settings, oInit, callback )\n\t{\n\t\tvar i, ien;\n\t\tvar columns = settings.aoColumns;\n\t\tvar loaded = function ( s ) {\n\t\t\tif ( ! s || ! s.time ) {\n\t\t\t\tcallback();\n\t\t\t\treturn;\n\t\t\t}\n\t\n\t\t\t// Allow custom and plug-in manipulation functions to alter the saved data set and\n\t\t\t// cancelling of loading by returning false\n\t\t\tvar abStateLoad = _fnCallbackFire( settings, 'aoStateLoadParams', 'stateLoadParams', [settings, state] );\n\t\t\tif ( $.inArray( false, abStateLoad ) !== -1 ) {\n\t\t\t\tcallback();\n\t\t\t\treturn;\n\t\t\t}\n\t\n\t\t\t// Reject old data\n\t\t\tvar duration = settings.iStateDuration;\n\t\t\tif ( duration > 0 && s.time < +new Date() - (duration*1000) ) {\n\t\t\t\tcallback();\n\t\t\t\treturn;\n\t\t\t}\n\t\n\t\t\t// Number of columns have changed - all bets are off, no restore of settings\n\t\t\tif ( s.columns && columns.length !== s.columns.length ) {\n\t\t\t\tcallback();\n\t\t\t\treturn;\n\t\t\t}\n\t\n\t\t\t// Store the saved state so it might be accessed at any time\n\t\t\tsettings.oLoadedState = $.extend( true, {}, state );\n\t\n\t\t\t// Restore key features - todo - for 1.11 this needs to be done by\n\t\t\t// subscribed events\n\t\t\tif ( s.start !== undefined ) {\n\t\t\t\tsettings._iDisplayStart    = s.start;\n\t\t\t\tsettings.iInitDisplayStart = s.start;\n\t\t\t}\n\t\t\tif ( s.length !== undefined ) {\n\t\t\t\tsettings._iDisplayLength   = s.length;\n\t\t\t}\n\t\n\t\t\t// Order\n\t\t\tif ( s.order !== undefined ) {\n\t\t\t\tsettings.aaSorting = [];\n\t\t\t\t$.each( s.order, function ( i, col ) {\n\t\t\t\t\tsettings.aaSorting.push( col[0] >= columns.length ?\n\t\t\t\t\t\t[ 0, col[1] ] :\n\t\t\t\t\t\tcol\n\t\t\t\t\t);\n\t\t\t\t} );\n\t\t\t}\n\t\n\t\t\t// Search\n\t\t\tif ( s.search !== undefined ) {\n\t\t\t\t$.extend( settings.oPreviousSearch, _fnSearchToHung( s.search ) );\n\t\t\t}\n\t\n\t\t\t// Columns\n\t\t\t// \n\t\t\tif ( s.columns ) {\n\t\t\t\tfor ( i=0, ien=s.columns.length ; i<ien ; i++ ) {\n\t\t\t\t\tvar col = s.columns[i];\n\t\n\t\t\t\t\t// Visibility\n\t\t\t\t\tif ( col.visible !== undefined ) {\n\t\t\t\t\t\tcolumns[i].bVisible = col.visible;\n\t\t\t\t\t}\n\t\n\t\t\t\t\t// Search\n\t\t\t\t\tif ( col.search !== undefined ) {\n\t\t\t\t\t\t$.extend( settings.aoPreSearchCols[i], _fnSearchToHung( col.search ) );\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\n\t\t\t_fnCallbackFire( settings, 'aoStateLoaded', 'stateLoaded', [settings, state] );\n\t\t\tcallback();\n\t\t}\n\t\n\t\tif ( ! settings.oFeatures.bStateSave ) {\n\t\t\tcallback();\n\t\t\treturn;\n\t\t}\n\t\n\t\tvar state = settings.fnStateLoadCallback.call( settings.oInstance, settings, loaded );\n\t\n\t\tif ( state !== undefined ) {\n\t\t\tloaded( state );\n\t\t}\n\t\t// otherwise, wait for the loaded callback to be executed\n\t}\n\t\n\t\n\t/**\n\t * Return the settings object for a particular table\n\t *  @param {node} table table we are using as a dataTable\n\t *  @returns {object} Settings object - or null if not found\n\t *  @memberof DataTable#oApi\n\t */\n\tfunction _fnSettingsFromNode ( table )\n\t{\n\t\tvar settings = DataTable.settings;\n\t\tvar idx = $.inArray( table, _pluck( settings, 'nTable' ) );\n\t\n\t\treturn idx !== -1 ?\n\t\t\tsettings[ idx ] :\n\t\t\tnull;\n\t}\n\t\n\t\n\t/**\n\t * Log an error message\n\t *  @param {object} settings dataTables settings object\n\t *  @param {int} level log error messages, or display them to the user\n\t *  @param {string} msg error message\n\t *  @param {int} tn Technical note id to get more information about the error.\n\t *  @memberof DataTable#oApi\n\t */\n\tfunction _fnLog( settings, level, msg, tn )\n\t{\n\t\tmsg = 'DataTables warning: '+\n\t\t\t(settings ? 'table id='+settings.sTableId+' - ' : '')+msg;\n\t\n\t\tif ( tn ) {\n\t\t\tmsg += '. For more information about this error, please see '+\n\t\t\t'http://datatables.net/tn/'+tn;\n\t\t}\n\t\n\t\tif ( ! level  ) {\n\t\t\t// Backwards compatibility pre 1.10\n\t\t\tvar ext = DataTable.ext;\n\t\t\tvar type = ext.sErrMode || ext.errMode;\n\t\n\t\t\tif ( settings ) {\n\t\t\t\t_fnCallbackFire( settings, null, 'error', [ settings, tn, msg ] );\n\t\t\t}\n\t\n\t\t\tif ( type == 'alert' ) {\n\t\t\t\talert( msg );\n\t\t\t}\n\t\t\telse if ( type == 'throw' ) {\n\t\t\t\tthrow new Error(msg);\n\t\t\t}\n\t\t\telse if ( typeof type == 'function' ) {\n\t\t\t\ttype( settings, tn, msg );\n\t\t\t}\n\t\t}\n\t\telse if ( window.console && console.log ) {\n\t\t\tconsole.log( msg );\n\t\t}\n\t}\n\t\n\t\n\t/**\n\t * See if a property is defined on one object, if so assign it to the other object\n\t *  @param {object} ret target object\n\t *  @param {object} src source object\n\t *  @param {string} name property\n\t *  @param {string} [mappedName] name to map too - optional, name used if not given\n\t *  @memberof DataTable#oApi\n\t */\n\tfunction _fnMap( ret, src, name, mappedName )\n\t{\n\t\tif ( $.isArray( name ) ) {\n\t\t\t$.each( name, function (i, val) {\n\t\t\t\tif ( $.isArray( val ) ) {\n\t\t\t\t\t_fnMap( ret, src, val[0], val[1] );\n\t\t\t\t}\n\t\t\t\telse {\n\t\t\t\t\t_fnMap( ret, src, val );\n\t\t\t\t}\n\t\t\t} );\n\t\n\t\t\treturn;\n\t\t}\n\t\n\t\tif ( mappedName === undefined ) {\n\t\t\tmappedName = name;\n\t\t}\n\t\n\t\tif ( src[name] !== undefined ) {\n\t\t\tret[mappedName] = src[name];\n\t\t}\n\t}\n\t\n\t\n\t/**\n\t * Extend objects - very similar to jQuery.extend, but deep copy objects, and\n\t * shallow copy arrays. The reason we need to do this, is that we don't want to\n\t * deep copy array init values (such as aaSorting) since the dev wouldn't be\n\t * able to override them, but we do want to deep copy arrays.\n\t *  @param {object} out Object to extend\n\t *  @param {object} extender Object from which the properties will be applied to\n\t *      out\n\t *  @param {boolean} breakRefs If true, then arrays will be sliced to take an\n\t *      independent copy with the exception of the `data` or `aaData` parameters\n\t *      if they are present. This is so you can pass in a collection to\n\t *      DataTables and have that used as your data source without breaking the\n\t *      references\n\t *  @returns {object} out Reference, just for convenience - out === the return.\n\t *  @memberof DataTable#oApi\n\t *  @todo This doesn't take account of arrays inside the deep copied objects.\n\t */\n\tfunction _fnExtend( out, extender, breakRefs )\n\t{\n\t\tvar val;\n\t\n\t\tfor ( var prop in extender ) {\n\t\t\tif ( extender.hasOwnProperty(prop) ) {\n\t\t\t\tval = extender[prop];\n\t\n\t\t\t\tif ( $.isPlainObject( val ) ) {\n\t\t\t\t\tif ( ! $.isPlainObject( out[prop] ) ) {\n\t\t\t\t\t\tout[prop] = {};\n\t\t\t\t\t}\n\t\t\t\t\t$.extend( true, out[prop], val );\n\t\t\t\t}\n\t\t\t\telse if ( breakRefs && prop !== 'data' && prop !== 'aaData' && $.isArray(val) ) {\n\t\t\t\t\tout[prop] = val.slice();\n\t\t\t\t}\n\t\t\t\telse {\n\t\t\t\t\tout[prop] = val;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\n\t\treturn out;\n\t}\n\t\n\t\n\t/**\n\t * Bind an event handers to allow a click or return key to activate the callback.\n\t * This is good for accessibility since a return on the keyboard will have the\n\t * same effect as a click, if the element has focus.\n\t *  @param {element} n Element to bind the action to\n\t *  @param {object} oData Data object to pass to the triggered function\n\t *  @param {function} fn Callback function for when the event is triggered\n\t *  @memberof DataTable#oApi\n\t */\n\tfunction _fnBindAction( n, oData, fn )\n\t{\n\t\t$(n)\n\t\t\t.on( 'click.DT', oData, function (e) {\n\t\t\t\t\tn.blur(); // Remove focus outline for mouse users\n\t\t\t\t\tfn(e);\n\t\t\t\t} )\n\t\t\t.on( 'keypress.DT', oData, function (e){\n\t\t\t\t\tif ( e.which === 13 ) {\n\t\t\t\t\t\te.preventDefault();\n\t\t\t\t\t\tfn(e);\n\t\t\t\t\t}\n\t\t\t\t} )\n\t\t\t.on( 'selectstart.DT', function () {\n\t\t\t\t\t/* Take the brutal approach to cancelling text selection */\n\t\t\t\t\treturn false;\n\t\t\t\t} );\n\t}\n\t\n\t\n\t/**\n\t * Register a callback function. Easily allows a callback function to be added to\n\t * an array store of callback functions that can then all be called together.\n\t *  @param {object} oSettings dataTables settings object\n\t *  @param {string} sStore Name of the array storage for the callbacks in oSettings\n\t *  @param {function} fn Function to be called back\n\t *  @param {string} sName Identifying name for the callback (i.e. a label)\n\t *  @memberof DataTable#oApi\n\t */\n\tfunction _fnCallbackReg( oSettings, sStore, fn, sName )\n\t{\n\t\tif ( fn )\n\t\t{\n\t\t\toSettings[sStore].push( {\n\t\t\t\t\"fn\": fn,\n\t\t\t\t\"sName\": sName\n\t\t\t} );\n\t\t}\n\t}\n\t\n\t\n\t/**\n\t * Fire callback functions and trigger events. Note that the loop over the\n\t * callback array store is done backwards! Further note that you do not want to\n\t * fire off triggers in time sensitive applications (for example cell creation)\n\t * as its slow.\n\t *  @param {object} settings dataTables settings object\n\t *  @param {string} callbackArr Name of the array storage for the callbacks in\n\t *      oSettings\n\t *  @param {string} eventName Name of the jQuery custom event to trigger. If\n\t *      null no trigger is fired\n\t *  @param {array} args Array of arguments to pass to the callback function /\n\t *      trigger\n\t *  @memberof DataTable#oApi\n\t */\n\tfunction _fnCallbackFire( settings, callbackArr, eventName, args )\n\t{\n\t\tvar ret = [];\n\t\n\t\tif ( callbackArr ) {\n\t\t\tret = $.map( settings[callbackArr].slice().reverse(), function (val, i) {\n\t\t\t\treturn val.fn.apply( settings.oInstance, args );\n\t\t\t} );\n\t\t}\n\t\n\t\tif ( eventName !== null ) {\n\t\t\tvar e = $.Event( eventName+'.dt' );\n\t\n\t\t\t$(settings.nTable).trigger( e, args );\n\t\n\t\t\tret.push( e.result );\n\t\t}\n\t\n\t\treturn ret;\n\t}\n\t\n\t\n\tfunction _fnLengthOverflow ( settings )\n\t{\n\t\tvar\n\t\t\tstart = settings._iDisplayStart,\n\t\t\tend = settings.fnDisplayEnd(),\n\t\t\tlen = settings._iDisplayLength;\n\t\n\t\t/* If we have space to show extra rows (backing up from the end point - then do so */\n\t\tif ( start >= end )\n\t\t{\n\t\t\tstart = end - len;\n\t\t}\n\t\n\t\t// Keep the start record on the current page\n\t\tstart -= (start % len);\n\t\n\t\tif ( len === -1 || start < 0 )\n\t\t{\n\t\t\tstart = 0;\n\t\t}\n\t\n\t\tsettings._iDisplayStart = start;\n\t}\n\t\n\t\n\tfunction _fnRenderer( settings, type )\n\t{\n\t\tvar renderer = settings.renderer;\n\t\tvar host = DataTable.ext.renderer[type];\n\t\n\t\tif ( $.isPlainObject( renderer ) && renderer[type] ) {\n\t\t\t// Specific renderer for this type. If available use it, otherwise use\n\t\t\t// the default.\n\t\t\treturn host[renderer[type]] || host._;\n\t\t}\n\t\telse if ( typeof renderer === 'string' ) {\n\t\t\t// Common renderer - if there is one available for this type use it,\n\t\t\t// otherwise use the default\n\t\t\treturn host[renderer] || host._;\n\t\t}\n\t\n\t\t// Use the default\n\t\treturn host._;\n\t}\n\t\n\t\n\t/**\n\t * Detect the data source being used for the table. Used to simplify the code\n\t * a little (ajax) and to make it compress a little smaller.\n\t *\n\t *  @param {object} settings dataTables settings object\n\t *  @returns {string} Data source\n\t *  @memberof DataTable#oApi\n\t */\n\tfunction _fnDataSource ( settings )\n\t{\n\t\tif ( settings.oFeatures.bServerSide ) {\n\t\t\treturn 'ssp';\n\t\t}\n\t\telse if ( settings.ajax || settings.sAjaxSource ) {\n\t\t\treturn 'ajax';\n\t\t}\n\t\treturn 'dom';\n\t}\n\t\n\n\t\n\t\n\t/**\n\t * Computed structure of the DataTables API, defined by the options passed to\n\t * `DataTable.Api.register()` when building the API.\n\t *\n\t * The structure is built in order to speed creation and extension of the Api\n\t * objects since the extensions are effectively pre-parsed.\n\t *\n\t * The array is an array of objects with the following structure, where this\n\t * base array represents the Api prototype base:\n\t *\n\t *     [\n\t *       {\n\t *         name:      'data'                -- string   - Property name\n\t *         val:       function () {},       -- function - Api method (or undefined if just an object\n\t *         methodExt: [ ... ],              -- array    - Array of Api object definitions to extend the method result\n\t *         propExt:   [ ... ]               -- array    - Array of Api object definitions to extend the property\n\t *       },\n\t *       {\n\t *         name:     'row'\n\t *         val:       {},\n\t *         methodExt: [ ... ],\n\t *         propExt:   [\n\t *           {\n\t *             name:      'data'\n\t *             val:       function () {},\n\t *             methodExt: [ ... ],\n\t *             propExt:   [ ... ]\n\t *           },\n\t *           ...\n\t *         ]\n\t *       }\n\t *     ]\n\t *\n\t * @type {Array}\n\t * @ignore\n\t */\n\tvar __apiStruct = [];\n\t\n\t\n\t/**\n\t * `Array.prototype` reference.\n\t *\n\t * @type object\n\t * @ignore\n\t */\n\tvar __arrayProto = Array.prototype;\n\t\n\t\n\t/**\n\t * Abstraction for `context` parameter of the `Api` constructor to allow it to\n\t * take several different forms for ease of use.\n\t *\n\t * Each of the input parameter types will be converted to a DataTables settings\n\t * object where possible.\n\t *\n\t * @param  {string|node|jQuery|object} mixed DataTable identifier. Can be one\n\t *   of:\n\t *\n\t *   * `string` - jQuery selector. Any DataTables' matching the given selector\n\t *     with be found and used.\n\t *   * `node` - `TABLE` node which has already been formed into a DataTable.\n\t *   * `jQuery` - A jQuery object of `TABLE` nodes.\n\t *   * `object` - DataTables settings object\n\t *   * `DataTables.Api` - API instance\n\t * @return {array|null} Matching DataTables settings objects. `null` or\n\t *   `undefined` is returned if no matching DataTable is found.\n\t * @ignore\n\t */\n\tvar _toSettings = function ( mixed )\n\t{\n\t\tvar idx, jq;\n\t\tvar settings = DataTable.settings;\n\t\tvar tables = $.map( settings, function (el, i) {\n\t\t\treturn el.nTable;\n\t\t} );\n\t\n\t\tif ( ! mixed ) {\n\t\t\treturn [];\n\t\t}\n\t\telse if ( mixed.nTable && mixed.oApi ) {\n\t\t\t// DataTables settings object\n\t\t\treturn [ mixed ];\n\t\t}\n\t\telse if ( mixed.nodeName && mixed.nodeName.toLowerCase() === 'table' ) {\n\t\t\t// Table node\n\t\t\tidx = $.inArray( mixed, tables );\n\t\t\treturn idx !== -1 ? [ settings[idx] ] : null;\n\t\t}\n\t\telse if ( mixed && typeof mixed.settings === 'function' ) {\n\t\t\treturn mixed.settings().toArray();\n\t\t}\n\t\telse if ( typeof mixed === 'string' ) {\n\t\t\t// jQuery selector\n\t\t\tjq = $(mixed);\n\t\t}\n\t\telse if ( mixed instanceof $ ) {\n\t\t\t// jQuery object (also DataTables instance)\n\t\t\tjq = mixed;\n\t\t}\n\t\n\t\tif ( jq ) {\n\t\t\treturn jq.map( function(i) {\n\t\t\t\tidx = $.inArray( this, tables );\n\t\t\t\treturn idx !== -1 ? settings[idx] : null;\n\t\t\t} ).toArray();\n\t\t}\n\t};\n\t\n\t\n\t/**\n\t * DataTables API class - used to control and interface with  one or more\n\t * DataTables enhanced tables.\n\t *\n\t * The API class is heavily based on jQuery, presenting a chainable interface\n\t * that you can use to interact with tables. Each instance of the API class has\n\t * a \"context\" - i.e. the tables that it will operate on. This could be a single\n\t * table, all tables on a page or a sub-set thereof.\n\t *\n\t * Additionally the API is designed to allow you to easily work with the data in\n\t * the tables, retrieving and manipulating it as required. This is done by\n\t * presenting the API class as an array like interface. The contents of the\n\t * array depend upon the actions requested by each method (for example\n\t * `rows().nodes()` will return an array of nodes, while `rows().data()` will\n\t * return an array of objects or arrays depending upon your table's\n\t * configuration). The API object has a number of array like methods (`push`,\n\t * `pop`, `reverse` etc) as well as additional helper methods (`each`, `pluck`,\n\t * `unique` etc) to assist your working with the data held in a table.\n\t *\n\t * Most methods (those which return an Api instance) are chainable, which means\n\t * the return from a method call also has all of the methods available that the\n\t * top level object had. For example, these two calls are equivalent:\n\t *\n\t *     // Not chained\n\t *     api.row.add( {...} );\n\t *     api.draw();\n\t *\n\t *     // Chained\n\t *     api.row.add( {...} ).draw();\n\t *\n\t * @class DataTable.Api\n\t * @param {array|object|string|jQuery} context DataTable identifier. This is\n\t *   used to define which DataTables enhanced tables this API will operate on.\n\t *   Can be one of:\n\t *\n\t *   * `string` - jQuery selector. Any DataTables' matching the given selector\n\t *     with be found and used.\n\t *   * `node` - `TABLE` node which has already been formed into a DataTable.\n\t *   * `jQuery` - A jQuery object of `TABLE` nodes.\n\t *   * `object` - DataTables settings object\n\t * @param {array} [data] Data to initialise the Api instance with.\n\t *\n\t * @example\n\t *   // Direct initialisation during DataTables construction\n\t *   var api = $('#example').DataTable();\n\t *\n\t * @example\n\t *   // Initialisation using a DataTables jQuery object\n\t *   var api = $('#example').dataTable().api();\n\t *\n\t * @example\n\t *   // Initialisation as a constructor\n\t *   var api = new $.fn.DataTable.Api( 'table.dataTable' );\n\t */\n\t_Api = function ( context, data )\n\t{\n\t\tif ( ! (this instanceof _Api) ) {\n\t\t\treturn new _Api( context, data );\n\t\t}\n\t\n\t\tvar settings = [];\n\t\tvar ctxSettings = function ( o ) {\n\t\t\tvar a = _toSettings( o );\n\t\t\tif ( a ) {\n\t\t\t\tsettings = settings.concat( a );\n\t\t\t}\n\t\t};\n\t\n\t\tif ( $.isArray( context ) ) {\n\t\t\tfor ( var i=0, ien=context.length ; i<ien ; i++ ) {\n\t\t\t\tctxSettings( context[i] );\n\t\t\t}\n\t\t}\n\t\telse {\n\t\t\tctxSettings( context );\n\t\t}\n\t\n\t\t// Remove duplicates\n\t\tthis.context = _unique( settings );\n\t\n\t\t// Initial data\n\t\tif ( data ) {\n\t\t\t$.merge( this, data );\n\t\t}\n\t\n\t\t// selector\n\t\tthis.selector = {\n\t\t\trows: null,\n\t\t\tcols: null,\n\t\t\topts: null\n\t\t};\n\t\n\t\t_Api.extend( this, this, __apiStruct );\n\t};\n\t\n\tDataTable.Api = _Api;\n\t\n\t// Don't destroy the existing prototype, just extend it. Required for jQuery 2's\n\t// isPlainObject.\n\t$.extend( _Api.prototype, {\n\t\tany: function ()\n\t\t{\n\t\t\treturn this.count() !== 0;\n\t\t},\n\t\n\t\n\t\tconcat:  __arrayProto.concat,\n\t\n\t\n\t\tcontext: [], // array of table settings objects\n\t\n\t\n\t\tcount: function ()\n\t\t{\n\t\t\treturn this.flatten().length;\n\t\t},\n\t\n\t\n\t\teach: function ( fn )\n\t\t{\n\t\t\tfor ( var i=0, ien=this.length ; i<ien; i++ ) {\n\t\t\t\tfn.call( this, this[i], i, this );\n\t\t\t}\n\t\n\t\t\treturn this;\n\t\t},\n\t\n\t\n\t\teq: function ( idx )\n\t\t{\n\t\t\tvar ctx = this.context;\n\t\n\t\t\treturn ctx.length > idx ?\n\t\t\t\tnew _Api( ctx[idx], this[idx] ) :\n\t\t\t\tnull;\n\t\t},\n\t\n\t\n\t\tfilter: function ( fn )\n\t\t{\n\t\t\tvar a = [];\n\t\n\t\t\tif ( __arrayProto.filter ) {\n\t\t\t\ta = __arrayProto.filter.call( this, fn, this );\n\t\t\t}\n\t\t\telse {\n\t\t\t\t// Compatibility for browsers without EMCA-252-5 (JS 1.6)\n\t\t\t\tfor ( var i=0, ien=this.length ; i<ien ; i++ ) {\n\t\t\t\t\tif ( fn.call( this, this[i], i, this ) ) {\n\t\t\t\t\t\ta.push( this[i] );\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\n\t\t\treturn new _Api( this.context, a );\n\t\t},\n\t\n\t\n\t\tflatten: function ()\n\t\t{\n\t\t\tvar a = [];\n\t\t\treturn new _Api( this.context, a.concat.apply( a, this.toArray() ) );\n\t\t},\n\t\n\t\n\t\tjoin:    __arrayProto.join,\n\t\n\t\n\t\tindexOf: __arrayProto.indexOf || function (obj, start)\n\t\t{\n\t\t\tfor ( var i=(start || 0), ien=this.length ; i<ien ; i++ ) {\n\t\t\t\tif ( this[i] === obj ) {\n\t\t\t\t\treturn i;\n\t\t\t\t}\n\t\t\t}\n\t\t\treturn -1;\n\t\t},\n\t\n\t\titerator: function ( flatten, type, fn, alwaysNew ) {\n\t\t\tvar\n\t\t\t\ta = [], ret,\n\t\t\t\ti, ien, j, jen,\n\t\t\t\tcontext = this.context,\n\t\t\t\trows, items, item,\n\t\t\t\tselector = this.selector;\n\t\n\t\t\t// Argument shifting\n\t\t\tif ( typeof flatten === 'string' ) {\n\t\t\t\talwaysNew = fn;\n\t\t\t\tfn = type;\n\t\t\t\ttype = flatten;\n\t\t\t\tflatten = false;\n\t\t\t}\n\t\n\t\t\tfor ( i=0, ien=context.length ; i<ien ; i++ ) {\n\t\t\t\tvar apiInst = new _Api( context[i] );\n\t\n\t\t\t\tif ( type === 'table' ) {\n\t\t\t\t\tret = fn.call( apiInst, context[i], i );\n\t\n\t\t\t\t\tif ( ret !== undefined ) {\n\t\t\t\t\t\ta.push( ret );\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\telse if ( type === 'columns' || type === 'rows' ) {\n\t\t\t\t\t// this has same length as context - one entry for each table\n\t\t\t\t\tret = fn.call( apiInst, context[i], this[i], i );\n\t\n\t\t\t\t\tif ( ret !== undefined ) {\n\t\t\t\t\t\ta.push( ret );\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\telse if ( type === 'column' || type === 'column-rows' || type === 'row' || type === 'cell' ) {\n\t\t\t\t\t// columns and rows share the same structure.\n\t\t\t\t\t// 'this' is an array of column indexes for each context\n\t\t\t\t\titems = this[i];\n\t\n\t\t\t\t\tif ( type === 'column-rows' ) {\n\t\t\t\t\t\trows = _selector_row_indexes( context[i], selector.opts );\n\t\t\t\t\t}\n\t\n\t\t\t\t\tfor ( j=0, jen=items.length ; j<jen ; j++ ) {\n\t\t\t\t\t\titem = items[j];\n\t\n\t\t\t\t\t\tif ( type === 'cell' ) {\n\t\t\t\t\t\t\tret = fn.call( apiInst, context[i], item.row, item.column, i, j );\n\t\t\t\t\t\t}\n\t\t\t\t\t\telse {\n\t\t\t\t\t\t\tret = fn.call( apiInst, context[i], item, i, j, rows );\n\t\t\t\t\t\t}\n\t\n\t\t\t\t\t\tif ( ret !== undefined ) {\n\t\t\t\t\t\t\ta.push( ret );\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\n\t\t\tif ( a.length || alwaysNew ) {\n\t\t\t\tvar api = new _Api( context, flatten ? a.concat.apply( [], a ) : a );\n\t\t\t\tvar apiSelector = api.selector;\n\t\t\t\tapiSelector.rows = selector.rows;\n\t\t\t\tapiSelector.cols = selector.cols;\n\t\t\t\tapiSelector.opts = selector.opts;\n\t\t\t\treturn api;\n\t\t\t}\n\t\t\treturn this;\n\t\t},\n\t\n\t\n\t\tlastIndexOf: __arrayProto.lastIndexOf || function (obj, start)\n\t\t{\n\t\t\t// Bit cheeky...\n\t\t\treturn this.indexOf.apply( this.toArray.reverse(), arguments );\n\t\t},\n\t\n\t\n\t\tlength:  0,\n\t\n\t\n\t\tmap: function ( fn )\n\t\t{\n\t\t\tvar a = [];\n\t\n\t\t\tif ( __arrayProto.map ) {\n\t\t\t\ta = __arrayProto.map.call( this, fn, this );\n\t\t\t}\n\t\t\telse {\n\t\t\t\t// Compatibility for browsers without EMCA-252-5 (JS 1.6)\n\t\t\t\tfor ( var i=0, ien=this.length ; i<ien ; i++ ) {\n\t\t\t\t\ta.push( fn.call( this, this[i], i ) );\n\t\t\t\t}\n\t\t\t}\n\t\n\t\t\treturn new _Api( this.context, a );\n\t\t},\n\t\n\t\n\t\tpluck: function ( prop )\n\t\t{\n\t\t\treturn this.map( function ( el ) {\n\t\t\t\treturn el[ prop ];\n\t\t\t} );\n\t\t},\n\t\n\t\tpop:     __arrayProto.pop,\n\t\n\t\n\t\tpush:    __arrayProto.push,\n\t\n\t\n\t\t// Does not return an API instance\n\t\treduce: __arrayProto.reduce || function ( fn, init )\n\t\t{\n\t\t\treturn _fnReduce( this, fn, init, 0, this.length, 1 );\n\t\t},\n\t\n\t\n\t\treduceRight: __arrayProto.reduceRight || function ( fn, init )\n\t\t{\n\t\t\treturn _fnReduce( this, fn, init, this.length-1, -1, -1 );\n\t\t},\n\t\n\t\n\t\treverse: __arrayProto.reverse,\n\t\n\t\n\t\t// Object with rows, columns and opts\n\t\tselector: null,\n\t\n\t\n\t\tshift:   __arrayProto.shift,\n\t\n\t\n\t\tsort:    __arrayProto.sort, // ? name - order?\n\t\n\t\n\t\tsplice:  __arrayProto.splice,\n\t\n\t\n\t\ttoArray: function ()\n\t\t{\n\t\t\treturn __arrayProto.slice.call( this );\n\t\t},\n\t\n\t\n\t\tto$: function ()\n\t\t{\n\t\t\treturn $( this );\n\t\t},\n\t\n\t\n\t\ttoJQuery: function ()\n\t\t{\n\t\t\treturn $( this );\n\t\t},\n\t\n\t\n\t\tunique: function ()\n\t\t{\n\t\t\treturn new _Api( this.context, _unique(this) );\n\t\t},\n\t\n\t\n\t\tunshift: __arrayProto.unshift\n\t} );\n\t\n\t\n\t_Api.extend = function ( scope, obj, ext )\n\t{\n\t\t// Only extend API instances and static properties of the API\n\t\tif ( ! ext.length || ! obj || ( ! (obj instanceof _Api) && ! obj.__dt_wrapper ) ) {\n\t\t\treturn;\n\t\t}\n\t\n\t\tvar\n\t\t\ti, ien,\n\t\t\tj, jen,\n\t\t\tstruct, inner,\n\t\t\tmethodScoping = function ( scope, fn, struc ) {\n\t\t\t\treturn function () {\n\t\t\t\t\tvar ret = fn.apply( scope, arguments );\n\t\n\t\t\t\t\t// Method extension\n\t\t\t\t\t_Api.extend( ret, ret, struc.methodExt );\n\t\t\t\t\treturn ret;\n\t\t\t\t};\n\t\t\t};\n\t\n\t\tfor ( i=0, ien=ext.length ; i<ien ; i++ ) {\n\t\t\tstruct = ext[i];\n\t\n\t\t\t// Value\n\t\t\tobj[ struct.name ] = typeof struct.val === 'function' ?\n\t\t\t\tmethodScoping( scope, struct.val, struct ) :\n\t\t\t\t$.isPlainObject( struct.val ) ?\n\t\t\t\t\t{} :\n\t\t\t\t\tstruct.val;\n\t\n\t\t\tobj[ struct.name ].__dt_wrapper = true;\n\t\n\t\t\t// Property extension\n\t\t\t_Api.extend( scope, obj[ struct.name ], struct.propExt );\n\t\t}\n\t};\n\t\n\t\n\t// @todo - Is there need for an augment function?\n\t// _Api.augment = function ( inst, name )\n\t// {\n\t// \t// Find src object in the structure from the name\n\t// \tvar parts = name.split('.');\n\t\n\t// \t_Api.extend( inst, obj );\n\t// };\n\t\n\t\n\t//     [\n\t//       {\n\t//         name:      'data'                -- string   - Property name\n\t//         val:       function () {},       -- function - Api method (or undefined if just an object\n\t//         methodExt: [ ... ],              -- array    - Array of Api object definitions to extend the method result\n\t//         propExt:   [ ... ]               -- array    - Array of Api object definitions to extend the property\n\t//       },\n\t//       {\n\t//         name:     'row'\n\t//         val:       {},\n\t//         methodExt: [ ... ],\n\t//         propExt:   [\n\t//           {\n\t//             name:      'data'\n\t//             val:       function () {},\n\t//             methodExt: [ ... ],\n\t//             propExt:   [ ... ]\n\t//           },\n\t//           ...\n\t//         ]\n\t//       }\n\t//     ]\n\t\n\t_Api.register = _api_register = function ( name, val )\n\t{\n\t\tif ( $.isArray( name ) ) {\n\t\t\tfor ( var j=0, jen=name.length ; j<jen ; j++ ) {\n\t\t\t\t_Api.register( name[j], val );\n\t\t\t}\n\t\t\treturn;\n\t\t}\n\t\n\t\tvar\n\t\t\ti, ien,\n\t\t\their = name.split('.'),\n\t\t\tstruct = __apiStruct,\n\t\t\tkey, method;\n\t\n\t\tvar find = function ( src, name ) {\n\t\t\tfor ( var i=0, ien=src.length ; i<ien ; i++ ) {\n\t\t\t\tif ( src[i].name === name ) {\n\t\t\t\t\treturn src[i];\n\t\t\t\t}\n\t\t\t}\n\t\t\treturn null;\n\t\t};\n\t\n\t\tfor ( i=0, ien=heir.length ; i<ien ; i++ ) {\n\t\t\tmethod = heir[i].indexOf('()') !== -1;\n\t\t\tkey = method ?\n\t\t\t\their[i].replace('()', '') :\n\t\t\t\their[i];\n\t\n\t\t\tvar src = find( struct, key );\n\t\t\tif ( ! src ) {\n\t\t\t\tsrc = {\n\t\t\t\t\tname:      key,\n\t\t\t\t\tval:       {},\n\t\t\t\t\tmethodExt: [],\n\t\t\t\t\tpropExt:   []\n\t\t\t\t};\n\t\t\t\tstruct.push( src );\n\t\t\t}\n\t\n\t\t\tif ( i === ien-1 ) {\n\t\t\t\tsrc.val = val;\n\t\t\t}\n\t\t\telse {\n\t\t\t\tstruct = method ?\n\t\t\t\t\tsrc.methodExt :\n\t\t\t\t\tsrc.propExt;\n\t\t\t}\n\t\t}\n\t};\n\t\n\t\n\t_Api.registerPlural = _api_registerPlural = function ( pluralName, singularName, val ) {\n\t\t_Api.register( pluralName, val );\n\t\n\t\t_Api.register( singularName, function () {\n\t\t\tvar ret = val.apply( this, arguments );\n\t\n\t\t\tif ( ret === this ) {\n\t\t\t\t// Returned item is the API instance that was passed in, return it\n\t\t\t\treturn this;\n\t\t\t}\n\t\t\telse if ( ret instanceof _Api ) {\n\t\t\t\t// New API instance returned, want the value from the first item\n\t\t\t\t// in the returned array for the singular result.\n\t\t\t\treturn ret.length ?\n\t\t\t\t\t$.isArray( ret[0] ) ?\n\t\t\t\t\t\tnew _Api( ret.context, ret[0] ) : // Array results are 'enhanced'\n\t\t\t\t\t\tret[0] :\n\t\t\t\t\tundefined;\n\t\t\t}\n\t\n\t\t\t// Non-API return - just fire it back\n\t\t\treturn ret;\n\t\t} );\n\t};\n\t\n\t\n\t/**\n\t * Selector for HTML tables. Apply the given selector to the give array of\n\t * DataTables settings objects.\n\t *\n\t * @param {string|integer} [selector] jQuery selector string or integer\n\t * @param  {array} Array of DataTables settings objects to be filtered\n\t * @return {array}\n\t * @ignore\n\t */\n\tvar __table_selector = function ( selector, a )\n\t{\n\t\t// Integer is used to pick out a table by index\n\t\tif ( typeof selector === 'number' ) {\n\t\t\treturn [ a[ selector ] ];\n\t\t}\n\t\n\t\t// Perform a jQuery selector on the table nodes\n\t\tvar nodes = $.map( a, function (el, i) {\n\t\t\treturn el.nTable;\n\t\t} );\n\t\n\t\treturn $(nodes)\n\t\t\t.filter( selector )\n\t\t\t.map( function (i) {\n\t\t\t\t// Need to translate back from the table node to the settings\n\t\t\t\tvar idx = $.inArray( this, nodes );\n\t\t\t\treturn a[ idx ];\n\t\t\t} )\n\t\t\t.toArray();\n\t};\n\t\n\t\n\t\n\t/**\n\t * Context selector for the API's context (i.e. the tables the API instance\n\t * refers to.\n\t *\n\t * @name    DataTable.Api#tables\n\t * @param {string|integer} [selector] Selector to pick which tables the iterator\n\t *   should operate on. If not given, all tables in the current context are\n\t *   used. This can be given as a jQuery selector (for example `':gt(0)'`) to\n\t *   select multiple tables or as an integer to select a single table.\n\t * @returns {DataTable.Api} Returns a new API instance if a selector is given.\n\t */\n\t_api_register( 'tables()', function ( selector ) {\n\t\t// A new instance is created if there was a selector specified\n\t\treturn selector ?\n\t\t\tnew _Api( __table_selector( selector, this.context ) ) :\n\t\t\tthis;\n\t} );\n\t\n\t\n\t_api_register( 'table()', function ( selector ) {\n\t\tvar tables = this.tables( selector );\n\t\tvar ctx = tables.context;\n\t\n\t\t// Truncate to the first matched table\n\t\treturn ctx.length ?\n\t\t\tnew _Api( ctx[0] ) :\n\t\t\ttables;\n\t} );\n\t\n\t\n\t_api_registerPlural( 'tables().nodes()', 'table().node()' , function () {\n\t\treturn this.iterator( 'table', function ( ctx ) {\n\t\t\treturn ctx.nTable;\n\t\t}, 1 );\n\t} );\n\t\n\t\n\t_api_registerPlural( 'tables().body()', 'table().body()' , function () {\n\t\treturn this.iterator( 'table', function ( ctx ) {\n\t\t\treturn ctx.nTBody;\n\t\t}, 1 );\n\t} );\n\t\n\t\n\t_api_registerPlural( 'tables().header()', 'table().header()' , function () {\n\t\treturn this.iterator( 'table', function ( ctx ) {\n\t\t\treturn ctx.nTHead;\n\t\t}, 1 );\n\t} );\n\t\n\t\n\t_api_registerPlural( 'tables().footer()', 'table().footer()' , function () {\n\t\treturn this.iterator( 'table', function ( ctx ) {\n\t\t\treturn ctx.nTFoot;\n\t\t}, 1 );\n\t} );\n\t\n\t\n\t_api_registerPlural( 'tables().containers()', 'table().container()' , function () {\n\t\treturn this.iterator( 'table', function ( ctx ) {\n\t\t\treturn ctx.nTableWrapper;\n\t\t}, 1 );\n\t} );\n\t\n\t\n\t\n\t/**\n\t * Redraw the tables in the current context.\n\t */\n\t_api_register( 'draw()', function ( paging ) {\n\t\treturn this.iterator( 'table', function ( settings ) {\n\t\t\tif ( paging === 'page' ) {\n\t\t\t\t_fnDraw( settings );\n\t\t\t}\n\t\t\telse {\n\t\t\t\tif ( typeof paging === 'string' ) {\n\t\t\t\t\tpaging = paging === 'full-hold' ?\n\t\t\t\t\t\tfalse :\n\t\t\t\t\t\ttrue;\n\t\t\t\t}\n\t\n\t\t\t\t_fnReDraw( settings, paging===false );\n\t\t\t}\n\t\t} );\n\t} );\n\t\n\t\n\t\n\t/**\n\t * Get the current page index.\n\t *\n\t * @return {integer} Current page index (zero based)\n\t *//**\n\t * Set the current page.\n\t *\n\t * Note that if you attempt to show a page which does not exist, DataTables will\n\t * not throw an error, but rather reset the paging.\n\t *\n\t * @param {integer|string} action The paging action to take. This can be one of:\n\t *  * `integer` - The page index to jump to\n\t *  * `string` - An action to take:\n\t *    * `first` - Jump to first page.\n\t *    * `next` - Jump to the next page\n\t *    * `previous` - Jump to previous page\n\t *    * `last` - Jump to the last page.\n\t * @returns {DataTables.Api} this\n\t */\n\t_api_register( 'page()', function ( action ) {\n\t\tif ( action === undefined ) {\n\t\t\treturn this.page.info().page; // not an expensive call\n\t\t}\n\t\n\t\t// else, have an action to take on all tables\n\t\treturn this.iterator( 'table', function ( settings ) {\n\t\t\t_fnPageChange( settings, action );\n\t\t} );\n\t} );\n\t\n\t\n\t/**\n\t * Paging information for the first table in the current context.\n\t *\n\t * If you require paging information for another table, use the `table()` method\n\t * with a suitable selector.\n\t *\n\t * @return {object} Object with the following properties set:\n\t *  * `page` - Current page index (zero based - i.e. the first page is `0`)\n\t *  * `pages` - Total number of pages\n\t *  * `start` - Display index for the first record shown on the current page\n\t *  * `end` - Display index for the last record shown on the current page\n\t *  * `length` - Display length (number of records). Note that generally `start\n\t *    + length = end`, but this is not always true, for example if there are\n\t *    only 2 records to show on the final page, with a length of 10.\n\t *  * `recordsTotal` - Full data set length\n\t *  * `recordsDisplay` - Data set length once the current filtering criterion\n\t *    are applied.\n\t */\n\t_api_register( 'page.info()', function ( action ) {\n\t\tif ( this.context.length === 0 ) {\n\t\t\treturn undefined;\n\t\t}\n\t\n\t\tvar\n\t\t\tsettings   = this.context[0],\n\t\t\tstart      = settings._iDisplayStart,\n\t\t\tlen        = settings.oFeatures.bPaginate ? settings._iDisplayLength : -1,\n\t\t\tvisRecords = settings.fnRecordsDisplay(),\n\t\t\tall        = len === -1;\n\t\n\t\treturn {\n\t\t\t\"page\":           all ? 0 : Math.floor( start / len ),\n\t\t\t\"pages\":          all ? 1 : Math.ceil( visRecords / len ),\n\t\t\t\"start\":          start,\n\t\t\t\"end\":            settings.fnDisplayEnd(),\n\t\t\t\"length\":         len,\n\t\t\t\"recordsTotal\":   settings.fnRecordsTotal(),\n\t\t\t\"recordsDisplay\": visRecords,\n\t\t\t\"serverSide\":     _fnDataSource( settings ) === 'ssp'\n\t\t};\n\t} );\n\t\n\t\n\t/**\n\t * Get the current page length.\n\t *\n\t * @return {integer} Current page length. Note `-1` indicates that all records\n\t *   are to be shown.\n\t *//**\n\t * Set the current page length.\n\t *\n\t * @param {integer} Page length to set. Use `-1` to show all records.\n\t * @returns {DataTables.Api} this\n\t */\n\t_api_register( 'page.len()', function ( len ) {\n\t\t// Note that we can't call this function 'length()' because `length`\n\t\t// is a Javascript property of functions which defines how many arguments\n\t\t// the function expects.\n\t\tif ( len === undefined ) {\n\t\t\treturn this.context.length !== 0 ?\n\t\t\t\tthis.context[0]._iDisplayLength :\n\t\t\t\tundefined;\n\t\t}\n\t\n\t\t// else, set the page length\n\t\treturn this.iterator( 'table', function ( settings ) {\n\t\t\t_fnLengthChange( settings, len );\n\t\t} );\n\t} );\n\t\n\t\n\t\n\tvar __reload = function ( settings, holdPosition, callback ) {\n\t\t// Use the draw event to trigger a callback\n\t\tif ( callback ) {\n\t\t\tvar api = new _Api( settings );\n\t\n\t\t\tapi.one( 'draw', function () {\n\t\t\t\tcallback( api.ajax.json() );\n\t\t\t} );\n\t\t}\n\t\n\t\tif ( _fnDataSource( settings ) == 'ssp' ) {\n\t\t\t_fnReDraw( settings, holdPosition );\n\t\t}\n\t\telse {\n\t\t\t_fnProcessingDisplay( settings, true );\n\t\n\t\t\t// Cancel an existing request\n\t\t\tvar xhr = settings.jqXHR;\n\t\t\tif ( xhr && xhr.readyState !== 4 ) {\n\t\t\t\txhr.abort();\n\t\t\t}\n\t\n\t\t\t// Trigger xhr\n\t\t\t_fnBuildAjax( settings, [], function( json ) {\n\t\t\t\t_fnClearTable( settings );\n\t\n\t\t\t\tvar data = _fnAjaxDataSrc( settings, json );\n\t\t\t\tfor ( var i=0, ien=data.length ; i<ien ; i++ ) {\n\t\t\t\t\t_fnAddData( settings, data[i] );\n\t\t\t\t}\n\t\n\t\t\t\t_fnReDraw( settings, holdPosition );\n\t\t\t\t_fnProcessingDisplay( settings, false );\n\t\t\t} );\n\t\t}\n\t};\n\t\n\t\n\t/**\n\t * Get the JSON response from the last Ajax request that DataTables made to the\n\t * server. Note that this returns the JSON from the first table in the current\n\t * context.\n\t *\n\t * @return {object} JSON received from the server.\n\t */\n\t_api_register( 'ajax.json()', function () {\n\t\tvar ctx = this.context;\n\t\n\t\tif ( ctx.length > 0 ) {\n\t\t\treturn ctx[0].json;\n\t\t}\n\t\n\t\t// else return undefined;\n\t} );\n\t\n\t\n\t/**\n\t * Get the data submitted in the last Ajax request\n\t */\n\t_api_register( 'ajax.params()', function () {\n\t\tvar ctx = this.context;\n\t\n\t\tif ( ctx.length > 0 ) {\n\t\t\treturn ctx[0].oAjaxData;\n\t\t}\n\t\n\t\t// else return undefined;\n\t} );\n\t\n\t\n\t/**\n\t * Reload tables from the Ajax data source. Note that this function will\n\t * automatically re-draw the table when the remote data has been loaded.\n\t *\n\t * @param {boolean} [reset=true] Reset (default) or hold the current paging\n\t *   position. A full re-sort and re-filter is performed when this method is\n\t *   called, which is why the pagination reset is the default action.\n\t * @returns {DataTables.Api} this\n\t */\n\t_api_register( 'ajax.reload()', function ( callback, resetPaging ) {\n\t\treturn this.iterator( 'table', function (settings) {\n\t\t\t__reload( settings, resetPaging===false, callback );\n\t\t} );\n\t} );\n\t\n\t\n\t/**\n\t * Get the current Ajax URL. Note that this returns the URL from the first\n\t * table in the current context.\n\t *\n\t * @return {string} Current Ajax source URL\n\t *//**\n\t * Set the Ajax URL. Note that this will set the URL for all tables in the\n\t * current context.\n\t *\n\t * @param {string} url URL to set.\n\t * @returns {DataTables.Api} this\n\t */\n\t_api_register( 'ajax.url()', function ( url ) {\n\t\tvar ctx = this.context;\n\t\n\t\tif ( url === undefined ) {\n\t\t\t// get\n\t\t\tif ( ctx.length === 0 ) {\n\t\t\t\treturn undefined;\n\t\t\t}\n\t\t\tctx = ctx[0];\n\t\n\t\t\treturn ctx.ajax ?\n\t\t\t\t$.isPlainObject( ctx.ajax ) ?\n\t\t\t\t\tctx.ajax.url :\n\t\t\t\t\tctx.ajax :\n\t\t\t\tctx.sAjaxSource;\n\t\t}\n\t\n\t\t// set\n\t\treturn this.iterator( 'table', function ( settings ) {\n\t\t\tif ( $.isPlainObject( settings.ajax ) ) {\n\t\t\t\tsettings.ajax.url = url;\n\t\t\t}\n\t\t\telse {\n\t\t\t\tsettings.ajax = url;\n\t\t\t}\n\t\t\t// No need to consider sAjaxSource here since DataTables gives priority\n\t\t\t// to `ajax` over `sAjaxSource`. So setting `ajax` here, renders any\n\t\t\t// value of `sAjaxSource` redundant.\n\t\t} );\n\t} );\n\t\n\t\n\t/**\n\t * Load data from the newly set Ajax URL. Note that this method is only\n\t * available when `ajax.url()` is used to set a URL. Additionally, this method\n\t * has the same effect as calling `ajax.reload()` but is provided for\n\t * convenience when setting a new URL. Like `ajax.reload()` it will\n\t * automatically redraw the table once the remote data has been loaded.\n\t *\n\t * @returns {DataTables.Api} this\n\t */\n\t_api_register( 'ajax.url().load()', function ( callback, resetPaging ) {\n\t\t// Same as a reload, but makes sense to present it for easy access after a\n\t\t// url change\n\t\treturn this.iterator( 'table', function ( ctx ) {\n\t\t\t__reload( ctx, resetPaging===false, callback );\n\t\t} );\n\t} );\n\t\n\t\n\t\n\t\n\tvar _selector_run = function ( type, selector, selectFn, settings, opts )\n\t{\n\t\tvar\n\t\t\tout = [], res,\n\t\t\ta, i, ien, j, jen,\n\t\t\tselectorType = typeof selector;\n\t\n\t\t// Can't just check for isArray here, as an API or jQuery instance might be\n\t\t// given with their array like look\n\t\tif ( ! selector || selectorType === 'string' || selectorType === 'function' || selector.length === undefined ) {\n\t\t\tselector = [ selector ];\n\t\t}\n\t\n\t\tfor ( i=0, ien=selector.length ; i<ien ; i++ ) {\n\t\t\t// Only split on simple strings - complex expressions will be jQuery selectors\n\t\t\ta = selector[i] && selector[i].split && ! selector[i].match(/[\\[\\(:]/) ?\n\t\t\t\tselector[i].split(',') :\n\t\t\t\t[ selector[i] ];\n\t\n\t\t\tfor ( j=0, jen=a.length ; j<jen ; j++ ) {\n\t\t\t\tres = selectFn( typeof a[j] === 'string' ? $.trim(a[j]) : a[j] );\n\t\n\t\t\t\tif ( res && res.length ) {\n\t\t\t\t\tout = out.concat( res );\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\n\t\t// selector extensions\n\t\tvar ext = _ext.selector[ type ];\n\t\tif ( ext.length ) {\n\t\t\tfor ( i=0, ien=ext.length ; i<ien ; i++ ) {\n\t\t\t\tout = ext[i]( settings, opts, out );\n\t\t\t}\n\t\t}\n\t\n\t\treturn _unique( out );\n\t};\n\t\n\t\n\tvar _selector_opts = function ( opts )\n\t{\n\t\tif ( ! opts ) {\n\t\t\topts = {};\n\t\t}\n\t\n\t\t// Backwards compatibility for 1.9- which used the terminology filter rather\n\t\t// than search\n\t\tif ( opts.filter && opts.search === undefined ) {\n\t\t\topts.search = opts.filter;\n\t\t}\n\t\n\t\treturn $.extend( {\n\t\t\tsearch: 'none',\n\t\t\torder: 'current',\n\t\t\tpage: 'all'\n\t\t}, opts );\n\t};\n\t\n\t\n\tvar _selector_first = function ( inst )\n\t{\n\t\t// Reduce the API instance to the first item found\n\t\tfor ( var i=0, ien=inst.length ; i<ien ; i++ ) {\n\t\t\tif ( inst[i].length > 0 ) {\n\t\t\t\t// Assign the first element to the first item in the instance\n\t\t\t\t// and truncate the instance and context\n\t\t\t\tinst[0] = inst[i];\n\t\t\t\tinst[0].length = 1;\n\t\t\t\tinst.length = 1;\n\t\t\t\tinst.context = [ inst.context[i] ];\n\t\n\t\t\t\treturn inst;\n\t\t\t}\n\t\t}\n\t\n\t\t// Not found - return an empty instance\n\t\tinst.length = 0;\n\t\treturn inst;\n\t};\n\t\n\t\n\tvar _selector_row_indexes = function ( settings, opts )\n\t{\n\t\tvar\n\t\t\ti, ien, tmp, a=[],\n\t\t\tdisplayFiltered = settings.aiDisplay,\n\t\t\tdisplayMaster = settings.aiDisplayMaster;\n\t\n\t\tvar\n\t\t\tsearch = opts.search,  // none, applied, removed\n\t\t\torder  = opts.order,   // applied, current, index (original - compatibility with 1.9)\n\t\t\tpage   = opts.page;    // all, current\n\t\n\t\tif ( _fnDataSource( settings ) == 'ssp' ) {\n\t\t\t// In server-side processing mode, most options are irrelevant since\n\t\t\t// rows not shown don't exist and the index order is the applied order\n\t\t\t// Removed is a special case - for consistency just return an empty\n\t\t\t// array\n\t\t\treturn search === 'removed' ?\n\t\t\t\t[] :\n\t\t\t\t_range( 0, displayMaster.length );\n\t\t}\n\t\telse if ( page == 'current' ) {\n\t\t\t// Current page implies that order=current and fitler=applied, since it is\n\t\t\t// fairly senseless otherwise, regardless of what order and search actually\n\t\t\t// are\n\t\t\tfor ( i=settings._iDisplayStart, ien=settings.fnDisplayEnd() ; i<ien ; i++ ) {\n\t\t\t\ta.push( displayFiltered[i] );\n\t\t\t}\n\t\t}\n\t\telse if ( order == 'current' || order == 'applied' ) {\n\t\t\ta = search == 'none' ?\n\t\t\t\tdisplayMaster.slice() :                      // no search\n\t\t\t\tsearch == 'applied' ?\n\t\t\t\t\tdisplayFiltered.slice() :                // applied search\n\t\t\t\t\t$.map( displayMaster, function (el, i) { // removed search\n\t\t\t\t\t\treturn $.inArray( el, displayFiltered ) === -1 ? el : null;\n\t\t\t\t\t} );\n\t\t}\n\t\telse if ( order == 'index' || order == 'original' ) {\n\t\t\tfor ( i=0, ien=settings.aoData.length ; i<ien ; i++ ) {\n\t\t\t\tif ( search == 'none' ) {\n\t\t\t\t\ta.push( i );\n\t\t\t\t}\n\t\t\t\telse { // applied | removed\n\t\t\t\t\ttmp = $.inArray( i, displayFiltered );\n\t\n\t\t\t\t\tif ((tmp === -1 && search == 'removed') ||\n\t\t\t\t\t\t(tmp >= 0   && search == 'applied') )\n\t\t\t\t\t{\n\t\t\t\t\t\ta.push( i );\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\n\t\treturn a;\n\t};\n\t\n\t\n\t/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\n\t * Rows\n\t *\n\t * {}          - no selector - use all available rows\n\t * {integer}   - row aoData index\n\t * {node}      - TR node\n\t * {string}    - jQuery selector to apply to the TR elements\n\t * {array}     - jQuery array of nodes, or simply an array of TR nodes\n\t *\n\t */\n\t\n\t\n\tvar __row_selector = function ( settings, selector, opts )\n\t{\n\t\tvar rows;\n\t\tvar run = function ( sel ) {\n\t\t\tvar selInt = _intVal( sel );\n\t\t\tvar i, ien;\n\t\n\t\t\t// Short cut - selector is a number and no options provided (default is\n\t\t\t// all records, so no need to check if the index is in there, since it\n\t\t\t// must be - dev error if the index doesn't exist).\n\t\t\tif ( selInt !== null && ! opts ) {\n\t\t\t\treturn [ selInt ];\n\t\t\t}\n\t\n\t\t\tif ( ! rows ) {\n\t\t\t\trows = _selector_row_indexes( settings, opts );\n\t\t\t}\n\t\n\t\t\tif ( selInt !== null && $.inArray( selInt, rows ) !== -1 ) {\n\t\t\t\t// Selector - integer\n\t\t\t\treturn [ selInt ];\n\t\t\t}\n\t\t\telse if ( sel === null || sel === undefined || sel === '' ) {\n\t\t\t\t// Selector - none\n\t\t\t\treturn rows;\n\t\t\t}\n\t\n\t\t\t// Selector - function\n\t\t\tif ( typeof sel === 'function' ) {\n\t\t\t\treturn $.map( rows, function (idx) {\n\t\t\t\t\tvar row = settings.aoData[ idx ];\n\t\t\t\t\treturn sel( idx, row._aData, row.nTr ) ? idx : null;\n\t\t\t\t} );\n\t\t\t}\n\t\n\t\t\t// Get nodes in the order from the `rows` array with null values removed\n\t\t\tvar nodes = _removeEmpty(\n\t\t\t\t_pluck_order( settings.aoData, rows, 'nTr' )\n\t\t\t);\n\t\n\t\t\t// Selector - node\n\t\t\tif ( sel.nodeName ) {\n\t\t\t\tif ( sel._DT_RowIndex !== undefined ) {\n\t\t\t\t\treturn [ sel._DT_RowIndex ]; // Property added by DT for fast lookup\n\t\t\t\t}\n\t\t\t\telse if ( sel._DT_CellIndex ) {\n\t\t\t\t\treturn [ sel._DT_CellIndex.row ];\n\t\t\t\t}\n\t\t\t\telse {\n\t\t\t\t\tvar host = $(sel).closest('*[data-dt-row]');\n\t\t\t\t\treturn host.length ?\n\t\t\t\t\t\t[ host.data('dt-row') ] :\n\t\t\t\t\t\t[];\n\t\t\t\t}\n\t\t\t}\n\t\n\t\t\t// ID selector. Want to always be able to select rows by id, regardless\n\t\t\t// of if the tr element has been created or not, so can't rely upon\n\t\t\t// jQuery here - hence a custom implementation. This does not match\n\t\t\t// Sizzle's fast selector or HTML4 - in HTML5 the ID can be anything,\n\t\t\t// but to select it using a CSS selector engine (like Sizzle or\n\t\t\t// querySelect) it would need to need to be escaped for some characters.\n\t\t\t// DataTables simplifies this for row selectors since you can select\n\t\t\t// only a row. A # indicates an id any anything that follows is the id -\n\t\t\t// unescaped.\n\t\t\tif ( typeof sel === 'string' && sel.charAt(0) === '#' ) {\n\t\t\t\t// get row index from id\n\t\t\t\tvar rowObj = settings.aIds[ sel.replace( /^#/, '' ) ];\n\t\t\t\tif ( rowObj !== undefined ) {\n\t\t\t\t\treturn [ rowObj.idx ];\n\t\t\t\t}\n\t\n\t\t\t\t// need to fall through to jQuery in case there is DOM id that\n\t\t\t\t// matches\n\t\t\t}\n\t\n\t\t\t// Selector - jQuery selector string, array of nodes or jQuery object/\n\t\t\t// As jQuery's .filter() allows jQuery objects to be passed in filter,\n\t\t\t// it also allows arrays, so this will cope with all three options\n\t\t\treturn $(nodes)\n\t\t\t\t.filter( sel )\n\t\t\t\t.map( function () {\n\t\t\t\t\treturn this._DT_RowIndex;\n\t\t\t\t} )\n\t\t\t\t.toArray();\n\t\t};\n\t\n\t\treturn _selector_run( 'row', selector, run, settings, opts );\n\t};\n\t\n\t\n\t_api_register( 'rows()', function ( selector, opts ) {\n\t\t// argument shifting\n\t\tif ( selector === undefined ) {\n\t\t\tselector = '';\n\t\t}\n\t\telse if ( $.isPlainObject( selector ) ) {\n\t\t\topts = selector;\n\t\t\tselector = '';\n\t\t}\n\t\n\t\topts = _selector_opts( opts );\n\t\n\t\tvar inst = this.iterator( 'table', function ( settings ) {\n\t\t\treturn __row_selector( settings, selector, opts );\n\t\t}, 1 );\n\t\n\t\t// Want argument shifting here and in __row_selector?\n\t\tinst.selector.rows = selector;\n\t\tinst.selector.opts = opts;\n\t\n\t\treturn inst;\n\t} );\n\t\n\t_api_register( 'rows().nodes()', function () {\n\t\treturn this.iterator( 'row', function ( settings, row ) {\n\t\t\treturn settings.aoData[ row ].nTr || undefined;\n\t\t}, 1 );\n\t} );\n\t\n\t_api_register( 'rows().data()', function () {\n\t\treturn this.iterator( true, 'rows', function ( settings, rows ) {\n\t\t\treturn _pluck_order( settings.aoData, rows, '_aData' );\n\t\t}, 1 );\n\t} );\n\t\n\t_api_registerPlural( 'rows().cache()', 'row().cache()', function ( type ) {\n\t\treturn this.iterator( 'row', function ( settings, row ) {\n\t\t\tvar r = settings.aoData[ row ];\n\t\t\treturn type === 'search' ? r._aFilterData : r._aSortData;\n\t\t}, 1 );\n\t} );\n\t\n\t_api_registerPlural( 'rows().invalidate()', 'row().invalidate()', function ( src ) {\n\t\treturn this.iterator( 'row', function ( settings, row ) {\n\t\t\t_fnInvalidate( settings, row, src );\n\t\t} );\n\t} );\n\t\n\t_api_registerPlural( 'rows().indexes()', 'row().index()', function () {\n\t\treturn this.iterator( 'row', function ( settings, row ) {\n\t\t\treturn row;\n\t\t}, 1 );\n\t} );\n\t\n\t_api_registerPlural( 'rows().ids()', 'row().id()', function ( hash ) {\n\t\tvar a = [];\n\t\tvar context = this.context;\n\t\n\t\t// `iterator` will drop undefined values, but in this case we want them\n\t\tfor ( var i=0, ien=context.length ; i<ien ; i++ ) {\n\t\t\tfor ( var j=0, jen=this[i].length ; j<jen ; j++ ) {\n\t\t\t\tvar id = context[i].rowIdFn( context[i].aoData[ this[i][j] ]._aData );\n\t\t\t\ta.push( (hash === true ? '#' : '' )+ id );\n\t\t\t}\n\t\t}\n\t\n\t\treturn new _Api( context, a );\n\t} );\n\t\n\t_api_registerPlural( 'rows().remove()', 'row().remove()', function () {\n\t\tvar that = this;\n\t\n\t\tthis.iterator( 'row', function ( settings, row, thatIdx ) {\n\t\t\tvar data = settings.aoData;\n\t\t\tvar rowData = data[ row ];\n\t\t\tvar i, ien, j, jen;\n\t\t\tvar loopRow, loopCells;\n\t\n\t\t\tdata.splice( row, 1 );\n\t\n\t\t\t// Update the cached indexes\n\t\t\tfor ( i=0, ien=data.length ; i<ien ; i++ ) {\n\t\t\t\tloopRow = data[i];\n\t\t\t\tloopCells = loopRow.anCells;\n\t\n\t\t\t\t// Rows\n\t\t\t\tif ( loopRow.nTr !== null ) {\n\t\t\t\t\tloopRow.nTr._DT_RowIndex = i;\n\t\t\t\t}\n\t\n\t\t\t\t// Cells\n\t\t\t\tif ( loopCells !== null ) {\n\t\t\t\t\tfor ( j=0, jen=loopCells.length ; j<jen ; j++ ) {\n\t\t\t\t\t\tloopCells[j]._DT_CellIndex.row = i;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\n\t\t\t// Delete from the display arrays\n\t\t\t_fnDeleteIndex( settings.aiDisplayMaster, row );\n\t\t\t_fnDeleteIndex( settings.aiDisplay, row );\n\t\t\t_fnDeleteIndex( that[ thatIdx ], row, false ); // maintain local indexes\n\t\n\t\t\t// Check for an 'overflow' they case for displaying the table\n\t\t\t_fnLengthOverflow( settings );\n\t\n\t\t\t// Remove the row's ID reference if there is one\n\t\t\tvar id = settings.rowIdFn( rowData._aData );\n\t\t\tif ( id !== undefined ) {\n\t\t\t\tdelete settings.aIds[ id ];\n\t\t\t}\n\t\t} );\n\t\n\t\tthis.iterator( 'table', function ( settings ) {\n\t\t\tfor ( var i=0, ien=settings.aoData.length ; i<ien ; i++ ) {\n\t\t\t\tsettings.aoData[i].idx = i;\n\t\t\t}\n\t\t} );\n\t\n\t\treturn this;\n\t} );\n\t\n\t\n\t_api_register( 'rows.add()', function ( rows ) {\n\t\tvar newRows = this.iterator( 'table', function ( settings ) {\n\t\t\t\tvar row, i, ien;\n\t\t\t\tvar out = [];\n\t\n\t\t\t\tfor ( i=0, ien=rows.length ; i<ien ; i++ ) {\n\t\t\t\t\trow = rows[i];\n\t\n\t\t\t\t\tif ( row.nodeName && row.nodeName.toUpperCase() === 'TR' ) {\n\t\t\t\t\t\tout.push( _fnAddTr( settings, row )[0] );\n\t\t\t\t\t}\n\t\t\t\t\telse {\n\t\t\t\t\t\tout.push( _fnAddData( settings, row ) );\n\t\t\t\t\t}\n\t\t\t\t}\n\t\n\t\t\t\treturn out;\n\t\t\t}, 1 );\n\t\n\t\t// Return an Api.rows() extended instance, so rows().nodes() etc can be used\n\t\tvar modRows = this.rows( -1 );\n\t\tmodRows.pop();\n\t\t$.merge( modRows, newRows );\n\t\n\t\treturn modRows;\n\t} );\n\t\n\t\n\t\n\t\n\t\n\t/**\n\t *\n\t */\n\t_api_register( 'row()', function ( selector, opts ) {\n\t\treturn _selector_first( this.rows( selector, opts ) );\n\t} );\n\t\n\t\n\t_api_register( 'row().data()', function ( data ) {\n\t\tvar ctx = this.context;\n\t\n\t\tif ( data === undefined ) {\n\t\t\t// Get\n\t\t\treturn ctx.length && this.length ?\n\t\t\t\tctx[0].aoData[ this[0] ]._aData :\n\t\t\t\tundefined;\n\t\t}\n\t\n\t\t// Set\n\t\tctx[0].aoData[ this[0] ]._aData = data;\n\t\n\t\t// Automatically invalidate\n\t\t_fnInvalidate( ctx[0], this[0], 'data' );\n\t\n\t\treturn this;\n\t} );\n\t\n\t\n\t_api_register( 'row().node()', function () {\n\t\tvar ctx = this.context;\n\t\n\t\treturn ctx.length && this.length ?\n\t\t\tctx[0].aoData[ this[0] ].nTr || null :\n\t\t\tnull;\n\t} );\n\t\n\t\n\t_api_register( 'row.add()', function ( row ) {\n\t\t// Allow a jQuery object to be passed in - only a single row is added from\n\t\t// it though - the first element in the set\n\t\tif ( row instanceof $ && row.length ) {\n\t\t\trow = row[0];\n\t\t}\n\t\n\t\tvar rows = this.iterator( 'table', function ( settings ) {\n\t\t\tif ( row.nodeName && row.nodeName.toUpperCase() === 'TR' ) {\n\t\t\t\treturn _fnAddTr( settings, row )[0];\n\t\t\t}\n\t\t\treturn _fnAddData( settings, row );\n\t\t} );\n\t\n\t\t// Return an Api.rows() extended instance, with the newly added row selected\n\t\treturn this.row( rows[0] );\n\t} );\n\t\n\t\n\t\n\tvar __details_add = function ( ctx, row, data, klass )\n\t{\n\t\t// Convert to array of TR elements\n\t\tvar rows = [];\n\t\tvar addRow = function ( r, k ) {\n\t\t\t// Recursion to allow for arrays of jQuery objects\n\t\t\tif ( $.isArray( r ) || r instanceof $ ) {\n\t\t\t\tfor ( var i=0, ien=r.length ; i<ien ; i++ ) {\n\t\t\t\t\taddRow( r[i], k );\n\t\t\t\t}\n\t\t\t\treturn;\n\t\t\t}\n\t\n\t\t\t// If we get a TR element, then just add it directly - up to the dev\n\t\t\t// to add the correct number of columns etc\n\t\t\tif ( r.nodeName && r.nodeName.toLowerCase() === 'tr' ) {\n\t\t\t\trows.push( r );\n\t\t\t}\n\t\t\telse {\n\t\t\t\t// Otherwise create a row with a wrapper\n\t\t\t\tvar created = $('<tr><td/></tr>').addClass( k );\n\t\t\t\t$('td', created)\n\t\t\t\t\t.addClass( k )\n\t\t\t\t\t.html( r )\n\t\t\t\t\t[0].colSpan = _fnVisbleColumns( ctx );\n\t\n\t\t\t\trows.push( created[0] );\n\t\t\t}\n\t\t};\n\t\n\t\taddRow( data, klass );\n\t\n\t\tif ( row._details ) {\n\t\t\trow._details.detach();\n\t\t}\n\t\n\t\trow._details = $(rows);\n\t\n\t\t// If the children were already shown, that state should be retained\n\t\tif ( row._detailsShow ) {\n\t\t\trow._details.insertAfter( row.nTr );\n\t\t}\n\t};\n\t\n\t\n\tvar __details_remove = function ( api, idx )\n\t{\n\t\tvar ctx = api.context;\n\t\n\t\tif ( ctx.length ) {\n\t\t\tvar row = ctx[0].aoData[ idx !== undefined ? idx : api[0] ];\n\t\n\t\t\tif ( row && row._details ) {\n\t\t\t\trow._details.remove();\n\t\n\t\t\t\trow._detailsShow = undefined;\n\t\t\t\trow._details = undefined;\n\t\t\t}\n\t\t}\n\t};\n\t\n\t\n\tvar __details_display = function ( api, show ) {\n\t\tvar ctx = api.context;\n\t\n\t\tif ( ctx.length && api.length ) {\n\t\t\tvar row = ctx[0].aoData[ api[0] ];\n\t\n\t\t\tif ( row._details ) {\n\t\t\t\trow._detailsShow = show;\n\t\n\t\t\t\tif ( show ) {\n\t\t\t\t\trow._details.insertAfter( row.nTr );\n\t\t\t\t}\n\t\t\t\telse {\n\t\t\t\t\trow._details.detach();\n\t\t\t\t}\n\t\n\t\t\t\t__details_events( ctx[0] );\n\t\t\t}\n\t\t}\n\t};\n\t\n\t\n\tvar __details_events = function ( settings )\n\t{\n\t\tvar api = new _Api( settings );\n\t\tvar namespace = '.dt.DT_details';\n\t\tvar drawEvent = 'draw'+namespace;\n\t\tvar colvisEvent = 'column-visibility'+namespace;\n\t\tvar destroyEvent = 'destroy'+namespace;\n\t\tvar data = settings.aoData;\n\t\n\t\tapi.off( drawEvent +' '+ colvisEvent +' '+ destroyEvent );\n\t\n\t\tif ( _pluck( data, '_details' ).length > 0 ) {\n\t\t\t// On each draw, insert the required elements into the document\n\t\t\tapi.on( drawEvent, function ( e, ctx ) {\n\t\t\t\tif ( settings !== ctx ) {\n\t\t\t\t\treturn;\n\t\t\t\t}\n\t\n\t\t\t\tapi.rows( {page:'current'} ).eq(0).each( function (idx) {\n\t\t\t\t\t// Internal data grab\n\t\t\t\t\tvar row = data[ idx ];\n\t\n\t\t\t\t\tif ( row._detailsShow ) {\n\t\t\t\t\t\trow._details.insertAfter( row.nTr );\n\t\t\t\t\t}\n\t\t\t\t} );\n\t\t\t} );\n\t\n\t\t\t// Column visibility change - update the colspan\n\t\t\tapi.on( colvisEvent, function ( e, ctx, idx, vis ) {\n\t\t\t\tif ( settings !== ctx ) {\n\t\t\t\t\treturn;\n\t\t\t\t}\n\t\n\t\t\t\t// Update the colspan for the details rows (note, only if it already has\n\t\t\t\t// a colspan)\n\t\t\t\tvar row, visible = _fnVisbleColumns( ctx );\n\t\n\t\t\t\tfor ( var i=0, ien=data.length ; i<ien ; i++ ) {\n\t\t\t\t\trow = data[i];\n\t\n\t\t\t\t\tif ( row._details ) {\n\t\t\t\t\t\trow._details.children('td[colspan]').attr('colspan', visible );\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t} );\n\t\n\t\t\t// Table destroyed - nuke any child rows\n\t\t\tapi.on( destroyEvent, function ( e, ctx ) {\n\t\t\t\tif ( settings !== ctx ) {\n\t\t\t\t\treturn;\n\t\t\t\t}\n\t\n\t\t\t\tfor ( var i=0, ien=data.length ; i<ien ; i++ ) {\n\t\t\t\t\tif ( data[i]._details ) {\n\t\t\t\t\t\t__details_remove( api, i );\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t} );\n\t\t}\n\t};\n\t\n\t// Strings for the method names to help minification\n\tvar _emp = '';\n\tvar _child_obj = _emp+'row().child';\n\tvar _child_mth = _child_obj+'()';\n\t\n\t// data can be:\n\t//  tr\n\t//  string\n\t//  jQuery or array of any of the above\n\t_api_register( _child_mth, function ( data, klass ) {\n\t\tvar ctx = this.context;\n\t\n\t\tif ( data === undefined ) {\n\t\t\t// get\n\t\t\treturn ctx.length && this.length ?\n\t\t\t\tctx[0].aoData[ this[0] ]._details :\n\t\t\t\tundefined;\n\t\t}\n\t\telse if ( data === true ) {\n\t\t\t// show\n\t\t\tthis.child.show();\n\t\t}\n\t\telse if ( data === false ) {\n\t\t\t// remove\n\t\t\t__details_remove( this );\n\t\t}\n\t\telse if ( ctx.length && this.length ) {\n\t\t\t// set\n\t\t\t__details_add( ctx[0], ctx[0].aoData[ this[0] ], data, klass );\n\t\t}\n\t\n\t\treturn this;\n\t} );\n\t\n\t\n\t_api_register( [\n\t\t_child_obj+'.show()',\n\t\t_child_mth+'.show()' // only when `child()` was called with parameters (without\n\t], function ( show ) {   // it returns an object and this method is not executed)\n\t\t__details_display( this, true );\n\t\treturn this;\n\t} );\n\t\n\t\n\t_api_register( [\n\t\t_child_obj+'.hide()',\n\t\t_child_mth+'.hide()' // only when `child()` was called with parameters (without\n\t], function () {         // it returns an object and this method is not executed)\n\t\t__details_display( this, false );\n\t\treturn this;\n\t} );\n\t\n\t\n\t_api_register( [\n\t\t_child_obj+'.remove()',\n\t\t_child_mth+'.remove()' // only when `child()` was called with parameters (without\n\t], function () {           // it returns an object and this method is not executed)\n\t\t__details_remove( this );\n\t\treturn this;\n\t} );\n\t\n\t\n\t_api_register( _child_obj+'.isShown()', function () {\n\t\tvar ctx = this.context;\n\t\n\t\tif ( ctx.length && this.length ) {\n\t\t\t// _detailsShown as false or undefined will fall through to return false\n\t\t\treturn ctx[0].aoData[ this[0] ]._detailsShow || false;\n\t\t}\n\t\treturn false;\n\t} );\n\t\n\t\n\t\n\t/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\n\t * Columns\n\t *\n\t * {integer}           - column index (>=0 count from left, <0 count from right)\n\t * \"{integer}:visIdx\"  - visible column index (i.e. translate to column index)  (>=0 count from left, <0 count from right)\n\t * \"{integer}:visible\" - alias for {integer}:visIdx  (>=0 count from left, <0 count from right)\n\t * \"{string}:name\"     - column name\n\t * \"{string}\"          - jQuery selector on column header nodes\n\t *\n\t */\n\t\n\t// can be an array of these items, comma separated list, or an array of comma\n\t// separated lists\n\t\n\tvar __re_column_selector = /^([^:]+):(name|visIdx|visible)$/;\n\t\n\t\n\t// r1 and r2 are redundant - but it means that the parameters match for the\n\t// iterator callback in columns().data()\n\tvar __columnData = function ( settings, column, r1, r2, rows ) {\n\t\tvar a = [];\n\t\tfor ( var row=0, ien=rows.length ; row<ien ; row++ ) {\n\t\t\ta.push( _fnGetCellData( settings, rows[row], column ) );\n\t\t}\n\t\treturn a;\n\t};\n\t\n\t\n\tvar __column_selector = function ( settings, selector, opts )\n\t{\n\t\tvar\n\t\t\tcolumns = settings.aoColumns,\n\t\t\tnames = _pluck( columns, 'sName' ),\n\t\t\tnodes = _pluck( columns, 'nTh' );\n\t\n\t\tvar run = function ( s ) {\n\t\t\tvar selInt = _intVal( s );\n\t\n\t\t\t// Selector - all\n\t\t\tif ( s === '' ) {\n\t\t\t\treturn _range( columns.length );\n\t\t\t}\n\t\n\t\t\t// Selector - index\n\t\t\tif ( selInt !== null ) {\n\t\t\t\treturn [ selInt >= 0 ?\n\t\t\t\t\tselInt : // Count from left\n\t\t\t\t\tcolumns.length + selInt // Count from right (+ because its a negative value)\n\t\t\t\t];\n\t\t\t}\n\t\n\t\t\t// Selector = function\n\t\t\tif ( typeof s === 'function' ) {\n\t\t\t\tvar rows = _selector_row_indexes( settings, opts );\n\t\n\t\t\t\treturn $.map( columns, function (col, idx) {\n\t\t\t\t\treturn s(\n\t\t\t\t\t\t\tidx,\n\t\t\t\t\t\t\t__columnData( settings, idx, 0, 0, rows ),\n\t\t\t\t\t\t\tnodes[ idx ]\n\t\t\t\t\t\t) ? idx : null;\n\t\t\t\t} );\n\t\t\t}\n\t\n\t\t\t// jQuery or string selector\n\t\t\tvar match = typeof s === 'string' ?\n\t\t\t\ts.match( __re_column_selector ) :\n\t\t\t\t'';\n\t\n\t\t\tif ( match ) {\n\t\t\t\tswitch( match[2] ) {\n\t\t\t\t\tcase 'visIdx':\n\t\t\t\t\tcase 'visible':\n\t\t\t\t\t\tvar idx = parseInt( match[1], 10 );\n\t\t\t\t\t\t// Visible index given, convert to column index\n\t\t\t\t\t\tif ( idx < 0 ) {\n\t\t\t\t\t\t\t// Counting from the right\n\t\t\t\t\t\t\tvar visColumns = $.map( columns, function (col,i) {\n\t\t\t\t\t\t\t\treturn col.bVisible ? i : null;\n\t\t\t\t\t\t\t} );\n\t\t\t\t\t\t\treturn [ visColumns[ visColumns.length + idx ] ];\n\t\t\t\t\t\t}\n\t\t\t\t\t\t// Counting from the left\n\t\t\t\t\t\treturn [ _fnVisibleToColumnIndex( settings, idx ) ];\n\t\n\t\t\t\t\tcase 'name':\n\t\t\t\t\t\t// match by name. `names` is column index complete and in order\n\t\t\t\t\t\treturn $.map( names, function (name, i) {\n\t\t\t\t\t\t\treturn name === match[1] ? i : null;\n\t\t\t\t\t\t} );\n\t\n\t\t\t\t\tdefault:\n\t\t\t\t\t\treturn [];\n\t\t\t\t}\n\t\t\t}\n\t\n\t\t\t// Cell in the table body\n\t\t\tif ( s.nodeName && s._DT_CellIndex ) {\n\t\t\t\treturn [ s._DT_CellIndex.column ];\n\t\t\t}\n\t\n\t\t\t// jQuery selector on the TH elements for the columns\n\t\t\tvar jqResult = $( nodes )\n\t\t\t\t.filter( s )\n\t\t\t\t.map( function () {\n\t\t\t\t\treturn $.inArray( this, nodes ); // `nodes` is column index complete and in order\n\t\t\t\t} )\n\t\t\t\t.toArray();\n\t\n\t\t\tif ( jqResult.length || ! s.nodeName ) {\n\t\t\t\treturn jqResult;\n\t\t\t}\n\t\n\t\t\t// Otherwise a node which might have a `dt-column` data attribute, or be\n\t\t\t// a child or such an element\n\t\t\tvar host = $(s).closest('*[data-dt-column]');\n\t\t\treturn host.length ?\n\t\t\t\t[ host.data('dt-column') ] :\n\t\t\t\t[];\n\t\t};\n\t\n\t\treturn _selector_run( 'column', selector, run, settings, opts );\n\t};\n\t\n\t\n\tvar __setColumnVis = function ( settings, column, vis ) {\n\t\tvar\n\t\t\tcols = settings.aoColumns,\n\t\t\tcol  = cols[ column ],\n\t\t\tdata = settings.aoData,\n\t\t\trow, cells, i, ien, tr;\n\t\n\t\t// Get\n\t\tif ( vis === undefined ) {\n\t\t\treturn col.bVisible;\n\t\t}\n\t\n\t\t// Set\n\t\t// No change\n\t\tif ( col.bVisible === vis ) {\n\t\t\treturn;\n\t\t}\n\t\n\t\tif ( vis ) {\n\t\t\t// Insert column\n\t\t\t// Need to decide if we should use appendChild or insertBefore\n\t\t\tvar insertBefore = $.inArray( true, _pluck(cols, 'bVisible'), column+1 );\n\t\n\t\t\tfor ( i=0, ien=data.length ; i<ien ; i++ ) {\n\t\t\t\ttr = data[i].nTr;\n\t\t\t\tcells = data[i].anCells;\n\t\n\t\t\t\tif ( tr ) {\n\t\t\t\t\t// insertBefore can act like appendChild if 2nd arg is null\n\t\t\t\t\ttr.insertBefore( cells[ column ], cells[ insertBefore ] || null );\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\telse {\n\t\t\t// Remove column\n\t\t\t$( _pluck( settings.aoData, 'anCells', column ) ).detach();\n\t\t}\n\t\n\t\t// Common actions\n\t\tcol.bVisible = vis;\n\t\t_fnDrawHead( settings, settings.aoHeader );\n\t\t_fnDrawHead( settings, settings.aoFooter );\n\t\n\t\t_fnSaveState( settings );\n\t};\n\t\n\t\n\t_api_register( 'columns()', function ( selector, opts ) {\n\t\t// argument shifting\n\t\tif ( selector === undefined ) {\n\t\t\tselector = '';\n\t\t}\n\t\telse if ( $.isPlainObject( selector ) ) {\n\t\t\topts = selector;\n\t\t\tselector = '';\n\t\t}\n\t\n\t\topts = _selector_opts( opts );\n\t\n\t\tvar inst = this.iterator( 'table', function ( settings ) {\n\t\t\treturn __column_selector( settings, selector, opts );\n\t\t}, 1 );\n\t\n\t\t// Want argument shifting here and in _row_selector?\n\t\tinst.selector.cols = selector;\n\t\tinst.selector.opts = opts;\n\t\n\t\treturn inst;\n\t} );\n\t\n\t_api_registerPlural( 'columns().header()', 'column().header()', function ( selector, opts ) {\n\t\treturn this.iterator( 'column', function ( settings, column ) {\n\t\t\treturn settings.aoColumns[column].nTh;\n\t\t}, 1 );\n\t} );\n\t\n\t_api_registerPlural( 'columns().footer()', 'column().footer()', function ( selector, opts ) {\n\t\treturn this.iterator( 'column', function ( settings, column ) {\n\t\t\treturn settings.aoColumns[column].nTf;\n\t\t}, 1 );\n\t} );\n\t\n\t_api_registerPlural( 'columns().data()', 'column().data()', function () {\n\t\treturn this.iterator( 'column-rows', __columnData, 1 );\n\t} );\n\t\n\t_api_registerPlural( 'columns().dataSrc()', 'column().dataSrc()', function () {\n\t\treturn this.iterator( 'column', function ( settings, column ) {\n\t\t\treturn settings.aoColumns[column].mData;\n\t\t}, 1 );\n\t} );\n\t\n\t_api_registerPlural( 'columns().cache()', 'column().cache()', function ( type ) {\n\t\treturn this.iterator( 'column-rows', function ( settings, column, i, j, rows ) {\n\t\t\treturn _pluck_order( settings.aoData, rows,\n\t\t\t\ttype === 'search' ? '_aFilterData' : '_aSortData', column\n\t\t\t);\n\t\t}, 1 );\n\t} );\n\t\n\t_api_registerPlural( 'columns().nodes()', 'column().nodes()', function () {\n\t\treturn this.iterator( 'column-rows', function ( settings, column, i, j, rows ) {\n\t\t\treturn _pluck_order( settings.aoData, rows, 'anCells', column ) ;\n\t\t}, 1 );\n\t} );\n\t\n\t_api_registerPlural( 'columns().visible()', 'column().visible()', function ( vis, calc ) {\n\t\tvar ret = this.iterator( 'column', function ( settings, column ) {\n\t\t\tif ( vis === undefined ) {\n\t\t\t\treturn settings.aoColumns[ column ].bVisible;\n\t\t\t} // else\n\t\t\t__setColumnVis( settings, column, vis );\n\t\t} );\n\t\n\t\t// Group the column visibility changes\n\t\tif ( vis !== undefined ) {\n\t\t\t// Second loop once the first is done for events\n\t\t\tthis.iterator( 'column', function ( settings, column ) {\n\t\t\t\t_fnCallbackFire( settings, null, 'column-visibility', [settings, column, vis, calc] );\n\t\t\t} );\n\t\n\t\t\tif ( calc === undefined || calc ) {\n\t\t\t\tthis.columns.adjust();\n\t\t\t}\n\t\t}\n\t\n\t\treturn ret;\n\t} );\n\t\n\t_api_registerPlural( 'columns().indexes()', 'column().index()', function ( type ) {\n\t\treturn this.iterator( 'column', function ( settings, column ) {\n\t\t\treturn type === 'visible' ?\n\t\t\t\t_fnColumnIndexToVisible( settings, column ) :\n\t\t\t\tcolumn;\n\t\t}, 1 );\n\t} );\n\t\n\t_api_register( 'columns.adjust()', function () {\n\t\treturn this.iterator( 'table', function ( settings ) {\n\t\t\t_fnAdjustColumnSizing( settings );\n\t\t}, 1 );\n\t} );\n\t\n\t_api_register( 'column.index()', function ( type, idx ) {\n\t\tif ( this.context.length !== 0 ) {\n\t\t\tvar ctx = this.context[0];\n\t\n\t\t\tif ( type === 'fromVisible' || type === 'toData' ) {\n\t\t\t\treturn _fnVisibleToColumnIndex( ctx, idx );\n\t\t\t}\n\t\t\telse if ( type === 'fromData' || type === 'toVisible' ) {\n\t\t\t\treturn _fnColumnIndexToVisible( ctx, idx );\n\t\t\t}\n\t\t}\n\t} );\n\t\n\t_api_register( 'column()', function ( selector, opts ) {\n\t\treturn _selector_first( this.columns( selector, opts ) );\n\t} );\n\t\n\t\n\t\n\tvar __cell_selector = function ( settings, selector, opts )\n\t{\n\t\tvar data = settings.aoData;\n\t\tvar rows = _selector_row_indexes( settings, opts );\n\t\tvar cells = _removeEmpty( _pluck_order( data, rows, 'anCells' ) );\n\t\tvar allCells = $( [].concat.apply([], cells) );\n\t\tvar row;\n\t\tvar columns = settings.aoColumns.length;\n\t\tvar a, i, ien, j, o, host;\n\t\n\t\tvar run = function ( s ) {\n\t\t\tvar fnSelector = typeof s === 'function';\n\t\n\t\t\tif ( s === null || s === undefined || fnSelector ) {\n\t\t\t\t// All cells and function selectors\n\t\t\t\ta = [];\n\t\n\t\t\t\tfor ( i=0, ien=rows.length ; i<ien ; i++ ) {\n\t\t\t\t\trow = rows[i];\n\t\n\t\t\t\t\tfor ( j=0 ; j<columns ; j++ ) {\n\t\t\t\t\t\to = {\n\t\t\t\t\t\t\trow: row,\n\t\t\t\t\t\t\tcolumn: j\n\t\t\t\t\t\t};\n\t\n\t\t\t\t\t\tif ( fnSelector ) {\n\t\t\t\t\t\t\t// Selector - function\n\t\t\t\t\t\t\thost = data[ row ];\n\t\n\t\t\t\t\t\t\tif ( s( o, _fnGetCellData(settings, row, j), host.anCells ? host.anCells[j] : null ) ) {\n\t\t\t\t\t\t\t\ta.push( o );\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t\telse {\n\t\t\t\t\t\t\t// Selector - all\n\t\t\t\t\t\t\ta.push( o );\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\n\t\t\t\treturn a;\n\t\t\t}\n\t\t\t\n\t\t\t// Selector - index\n\t\t\tif ( $.isPlainObject( s ) ) {\n\t\t\t\treturn [s];\n\t\t\t}\n\t\n\t\t\t// Selector - jQuery filtered cells\n\t\t\tvar jqResult = allCells\n\t\t\t\t.filter( s )\n\t\t\t\t.map( function (i, el) {\n\t\t\t\t\treturn { // use a new object, in case someone changes the values\n\t\t\t\t\t\trow:    el._DT_CellIndex.row,\n\t\t\t\t\t\tcolumn: el._DT_CellIndex.column\n\t \t\t\t\t};\n\t\t\t\t} )\n\t\t\t\t.toArray();\n\t\n\t\t\tif ( jqResult.length || ! s.nodeName ) {\n\t\t\t\treturn jqResult;\n\t\t\t}\n\t\n\t\t\t// Otherwise the selector is a node, and there is one last option - the\n\t\t\t// element might be a child of an element which has dt-row and dt-column\n\t\t\t// data attributes\n\t\t\thost = $(s).closest('*[data-dt-row]');\n\t\t\treturn host.length ?\n\t\t\t\t[ {\n\t\t\t\t\trow: host.data('dt-row'),\n\t\t\t\t\tcolumn: host.data('dt-column')\n\t\t\t\t} ] :\n\t\t\t\t[];\n\t\t};\n\t\n\t\treturn _selector_run( 'cell', selector, run, settings, opts );\n\t};\n\t\n\t\n\t\n\t\n\t_api_register( 'cells()', function ( rowSelector, columnSelector, opts ) {\n\t\t// Argument shifting\n\t\tif ( $.isPlainObject( rowSelector ) ) {\n\t\t\t// Indexes\n\t\t\tif ( rowSelector.row === undefined ) {\n\t\t\t\t// Selector options in first parameter\n\t\t\t\topts = rowSelector;\n\t\t\t\trowSelector = null;\n\t\t\t}\n\t\t\telse {\n\t\t\t\t// Cell index objects in first parameter\n\t\t\t\topts = columnSelector;\n\t\t\t\tcolumnSelector = null;\n\t\t\t}\n\t\t}\n\t\tif ( $.isPlainObject( columnSelector ) ) {\n\t\t\topts = columnSelector;\n\t\t\tcolumnSelector = null;\n\t\t}\n\t\n\t\t// Cell selector\n\t\tif ( columnSelector === null || columnSelector === undefined ) {\n\t\t\treturn this.iterator( 'table', function ( settings ) {\n\t\t\t\treturn __cell_selector( settings, rowSelector, _selector_opts( opts ) );\n\t\t\t} );\n\t\t}\n\t\n\t\t// Row + column selector\n\t\tvar columns = this.columns( columnSelector, opts );\n\t\tvar rows = this.rows( rowSelector, opts );\n\t\tvar a, i, ien, j, jen;\n\t\n\t\tvar cells = this.iterator( 'table', function ( settings, idx ) {\n\t\t\ta = [];\n\t\n\t\t\tfor ( i=0, ien=rows[idx].length ; i<ien ; i++ ) {\n\t\t\t\tfor ( j=0, jen=columns[idx].length ; j<jen ; j++ ) {\n\t\t\t\t\ta.push( {\n\t\t\t\t\t\trow:    rows[idx][i],\n\t\t\t\t\t\tcolumn: columns[idx][j]\n\t\t\t\t\t} );\n\t\t\t\t}\n\t\t\t}\n\t\n\t\t\treturn a;\n\t\t}, 1 );\n\t\n\t\t$.extend( cells.selector, {\n\t\t\tcols: columnSelector,\n\t\t\trows: rowSelector,\n\t\t\topts: opts\n\t\t} );\n\t\n\t\treturn cells;\n\t} );\n\t\n\t\n\t_api_registerPlural( 'cells().nodes()', 'cell().node()', function () {\n\t\treturn this.iterator( 'cell', function ( settings, row, column ) {\n\t\t\tvar data = settings.aoData[ row ];\n\t\n\t\t\treturn data && data.anCells ?\n\t\t\t\tdata.anCells[ column ] :\n\t\t\t\tundefined;\n\t\t}, 1 );\n\t} );\n\t\n\t\n\t_api_register( 'cells().data()', function () {\n\t\treturn this.iterator( 'cell', function ( settings, row, column ) {\n\t\t\treturn _fnGetCellData( settings, row, column );\n\t\t}, 1 );\n\t} );\n\t\n\t\n\t_api_registerPlural( 'cells().cache()', 'cell().cache()', function ( type ) {\n\t\ttype = type === 'search' ? '_aFilterData' : '_aSortData';\n\t\n\t\treturn this.iterator( 'cell', function ( settings, row, column ) {\n\t\t\treturn settings.aoData[ row ][ type ][ column ];\n\t\t}, 1 );\n\t} );\n\t\n\t\n\t_api_registerPlural( 'cells().render()', 'cell().render()', function ( type ) {\n\t\treturn this.iterator( 'cell', function ( settings, row, column ) {\n\t\t\treturn _fnGetCellData( settings, row, column, type );\n\t\t}, 1 );\n\t} );\n\t\n\t\n\t_api_registerPlural( 'cells().indexes()', 'cell().index()', function () {\n\t\treturn this.iterator( 'cell', function ( settings, row, column ) {\n\t\t\treturn {\n\t\t\t\trow: row,\n\t\t\t\tcolumn: column,\n\t\t\t\tcolumnVisible: _fnColumnIndexToVisible( settings, column )\n\t\t\t};\n\t\t}, 1 );\n\t} );\n\t\n\t\n\t_api_registerPlural( 'cells().invalidate()', 'cell().invalidate()', function ( src ) {\n\t\treturn this.iterator( 'cell', function ( settings, row, column ) {\n\t\t\t_fnInvalidate( settings, row, src, column );\n\t\t} );\n\t} );\n\t\n\t\n\t\n\t_api_register( 'cell()', function ( rowSelector, columnSelector, opts ) {\n\t\treturn _selector_first( this.cells( rowSelector, columnSelector, opts ) );\n\t} );\n\t\n\t\n\t_api_register( 'cell().data()', function ( data ) {\n\t\tvar ctx = this.context;\n\t\tvar cell = this[0];\n\t\n\t\tif ( data === undefined ) {\n\t\t\t// Get\n\t\t\treturn ctx.length && cell.length ?\n\t\t\t\t_fnGetCellData( ctx[0], cell[0].row, cell[0].column ) :\n\t\t\t\tundefined;\n\t\t}\n\t\n\t\t// Set\n\t\t_fnSetCellData( ctx[0], cell[0].row, cell[0].column, data );\n\t\t_fnInvalidate( ctx[0], cell[0].row, 'data', cell[0].column );\n\t\n\t\treturn this;\n\t} );\n\t\n\t\n\t\n\t/**\n\t * Get current ordering (sorting) that has been applied to the table.\n\t *\n\t * @returns {array} 2D array containing the sorting information for the first\n\t *   table in the current context. Each element in the parent array represents\n\t *   a column being sorted upon (i.e. multi-sorting with two columns would have\n\t *   2 inner arrays). The inner arrays may have 2 or 3 elements. The first is\n\t *   the column index that the sorting condition applies to, the second is the\n\t *   direction of the sort (`desc` or `asc`) and, optionally, the third is the\n\t *   index of the sorting order from the `column.sorting` initialisation array.\n\t *//**\n\t * Set the ordering for the table.\n\t *\n\t * @param {integer} order Column index to sort upon.\n\t * @param {string} direction Direction of the sort to be applied (`asc` or `desc`)\n\t * @returns {DataTables.Api} this\n\t *//**\n\t * Set the ordering for the table.\n\t *\n\t * @param {array} order 1D array of sorting information to be applied.\n\t * @param {array} [...] Optional additional sorting conditions\n\t * @returns {DataTables.Api} this\n\t *//**\n\t * Set the ordering for the table.\n\t *\n\t * @param {array} order 2D array of sorting information to be applied.\n\t * @returns {DataTables.Api} this\n\t */\n\t_api_register( 'order()', function ( order, dir ) {\n\t\tvar ctx = this.context;\n\t\n\t\tif ( order === undefined ) {\n\t\t\t// get\n\t\t\treturn ctx.length !== 0 ?\n\t\t\t\tctx[0].aaSorting :\n\t\t\t\tundefined;\n\t\t}\n\t\n\t\t// set\n\t\tif ( typeof order === 'number' ) {\n\t\t\t// Simple column / direction passed in\n\t\t\torder = [ [ order, dir ] ];\n\t\t}\n\t\telse if ( order.length && ! $.isArray( order[0] ) ) {\n\t\t\t// Arguments passed in (list of 1D arrays)\n\t\t\torder = Array.prototype.slice.call( arguments );\n\t\t}\n\t\t// otherwise a 2D array was passed in\n\t\n\t\treturn this.iterator( 'table', function ( settings ) {\n\t\t\tsettings.aaSorting = order.slice();\n\t\t} );\n\t} );\n\t\n\t\n\t/**\n\t * Attach a sort listener to an element for a given column\n\t *\n\t * @param {node|jQuery|string} node Identifier for the element(s) to attach the\n\t *   listener to. This can take the form of a single DOM node, a jQuery\n\t *   collection of nodes or a jQuery selector which will identify the node(s).\n\t * @param {integer} column the column that a click on this node will sort on\n\t * @param {function} [callback] callback function when sort is run\n\t * @returns {DataTables.Api} this\n\t */\n\t_api_register( 'order.listener()', function ( node, column, callback ) {\n\t\treturn this.iterator( 'table', function ( settings ) {\n\t\t\t_fnSortAttachListener( settings, node, column, callback );\n\t\t} );\n\t} );\n\t\n\t\n\t_api_register( 'order.fixed()', function ( set ) {\n\t\tif ( ! set ) {\n\t\t\tvar ctx = this.context;\n\t\t\tvar fixed = ctx.length ?\n\t\t\t\tctx[0].aaSortingFixed :\n\t\t\t\tundefined;\n\t\n\t\t\treturn $.isArray( fixed ) ?\n\t\t\t\t{ pre: fixed } :\n\t\t\t\tfixed;\n\t\t}\n\t\n\t\treturn this.iterator( 'table', function ( settings ) {\n\t\t\tsettings.aaSortingFixed = $.extend( true, {}, set );\n\t\t} );\n\t} );\n\t\n\t\n\t// Order by the selected column(s)\n\t_api_register( [\n\t\t'columns().order()',\n\t\t'column().order()'\n\t], function ( dir ) {\n\t\tvar that = this;\n\t\n\t\treturn this.iterator( 'table', function ( settings, i ) {\n\t\t\tvar sort = [];\n\t\n\t\t\t$.each( that[i], function (j, col) {\n\t\t\t\tsort.push( [ col, dir ] );\n\t\t\t} );\n\t\n\t\t\tsettings.aaSorting = sort;\n\t\t} );\n\t} );\n\t\n\t\n\t\n\t_api_register( 'search()', function ( input, regex, smart, caseInsen ) {\n\t\tvar ctx = this.context;\n\t\n\t\tif ( input === undefined ) {\n\t\t\t// get\n\t\t\treturn ctx.length !== 0 ?\n\t\t\t\tctx[0].oPreviousSearch.sSearch :\n\t\t\t\tundefined;\n\t\t}\n\t\n\t\t// set\n\t\treturn this.iterator( 'table', function ( settings ) {\n\t\t\tif ( ! settings.oFeatures.bFilter ) {\n\t\t\t\treturn;\n\t\t\t}\n\t\n\t\t\t_fnFilterComplete( settings, $.extend( {}, settings.oPreviousSearch, {\n\t\t\t\t\"sSearch\": input+\"\",\n\t\t\t\t\"bRegex\":  regex === null ? false : regex,\n\t\t\t\t\"bSmart\":  smart === null ? true  : smart,\n\t\t\t\t\"bCaseInsensitive\": caseInsen === null ? true : caseInsen\n\t\t\t} ), 1 );\n\t\t} );\n\t} );\n\t\n\t\n\t_api_registerPlural(\n\t\t'columns().search()',\n\t\t'column().search()',\n\t\tfunction ( input, regex, smart, caseInsen ) {\n\t\t\treturn this.iterator( 'column', function ( settings, column ) {\n\t\t\t\tvar preSearch = settings.aoPreSearchCols;\n\t\n\t\t\t\tif ( input === undefined ) {\n\t\t\t\t\t// get\n\t\t\t\t\treturn preSearch[ column ].sSearch;\n\t\t\t\t}\n\t\n\t\t\t\t// set\n\t\t\t\tif ( ! settings.oFeatures.bFilter ) {\n\t\t\t\t\treturn;\n\t\t\t\t}\n\t\n\t\t\t\t$.extend( preSearch[ column ], {\n\t\t\t\t\t\"sSearch\": input+\"\",\n\t\t\t\t\t\"bRegex\":  regex === null ? false : regex,\n\t\t\t\t\t\"bSmart\":  smart === null ? true  : smart,\n\t\t\t\t\t\"bCaseInsensitive\": caseInsen === null ? true : caseInsen\n\t\t\t\t} );\n\t\n\t\t\t\t_fnFilterComplete( settings, settings.oPreviousSearch, 1 );\n\t\t\t} );\n\t\t}\n\t);\n\t\n\t/*\n\t * State API methods\n\t */\n\t\n\t_api_register( 'state()', function () {\n\t\treturn this.context.length ?\n\t\t\tthis.context[0].oSavedState :\n\t\t\tnull;\n\t} );\n\t\n\t\n\t_api_register( 'state.clear()', function () {\n\t\treturn this.iterator( 'table', function ( settings ) {\n\t\t\t// Save an empty object\n\t\t\tsettings.fnStateSaveCallback.call( settings.oInstance, settings, {} );\n\t\t} );\n\t} );\n\t\n\t\n\t_api_register( 'state.loaded()', function () {\n\t\treturn this.context.length ?\n\t\t\tthis.context[0].oLoadedState :\n\t\t\tnull;\n\t} );\n\t\n\t\n\t_api_register( 'state.save()', function () {\n\t\treturn this.iterator( 'table', function ( settings ) {\n\t\t\t_fnSaveState( settings );\n\t\t} );\n\t} );\n\t\n\t\n\t\n\t/**\n\t * Provide a common method for plug-ins to check the version of DataTables being\n\t * used, in order to ensure compatibility.\n\t *\n\t *  @param {string} version Version string to check for, in the format \"X.Y.Z\".\n\t *    Note that the formats \"X\" and \"X.Y\" are also acceptable.\n\t *  @returns {boolean} true if this version of DataTables is greater or equal to\n\t *    the required version, or false if this version of DataTales is not\n\t *    suitable\n\t *  @static\n\t *  @dtopt API-Static\n\t *\n\t *  @example\n\t *    alert( $.fn.dataTable.versionCheck( '1.9.0' ) );\n\t */\n\tDataTable.versionCheck = DataTable.fnVersionCheck = function( version )\n\t{\n\t\tvar aThis = DataTable.version.split('.');\n\t\tvar aThat = version.split('.');\n\t\tvar iThis, iThat;\n\t\n\t\tfor ( var i=0, iLen=aThat.length ; i<iLen ; i++ ) {\n\t\t\tiThis = parseInt( aThis[i], 10 ) || 0;\n\t\t\tiThat = parseInt( aThat[i], 10 ) || 0;\n\t\n\t\t\t// Parts are the same, keep comparing\n\t\t\tif (iThis === iThat) {\n\t\t\t\tcontinue;\n\t\t\t}\n\t\n\t\t\t// Parts are different, return immediately\n\t\t\treturn iThis > iThat;\n\t\t}\n\t\n\t\treturn true;\n\t};\n\t\n\t\n\t/**\n\t * Check if a `<table>` node is a DataTable table already or not.\n\t *\n\t *  @param {node|jquery|string} table Table node, jQuery object or jQuery\n\t *      selector for the table to test. Note that if more than more than one\n\t *      table is passed on, only the first will be checked\n\t *  @returns {boolean} true the table given is a DataTable, or false otherwise\n\t *  @static\n\t *  @dtopt API-Static\n\t *\n\t *  @example\n\t *    if ( ! $.fn.DataTable.isDataTable( '#example' ) ) {\n\t *      $('#example').dataTable();\n\t *    }\n\t */\n\tDataTable.isDataTable = DataTable.fnIsDataTable = function ( table )\n\t{\n\t\tvar t = $(table).get(0);\n\t\tvar is = false;\n\t\n\t\tif ( table instanceof DataTable.Api ) {\n\t\t\treturn true;\n\t\t}\n\t\n\t\t$.each( DataTable.settings, function (i, o) {\n\t\t\tvar head = o.nScrollHead ? $('table', o.nScrollHead)[0] : null;\n\t\t\tvar foot = o.nScrollFoot ? $('table', o.nScrollFoot)[0] : null;\n\t\n\t\t\tif ( o.nTable === t || head === t || foot === t ) {\n\t\t\t\tis = true;\n\t\t\t}\n\t\t} );\n\t\n\t\treturn is;\n\t};\n\t\n\t\n\t/**\n\t * Get all DataTable tables that have been initialised - optionally you can\n\t * select to get only currently visible tables.\n\t *\n\t *  @param {boolean} [visible=false] Flag to indicate if you want all (default)\n\t *    or visible tables only.\n\t *  @returns {array} Array of `table` nodes (not DataTable instances) which are\n\t *    DataTables\n\t *  @static\n\t *  @dtopt API-Static\n\t *\n\t *  @example\n\t *    $.each( $.fn.dataTable.tables(true), function () {\n\t *      $(table).DataTable().columns.adjust();\n\t *    } );\n\t */\n\tDataTable.tables = DataTable.fnTables = function ( visible )\n\t{\n\t\tvar api = false;\n\t\n\t\tif ( $.isPlainObject( visible ) ) {\n\t\t\tapi = visible.api;\n\t\t\tvisible = visible.visible;\n\t\t}\n\t\n\t\tvar a = $.map( DataTable.settings, function (o) {\n\t\t\tif ( !visible || (visible && $(o.nTable).is(':visible')) ) {\n\t\t\t\treturn o.nTable;\n\t\t\t}\n\t\t} );\n\t\n\t\treturn api ?\n\t\t\tnew _Api( a ) :\n\t\t\ta;\n\t};\n\t\n\t\n\t/**\n\t * Convert from camel case parameters to Hungarian notation. This is made public\n\t * for the extensions to provide the same ability as DataTables core to accept\n\t * either the 1.9 style Hungarian notation, or the 1.10+ style camelCase\n\t * parameters.\n\t *\n\t *  @param {object} src The model object which holds all parameters that can be\n\t *    mapped.\n\t *  @param {object} user The object to convert from camel case to Hungarian.\n\t *  @param {boolean} force When set to `true`, properties which already have a\n\t *    Hungarian value in the `user` object will be overwritten. Otherwise they\n\t *    won't be.\n\t */\n\tDataTable.camelToHungarian = _fnCamelToHungarian;\n\t\n\t\n\t\n\t/**\n\t *\n\t */\n\t_api_register( '$()', function ( selector, opts ) {\n\t\tvar\n\t\t\trows   = this.rows( opts ).nodes(), // Get all rows\n\t\t\tjqRows = $(rows);\n\t\n\t\treturn $( [].concat(\n\t\t\tjqRows.filter( selector ).toArray(),\n\t\t\tjqRows.find( selector ).toArray()\n\t\t) );\n\t} );\n\t\n\t\n\t// jQuery functions to operate on the tables\n\t$.each( [ 'on', 'one', 'off' ], function (i, key) {\n\t\t_api_register( key+'()', function ( /* event, handler */ ) {\n\t\t\tvar args = Array.prototype.slice.call(arguments);\n\t\n\t\t\t// Add the `dt` namespace automatically if it isn't already present\n\t\t\targs[0] = $.map( args[0].split( /\\s/ ), function ( e ) {\n\t\t\t\treturn ! e.match(/\\.dt\\b/) ?\n\t\t\t\t\te+'.dt' :\n\t\t\t\t\te;\n\t\t\t\t} ).join( ' ' );\n\t\n\t\t\tvar inst = $( this.tables().nodes() );\n\t\t\tinst[key].apply( inst, args );\n\t\t\treturn this;\n\t\t} );\n\t} );\n\t\n\t\n\t_api_register( 'clear()', function () {\n\t\treturn this.iterator( 'table', function ( settings ) {\n\t\t\t_fnClearTable( settings );\n\t\t} );\n\t} );\n\t\n\t\n\t_api_register( 'settings()', function () {\n\t\treturn new _Api( this.context, this.context );\n\t} );\n\t\n\t\n\t_api_register( 'init()', function () {\n\t\tvar ctx = this.context;\n\t\treturn ctx.length ? ctx[0].oInit : null;\n\t} );\n\t\n\t\n\t_api_register( 'data()', function () {\n\t\treturn this.iterator( 'table', function ( settings ) {\n\t\t\treturn _pluck( settings.aoData, '_aData' );\n\t\t} ).flatten();\n\t} );\n\t\n\t\n\t_api_register( 'destroy()', function ( remove ) {\n\t\tremove = remove || false;\n\t\n\t\treturn this.iterator( 'table', function ( settings ) {\n\t\t\tvar orig      = settings.nTableWrapper.parentNode;\n\t\t\tvar classes   = settings.oClasses;\n\t\t\tvar table     = settings.nTable;\n\t\t\tvar tbody     = settings.nTBody;\n\t\t\tvar thead     = settings.nTHead;\n\t\t\tvar tfoot     = settings.nTFoot;\n\t\t\tvar jqTable   = $(table);\n\t\t\tvar jqTbody   = $(tbody);\n\t\t\tvar jqWrapper = $(settings.nTableWrapper);\n\t\t\tvar rows      = $.map( settings.aoData, function (r) { return r.nTr; } );\n\t\t\tvar i, ien;\n\t\n\t\t\t// Flag to note that the table is currently being destroyed - no action\n\t\t\t// should be taken\n\t\t\tsettings.bDestroying = true;\n\t\n\t\t\t// Fire off the destroy callbacks for plug-ins etc\n\t\t\t_fnCallbackFire( settings, \"aoDestroyCallback\", \"destroy\", [settings] );\n\t\n\t\t\t// If not being removed from the document, make all columns visible\n\t\t\tif ( ! remove ) {\n\t\t\t\tnew _Api( settings ).columns().visible( true );\n\t\t\t}\n\t\n\t\t\t// Blitz all `DT` namespaced events (these are internal events, the\n\t\t\t// lowercase, `dt` events are user subscribed and they are responsible\n\t\t\t// for removing them\n\t\t\tjqWrapper.off('.DT').find(':not(tbody *)').off('.DT');\n\t\t\t$(window).off('.DT-'+settings.sInstance);\n\t\n\t\t\t// When scrolling we had to break the table up - restore it\n\t\t\tif ( table != thead.parentNode ) {\n\t\t\t\tjqTable.children('thead').detach();\n\t\t\t\tjqTable.append( thead );\n\t\t\t}\n\t\n\t\t\tif ( tfoot && table != tfoot.parentNode ) {\n\t\t\t\tjqTable.children('tfoot').detach();\n\t\t\t\tjqTable.append( tfoot );\n\t\t\t}\n\t\n\t\t\tsettings.aaSorting = [];\n\t\t\tsettings.aaSortingFixed = [];\n\t\t\t_fnSortingClasses( settings );\n\t\n\t\t\t$( rows ).removeClass( settings.asStripeClasses.join(' ') );\n\t\n\t\t\t$('th, td', thead).removeClass( classes.sSortable+' '+\n\t\t\t\tclasses.sSortableAsc+' '+classes.sSortableDesc+' '+classes.sSortableNone\n\t\t\t);\n\t\n\t\t\tif ( settings.bJUI ) {\n\t\t\t\t$('th span.'+classes.sSortIcon+ ', td span.'+classes.sSortIcon, thead).detach();\n\t\t\t\t$('th, td', thead).each( function () {\n\t\t\t\t\tvar wrapper = $('div.'+classes.sSortJUIWrapper, this);\n\t\t\t\t\t$(this).append( wrapper.contents() );\n\t\t\t\t\twrapper.detach();\n\t\t\t\t} );\n\t\t\t}\n\t\n\t\t\t// Add the TR elements back into the table in their original order\n\t\t\tjqTbody.children().detach();\n\t\t\tjqTbody.append( rows );\n\t\n\t\t\t// Remove the DataTables generated nodes, events and classes\n\t\t\tvar removedMethod = remove ? 'remove' : 'detach';\n\t\t\tjqTable[ removedMethod ]();\n\t\t\tjqWrapper[ removedMethod ]();\n\t\n\t\t\t// If we need to reattach the table to the document\n\t\t\tif ( ! remove && orig ) {\n\t\t\t\t// insertBefore acts like appendChild if !arg[1]\n\t\t\t\torig.insertBefore( table, settings.nTableReinsertBefore );\n\t\n\t\t\t\t// Restore the width of the original table - was read from the style property,\n\t\t\t\t// so we can restore directly to that\n\t\t\t\tjqTable\n\t\t\t\t\t.css( 'width', settings.sDestroyWidth )\n\t\t\t\t\t.removeClass( classes.sTable );\n\t\n\t\t\t\t// If the were originally stripe classes - then we add them back here.\n\t\t\t\t// Note this is not fool proof (for example if not all rows had stripe\n\t\t\t\t// classes - but it's a good effort without getting carried away\n\t\t\t\tien = settings.asDestroyStripes.length;\n\t\n\t\t\t\tif ( ien ) {\n\t\t\t\t\tjqTbody.children().each( function (i) {\n\t\t\t\t\t\t$(this).addClass( settings.asDestroyStripes[i % ien] );\n\t\t\t\t\t} );\n\t\t\t\t}\n\t\t\t}\n\t\n\t\t\t/* Remove the settings object from the settings array */\n\t\t\tvar idx = $.inArray( settings, DataTable.settings );\n\t\t\tif ( idx !== -1 ) {\n\t\t\t\tDataTable.settings.splice( idx, 1 );\n\t\t\t}\n\t\t} );\n\t} );\n\t\n\t\n\t// Add the `every()` method for rows, columns and cells in a compact form\n\t$.each( [ 'column', 'row', 'cell' ], function ( i, type ) {\n\t\t_api_register( type+'s().every()', function ( fn ) {\n\t\t\tvar opts = this.selector.opts;\n\t\t\tvar api = this;\n\t\n\t\t\treturn this.iterator( type, function ( settings, arg1, arg2, arg3, arg4 ) {\n\t\t\t\t// Rows and columns:\n\t\t\t\t//  arg1 - index\n\t\t\t\t//  arg2 - table counter\n\t\t\t\t//  arg3 - loop counter\n\t\t\t\t//  arg4 - undefined\n\t\t\t\t// Cells:\n\t\t\t\t//  arg1 - row index\n\t\t\t\t//  arg2 - column index\n\t\t\t\t//  arg3 - table counter\n\t\t\t\t//  arg4 - loop counter\n\t\t\t\tfn.call(\n\t\t\t\t\tapi[ type ](\n\t\t\t\t\t\targ1,\n\t\t\t\t\t\ttype==='cell' ? arg2 : opts,\n\t\t\t\t\t\ttype==='cell' ? opts : undefined\n\t\t\t\t\t),\n\t\t\t\t\targ1, arg2, arg3, arg4\n\t\t\t\t);\n\t\t\t} );\n\t\t} );\n\t} );\n\t\n\t\n\t// i18n method for extensions to be able to use the language object from the\n\t// DataTable\n\t_api_register( 'i18n()', function ( token, def, plural ) {\n\t\tvar ctx = this.context[0];\n\t\tvar resolved = _fnGetObjectDataFn( token )( ctx.oLanguage );\n\t\n\t\tif ( resolved === undefined ) {\n\t\t\tresolved = def;\n\t\t}\n\t\n\t\tif ( plural !== undefined && $.isPlainObject( resolved ) ) {\n\t\t\tresolved = resolved[ plural ] !== undefined ?\n\t\t\t\tresolved[ plural ] :\n\t\t\t\tresolved._;\n\t\t}\n\t\n\t\treturn resolved.replace( '%d', plural ); // nb: plural might be undefined,\n\t} );\n\n\t/**\n\t * Version string for plug-ins to check compatibility. Allowed format is\n\t * `a.b.c-d` where: a:int, b:int, c:int, d:string(dev|beta|alpha). `d` is used\n\t * only for non-release builds. See http://semver.org/ for more information.\n\t *  @member\n\t *  @type string\n\t *  @default Version number\n\t */\n\tDataTable.version = \"1.10.13\";\n\n\t/**\n\t * Private data store, containing all of the settings objects that are\n\t * created for the tables on a given page.\n\t *\n\t * Note that the `DataTable.settings` object is aliased to\n\t * `jQuery.fn.dataTableExt` through which it may be accessed and\n\t * manipulated, or `jQuery.fn.dataTable.settings`.\n\t *  @member\n\t *  @type array\n\t *  @default []\n\t *  @private\n\t */\n\tDataTable.settings = [];\n\n\t/**\n\t * Object models container, for the various models that DataTables has\n\t * available to it. These models define the objects that are used to hold\n\t * the active state and configuration of the table.\n\t *  @namespace\n\t */\n\tDataTable.models = {};\n\t\n\t\n\t\n\t/**\n\t * Template object for the way in which DataTables holds information about\n\t * search information for the global filter and individual column filters.\n\t *  @namespace\n\t */\n\tDataTable.models.oSearch = {\n\t\t/**\n\t\t * Flag to indicate if the filtering should be case insensitive or not\n\t\t *  @type boolean\n\t\t *  @default true\n\t\t */\n\t\t\"bCaseInsensitive\": true,\n\t\n\t\t/**\n\t\t * Applied search term\n\t\t *  @type string\n\t\t *  @default <i>Empty string</i>\n\t\t */\n\t\t\"sSearch\": \"\",\n\t\n\t\t/**\n\t\t * Flag to indicate if the search term should be interpreted as a\n\t\t * regular expression (true) or not (false) and therefore and special\n\t\t * regex characters escaped.\n\t\t *  @type boolean\n\t\t *  @default false\n\t\t */\n\t\t\"bRegex\": false,\n\t\n\t\t/**\n\t\t * Flag to indicate if DataTables is to use its smart filtering or not.\n\t\t *  @type boolean\n\t\t *  @default true\n\t\t */\n\t\t\"bSmart\": true\n\t};\n\t\n\t\n\t\n\t\n\t/**\n\t * Template object for the way in which DataTables holds information about\n\t * each individual row. This is the object format used for the settings\n\t * aoData array.\n\t *  @namespace\n\t */\n\tDataTable.models.oRow = {\n\t\t/**\n\t\t * TR element for the row\n\t\t *  @type node\n\t\t *  @default null\n\t\t */\n\t\t\"nTr\": null,\n\t\n\t\t/**\n\t\t * Array of TD elements for each row. This is null until the row has been\n\t\t * created.\n\t\t *  @type array nodes\n\t\t *  @default []\n\t\t */\n\t\t\"anCells\": null,\n\t\n\t\t/**\n\t\t * Data object from the original data source for the row. This is either\n\t\t * an array if using the traditional form of DataTables, or an object if\n\t\t * using mData options. The exact type will depend on the passed in\n\t\t * data from the data source, or will be an array if using DOM a data\n\t\t * source.\n\t\t *  @type array|object\n\t\t *  @default []\n\t\t */\n\t\t\"_aData\": [],\n\t\n\t\t/**\n\t\t * Sorting data cache - this array is ostensibly the same length as the\n\t\t * number of columns (although each index is generated only as it is\n\t\t * needed), and holds the data that is used for sorting each column in the\n\t\t * row. We do this cache generation at the start of the sort in order that\n\t\t * the formatting of the sort data need be done only once for each cell\n\t\t * per sort. This array should not be read from or written to by anything\n\t\t * other than the master sorting methods.\n\t\t *  @type array\n\t\t *  @default null\n\t\t *  @private\n\t\t */\n\t\t\"_aSortData\": null,\n\t\n\t\t/**\n\t\t * Per cell filtering data cache. As per the sort data cache, used to\n\t\t * increase the performance of the filtering in DataTables\n\t\t *  @type array\n\t\t *  @default null\n\t\t *  @private\n\t\t */\n\t\t\"_aFilterData\": null,\n\t\n\t\t/**\n\t\t * Filtering data cache. This is the same as the cell filtering cache, but\n\t\t * in this case a string rather than an array. This is easily computed with\n\t\t * a join on `_aFilterData`, but is provided as a cache so the join isn't\n\t\t * needed on every search (memory traded for performance)\n\t\t *  @type array\n\t\t *  @default null\n\t\t *  @private\n\t\t */\n\t\t\"_sFilterRow\": null,\n\t\n\t\t/**\n\t\t * Cache of the class name that DataTables has applied to the row, so we\n\t\t * can quickly look at this variable rather than needing to do a DOM check\n\t\t * on className for the nTr property.\n\t\t *  @type string\n\t\t *  @default <i>Empty string</i>\n\t\t *  @private\n\t\t */\n\t\t\"_sRowStripe\": \"\",\n\t\n\t\t/**\n\t\t * Denote if the original data source was from the DOM, or the data source\n\t\t * object. This is used for invalidating data, so DataTables can\n\t\t * automatically read data from the original source, unless uninstructed\n\t\t * otherwise.\n\t\t *  @type string\n\t\t *  @default null\n\t\t *  @private\n\t\t */\n\t\t\"src\": null,\n\t\n\t\t/**\n\t\t * Index in the aoData array. This saves an indexOf lookup when we have the\n\t\t * object, but want to know the index\n\t\t *  @type integer\n\t\t *  @default -1\n\t\t *  @private\n\t\t */\n\t\t\"idx\": -1\n\t};\n\t\n\t\n\t/**\n\t * Template object for the column information object in DataTables. This object\n\t * is held in the settings aoColumns array and contains all the information that\n\t * DataTables needs about each individual column.\n\t *\n\t * Note that this object is related to {@link DataTable.defaults.column}\n\t * but this one is the internal data store for DataTables's cache of columns.\n\t * It should NOT be manipulated outside of DataTables. Any configuration should\n\t * be done through the initialisation options.\n\t *  @namespace\n\t */\n\tDataTable.models.oColumn = {\n\t\t/**\n\t\t * Column index. This could be worked out on-the-fly with $.inArray, but it\n\t\t * is faster to just hold it as a variable\n\t\t *  @type integer\n\t\t *  @default null\n\t\t */\n\t\t\"idx\": null,\n\t\n\t\t/**\n\t\t * A list of the columns that sorting should occur on when this column\n\t\t * is sorted. That this property is an array allows multi-column sorting\n\t\t * to be defined for a column (for example first name / last name columns\n\t\t * would benefit from this). The values are integers pointing to the\n\t\t * columns to be sorted on (typically it will be a single integer pointing\n\t\t * at itself, but that doesn't need to be the case).\n\t\t *  @type array\n\t\t */\n\t\t\"aDataSort\": null,\n\t\n\t\t/**\n\t\t * Define the sorting directions that are applied to the column, in sequence\n\t\t * as the column is repeatedly sorted upon - i.e. the first value is used\n\t\t * as the sorting direction when the column if first sorted (clicked on).\n\t\t * Sort it again (click again) and it will move on to the next index.\n\t\t * Repeat until loop.\n\t\t *  @type array\n\t\t */\n\t\t\"asSorting\": null,\n\t\n\t\t/**\n\t\t * Flag to indicate if the column is searchable, and thus should be included\n\t\t * in the filtering or not.\n\t\t *  @type boolean\n\t\t */\n\t\t\"bSearchable\": null,\n\t\n\t\t/**\n\t\t * Flag to indicate if the column is sortable or not.\n\t\t *  @type boolean\n\t\t */\n\t\t\"bSortable\": null,\n\t\n\t\t/**\n\t\t * Flag to indicate if the column is currently visible in the table or not\n\t\t *  @type boolean\n\t\t */\n\t\t\"bVisible\": null,\n\t\n\t\t/**\n\t\t * Store for manual type assignment using the `column.type` option. This\n\t\t * is held in store so we can manipulate the column's `sType` property.\n\t\t *  @type string\n\t\t *  @default null\n\t\t *  @private\n\t\t */\n\t\t\"_sManualType\": null,\n\t\n\t\t/**\n\t\t * Flag to indicate if HTML5 data attributes should be used as the data\n\t\t * source for filtering or sorting. True is either are.\n\t\t *  @type boolean\n\t\t *  @default false\n\t\t *  @private\n\t\t */\n\t\t\"_bAttrSrc\": false,\n\t\n\t\t/**\n\t\t * Developer definable function that is called whenever a cell is created (Ajax source,\n\t\t * etc) or processed for input (DOM source). This can be used as a compliment to mRender\n\t\t * allowing you to modify the DOM element (add background colour for example) when the\n\t\t * element is available.\n\t\t *  @type function\n\t\t *  @param {element} nTd The TD node that has been created\n\t\t *  @param {*} sData The Data for the cell\n\t\t *  @param {array|object} oData The data for the whole row\n\t\t *  @param {int} iRow The row index for the aoData data store\n\t\t *  @default null\n\t\t */\n\t\t\"fnCreatedCell\": null,\n\t\n\t\t/**\n\t\t * Function to get data from a cell in a column. You should <b>never</b>\n\t\t * access data directly through _aData internally in DataTables - always use\n\t\t * the method attached to this property. It allows mData to function as\n\t\t * required. This function is automatically assigned by the column\n\t\t * initialisation method\n\t\t *  @type function\n\t\t *  @param {array|object} oData The data array/object for the array\n\t\t *    (i.e. aoData[]._aData)\n\t\t *  @param {string} sSpecific The specific data type you want to get -\n\t\t *    'display', 'type' 'filter' 'sort'\n\t\t *  @returns {*} The data for the cell from the given row's data\n\t\t *  @default null\n\t\t */\n\t\t\"fnGetData\": null,\n\t\n\t\t/**\n\t\t * Function to set data for a cell in the column. You should <b>never</b>\n\t\t * set the data directly to _aData internally in DataTables - always use\n\t\t * this method. It allows mData to function as required. This function\n\t\t * is automatically assigned by the column initialisation method\n\t\t *  @type function\n\t\t *  @param {array|object} oData The data array/object for the array\n\t\t *    (i.e. aoData[]._aData)\n\t\t *  @param {*} sValue Value to set\n\t\t *  @default null\n\t\t */\n\t\t\"fnSetData\": null,\n\t\n\t\t/**\n\t\t * Property to read the value for the cells in the column from the data\n\t\t * source array / object. If null, then the default content is used, if a\n\t\t * function is given then the return from the function is used.\n\t\t *  @type function|int|string|null\n\t\t *  @default null\n\t\t */\n\t\t\"mData\": null,\n\t\n\t\t/**\n\t\t * Partner property to mData which is used (only when defined) to get\n\t\t * the data - i.e. it is basically the same as mData, but without the\n\t\t * 'set' option, and also the data fed to it is the result from mData.\n\t\t * This is the rendering method to match the data method of mData.\n\t\t *  @type function|int|string|null\n\t\t *  @default null\n\t\t */\n\t\t\"mRender\": null,\n\t\n\t\t/**\n\t\t * Unique header TH/TD element for this column - this is what the sorting\n\t\t * listener is attached to (if sorting is enabled.)\n\t\t *  @type node\n\t\t *  @default null\n\t\t */\n\t\t\"nTh\": null,\n\t\n\t\t/**\n\t\t * Unique footer TH/TD element for this column (if there is one). Not used\n\t\t * in DataTables as such, but can be used for plug-ins to reference the\n\t\t * footer for each column.\n\t\t *  @type node\n\t\t *  @default null\n\t\t */\n\t\t\"nTf\": null,\n\t\n\t\t/**\n\t\t * The class to apply to all TD elements in the table's TBODY for the column\n\t\t *  @type string\n\t\t *  @default null\n\t\t */\n\t\t\"sClass\": null,\n\t\n\t\t/**\n\t\t * When DataTables calculates the column widths to assign to each column,\n\t\t * it finds the longest string in each column and then constructs a\n\t\t * temporary table and reads the widths from that. The problem with this\n\t\t * is that \"mmm\" is much wider then \"iiii\", but the latter is a longer\n\t\t * string - thus the calculation can go wrong (doing it properly and putting\n\t\t * it into an DOM object and measuring that is horribly(!) slow). Thus as\n\t\t * a \"work around\" we provide this option. It will append its value to the\n\t\t * text that is found to be the longest string for the column - i.e. padding.\n\t\t *  @type string\n\t\t */\n\t\t\"sContentPadding\": null,\n\t\n\t\t/**\n\t\t * Allows a default value to be given for a column's data, and will be used\n\t\t * whenever a null data source is encountered (this can be because mData\n\t\t * is set to null, or because the data source itself is null).\n\t\t *  @type string\n\t\t *  @default null\n\t\t */\n\t\t\"sDefaultContent\": null,\n\t\n\t\t/**\n\t\t * Name for the column, allowing reference to the column by name as well as\n\t\t * by index (needs a lookup to work by name).\n\t\t *  @type string\n\t\t */\n\t\t\"sName\": null,\n\t\n\t\t/**\n\t\t * Custom sorting data type - defines which of the available plug-ins in\n\t\t * afnSortData the custom sorting will use - if any is defined.\n\t\t *  @type string\n\t\t *  @default std\n\t\t */\n\t\t\"sSortDataType\": 'std',\n\t\n\t\t/**\n\t\t * Class to be applied to the header element when sorting on this column\n\t\t *  @type string\n\t\t *  @default null\n\t\t */\n\t\t\"sSortingClass\": null,\n\t\n\t\t/**\n\t\t * Class to be applied to the header element when sorting on this column -\n\t\t * when jQuery UI theming is used.\n\t\t *  @type string\n\t\t *  @default null\n\t\t */\n\t\t\"sSortingClassJUI\": null,\n\t\n\t\t/**\n\t\t * Title of the column - what is seen in the TH element (nTh).\n\t\t *  @type string\n\t\t */\n\t\t\"sTitle\": null,\n\t\n\t\t/**\n\t\t * Column sorting and filtering type\n\t\t *  @type string\n\t\t *  @default null\n\t\t */\n\t\t\"sType\": null,\n\t\n\t\t/**\n\t\t * Width of the column\n\t\t *  @type string\n\t\t *  @default null\n\t\t */\n\t\t\"sWidth\": null,\n\t\n\t\t/**\n\t\t * Width of the column when it was first \"encountered\"\n\t\t *  @type string\n\t\t *  @default null\n\t\t */\n\t\t\"sWidthOrig\": null\n\t};\n\t\n\t\n\t/*\n\t * Developer note: The properties of the object below are given in Hungarian\n\t * notation, that was used as the interface for DataTables prior to v1.10, however\n\t * from v1.10 onwards the primary interface is camel case. In order to avoid\n\t * breaking backwards compatibility utterly with this change, the Hungarian\n\t * version is still, internally the primary interface, but is is not documented\n\t * - hence the @name tags in each doc comment. This allows a Javascript function\n\t * to create a map from Hungarian notation to camel case (going the other direction\n\t * would require each property to be listed, which would at around 3K to the size\n\t * of DataTables, while this method is about a 0.5K hit.\n\t *\n\t * Ultimately this does pave the way for Hungarian notation to be dropped\n\t * completely, but that is a massive amount of work and will break current\n\t * installs (therefore is on-hold until v2).\n\t */\n\t\n\t/**\n\t * Initialisation options that can be given to DataTables at initialisation\n\t * time.\n\t *  @namespace\n\t */\n\tDataTable.defaults = {\n\t\t/**\n\t\t * An array of data to use for the table, passed in at initialisation which\n\t\t * will be used in preference to any data which is already in the DOM. This is\n\t\t * particularly useful for constructing tables purely in Javascript, for\n\t\t * example with a custom Ajax call.\n\t\t *  @type array\n\t\t *  @default null\n\t\t *\n\t\t *  @dtopt Option\n\t\t *  @name DataTable.defaults.data\n\t\t *\n\t\t *  @example\n\t\t *    // Using a 2D array data source\n\t\t *    $(document).ready( function () {\n\t\t *      $('#example').dataTable( {\n\t\t *        \"data\": [\n\t\t *          ['Trident', 'Internet Explorer 4.0', 'Win 95+', 4, 'X'],\n\t\t *          ['Trident', 'Internet Explorer 5.0', 'Win 95+', 5, 'C'],\n\t\t *        ],\n\t\t *        \"columns\": [\n\t\t *          { \"title\": \"Engine\" },\n\t\t *          { \"title\": \"Browser\" },\n\t\t *          { \"title\": \"Platform\" },\n\t\t *          { \"title\": \"Version\" },\n\t\t *          { \"title\": \"Grade\" }\n\t\t *        ]\n\t\t *      } );\n\t\t *    } );\n\t\t *\n\t\t *  @example\n\t\t *    // Using an array of objects as a data source (`data`)\n\t\t *    $(document).ready( function () {\n\t\t *      $('#example').dataTable( {\n\t\t *        \"data\": [\n\t\t *          {\n\t\t *            \"engine\":   \"Trident\",\n\t\t *            \"browser\":  \"Internet Explorer 4.0\",\n\t\t *            \"platform\": \"Win 95+\",\n\t\t *            \"version\":  4,\n\t\t *            \"grade\":    \"X\"\n\t\t *          },\n\t\t *          {\n\t\t *            \"engine\":   \"Trident\",\n\t\t *            \"browser\":  \"Internet Explorer 5.0\",\n\t\t *            \"platform\": \"Win 95+\",\n\t\t *            \"version\":  5,\n\t\t *            \"grade\":    \"C\"\n\t\t *          }\n\t\t *        ],\n\t\t *        \"columns\": [\n\t\t *          { \"title\": \"Engine\",   \"data\": \"engine\" },\n\t\t *          { \"title\": \"Browser\",  \"data\": \"browser\" },\n\t\t *          { \"title\": \"Platform\", \"data\": \"platform\" },\n\t\t *          { \"title\": \"Version\",  \"data\": \"version\" },\n\t\t *          { \"title\": \"Grade\",    \"data\": \"grade\" }\n\t\t *        ]\n\t\t *      } );\n\t\t *    } );\n\t\t */\n\t\t\"aaData\": null,\n\t\n\t\n\t\t/**\n\t\t * If ordering is enabled, then DataTables will perform a first pass sort on\n\t\t * initialisation. You can define which column(s) the sort is performed\n\t\t * upon, and the sorting direction, with this variable. The `sorting` array\n\t\t * should contain an array for each column to be sorted initially containing\n\t\t * the column's index and a direction string ('asc' or 'desc').\n\t\t *  @type array\n\t\t *  @default [[0,'asc']]\n\t\t *\n\t\t *  @dtopt Option\n\t\t *  @name DataTable.defaults.order\n\t\t *\n\t\t *  @example\n\t\t *    // Sort by 3rd column first, and then 4th column\n\t\t *    $(document).ready( function() {\n\t\t *      $('#example').dataTable( {\n\t\t *        \"order\": [[2,'asc'], [3,'desc']]\n\t\t *      } );\n\t\t *    } );\n\t\t *\n\t\t *    // No initial sorting\n\t\t *    $(document).ready( function() {\n\t\t *      $('#example').dataTable( {\n\t\t *        \"order\": []\n\t\t *      } );\n\t\t *    } );\n\t\t */\n\t\t\"aaSorting\": [[0,'asc']],\n\t\n\t\n\t\t/**\n\t\t * This parameter is basically identical to the `sorting` parameter, but\n\t\t * cannot be overridden by user interaction with the table. What this means\n\t\t * is that you could have a column (visible or hidden) which the sorting\n\t\t * will always be forced on first - any sorting after that (from the user)\n\t\t * will then be performed as required. This can be useful for grouping rows\n\t\t * together.\n\t\t *  @type array\n\t\t *  @default null\n\t\t *\n\t\t *  @dtopt Option\n\t\t *  @name DataTable.defaults.orderFixed\n\t\t *\n\t\t *  @example\n\t\t *    $(document).ready( function() {\n\t\t *      $('#example').dataTable( {\n\t\t *        \"orderFixed\": [[0,'asc']]\n\t\t *      } );\n\t\t *    } )\n\t\t */\n\t\t\"aaSortingFixed\": [],\n\t\n\t\n\t\t/**\n\t\t * DataTables can be instructed to load data to display in the table from a\n\t\t * Ajax source. This option defines how that Ajax call is made and where to.\n\t\t *\n\t\t * The `ajax` property has three different modes of operation, depending on\n\t\t * how it is defined. These are:\n\t\t *\n\t\t * * `string` - Set the URL from where the data should be loaded from.\n\t\t * * `object` - Define properties for `jQuery.ajax`.\n\t\t * * `function` - Custom data get function\n\t\t *\n\t\t * `string`\n\t\t * --------\n\t\t *\n\t\t * As a string, the `ajax` property simply defines the URL from which\n\t\t * DataTables will load data.\n\t\t *\n\t\t * `object`\n\t\t * --------\n\t\t *\n\t\t * As an object, the parameters in the object are passed to\n\t\t * [jQuery.ajax](http://api.jquery.com/jQuery.ajax/) allowing fine control\n\t\t * of the Ajax request. DataTables has a number of default parameters which\n\t\t * you can override using this option. Please refer to the jQuery\n\t\t * documentation for a full description of the options available, although\n\t\t * the following parameters provide additional options in DataTables or\n\t\t * require special consideration:\n\t\t *\n\t\t * * `data` - As with jQuery, `data` can be provided as an object, but it\n\t\t *   can also be used as a function to manipulate the data DataTables sends\n\t\t *   to the server. The function takes a single parameter, an object of\n\t\t *   parameters with the values that DataTables has readied for sending. An\n\t\t *   object may be returned which will be merged into the DataTables\n\t\t *   defaults, or you can add the items to the object that was passed in and\n\t\t *   not return anything from the function. This supersedes `fnServerParams`\n\t\t *   from DataTables 1.9-.\n\t\t *\n\t\t * * `dataSrc` - By default DataTables will look for the property `data` (or\n\t\t *   `aaData` for compatibility with DataTables 1.9-) when obtaining data\n\t\t *   from an Ajax source or for server-side processing - this parameter\n\t\t *   allows that property to be changed. You can use Javascript dotted\n\t\t *   object notation to get a data source for multiple levels of nesting, or\n\t\t *   it my be used as a function. As a function it takes a single parameter,\n\t\t *   the JSON returned from the server, which can be manipulated as\n\t\t *   required, with the returned value being that used by DataTables as the\n\t\t *   data source for the table. This supersedes `sAjaxDataProp` from\n\t\t *   DataTables 1.9-.\n\t\t *\n\t\t * * `success` - Should not be overridden it is used internally in\n\t\t *   DataTables. To manipulate / transform the data returned by the server\n\t\t *   use `ajax.dataSrc`, or use `ajax` as a function (see below).\n\t\t *\n\t\t * `function`\n\t\t * ----------\n\t\t *\n\t\t * As a function, making the Ajax call is left up to yourself allowing\n\t\t * complete control of the Ajax request. Indeed, if desired, a method other\n\t\t * than Ajax could be used to obtain the required data, such as Web storage\n\t\t * or an AIR database.\n\t\t *\n\t\t * The function is given four parameters and no return is required. The\n\t\t * parameters are:\n\t\t *\n\t\t * 1. _object_ - Data to send to the server\n\t\t * 2. _function_ - Callback function that must be executed when the required\n\t\t *    data has been obtained. That data should be passed into the callback\n\t\t *    as the only parameter\n\t\t * 3. _object_ - DataTables settings object for the table\n\t\t *\n\t\t * Note that this supersedes `fnServerData` from DataTables 1.9-.\n\t\t *\n\t\t *  @type string|object|function\n\t\t *  @default null\n\t\t *\n\t\t *  @dtopt Option\n\t\t *  @name DataTable.defaults.ajax\n\t\t *  @since 1.10.0\n\t\t *\n\t\t * @example\n\t\t *   // Get JSON data from a file via Ajax.\n\t\t *   // Note DataTables expects data in the form `{ data: [ ...data... ] }` by default).\n\t\t *   $('#example').dataTable( {\n\t\t *     \"ajax\": \"data.json\"\n\t\t *   } );\n\t\t *\n\t\t * @example\n\t\t *   // Get JSON data from a file via Ajax, using `dataSrc` to change\n\t\t *   // `data` to `tableData` (i.e. `{ tableData: [ ...data... ] }`)\n\t\t *   $('#example').dataTable( {\n\t\t *     \"ajax\": {\n\t\t *       \"url\": \"data.json\",\n\t\t *       \"dataSrc\": \"tableData\"\n\t\t *     }\n\t\t *   } );\n\t\t *\n\t\t * @example\n\t\t *   // Get JSON data from a file via Ajax, using `dataSrc` to read data\n\t\t *   // from a plain array rather than an array in an object\n\t\t *   $('#example').dataTable( {\n\t\t *     \"ajax\": {\n\t\t *       \"url\": \"data.json\",\n\t\t *       \"dataSrc\": \"\"\n\t\t *     }\n\t\t *   } );\n\t\t *\n\t\t * @example\n\t\t *   // Manipulate the data returned from the server - add a link to data\n\t\t *   // (note this can, should, be done using `render` for the column - this\n\t\t *   // is just a simple example of how the data can be manipulated).\n\t\t *   $('#example').dataTable( {\n\t\t *     \"ajax\": {\n\t\t *       \"url\": \"data.json\",\n\t\t *       \"dataSrc\": function ( json ) {\n\t\t *         for ( var i=0, ien=json.length ; i<ien ; i++ ) {\n\t\t *           json[i][0] = '<a href=\"/message/'+json[i][0]+'>View message</a>';\n\t\t *         }\n\t\t *         return json;\n\t\t *       }\n\t\t *     }\n\t\t *   } );\n\t\t *\n\t\t * @example\n\t\t *   // Add data to the request\n\t\t *   $('#example').dataTable( {\n\t\t *     \"ajax\": {\n\t\t *       \"url\": \"data.json\",\n\t\t *       \"data\": function ( d ) {\n\t\t *         return {\n\t\t *           \"extra_search\": $('#extra').val()\n\t\t *         };\n\t\t *       }\n\t\t *     }\n\t\t *   } );\n\t\t *\n\t\t * @example\n\t\t *   // Send request as POST\n\t\t *   $('#example').dataTable( {\n\t\t *     \"ajax\": {\n\t\t *       \"url\": \"data.json\",\n\t\t *       \"type\": \"POST\"\n\t\t *     }\n\t\t *   } );\n\t\t *\n\t\t * @example\n\t\t *   // Get the data from localStorage (could interface with a form for\n\t\t *   // adding, editing and removing rows).\n\t\t *   $('#example').dataTable( {\n\t\t *     \"ajax\": function (data, callback, settings) {\n\t\t *       callback(\n\t\t *         JSON.parse( localStorage.getItem('dataTablesData') )\n\t\t *       );\n\t\t *     }\n\t\t *   } );\n\t\t */\n\t\t\"ajax\": null,\n\t\n\t\n\t\t/**\n\t\t * This parameter allows you to readily specify the entries in the length drop\n\t\t * down menu that DataTables shows when pagination is enabled. It can be\n\t\t * either a 1D array of options which will be used for both the displayed\n\t\t * option and the value, or a 2D array which will use the array in the first\n\t\t * position as the value, and the array in the second position as the\n\t\t * displayed options (useful for language strings such as 'All').\n\t\t *\n\t\t * Note that the `pageLength` property will be automatically set to the\n\t\t * first value given in this array, unless `pageLength` is also provided.\n\t\t *  @type array\n\t\t *  @default [ 10, 25, 50, 100 ]\n\t\t *\n\t\t *  @dtopt Option\n\t\t *  @name DataTable.defaults.lengthMenu\n\t\t *\n\t\t *  @example\n\t\t *    $(document).ready( function() {\n\t\t *      $('#example').dataTable( {\n\t\t *        \"lengthMenu\": [[10, 25, 50, -1], [10, 25, 50, \"All\"]]\n\t\t *      } );\n\t\t *    } );\n\t\t */\n\t\t\"aLengthMenu\": [ 10, 25, 50, 100 ],\n\t\n\t\n\t\t/**\n\t\t * The `columns` option in the initialisation parameter allows you to define\n\t\t * details about the way individual columns behave. For a full list of\n\t\t * column options that can be set, please see\n\t\t * {@link DataTable.defaults.column}. Note that if you use `columns` to\n\t\t * define your columns, you must have an entry in the array for every single\n\t\t * column that you have in your table (these can be null if you don't which\n\t\t * to specify any options).\n\t\t *  @member\n\t\t *\n\t\t *  @name DataTable.defaults.column\n\t\t */\n\t\t\"aoColumns\": null,\n\t\n\t\t/**\n\t\t * Very similar to `columns`, `columnDefs` allows you to target a specific\n\t\t * column, multiple columns, or all columns, using the `targets` property of\n\t\t * each object in the array. This allows great flexibility when creating\n\t\t * tables, as the `columnDefs` arrays can be of any length, targeting the\n\t\t * columns you specifically want. `columnDefs` may use any of the column\n\t\t * options available: {@link DataTable.defaults.column}, but it _must_\n\t\t * have `targets` defined in each object in the array. Values in the `targets`\n\t\t * array may be:\n\t\t *   <ul>\n\t\t *     <li>a string - class name will be matched on the TH for the column</li>\n\t\t *     <li>0 or a positive integer - column index counting from the left</li>\n\t\t *     <li>a negative integer - column index counting from the right</li>\n\t\t *     <li>the string \"_all\" - all columns (i.e. assign a default)</li>\n\t\t *   </ul>\n\t\t *  @member\n\t\t *\n\t\t *  @name DataTable.defaults.columnDefs\n\t\t */\n\t\t\"aoColumnDefs\": null,\n\t\n\t\n\t\t/**\n\t\t * Basically the same as `search`, this parameter defines the individual column\n\t\t * filtering state at initialisation time. The array must be of the same size\n\t\t * as the number of columns, and each element be an object with the parameters\n\t\t * `search` and `escapeRegex` (the latter is optional). 'null' is also\n\t\t * accepted and the default will be used.\n\t\t *  @type array\n\t\t *  @default []\n\t\t *\n\t\t *  @dtopt Option\n\t\t *  @name DataTable.defaults.searchCols\n\t\t *\n\t\t *  @example\n\t\t *    $(document).ready( function() {\n\t\t *      $('#example').dataTable( {\n\t\t *        \"searchCols\": [\n\t\t *          null,\n\t\t *          { \"search\": \"My filter\" },\n\t\t *          null,\n\t\t *          { \"search\": \"^[0-9]\", \"escapeRegex\": false }\n\t\t *        ]\n\t\t *      } );\n\t\t *    } )\n\t\t */\n\t\t\"aoSearchCols\": [],\n\t\n\t\n\t\t/**\n\t\t * An array of CSS classes that should be applied to displayed rows. This\n\t\t * array may be of any length, and DataTables will apply each class\n\t\t * sequentially, looping when required.\n\t\t *  @type array\n\t\t *  @default null <i>Will take the values determined by the `oClasses.stripe*`\n\t\t *    options</i>\n\t\t *\n\t\t *  @dtopt Option\n\t\t *  @name DataTable.defaults.stripeClasses\n\t\t *\n\t\t *  @example\n\t\t *    $(document).ready( function() {\n\t\t *      $('#example').dataTable( {\n\t\t *        \"stripeClasses\": [ 'strip1', 'strip2', 'strip3' ]\n\t\t *      } );\n\t\t *    } )\n\t\t */\n\t\t\"asStripeClasses\": null,\n\t\n\t\n\t\t/**\n\t\t * Enable or disable automatic column width calculation. This can be disabled\n\t\t * as an optimisation (it takes some time to calculate the widths) if the\n\t\t * tables widths are passed in using `columns`.\n\t\t *  @type boolean\n\t\t *  @default true\n\t\t *\n\t\t *  @dtopt Features\n\t\t *  @name DataTable.defaults.autoWidth\n\t\t *\n\t\t *  @example\n\t\t *    $(document).ready( function () {\n\t\t *      $('#example').dataTable( {\n\t\t *        \"autoWidth\": false\n\t\t *      } );\n\t\t *    } );\n\t\t */\n\t\t\"bAutoWidth\": true,\n\t\n\t\n\t\t/**\n\t\t * Deferred rendering can provide DataTables with a huge speed boost when you\n\t\t * are using an Ajax or JS data source for the table. This option, when set to\n\t\t * true, will cause DataTables to defer the creation of the table elements for\n\t\t * each row until they are needed for a draw - saving a significant amount of\n\t\t * time.\n\t\t *  @type boolean\n\t\t *  @default false\n\t\t *\n\t\t *  @dtopt Features\n\t\t *  @name DataTable.defaults.deferRender\n\t\t *\n\t\t *  @example\n\t\t *    $(document).ready( function() {\n\t\t *      $('#example').dataTable( {\n\t\t *        \"ajax\": \"sources/arrays.txt\",\n\t\t *        \"deferRender\": true\n\t\t *      } );\n\t\t *    } );\n\t\t */\n\t\t\"bDeferRender\": false,\n\t\n\t\n\t\t/**\n\t\t * Replace a DataTable which matches the given selector and replace it with\n\t\t * one which has the properties of the new initialisation object passed. If no\n\t\t * table matches the selector, then the new DataTable will be constructed as\n\t\t * per normal.\n\t\t *  @type boolean\n\t\t *  @default false\n\t\t *\n\t\t *  @dtopt Options\n\t\t *  @name DataTable.defaults.destroy\n\t\t *\n\t\t *  @example\n\t\t *    $(document).ready( function() {\n\t\t *      $('#example').dataTable( {\n\t\t *        \"srollY\": \"200px\",\n\t\t *        \"paginate\": false\n\t\t *      } );\n\t\t *\n\t\t *      // Some time later....\n\t\t *      $('#example').dataTable( {\n\t\t *        \"filter\": false,\n\t\t *        \"destroy\": true\n\t\t *      } );\n\t\t *    } );\n\t\t */\n\t\t\"bDestroy\": false,\n\t\n\t\n\t\t/**\n\t\t * Enable or disable filtering of data. Filtering in DataTables is \"smart\" in\n\t\t * that it allows the end user to input multiple words (space separated) and\n\t\t * will match a row containing those words, even if not in the order that was\n\t\t * specified (this allow matching across multiple columns). Note that if you\n\t\t * wish to use filtering in DataTables this must remain 'true' - to remove the\n\t\t * default filtering input box and retain filtering abilities, please use\n\t\t * {@link DataTable.defaults.dom}.\n\t\t *  @type boolean\n\t\t *  @default true\n\t\t *\n\t\t *  @dtopt Features\n\t\t *  @name DataTable.defaults.searching\n\t\t *\n\t\t *  @example\n\t\t *    $(document).ready( function () {\n\t\t *      $('#example').dataTable( {\n\t\t *        \"searching\": false\n\t\t *      } );\n\t\t *    } );\n\t\t */\n\t\t\"bFilter\": true,\n\t\n\t\n\t\t/**\n\t\t * Enable or disable the table information display. This shows information\n\t\t * about the data that is currently visible on the page, including information\n\t\t * about filtered data if that action is being performed.\n\t\t *  @type boolean\n\t\t *  @default true\n\t\t *\n\t\t *  @dtopt Features\n\t\t *  @name DataTable.defaults.info\n\t\t *\n\t\t *  @example\n\t\t *    $(document).ready( function () {\n\t\t *      $('#example').dataTable( {\n\t\t *        \"info\": false\n\t\t *      } );\n\t\t *    } );\n\t\t */\n\t\t\"bInfo\": true,\n\t\n\t\n\t\t/**\n\t\t * Enable jQuery UI ThemeRoller support (required as ThemeRoller requires some\n\t\t * slightly different and additional mark-up from what DataTables has\n\t\t * traditionally used).\n\t\t *  @type boolean\n\t\t *  @default false\n\t\t *\n\t\t *  @dtopt Features\n\t\t *  @name DataTable.defaults.jQueryUI\n\t\t *\n\t\t *  @example\n\t\t *    $(document).ready( function() {\n\t\t *      $('#example').dataTable( {\n\t\t *        \"jQueryUI\": true\n\t\t *      } );\n\t\t *    } );\n\t\t */\n\t\t\"bJQueryUI\": false,\n\t\n\t\n\t\t/**\n\t\t * Allows the end user to select the size of a formatted page from a select\n\t\t * menu (sizes are 10, 25, 50 and 100). Requires pagination (`paginate`).\n\t\t *  @type boolean\n\t\t *  @default true\n\t\t *\n\t\t *  @dtopt Features\n\t\t *  @name DataTable.defaults.lengthChange\n\t\t *\n\t\t *  @example\n\t\t *    $(document).ready( function () {\n\t\t *      $('#example').dataTable( {\n\t\t *        \"lengthChange\": false\n\t\t *      } );\n\t\t *    } );\n\t\t */\n\t\t\"bLengthChange\": true,\n\t\n\t\n\t\t/**\n\t\t * Enable or disable pagination.\n\t\t *  @type boolean\n\t\t *  @default true\n\t\t *\n\t\t *  @dtopt Features\n\t\t *  @name DataTable.defaults.paging\n\t\t *\n\t\t *  @example\n\t\t *    $(document).ready( function () {\n\t\t *      $('#example').dataTable( {\n\t\t *        \"paging\": false\n\t\t *      } );\n\t\t *    } );\n\t\t */\n\t\t\"bPaginate\": true,\n\t\n\t\n\t\t/**\n\t\t * Enable or disable the display of a 'processing' indicator when the table is\n\t\t * being processed (e.g. a sort). This is particularly useful for tables with\n\t\t * large amounts of data where it can take a noticeable amount of time to sort\n\t\t * the entries.\n\t\t *  @type boolean\n\t\t *  @default false\n\t\t *\n\t\t *  @dtopt Features\n\t\t *  @name DataTable.defaults.processing\n\t\t *\n\t\t *  @example\n\t\t *    $(document).ready( function () {\n\t\t *      $('#example').dataTable( {\n\t\t *        \"processing\": true\n\t\t *      } );\n\t\t *    } );\n\t\t */\n\t\t\"bProcessing\": false,\n\t\n\t\n\t\t/**\n\t\t * Retrieve the DataTables object for the given selector. Note that if the\n\t\t * table has already been initialised, this parameter will cause DataTables\n\t\t * to simply return the object that has already been set up - it will not take\n\t\t * account of any changes you might have made to the initialisation object\n\t\t * passed to DataTables (setting this parameter to true is an acknowledgement\n\t\t * that you understand this). `destroy` can be used to reinitialise a table if\n\t\t * you need.\n\t\t *  @type boolean\n\t\t *  @default false\n\t\t *\n\t\t *  @dtopt Options\n\t\t *  @name DataTable.defaults.retrieve\n\t\t *\n\t\t *  @example\n\t\t *    $(document).ready( function() {\n\t\t *      initTable();\n\t\t *      tableActions();\n\t\t *    } );\n\t\t *\n\t\t *    function initTable ()\n\t\t *    {\n\t\t *      return $('#example').dataTable( {\n\t\t *        \"scrollY\": \"200px\",\n\t\t *        \"paginate\": false,\n\t\t *        \"retrieve\": true\n\t\t *      } );\n\t\t *    }\n\t\t *\n\t\t *    function tableActions ()\n\t\t *    {\n\t\t *      var table = initTable();\n\t\t *      // perform API operations with oTable\n\t\t *    }\n\t\t */\n\t\t\"bRetrieve\": false,\n\t\n\t\n\t\t/**\n\t\t * When vertical (y) scrolling is enabled, DataTables will force the height of\n\t\t * the table's viewport to the given height at all times (useful for layout).\n\t\t * However, this can look odd when filtering data down to a small data set,\n\t\t * and the footer is left \"floating\" further down. This parameter (when\n\t\t * enabled) will cause DataTables to collapse the table's viewport down when\n\t\t * the result set will fit within the given Y height.\n\t\t *  @type boolean\n\t\t *  @default false\n\t\t *\n\t\t *  @dtopt Options\n\t\t *  @name DataTable.defaults.scrollCollapse\n\t\t *\n\t\t *  @example\n\t\t *    $(document).ready( function() {\n\t\t *      $('#example').dataTable( {\n\t\t *        \"scrollY\": \"200\",\n\t\t *        \"scrollCollapse\": true\n\t\t *      } );\n\t\t *    } );\n\t\t */\n\t\t\"bScrollCollapse\": false,\n\t\n\t\n\t\t/**\n\t\t * Configure DataTables to use server-side processing. Note that the\n\t\t * `ajax` parameter must also be given in order to give DataTables a\n\t\t * source to obtain the required data for each draw.\n\t\t *  @type boolean\n\t\t *  @default false\n\t\t *\n\t\t *  @dtopt Features\n\t\t *  @dtopt Server-side\n\t\t *  @name DataTable.defaults.serverSide\n\t\t *\n\t\t *  @example\n\t\t *    $(document).ready( function () {\n\t\t *      $('#example').dataTable( {\n\t\t *        \"serverSide\": true,\n\t\t *        \"ajax\": \"xhr.php\"\n\t\t *      } );\n\t\t *    } );\n\t\t */\n\t\t\"bServerSide\": false,\n\t\n\t\n\t\t/**\n\t\t * Enable or disable sorting of columns. Sorting of individual columns can be\n\t\t * disabled by the `sortable` option for each column.\n\t\t *  @type boolean\n\t\t *  @default true\n\t\t *\n\t\t *  @dtopt Features\n\t\t *  @name DataTable.defaults.ordering\n\t\t *\n\t\t *  @example\n\t\t *    $(document).ready( function () {\n\t\t *      $('#example').dataTable( {\n\t\t *        \"ordering\": false\n\t\t *      } );\n\t\t *    } );\n\t\t */\n\t\t\"bSort\": true,\n\t\n\t\n\t\t/**\n\t\t * Enable or display DataTables' ability to sort multiple columns at the\n\t\t * same time (activated by shift-click by the user).\n\t\t *  @type boolean\n\t\t *  @default true\n\t\t *\n\t\t *  @dtopt Options\n\t\t *  @name DataTable.defaults.orderMulti\n\t\t *\n\t\t *  @example\n\t\t *    // Disable multiple column sorting ability\n\t\t *    $(document).ready( function () {\n\t\t *      $('#example').dataTable( {\n\t\t *        \"orderMulti\": false\n\t\t *      } );\n\t\t *    } );\n\t\t */\n\t\t\"bSortMulti\": true,\n\t\n\t\n\t\t/**\n\t\t * Allows control over whether DataTables should use the top (true) unique\n\t\t * cell that is found for a single column, or the bottom (false - default).\n\t\t * This is useful when using complex headers.\n\t\t *  @type boolean\n\t\t *  @default false\n\t\t *\n\t\t *  @dtopt Options\n\t\t *  @name DataTable.defaults.orderCellsTop\n\t\t *\n\t\t *  @example\n\t\t *    $(document).ready( function() {\n\t\t *      $('#example').dataTable( {\n\t\t *        \"orderCellsTop\": true\n\t\t *      } );\n\t\t *    } );\n\t\t */\n\t\t\"bSortCellsTop\": false,\n\t\n\t\n\t\t/**\n\t\t * Enable or disable the addition of the classes `sorting\\_1`, `sorting\\_2` and\n\t\t * `sorting\\_3` to the columns which are currently being sorted on. This is\n\t\t * presented as a feature switch as it can increase processing time (while\n\t\t * classes are removed and added) so for large data sets you might want to\n\t\t * turn this off.\n\t\t *  @type boolean\n\t\t *  @default true\n\t\t *\n\t\t *  @dtopt Features\n\t\t *  @name DataTable.defaults.orderClasses\n\t\t *\n\t\t *  @example\n\t\t *    $(document).ready( function () {\n\t\t *      $('#example').dataTable( {\n\t\t *        \"orderClasses\": false\n\t\t *      } );\n\t\t *    } );\n\t\t */\n\t\t\"bSortClasses\": true,\n\t\n\t\n\t\t/**\n\t\t * Enable or disable state saving. When enabled HTML5 `localStorage` will be\n\t\t * used to save table display information such as pagination information,\n\t\t * display length, filtering and sorting. As such when the end user reloads\n\t\t * the page the display display will match what thy had previously set up.\n\t\t *\n\t\t * Due to the use of `localStorage` the default state saving is not supported\n\t\t * in IE6 or 7. If state saving is required in those browsers, use\n\t\t * `stateSaveCallback` to provide a storage solution such as cookies.\n\t\t *  @type boolean\n\t\t *  @default false\n\t\t *\n\t\t *  @dtopt Features\n\t\t *  @name DataTable.defaults.stateSave\n\t\t *\n\t\t *  @example\n\t\t *    $(document).ready( function () {\n\t\t *      $('#example').dataTable( {\n\t\t *        \"stateSave\": true\n\t\t *      } );\n\t\t *    } );\n\t\t */\n\t\t\"bStateSave\": false,\n\t\n\t\n\t\t/**\n\t\t * This function is called when a TR element is created (and all TD child\n\t\t * elements have been inserted), or registered if using a DOM source, allowing\n\t\t * manipulation of the TR element (adding classes etc).\n\t\t *  @type function\n\t\t *  @param {node} row \"TR\" element for the current row\n\t\t *  @param {array} data Raw data array for this row\n\t\t *  @param {int} dataIndex The index of this row in the internal aoData array\n\t\t *\n\t\t *  @dtopt Callbacks\n\t\t *  @name DataTable.defaults.createdRow\n\t\t *\n\t\t *  @example\n\t\t *    $(document).ready( function() {\n\t\t *      $('#example').dataTable( {\n\t\t *        \"createdRow\": function( row, data, dataIndex ) {\n\t\t *          // Bold the grade for all 'A' grade browsers\n\t\t *          if ( data[4] == \"A\" )\n\t\t *          {\n\t\t *            $('td:eq(4)', row).html( '<b>A</b>' );\n\t\t *          }\n\t\t *        }\n\t\t *      } );\n\t\t *    } );\n\t\t */\n\t\t\"fnCreatedRow\": null,\n\t\n\t\n\t\t/**\n\t\t * This function is called on every 'draw' event, and allows you to\n\t\t * dynamically modify any aspect you want about the created DOM.\n\t\t *  @type function\n\t\t *  @param {object} settings DataTables settings object\n\t\t *\n\t\t *  @dtopt Callbacks\n\t\t *  @name DataTable.defaults.drawCallback\n\t\t *\n\t\t *  @example\n\t\t *    $(document).ready( function() {\n\t\t *      $('#example').dataTable( {\n\t\t *        \"drawCallback\": function( settings ) {\n\t\t *          alert( 'DataTables has redrawn the table' );\n\t\t *        }\n\t\t *      } );\n\t\t *    } );\n\t\t */\n\t\t\"fnDrawCallback\": null,\n\t\n\t\n\t\t/**\n\t\t * Identical to fnHeaderCallback() but for the table footer this function\n\t\t * allows you to modify the table footer on every 'draw' event.\n\t\t *  @type function\n\t\t *  @param {node} foot \"TR\" element for the footer\n\t\t *  @param {array} data Full table data (as derived from the original HTML)\n\t\t *  @param {int} start Index for the current display starting point in the\n\t\t *    display array\n\t\t *  @param {int} end Index for the current display ending point in the\n\t\t *    display array\n\t\t *  @param {array int} display Index array to translate the visual position\n\t\t *    to the full data array\n\t\t *\n\t\t *  @dtopt Callbacks\n\t\t *  @name DataTable.defaults.footerCallback\n\t\t *\n\t\t *  @example\n\t\t *    $(document).ready( function() {\n\t\t *      $('#example').dataTable( {\n\t\t *        \"footerCallback\": function( tfoot, data, start, end, display ) {\n\t\t *          tfoot.getElementsByTagName('th')[0].innerHTML = \"Starting index is \"+start;\n\t\t *        }\n\t\t *      } );\n\t\t *    } )\n\t\t */\n\t\t\"fnFooterCallback\": null,\n\t\n\t\n\t\t/**\n\t\t * When rendering large numbers in the information element for the table\n\t\t * (i.e. \"Showing 1 to 10 of 57 entries\") DataTables will render large numbers\n\t\t * to have a comma separator for the 'thousands' units (e.g. 1 million is\n\t\t * rendered as \"1,000,000\") to help readability for the end user. This\n\t\t * function will override the default method DataTables uses.\n\t\t *  @type function\n\t\t *  @member\n\t\t *  @param {int} toFormat number to be formatted\n\t\t *  @returns {string} formatted string for DataTables to show the number\n\t\t *\n\t\t *  @dtopt Callbacks\n\t\t *  @name DataTable.defaults.formatNumber\n\t\t *\n\t\t *  @example\n\t\t *    // Format a number using a single quote for the separator (note that\n\t\t *    // this can also be done with the language.thousands option)\n\t\t *    $(document).ready( function() {\n\t\t *      $('#example').dataTable( {\n\t\t *        \"formatNumber\": function ( toFormat ) {\n\t\t *          return toFormat.toString().replace(\n\t\t *            /\\B(?=(\\d{3})+(?!\\d))/g, \"'\"\n\t\t *          );\n\t\t *        };\n\t\t *      } );\n\t\t *    } );\n\t\t */\n\t\t\"fnFormatNumber\": function ( toFormat ) {\n\t\t\treturn toFormat.toString().replace(\n\t\t\t\t/\\B(?=(\\d{3})+(?!\\d))/g,\n\t\t\t\tthis.oLanguage.sThousands\n\t\t\t);\n\t\t},\n\t\n\t\n\t\t/**\n\t\t * This function is called on every 'draw' event, and allows you to\n\t\t * dynamically modify the header row. This can be used to calculate and\n\t\t * display useful information about the table.\n\t\t *  @type function\n\t\t *  @param {node} head \"TR\" element for the header\n\t\t *  @param {array} data Full table data (as derived from the original HTML)\n\t\t *  @param {int} start Index for the current display starting point in the\n\t\t *    display array\n\t\t *  @param {int} end Index for the current display ending point in the\n\t\t *    display array\n\t\t *  @param {array int} display Index array to translate the visual position\n\t\t *    to the full data array\n\t\t *\n\t\t *  @dtopt Callbacks\n\t\t *  @name DataTable.defaults.headerCallback\n\t\t *\n\t\t *  @example\n\t\t *    $(document).ready( function() {\n\t\t *      $('#example').dataTable( {\n\t\t *        \"fheaderCallback\": function( head, data, start, end, display ) {\n\t\t *          head.getElementsByTagName('th')[0].innerHTML = \"Displaying \"+(end-start)+\" records\";\n\t\t *        }\n\t\t *      } );\n\t\t *    } )\n\t\t */\n\t\t\"fnHeaderCallback\": null,\n\t\n\t\n\t\t/**\n\t\t * The information element can be used to convey information about the current\n\t\t * state of the table. Although the internationalisation options presented by\n\t\t * DataTables are quite capable of dealing with most customisations, there may\n\t\t * be times where you wish to customise the string further. This callback\n\t\t * allows you to do exactly that.\n\t\t *  @type function\n\t\t *  @param {object} oSettings DataTables settings object\n\t\t *  @param {int} start Starting position in data for the draw\n\t\t *  @param {int} end End position in data for the draw\n\t\t *  @param {int} max Total number of rows in the table (regardless of\n\t\t *    filtering)\n\t\t *  @param {int} total Total number of rows in the data set, after filtering\n\t\t *  @param {string} pre The string that DataTables has formatted using it's\n\t\t *    own rules\n\t\t *  @returns {string} The string to be displayed in the information element.\n\t\t *\n\t\t *  @dtopt Callbacks\n\t\t *  @name DataTable.defaults.infoCallback\n\t\t *\n\t\t *  @example\n\t\t *    $('#example').dataTable( {\n\t\t *      \"infoCallback\": function( settings, start, end, max, total, pre ) {\n\t\t *        return start +\" to \"+ end;\n\t\t *      }\n\t\t *    } );\n\t\t */\n\t\t\"fnInfoCallback\": null,\n\t\n\t\n\t\t/**\n\t\t * Called when the table has been initialised. Normally DataTables will\n\t\t * initialise sequentially and there will be no need for this function,\n\t\t * however, this does not hold true when using external language information\n\t\t * since that is obtained using an async XHR call.\n\t\t *  @type function\n\t\t *  @param {object} settings DataTables settings object\n\t\t *  @param {object} json The JSON object request from the server - only\n\t\t *    present if client-side Ajax sourced data is used\n\t\t *\n\t\t *  @dtopt Callbacks\n\t\t *  @name DataTable.defaults.initComplete\n\t\t *\n\t\t *  @example\n\t\t *    $(document).ready( function() {\n\t\t *      $('#example').dataTable( {\n\t\t *        \"initComplete\": function(settings, json) {\n\t\t *          alert( 'DataTables has finished its initialisation.' );\n\t\t *        }\n\t\t *      } );\n\t\t *    } )\n\t\t */\n\t\t\"fnInitComplete\": null,\n\t\n\t\n\t\t/**\n\t\t * Called at the very start of each table draw and can be used to cancel the\n\t\t * draw by returning false, any other return (including undefined) results in\n\t\t * the full draw occurring).\n\t\t *  @type function\n\t\t *  @param {object} settings DataTables settings object\n\t\t *  @returns {boolean} False will cancel the draw, anything else (including no\n\t\t *    return) will allow it to complete.\n\t\t *\n\t\t *  @dtopt Callbacks\n\t\t *  @name DataTable.defaults.preDrawCallback\n\t\t *\n\t\t *  @example\n\t\t *    $(document).ready( function() {\n\t\t *      $('#example').dataTable( {\n\t\t *        \"preDrawCallback\": function( settings ) {\n\t\t *          if ( $('#test').val() == 1 ) {\n\t\t *            return false;\n\t\t *          }\n\t\t *        }\n\t\t *      } );\n\t\t *    } );\n\t\t */\n\t\t\"fnPreDrawCallback\": null,\n\t\n\t\n\t\t/**\n\t\t * This function allows you to 'post process' each row after it have been\n\t\t * generated for each table draw, but before it is rendered on screen. This\n\t\t * function might be used for setting the row class name etc.\n\t\t *  @type function\n\t\t *  @param {node} row \"TR\" element for the current row\n\t\t *  @param {array} data Raw data array for this row\n\t\t *  @param {int} displayIndex The display index for the current table draw\n\t\t *  @param {int} displayIndexFull The index of the data in the full list of\n\t\t *    rows (after filtering)\n\t\t *\n\t\t *  @dtopt Callbacks\n\t\t *  @name DataTable.defaults.rowCallback\n\t\t *\n\t\t *  @example\n\t\t *    $(document).ready( function() {\n\t\t *      $('#example').dataTable( {\n\t\t *        \"rowCallback\": function( row, data, displayIndex, displayIndexFull ) {\n\t\t *          // Bold the grade for all 'A' grade browsers\n\t\t *          if ( data[4] == \"A\" ) {\n\t\t *            $('td:eq(4)', row).html( '<b>A</b>' );\n\t\t *          }\n\t\t *        }\n\t\t *      } );\n\t\t *    } );\n\t\t */\n\t\t\"fnRowCallback\": null,\n\t\n\t\n\t\t/**\n\t\t * __Deprecated__ The functionality provided by this parameter has now been\n\t\t * superseded by that provided through `ajax`, which should be used instead.\n\t\t *\n\t\t * This parameter allows you to override the default function which obtains\n\t\t * the data from the server so something more suitable for your application.\n\t\t * For example you could use POST data, or pull information from a Gears or\n\t\t * AIR database.\n\t\t *  @type function\n\t\t *  @member\n\t\t *  @param {string} source HTTP source to obtain the data from (`ajax`)\n\t\t *  @param {array} data A key/value pair object containing the data to send\n\t\t *    to the server\n\t\t *  @param {function} callback to be called on completion of the data get\n\t\t *    process that will draw the data on the page.\n\t\t *  @param {object} settings DataTables settings object\n\t\t *\n\t\t *  @dtopt Callbacks\n\t\t *  @dtopt Server-side\n\t\t *  @name DataTable.defaults.serverData\n\t\t *\n\t\t *  @deprecated 1.10. Please use `ajax` for this functionality now.\n\t\t */\n\t\t\"fnServerData\": null,\n\t\n\t\n\t\t/**\n\t\t * __Deprecated__ The functionality provided by this parameter has now been\n\t\t * superseded by that provided through `ajax`, which should be used instead.\n\t\t *\n\t\t *  It is often useful to send extra data to the server when making an Ajax\n\t\t * request - for example custom filtering information, and this callback\n\t\t * function makes it trivial to send extra information to the server. The\n\t\t * passed in parameter is the data set that has been constructed by\n\t\t * DataTables, and you can add to this or modify it as you require.\n\t\t *  @type function\n\t\t *  @param {array} data Data array (array of objects which are name/value\n\t\t *    pairs) that has been constructed by DataTables and will be sent to the\n\t\t *    server. In the case of Ajax sourced data with server-side processing\n\t\t *    this will be an empty array, for server-side processing there will be a\n\t\t *    significant number of parameters!\n\t\t *  @returns {undefined} Ensure that you modify the data array passed in,\n\t\t *    as this is passed by reference.\n\t\t *\n\t\t *  @dtopt Callbacks\n\t\t *  @dtopt Server-side\n\t\t *  @name DataTable.defaults.serverParams\n\t\t *\n\t\t *  @deprecated 1.10. Please use `ajax` for this functionality now.\n\t\t */\n\t\t\"fnServerParams\": null,\n\t\n\t\n\t\t/**\n\t\t * Load the table state. With this function you can define from where, and how, the\n\t\t * state of a table is loaded. By default DataTables will load from `localStorage`\n\t\t * but you might wish to use a server-side database or cookies.\n\t\t *  @type function\n\t\t *  @member\n\t\t *  @param {object} settings DataTables settings object\n\t\t *  @param {object} callback Callback that can be executed when done. It\n\t\t *    should be passed the loaded state object.\n\t\t *  @return {object} The DataTables state object to be loaded\n\t\t *\n\t\t *  @dtopt Callbacks\n\t\t *  @name DataTable.defaults.stateLoadCallback\n\t\t *\n\t\t *  @example\n\t\t *    $(document).ready( function() {\n\t\t *      $('#example').dataTable( {\n\t\t *        \"stateSave\": true,\n\t\t *        \"stateLoadCallback\": function (settings, callback) {\n\t\t *          $.ajax( {\n\t\t *            \"url\": \"/state_load\",\n\t\t *            \"dataType\": \"json\",\n\t\t *            \"success\": function (json) {\n\t\t *              callback( json );\n\t\t *            }\n\t\t *          } );\n\t\t *        }\n\t\t *      } );\n\t\t *    } );\n\t\t */\n\t\t\"fnStateLoadCallback\": function ( settings ) {\n\t\t\ttry {\n\t\t\t\treturn JSON.parse(\n\t\t\t\t\t(settings.iStateDuration === -1 ? sessionStorage : localStorage).getItem(\n\t\t\t\t\t\t'DataTables_'+settings.sInstance+'_'+location.pathname\n\t\t\t\t\t)\n\t\t\t\t);\n\t\t\t} catch (e) {}\n\t\t},\n\t\n\t\n\t\t/**\n\t\t * Callback which allows modification of the saved state prior to loading that state.\n\t\t * This callback is called when the table is loading state from the stored data, but\n\t\t * prior to the settings object being modified by the saved state. Note that for\n\t\t * plug-in authors, you should use the `stateLoadParams` event to load parameters for\n\t\t * a plug-in.\n\t\t *  @type function\n\t\t *  @param {object} settings DataTables settings object\n\t\t *  @param {object} data The state object that is to be loaded\n\t\t *\n\t\t *  @dtopt Callbacks\n\t\t *  @name DataTable.defaults.stateLoadParams\n\t\t *\n\t\t *  @example\n\t\t *    // Remove a saved filter, so filtering is never loaded\n\t\t *    $(document).ready( function() {\n\t\t *      $('#example').dataTable( {\n\t\t *        \"stateSave\": true,\n\t\t *        \"stateLoadParams\": function (settings, data) {\n\t\t *          data.oSearch.sSearch = \"\";\n\t\t *        }\n\t\t *      } );\n\t\t *    } );\n\t\t *\n\t\t *  @example\n\t\t *    // Disallow state loading by returning false\n\t\t *    $(document).ready( function() {\n\t\t *      $('#example').dataTable( {\n\t\t *        \"stateSave\": true,\n\t\t *        \"stateLoadParams\": function (settings, data) {\n\t\t *          return false;\n\t\t *        }\n\t\t *      } );\n\t\t *    } );\n\t\t */\n\t\t\"fnStateLoadParams\": null,\n\t\n\t\n\t\t/**\n\t\t * Callback that is called when the state has been loaded from the state saving method\n\t\t * and the DataTables settings object has been modified as a result of the loaded state.\n\t\t *  @type function\n\t\t *  @param {object} settings DataTables settings object\n\t\t *  @param {object} data The state object that was loaded\n\t\t *\n\t\t *  @dtopt Callbacks\n\t\t *  @name DataTable.defaults.stateLoaded\n\t\t *\n\t\t *  @example\n\t\t *    // Show an alert with the filtering value that was saved\n\t\t *    $(document).ready( function() {\n\t\t *      $('#example').dataTable( {\n\t\t *        \"stateSave\": true,\n\t\t *        \"stateLoaded\": function (settings, data) {\n\t\t *          alert( 'Saved filter was: '+data.oSearch.sSearch );\n\t\t *        }\n\t\t *      } );\n\t\t *    } );\n\t\t */\n\t\t\"fnStateLoaded\": null,\n\t\n\t\n\t\t/**\n\t\t * Save the table state. This function allows you to define where and how the state\n\t\t * information for the table is stored By default DataTables will use `localStorage`\n\t\t * but you might wish to use a server-side database or cookies.\n\t\t *  @type function\n\t\t *  @member\n\t\t *  @param {object} settings DataTables settings object\n\t\t *  @param {object} data The state object to be saved\n\t\t *\n\t\t *  @dtopt Callbacks\n\t\t *  @name DataTable.defaults.stateSaveCallback\n\t\t *\n\t\t *  @example\n\t\t *    $(document).ready( function() {\n\t\t *      $('#example').dataTable( {\n\t\t *        \"stateSave\": true,\n\t\t *        \"stateSaveCallback\": function (settings, data) {\n\t\t *          // Send an Ajax request to the server with the state object\n\t\t *          $.ajax( {\n\t\t *            \"url\": \"/state_save\",\n\t\t *            \"data\": data,\n\t\t *            \"dataType\": \"json\",\n\t\t *            \"method\": \"POST\"\n\t\t *            \"success\": function () {}\n\t\t *          } );\n\t\t *        }\n\t\t *      } );\n\t\t *    } );\n\t\t */\n\t\t\"fnStateSaveCallback\": function ( settings, data ) {\n\t\t\ttry {\n\t\t\t\t(settings.iStateDuration === -1 ? sessionStorage : localStorage).setItem(\n\t\t\t\t\t'DataTables_'+settings.sInstance+'_'+location.pathname,\n\t\t\t\t\tJSON.stringify( data )\n\t\t\t\t);\n\t\t\t} catch (e) {}\n\t\t},\n\t\n\t\n\t\t/**\n\t\t * Callback which allows modification of the state to be saved. Called when the table\n\t\t * has changed state a new state save is required. This method allows modification of\n\t\t * the state saving object prior to actually doing the save, including addition or\n\t\t * other state properties or modification. Note that for plug-in authors, you should\n\t\t * use the `stateSaveParams` event to save parameters for a plug-in.\n\t\t *  @type function\n\t\t *  @param {object} settings DataTables settings object\n\t\t *  @param {object} data The state object to be saved\n\t\t *\n\t\t *  @dtopt Callbacks\n\t\t *  @name DataTable.defaults.stateSaveParams\n\t\t *\n\t\t *  @example\n\t\t *    // Remove a saved filter, so filtering is never saved\n\t\t *    $(document).ready( function() {\n\t\t *      $('#example').dataTable( {\n\t\t *        \"stateSave\": true,\n\t\t *        \"stateSaveParams\": function (settings, data) {\n\t\t *          data.oSearch.sSearch = \"\";\n\t\t *        }\n\t\t *      } );\n\t\t *    } );\n\t\t */\n\t\t\"fnStateSaveParams\": null,\n\t\n\t\n\t\t/**\n\t\t * Duration for which the saved state information is considered valid. After this period\n\t\t * has elapsed the state will be returned to the default.\n\t\t * Value is given in seconds.\n\t\t *  @type int\n\t\t *  @default 7200 <i>(2 hours)</i>\n\t\t *\n\t\t *  @dtopt Options\n\t\t *  @name DataTable.defaults.stateDuration\n\t\t *\n\t\t *  @example\n\t\t *    $(document).ready( function() {\n\t\t *      $('#example').dataTable( {\n\t\t *        \"stateDuration\": 60*60*24; // 1 day\n\t\t *      } );\n\t\t *    } )\n\t\t */\n\t\t\"iStateDuration\": 7200,\n\t\n\t\n\t\t/**\n\t\t * When enabled DataTables will not make a request to the server for the first\n\t\t * page draw - rather it will use the data already on the page (no sorting etc\n\t\t * will be applied to it), thus saving on an XHR at load time. `deferLoading`\n\t\t * is used to indicate that deferred loading is required, but it is also used\n\t\t * to tell DataTables how many records there are in the full table (allowing\n\t\t * the information element and pagination to be displayed correctly). In the case\n\t\t * where a filtering is applied to the table on initial load, this can be\n\t\t * indicated by giving the parameter as an array, where the first element is\n\t\t * the number of records available after filtering and the second element is the\n\t\t * number of records without filtering (allowing the table information element\n\t\t * to be shown correctly).\n\t\t *  @type int | array\n\t\t *  @default null\n\t\t *\n\t\t *  @dtopt Options\n\t\t *  @name DataTable.defaults.deferLoading\n\t\t *\n\t\t *  @example\n\t\t *    // 57 records available in the table, no filtering applied\n\t\t *    $(document).ready( function() {\n\t\t *      $('#example').dataTable( {\n\t\t *        \"serverSide\": true,\n\t\t *        \"ajax\": \"scripts/server_processing.php\",\n\t\t *        \"deferLoading\": 57\n\t\t *      } );\n\t\t *    } );\n\t\t *\n\t\t *  @example\n\t\t *    // 57 records after filtering, 100 without filtering (an initial filter applied)\n\t\t *    $(document).ready( function() {\n\t\t *      $('#example').dataTable( {\n\t\t *        \"serverSide\": true,\n\t\t *        \"ajax\": \"scripts/server_processing.php\",\n\t\t *        \"deferLoading\": [ 57, 100 ],\n\t\t *        \"search\": {\n\t\t *          \"search\": \"my_filter\"\n\t\t *        }\n\t\t *      } );\n\t\t *    } );\n\t\t */\n\t\t\"iDeferLoading\": null,\n\t\n\t\n\t\t/**\n\t\t * Number of rows to display on a single page when using pagination. If\n\t\t * feature enabled (`lengthChange`) then the end user will be able to override\n\t\t * this to a custom setting using a pop-up menu.\n\t\t *  @type int\n\t\t *  @default 10\n\t\t *\n\t\t *  @dtopt Options\n\t\t *  @name DataTable.defaults.pageLength\n\t\t *\n\t\t *  @example\n\t\t *    $(document).ready( function() {\n\t\t *      $('#example').dataTable( {\n\t\t *        \"pageLength\": 50\n\t\t *      } );\n\t\t *    } )\n\t\t */\n\t\t\"iDisplayLength\": 10,\n\t\n\t\n\t\t/**\n\t\t * Define the starting point for data display when using DataTables with\n\t\t * pagination. Note that this parameter is the number of records, rather than\n\t\t * the page number, so if you have 10 records per page and want to start on\n\t\t * the third page, it should be \"20\".\n\t\t *  @type int\n\t\t *  @default 0\n\t\t *\n\t\t *  @dtopt Options\n\t\t *  @name DataTable.defaults.displayStart\n\t\t *\n\t\t *  @example\n\t\t *    $(document).ready( function() {\n\t\t *      $('#example').dataTable( {\n\t\t *        \"displayStart\": 20\n\t\t *      } );\n\t\t *    } )\n\t\t */\n\t\t\"iDisplayStart\": 0,\n\t\n\t\n\t\t/**\n\t\t * By default DataTables allows keyboard navigation of the table (sorting, paging,\n\t\t * and filtering) by adding a `tabindex` attribute to the required elements. This\n\t\t * allows you to tab through the controls and press the enter key to activate them.\n\t\t * The tabindex is default 0, meaning that the tab follows the flow of the document.\n\t\t * You can overrule this using this parameter if you wish. Use a value of -1 to\n\t\t * disable built-in keyboard navigation.\n\t\t *  @type int\n\t\t *  @default 0\n\t\t *\n\t\t *  @dtopt Options\n\t\t *  @name DataTable.defaults.tabIndex\n\t\t *\n\t\t *  @example\n\t\t *    $(document).ready( function() {\n\t\t *      $('#example').dataTable( {\n\t\t *        \"tabIndex\": 1\n\t\t *      } );\n\t\t *    } );\n\t\t */\n\t\t\"iTabIndex\": 0,\n\t\n\t\n\t\t/**\n\t\t * Classes that DataTables assigns to the various components and features\n\t\t * that it adds to the HTML table. This allows classes to be configured\n\t\t * during initialisation in addition to through the static\n\t\t * {@link DataTable.ext.oStdClasses} object).\n\t\t *  @namespace\n\t\t *  @name DataTable.defaults.classes\n\t\t */\n\t\t\"oClasses\": {},\n\t\n\t\n\t\t/**\n\t\t * All strings that DataTables uses in the user interface that it creates\n\t\t * are defined in this object, allowing you to modified them individually or\n\t\t * completely replace them all as required.\n\t\t *  @namespace\n\t\t *  @name DataTable.defaults.language\n\t\t */\n\t\t\"oLanguage\": {\n\t\t\t/**\n\t\t\t * Strings that are used for WAI-ARIA labels and controls only (these are not\n\t\t\t * actually visible on the page, but will be read by screenreaders, and thus\n\t\t\t * must be internationalised as well).\n\t\t\t *  @namespace\n\t\t\t *  @name DataTable.defaults.language.aria\n\t\t\t */\n\t\t\t\"oAria\": {\n\t\t\t\t/**\n\t\t\t\t * ARIA label that is added to the table headers when the column may be\n\t\t\t\t * sorted ascending by activing the column (click or return when focused).\n\t\t\t\t * Note that the column header is prefixed to this string.\n\t\t\t\t *  @type string\n\t\t\t\t *  @default : activate to sort column ascending\n\t\t\t\t *\n\t\t\t\t *  @dtopt Language\n\t\t\t\t *  @name DataTable.defaults.language.aria.sortAscending\n\t\t\t\t *\n\t\t\t\t *  @example\n\t\t\t\t *    $(document).ready( function() {\n\t\t\t\t *      $('#example').dataTable( {\n\t\t\t\t *        \"language\": {\n\t\t\t\t *          \"aria\": {\n\t\t\t\t *            \"sortAscending\": \" - click/return to sort ascending\"\n\t\t\t\t *          }\n\t\t\t\t *        }\n\t\t\t\t *      } );\n\t\t\t\t *    } );\n\t\t\t\t */\n\t\t\t\t\"sSortAscending\": \": activate to sort column ascending\",\n\t\n\t\t\t\t/**\n\t\t\t\t * ARIA label that is added to the table headers when the column may be\n\t\t\t\t * sorted descending by activing the column (click or return when focused).\n\t\t\t\t * Note that the column header is prefixed to this string.\n\t\t\t\t *  @type string\n\t\t\t\t *  @default : activate to sort column ascending\n\t\t\t\t *\n\t\t\t\t *  @dtopt Language\n\t\t\t\t *  @name DataTable.defaults.language.aria.sortDescending\n\t\t\t\t *\n\t\t\t\t *  @example\n\t\t\t\t *    $(document).ready( function() {\n\t\t\t\t *      $('#example').dataTable( {\n\t\t\t\t *        \"language\": {\n\t\t\t\t *          \"aria\": {\n\t\t\t\t *            \"sortDescending\": \" - click/return to sort descending\"\n\t\t\t\t *          }\n\t\t\t\t *        }\n\t\t\t\t *      } );\n\t\t\t\t *    } );\n\t\t\t\t */\n\t\t\t\t\"sSortDescending\": \": activate to sort column descending\"\n\t\t\t},\n\t\n\t\t\t/**\n\t\t\t * Pagination string used by DataTables for the built-in pagination\n\t\t\t * control types.\n\t\t\t *  @namespace\n\t\t\t *  @name DataTable.defaults.language.paginate\n\t\t\t */\n\t\t\t\"oPaginate\": {\n\t\t\t\t/**\n\t\t\t\t * Text to use when using the 'full_numbers' type of pagination for the\n\t\t\t\t * button to take the user to the first page.\n\t\t\t\t *  @type string\n\t\t\t\t *  @default First\n\t\t\t\t *\n\t\t\t\t *  @dtopt Language\n\t\t\t\t *  @name DataTable.defaults.language.paginate.first\n\t\t\t\t *\n\t\t\t\t *  @example\n\t\t\t\t *    $(document).ready( function() {\n\t\t\t\t *      $('#example').dataTable( {\n\t\t\t\t *        \"language\": {\n\t\t\t\t *          \"paginate\": {\n\t\t\t\t *            \"first\": \"First page\"\n\t\t\t\t *          }\n\t\t\t\t *        }\n\t\t\t\t *      } );\n\t\t\t\t *    } );\n\t\t\t\t */\n\t\t\t\t\"sFirst\": \"First\",\n\t\n\t\n\t\t\t\t/**\n\t\t\t\t * Text to use when using the 'full_numbers' type of pagination for the\n\t\t\t\t * button to take the user to the last page.\n\t\t\t\t *  @type string\n\t\t\t\t *  @default Last\n\t\t\t\t *\n\t\t\t\t *  @dtopt Language\n\t\t\t\t *  @name DataTable.defaults.language.paginate.last\n\t\t\t\t *\n\t\t\t\t *  @example\n\t\t\t\t *    $(document).ready( function() {\n\t\t\t\t *      $('#example').dataTable( {\n\t\t\t\t *        \"language\": {\n\t\t\t\t *          \"paginate\": {\n\t\t\t\t *            \"last\": \"Last page\"\n\t\t\t\t *          }\n\t\t\t\t *        }\n\t\t\t\t *      } );\n\t\t\t\t *    } );\n\t\t\t\t */\n\t\t\t\t\"sLast\": \"Last\",\n\t\n\t\n\t\t\t\t/**\n\t\t\t\t * Text to use for the 'next' pagination button (to take the user to the\n\t\t\t\t * next page).\n\t\t\t\t *  @type string\n\t\t\t\t *  @default Next\n\t\t\t\t *\n\t\t\t\t *  @dtopt Language\n\t\t\t\t *  @name DataTable.defaults.language.paginate.next\n\t\t\t\t *\n\t\t\t\t *  @example\n\t\t\t\t *    $(document).ready( function() {\n\t\t\t\t *      $('#example').dataTable( {\n\t\t\t\t *        \"language\": {\n\t\t\t\t *          \"paginate\": {\n\t\t\t\t *            \"next\": \"Next page\"\n\t\t\t\t *          }\n\t\t\t\t *        }\n\t\t\t\t *      } );\n\t\t\t\t *    } );\n\t\t\t\t */\n\t\t\t\t\"sNext\": \"Next\",\n\t\n\t\n\t\t\t\t/**\n\t\t\t\t * Text to use for the 'previous' pagination button (to take the user to\n\t\t\t\t * the previous page).\n\t\t\t\t *  @type string\n\t\t\t\t *  @default Previous\n\t\t\t\t *\n\t\t\t\t *  @dtopt Language\n\t\t\t\t *  @name DataTable.defaults.language.paginate.previous\n\t\t\t\t *\n\t\t\t\t *  @example\n\t\t\t\t *    $(document).ready( function() {\n\t\t\t\t *      $('#example').dataTable( {\n\t\t\t\t *        \"language\": {\n\t\t\t\t *          \"paginate\": {\n\t\t\t\t *            \"previous\": \"Previous page\"\n\t\t\t\t *          }\n\t\t\t\t *        }\n\t\t\t\t *      } );\n\t\t\t\t *    } );\n\t\t\t\t */\n\t\t\t\t\"sPrevious\": \"Previous\"\n\t\t\t},\n\t\n\t\t\t/**\n\t\t\t * This string is shown in preference to `zeroRecords` when the table is\n\t\t\t * empty of data (regardless of filtering). Note that this is an optional\n\t\t\t * parameter - if it is not given, the value of `zeroRecords` will be used\n\t\t\t * instead (either the default or given value).\n\t\t\t *  @type string\n\t\t\t *  @default No data available in table\n\t\t\t *\n\t\t\t *  @dtopt Language\n\t\t\t *  @name DataTable.defaults.language.emptyTable\n\t\t\t *\n\t\t\t *  @example\n\t\t\t *    $(document).ready( function() {\n\t\t\t *      $('#example').dataTable( {\n\t\t\t *        \"language\": {\n\t\t\t *          \"emptyTable\": \"No data available in table\"\n\t\t\t *        }\n\t\t\t *      } );\n\t\t\t *    } );\n\t\t\t */\n\t\t\t\"sEmptyTable\": \"No data available in table\",\n\t\n\t\n\t\t\t/**\n\t\t\t * This string gives information to the end user about the information\n\t\t\t * that is current on display on the page. The following tokens can be\n\t\t\t * used in the string and will be dynamically replaced as the table\n\t\t\t * display updates. This tokens can be placed anywhere in the string, or\n\t\t\t * removed as needed by the language requires:\n\t\t\t *\n\t\t\t * * `\\_START\\_` - Display index of the first record on the current page\n\t\t\t * * `\\_END\\_` - Display index of the last record on the current page\n\t\t\t * * `\\_TOTAL\\_` - Number of records in the table after filtering\n\t\t\t * * `\\_MAX\\_` - Number of records in the table without filtering\n\t\t\t * * `\\_PAGE\\_` - Current page number\n\t\t\t * * `\\_PAGES\\_` - Total number of pages of data in the table\n\t\t\t *\n\t\t\t *  @type string\n\t\t\t *  @default Showing _START_ to _END_ of _TOTAL_ entries\n\t\t\t *\n\t\t\t *  @dtopt Language\n\t\t\t *  @name DataTable.defaults.language.info\n\t\t\t *\n\t\t\t *  @example\n\t\t\t *    $(document).ready( function() {\n\t\t\t *      $('#example').dataTable( {\n\t\t\t *        \"language\": {\n\t\t\t *          \"info\": \"Showing page _PAGE_ of _PAGES_\"\n\t\t\t *        }\n\t\t\t *      } );\n\t\t\t *    } );\n\t\t\t */\n\t\t\t\"sInfo\": \"Showing _START_ to _END_ of _TOTAL_ entries\",\n\t\n\t\n\t\t\t/**\n\t\t\t * Display information string for when the table is empty. Typically the\n\t\t\t * format of this string should match `info`.\n\t\t\t *  @type string\n\t\t\t *  @default Showing 0 to 0 of 0 entries\n\t\t\t *\n\t\t\t *  @dtopt Language\n\t\t\t *  @name DataTable.defaults.language.infoEmpty\n\t\t\t *\n\t\t\t *  @example\n\t\t\t *    $(document).ready( function() {\n\t\t\t *      $('#example').dataTable( {\n\t\t\t *        \"language\": {\n\t\t\t *          \"infoEmpty\": \"No entries to show\"\n\t\t\t *        }\n\t\t\t *      } );\n\t\t\t *    } );\n\t\t\t */\n\t\t\t\"sInfoEmpty\": \"Showing 0 to 0 of 0 entries\",\n\t\n\t\n\t\t\t/**\n\t\t\t * When a user filters the information in a table, this string is appended\n\t\t\t * to the information (`info`) to give an idea of how strong the filtering\n\t\t\t * is. The variable _MAX_ is dynamically updated.\n\t\t\t *  @type string\n\t\t\t *  @default (filtered from _MAX_ total entries)\n\t\t\t *\n\t\t\t *  @dtopt Language\n\t\t\t *  @name DataTable.defaults.language.infoFiltered\n\t\t\t *\n\t\t\t *  @example\n\t\t\t *    $(document).ready( function() {\n\t\t\t *      $('#example').dataTable( {\n\t\t\t *        \"language\": {\n\t\t\t *          \"infoFiltered\": \" - filtering from _MAX_ records\"\n\t\t\t *        }\n\t\t\t *      } );\n\t\t\t *    } );\n\t\t\t */\n\t\t\t\"sInfoFiltered\": \"(filtered from _MAX_ total entries)\",\n\t\n\t\n\t\t\t/**\n\t\t\t * If can be useful to append extra information to the info string at times,\n\t\t\t * and this variable does exactly that. This information will be appended to\n\t\t\t * the `info` (`infoEmpty` and `infoFiltered` in whatever combination they are\n\t\t\t * being used) at all times.\n\t\t\t *  @type string\n\t\t\t *  @default <i>Empty string</i>\n\t\t\t *\n\t\t\t *  @dtopt Language\n\t\t\t *  @name DataTable.defaults.language.infoPostFix\n\t\t\t *\n\t\t\t *  @example\n\t\t\t *    $(document).ready( function() {\n\t\t\t *      $('#example').dataTable( {\n\t\t\t *        \"language\": {\n\t\t\t *          \"infoPostFix\": \"All records shown are derived from real information.\"\n\t\t\t *        }\n\t\t\t *      } );\n\t\t\t *    } );\n\t\t\t */\n\t\t\t\"sInfoPostFix\": \"\",\n\t\n\t\n\t\t\t/**\n\t\t\t * This decimal place operator is a little different from the other\n\t\t\t * language options since DataTables doesn't output floating point\n\t\t\t * numbers, so it won't ever use this for display of a number. Rather,\n\t\t\t * what this parameter does is modify the sort methods of the table so\n\t\t\t * that numbers which are in a format which has a character other than\n\t\t\t * a period (`.`) as a decimal place will be sorted numerically.\n\t\t\t *\n\t\t\t * Note that numbers with different decimal places cannot be shown in\n\t\t\t * the same table and still be sortable, the table must be consistent.\n\t\t\t * However, multiple different tables on the page can use different\n\t\t\t * decimal place characters.\n\t\t\t *  @type string\n\t\t\t *  @default \n\t\t\t *\n\t\t\t *  @dtopt Language\n\t\t\t *  @name DataTable.defaults.language.decimal\n\t\t\t *\n\t\t\t *  @example\n\t\t\t *    $(document).ready( function() {\n\t\t\t *      $('#example').dataTable( {\n\t\t\t *        \"language\": {\n\t\t\t *          \"decimal\": \",\"\n\t\t\t *          \"thousands\": \".\"\n\t\t\t *        }\n\t\t\t *      } );\n\t\t\t *    } );\n\t\t\t */\n\t\t\t\"sDecimal\": \"\",\n\t\n\t\n\t\t\t/**\n\t\t\t * DataTables has a build in number formatter (`formatNumber`) which is\n\t\t\t * used to format large numbers that are used in the table information.\n\t\t\t * By default a comma is used, but this can be trivially changed to any\n\t\t\t * character you wish with this parameter.\n\t\t\t *  @type string\n\t\t\t *  @default ,\n\t\t\t *\n\t\t\t *  @dtopt Language\n\t\t\t *  @name DataTable.defaults.language.thousands\n\t\t\t *\n\t\t\t *  @example\n\t\t\t *    $(document).ready( function() {\n\t\t\t *      $('#example').dataTable( {\n\t\t\t *        \"language\": {\n\t\t\t *          \"thousands\": \"'\"\n\t\t\t *        }\n\t\t\t *      } );\n\t\t\t *    } );\n\t\t\t */\n\t\t\t\"sThousands\": \",\",\n\t\n\t\n\t\t\t/**\n\t\t\t * Detail the action that will be taken when the drop down menu for the\n\t\t\t * pagination length option is changed. The '_MENU_' variable is replaced\n\t\t\t * with a default select list of 10, 25, 50 and 100, and can be replaced\n\t\t\t * with a custom select box if required.\n\t\t\t *  @type string\n\t\t\t *  @default Show _MENU_ entries\n\t\t\t *\n\t\t\t *  @dtopt Language\n\t\t\t *  @name DataTable.defaults.language.lengthMenu\n\t\t\t *\n\t\t\t *  @example\n\t\t\t *    // Language change only\n\t\t\t *    $(document).ready( function() {\n\t\t\t *      $('#example').dataTable( {\n\t\t\t *        \"language\": {\n\t\t\t *          \"lengthMenu\": \"Display _MENU_ records\"\n\t\t\t *        }\n\t\t\t *      } );\n\t\t\t *    } );\n\t\t\t *\n\t\t\t *  @example\n\t\t\t *    // Language and options change\n\t\t\t *    $(document).ready( function() {\n\t\t\t *      $('#example').dataTable( {\n\t\t\t *        \"language\": {\n\t\t\t *          \"lengthMenu\": 'Display <select>'+\n\t\t\t *            '<option value=\"10\">10</option>'+\n\t\t\t *            '<option value=\"20\">20</option>'+\n\t\t\t *            '<option value=\"30\">30</option>'+\n\t\t\t *            '<option value=\"40\">40</option>'+\n\t\t\t *            '<option value=\"50\">50</option>'+\n\t\t\t *            '<option value=\"-1\">All</option>'+\n\t\t\t *            '</select> records'\n\t\t\t *        }\n\t\t\t *      } );\n\t\t\t *    } );\n\t\t\t */\n\t\t\t\"sLengthMenu\": \"Show _MENU_ entries\",\n\t\n\t\n\t\t\t/**\n\t\t\t * When using Ajax sourced data and during the first draw when DataTables is\n\t\t\t * gathering the data, this message is shown in an empty row in the table to\n\t\t\t * indicate to the end user the the data is being loaded. Note that this\n\t\t\t * parameter is not used when loading data by server-side processing, just\n\t\t\t * Ajax sourced data with client-side processing.\n\t\t\t *  @type string\n\t\t\t *  @default Loading...\n\t\t\t *\n\t\t\t *  @dtopt Language\n\t\t\t *  @name DataTable.defaults.language.loadingRecords\n\t\t\t *\n\t\t\t *  @example\n\t\t\t *    $(document).ready( function() {\n\t\t\t *      $('#example').dataTable( {\n\t\t\t *        \"language\": {\n\t\t\t *          \"loadingRecords\": \"Please wait - loading...\"\n\t\t\t *        }\n\t\t\t *      } );\n\t\t\t *    } );\n\t\t\t */\n\t\t\t\"sLoadingRecords\": \"Loading...\",\n\t\n\t\n\t\t\t/**\n\t\t\t * Text which is displayed when the table is processing a user action\n\t\t\t * (usually a sort command or similar).\n\t\t\t *  @type string\n\t\t\t *  @default Processing...\n\t\t\t *\n\t\t\t *  @dtopt Language\n\t\t\t *  @name DataTable.defaults.language.processing\n\t\t\t *\n\t\t\t *  @example\n\t\t\t *    $(document).ready( function() {\n\t\t\t *      $('#example').dataTable( {\n\t\t\t *        \"language\": {\n\t\t\t *          \"processing\": \"DataTables is currently busy\"\n\t\t\t *        }\n\t\t\t *      } );\n\t\t\t *    } );\n\t\t\t */\n\t\t\t\"sProcessing\": \"Processing...\",\n\t\n\t\n\t\t\t/**\n\t\t\t * Details the actions that will be taken when the user types into the\n\t\t\t * filtering input text box. The variable \"_INPUT_\", if used in the string,\n\t\t\t * is replaced with the HTML text box for the filtering input allowing\n\t\t\t * control over where it appears in the string. If \"_INPUT_\" is not given\n\t\t\t * then the input box is appended to the string automatically.\n\t\t\t *  @type string\n\t\t\t *  @default Search:\n\t\t\t *\n\t\t\t *  @dtopt Language\n\t\t\t *  @name DataTable.defaults.language.search\n\t\t\t *\n\t\t\t *  @example\n\t\t\t *    // Input text box will be appended at the end automatically\n\t\t\t *    $(document).ready( function() {\n\t\t\t *      $('#example').dataTable( {\n\t\t\t *        \"language\": {\n\t\t\t *          \"search\": \"Filter records:\"\n\t\t\t *        }\n\t\t\t *      } );\n\t\t\t *    } );\n\t\t\t *\n\t\t\t *  @example\n\t\t\t *    // Specify where the filter should appear\n\t\t\t *    $(document).ready( function() {\n\t\t\t *      $('#example').dataTable( {\n\t\t\t *        \"language\": {\n\t\t\t *          \"search\": \"Apply filter _INPUT_ to table\"\n\t\t\t *        }\n\t\t\t *      } );\n\t\t\t *    } );\n\t\t\t */\n\t\t\t\"sSearch\": \"Search:\",\n\t\n\t\n\t\t\t/**\n\t\t\t * Assign a `placeholder` attribute to the search `input` element\n\t\t\t *  @type string\n\t\t\t *  @default \n\t\t\t *\n\t\t\t *  @dtopt Language\n\t\t\t *  @name DataTable.defaults.language.searchPlaceholder\n\t\t\t */\n\t\t\t\"sSearchPlaceholder\": \"\",\n\t\n\t\n\t\t\t/**\n\t\t\t * All of the language information can be stored in a file on the\n\t\t\t * server-side, which DataTables will look up if this parameter is passed.\n\t\t\t * It must store the URL of the language file, which is in a JSON format,\n\t\t\t * and the object has the same properties as the oLanguage object in the\n\t\t\t * initialiser object (i.e. the above parameters). Please refer to one of\n\t\t\t * the example language files to see how this works in action.\n\t\t\t *  @type string\n\t\t\t *  @default <i>Empty string - i.e. disabled</i>\n\t\t\t *\n\t\t\t *  @dtopt Language\n\t\t\t *  @name DataTable.defaults.language.url\n\t\t\t *\n\t\t\t *  @example\n\t\t\t *    $(document).ready( function() {\n\t\t\t *      $('#example').dataTable( {\n\t\t\t *        \"language\": {\n\t\t\t *          \"url\": \"http://www.sprymedia.co.uk/dataTables/lang.txt\"\n\t\t\t *        }\n\t\t\t *      } );\n\t\t\t *    } );\n\t\t\t */\n\t\t\t\"sUrl\": \"\",\n\t\n\t\n\t\t\t/**\n\t\t\t * Text shown inside the table records when the is no information to be\n\t\t\t * displayed after filtering. `emptyTable` is shown when there is simply no\n\t\t\t * information in the table at all (regardless of filtering).\n\t\t\t *  @type string\n\t\t\t *  @default No matching records found\n\t\t\t *\n\t\t\t *  @dtopt Language\n\t\t\t *  @name DataTable.defaults.language.zeroRecords\n\t\t\t *\n\t\t\t *  @example\n\t\t\t *    $(document).ready( function() {\n\t\t\t *      $('#example').dataTable( {\n\t\t\t *        \"language\": {\n\t\t\t *          \"zeroRecords\": \"No records to display\"\n\t\t\t *        }\n\t\t\t *      } );\n\t\t\t *    } );\n\t\t\t */\n\t\t\t\"sZeroRecords\": \"No matching records found\"\n\t\t},\n\t\n\t\n\t\t/**\n\t\t * This parameter allows you to have define the global filtering state at\n\t\t * initialisation time. As an object the `search` parameter must be\n\t\t * defined, but all other parameters are optional. When `regex` is true,\n\t\t * the search string will be treated as a regular expression, when false\n\t\t * (default) it will be treated as a straight string. When `smart`\n\t\t * DataTables will use it's smart filtering methods (to word match at\n\t\t * any point in the data), when false this will not be done.\n\t\t *  @namespace\n\t\t *  @extends DataTable.models.oSearch\n\t\t *\n\t\t *  @dtopt Options\n\t\t *  @name DataTable.defaults.search\n\t\t *\n\t\t *  @example\n\t\t *    $(document).ready( function() {\n\t\t *      $('#example').dataTable( {\n\t\t *        \"search\": {\"search\": \"Initial search\"}\n\t\t *      } );\n\t\t *    } )\n\t\t */\n\t\t\"oSearch\": $.extend( {}, DataTable.models.oSearch ),\n\t\n\t\n\t\t/**\n\t\t * __Deprecated__ The functionality provided by this parameter has now been\n\t\t * superseded by that provided through `ajax`, which should be used instead.\n\t\t *\n\t\t * By default DataTables will look for the property `data` (or `aaData` for\n\t\t * compatibility with DataTables 1.9-) when obtaining data from an Ajax\n\t\t * source or for server-side processing - this parameter allows that\n\t\t * property to be changed. You can use Javascript dotted object notation to\n\t\t * get a data source for multiple levels of nesting.\n\t\t *  @type string\n\t\t *  @default data\n\t\t *\n\t\t *  @dtopt Options\n\t\t *  @dtopt Server-side\n\t\t *  @name DataTable.defaults.ajaxDataProp\n\t\t *\n\t\t *  @deprecated 1.10. Please use `ajax` for this functionality now.\n\t\t */\n\t\t\"sAjaxDataProp\": \"data\",\n\t\n\t\n\t\t/**\n\t\t * __Deprecated__ The functionality provided by this parameter has now been\n\t\t * superseded by that provided through `ajax`, which should be used instead.\n\t\t *\n\t\t * You can instruct DataTables to load data from an external\n\t\t * source using this parameter (use aData if you want to pass data in you\n\t\t * already have). Simply provide a url a JSON object can be obtained from.\n\t\t *  @type string\n\t\t *  @default null\n\t\t *\n\t\t *  @dtopt Options\n\t\t *  @dtopt Server-side\n\t\t *  @name DataTable.defaults.ajaxSource\n\t\t *\n\t\t *  @deprecated 1.10. Please use `ajax` for this functionality now.\n\t\t */\n\t\t\"sAjaxSource\": null,\n\t\n\t\n\t\t/**\n\t\t * This initialisation variable allows you to specify exactly where in the\n\t\t * DOM you want DataTables to inject the various controls it adds to the page\n\t\t * (for example you might want the pagination controls at the top of the\n\t\t * table). DIV elements (with or without a custom class) can also be added to\n\t\t * aid styling. The follow syntax is used:\n\t\t *   <ul>\n\t\t *     <li>The following options are allowed:\n\t\t *       <ul>\n\t\t *         <li>'l' - Length changing</li>\n\t\t *         <li>'f' - Filtering input</li>\n\t\t *         <li>'t' - The table!</li>\n\t\t *         <li>'i' - Information</li>\n\t\t *         <li>'p' - Pagination</li>\n\t\t *         <li>'r' - pRocessing</li>\n\t\t *       </ul>\n\t\t *     </li>\n\t\t *     <li>The following constants are allowed:\n\t\t *       <ul>\n\t\t *         <li>'H' - jQueryUI theme \"header\" classes ('fg-toolbar ui-widget-header ui-corner-tl ui-corner-tr ui-helper-clearfix')</li>\n\t\t *         <li>'F' - jQueryUI theme \"footer\" classes ('fg-toolbar ui-widget-header ui-corner-bl ui-corner-br ui-helper-clearfix')</li>\n\t\t *       </ul>\n\t\t *     </li>\n\t\t *     <li>The following syntax is expected:\n\t\t *       <ul>\n\t\t *         <li>'&lt;' and '&gt;' - div elements</li>\n\t\t *         <li>'&lt;\"class\" and '&gt;' - div with a class</li>\n\t\t *         <li>'&lt;\"#id\" and '&gt;' - div with an ID</li>\n\t\t *       </ul>\n\t\t *     </li>\n\t\t *     <li>Examples:\n\t\t *       <ul>\n\t\t *         <li>'&lt;\"wrapper\"flipt&gt;'</li>\n\t\t *         <li>'&lt;lf&lt;t&gt;ip&gt;'</li>\n\t\t *       </ul>\n\t\t *     </li>\n\t\t *   </ul>\n\t\t *  @type string\n\t\t *  @default lfrtip <i>(when `jQueryUI` is false)</i> <b>or</b>\n\t\t *    <\"H\"lfr>t<\"F\"ip> <i>(when `jQueryUI` is true)</i>\n\t\t *\n\t\t *  @dtopt Options\n\t\t *  @name DataTable.defaults.dom\n\t\t *\n\t\t *  @example\n\t\t *    $(document).ready( function() {\n\t\t *      $('#example').dataTable( {\n\t\t *        \"dom\": '&lt;\"top\"i&gt;rt&lt;\"bottom\"flp&gt;&lt;\"clear\"&gt;'\n\t\t *      } );\n\t\t *    } );\n\t\t */\n\t\t\"sDom\": \"lfrtip\",\n\t\n\t\n\t\t/**\n\t\t * Search delay option. This will throttle full table searches that use the\n\t\t * DataTables provided search input element (it does not effect calls to\n\t\t * `dt-api search()`, providing a delay before the search is made.\n\t\t *  @type integer\n\t\t *  @default 0\n\t\t *\n\t\t *  @dtopt Options\n\t\t *  @name DataTable.defaults.searchDelay\n\t\t *\n\t\t *  @example\n\t\t *    $(document).ready( function() {\n\t\t *      $('#example').dataTable( {\n\t\t *        \"searchDelay\": 200\n\t\t *      } );\n\t\t *    } )\n\t\t */\n\t\t\"searchDelay\": null,\n\t\n\t\n\t\t/**\n\t\t * DataTables features six different built-in options for the buttons to\n\t\t * display for pagination control:\n\t\t *\n\t\t * * `numbers` - Page number buttons only\n\t\t * * `simple` - 'Previous' and 'Next' buttons only\n\t\t * * 'simple_numbers` - 'Previous' and 'Next' buttons, plus page numbers\n\t\t * * `full` - 'First', 'Previous', 'Next' and 'Last' buttons\n\t\t * * `full_numbers` - 'First', 'Previous', 'Next' and 'Last' buttons, plus page numbers\n\t\t * * `first_last_numbers` - 'First' and 'Last' buttons, plus page numbers\n\t\t *  \n\t\t * Further methods can be added using {@link DataTable.ext.oPagination}.\n\t\t *  @type string\n\t\t *  @default simple_numbers\n\t\t *\n\t\t *  @dtopt Options\n\t\t *  @name DataTable.defaults.pagingType\n\t\t *\n\t\t *  @example\n\t\t *    $(document).ready( function() {\n\t\t *      $('#example').dataTable( {\n\t\t *        \"pagingType\": \"full_numbers\"\n\t\t *      } );\n\t\t *    } )\n\t\t */\n\t\t\"sPaginationType\": \"simple_numbers\",\n\t\n\t\n\t\t/**\n\t\t * Enable horizontal scrolling. When a table is too wide to fit into a\n\t\t * certain layout, or you have a large number of columns in the table, you\n\t\t * can enable x-scrolling to show the table in a viewport, which can be\n\t\t * scrolled. This property can be `true` which will allow the table to\n\t\t * scroll horizontally when needed, or any CSS unit, or a number (in which\n\t\t * case it will be treated as a pixel measurement). Setting as simply `true`\n\t\t * is recommended.\n\t\t *  @type boolean|string\n\t\t *  @default <i>blank string - i.e. disabled</i>\n\t\t *\n\t\t *  @dtopt Features\n\t\t *  @name DataTable.defaults.scrollX\n\t\t *\n\t\t *  @example\n\t\t *    $(document).ready( function() {\n\t\t *      $('#example').dataTable( {\n\t\t *        \"scrollX\": true,\n\t\t *        \"scrollCollapse\": true\n\t\t *      } );\n\t\t *    } );\n\t\t */\n\t\t\"sScrollX\": \"\",\n\t\n\t\n\t\t/**\n\t\t * This property can be used to force a DataTable to use more width than it\n\t\t * might otherwise do when x-scrolling is enabled. For example if you have a\n\t\t * table which requires to be well spaced, this parameter is useful for\n\t\t * \"over-sizing\" the table, and thus forcing scrolling. This property can by\n\t\t * any CSS unit, or a number (in which case it will be treated as a pixel\n\t\t * measurement).\n\t\t *  @type string\n\t\t *  @default <i>blank string - i.e. disabled</i>\n\t\t *\n\t\t *  @dtopt Options\n\t\t *  @name DataTable.defaults.scrollXInner\n\t\t *\n\t\t *  @example\n\t\t *    $(document).ready( function() {\n\t\t *      $('#example').dataTable( {\n\t\t *        \"scrollX\": \"100%\",\n\t\t *        \"scrollXInner\": \"110%\"\n\t\t *      } );\n\t\t *    } );\n\t\t */\n\t\t\"sScrollXInner\": \"\",\n\t\n\t\n\t\t/**\n\t\t * Enable vertical scrolling. Vertical scrolling will constrain the DataTable\n\t\t * to the given height, and enable scrolling for any data which overflows the\n\t\t * current viewport. This can be used as an alternative to paging to display\n\t\t * a lot of data in a small area (although paging and scrolling can both be\n\t\t * enabled at the same time). This property can be any CSS unit, or a number\n\t\t * (in which case it will be treated as a pixel measurement).\n\t\t *  @type string\n\t\t *  @default <i>blank string - i.e. disabled</i>\n\t\t *\n\t\t *  @dtopt Features\n\t\t *  @name DataTable.defaults.scrollY\n\t\t *\n\t\t *  @example\n\t\t *    $(document).ready( function() {\n\t\t *      $('#example').dataTable( {\n\t\t *        \"scrollY\": \"200px\",\n\t\t *        \"paginate\": false\n\t\t *      } );\n\t\t *    } );\n\t\t */\n\t\t\"sScrollY\": \"\",\n\t\n\t\n\t\t/**\n\t\t * __Deprecated__ The functionality provided by this parameter has now been\n\t\t * superseded by that provided through `ajax`, which should be used instead.\n\t\t *\n\t\t * Set the HTTP method that is used to make the Ajax call for server-side\n\t\t * processing or Ajax sourced data.\n\t\t *  @type string\n\t\t *  @default GET\n\t\t *\n\t\t *  @dtopt Options\n\t\t *  @dtopt Server-side\n\t\t *  @name DataTable.defaults.serverMethod\n\t\t *\n\t\t *  @deprecated 1.10. Please use `ajax` for this functionality now.\n\t\t */\n\t\t\"sServerMethod\": \"GET\",\n\t\n\t\n\t\t/**\n\t\t * DataTables makes use of renderers when displaying HTML elements for\n\t\t * a table. These renderers can be added or modified by plug-ins to\n\t\t * generate suitable mark-up for a site. For example the Bootstrap\n\t\t * integration plug-in for DataTables uses a paging button renderer to\n\t\t * display pagination buttons in the mark-up required by Bootstrap.\n\t\t *\n\t\t * For further information about the renderers available see\n\t\t * DataTable.ext.renderer\n\t\t *  @type string|object\n\t\t *  @default null\n\t\t *\n\t\t *  @name DataTable.defaults.renderer\n\t\t *\n\t\t */\n\t\t\"renderer\": null,\n\t\n\t\n\t\t/**\n\t\t * Set the data property name that DataTables should use to get a row's id\n\t\t * to set as the `id` property in the node.\n\t\t *  @type string\n\t\t *  @default DT_RowId\n\t\t *\n\t\t *  @name DataTable.defaults.rowId\n\t\t */\n\t\t\"rowId\": \"DT_RowId\"\n\t};\n\t\n\t_fnHungarianMap( DataTable.defaults );\n\t\n\t\n\t\n\t/*\n\t * Developer note - See note in model.defaults.js about the use of Hungarian\n\t * notation and camel case.\n\t */\n\t\n\t/**\n\t * Column options that can be given to DataTables at initialisation time.\n\t *  @namespace\n\t */\n\tDataTable.defaults.column = {\n\t\t/**\n\t\t * Define which column(s) an order will occur on for this column. This\n\t\t * allows a column's ordering to take multiple columns into account when\n\t\t * doing a sort or use the data from a different column. For example first\n\t\t * name / last name columns make sense to do a multi-column sort over the\n\t\t * two columns.\n\t\t *  @type array|int\n\t\t *  @default null <i>Takes the value of the column index automatically</i>\n\t\t *\n\t\t *  @name DataTable.defaults.column.orderData\n\t\t *  @dtopt Columns\n\t\t *\n\t\t *  @example\n\t\t *    // Using `columnDefs`\n\t\t *    $(document).ready( function() {\n\t\t *      $('#example').dataTable( {\n\t\t *        \"columnDefs\": [\n\t\t *          { \"orderData\": [ 0, 1 ], \"targets\": [ 0 ] },\n\t\t *          { \"orderData\": [ 1, 0 ], \"targets\": [ 1 ] },\n\t\t *          { \"orderData\": 2, \"targets\": [ 2 ] }\n\t\t *        ]\n\t\t *      } );\n\t\t *    } );\n\t\t *\n\t\t *  @example\n\t\t *    // Using `columns`\n\t\t *    $(document).ready( function() {\n\t\t *      $('#example').dataTable( {\n\t\t *        \"columns\": [\n\t\t *          { \"orderData\": [ 0, 1 ] },\n\t\t *          { \"orderData\": [ 1, 0 ] },\n\t\t *          { \"orderData\": 2 },\n\t\t *          null,\n\t\t *          null\n\t\t *        ]\n\t\t *      } );\n\t\t *    } );\n\t\t */\n\t\t\"aDataSort\": null,\n\t\t\"iDataSort\": -1,\n\t\n\t\n\t\t/**\n\t\t * You can control the default ordering direction, and even alter the\n\t\t * behaviour of the sort handler (i.e. only allow ascending ordering etc)\n\t\t * using this parameter.\n\t\t *  @type array\n\t\t *  @default [ 'asc', 'desc' ]\n\t\t *\n\t\t *  @name DataTable.defaults.column.orderSequence\n\t\t *  @dtopt Columns\n\t\t *\n\t\t *  @example\n\t\t *    // Using `columnDefs`\n\t\t *    $(document).ready( function() {\n\t\t *      $('#example').dataTable( {\n\t\t *        \"columnDefs\": [\n\t\t *          { \"orderSequence\": [ \"asc\" ], \"targets\": [ 1 ] },\n\t\t *          { \"orderSequence\": [ \"desc\", \"asc\", \"asc\" ], \"targets\": [ 2 ] },\n\t\t *          { \"orderSequence\": [ \"desc\" ], \"targets\": [ 3 ] }\n\t\t *        ]\n\t\t *      } );\n\t\t *    } );\n\t\t *\n\t\t *  @example\n\t\t *    // Using `columns`\n\t\t *    $(document).ready( function() {\n\t\t *      $('#example').dataTable( {\n\t\t *        \"columns\": [\n\t\t *          null,\n\t\t *          { \"orderSequence\": [ \"asc\" ] },\n\t\t *          { \"orderSequence\": [ \"desc\", \"asc\", \"asc\" ] },\n\t\t *          { \"orderSequence\": [ \"desc\" ] },\n\t\t *          null\n\t\t *        ]\n\t\t *      } );\n\t\t *    } );\n\t\t */\n\t\t\"asSorting\": [ 'asc', 'desc' ],\n\t\n\t\n\t\t/**\n\t\t * Enable or disable filtering on the data in this column.\n\t\t *  @type boolean\n\t\t *  @default true\n\t\t *\n\t\t *  @name DataTable.defaults.column.searchable\n\t\t *  @dtopt Columns\n\t\t *\n\t\t *  @example\n\t\t *    // Using `columnDefs`\n\t\t *    $(document).ready( function() {\n\t\t *      $('#example').dataTable( {\n\t\t *        \"columnDefs\": [\n\t\t *          { \"searchable\": false, \"targets\": [ 0 ] }\n\t\t *        ] } );\n\t\t *    } );\n\t\t *\n\t\t *  @example\n\t\t *    // Using `columns`\n\t\t *    $(document).ready( function() {\n\t\t *      $('#example').dataTable( {\n\t\t *        \"columns\": [\n\t\t *          { \"searchable\": false },\n\t\t *          null,\n\t\t *          null,\n\t\t *          null,\n\t\t *          null\n\t\t *        ] } );\n\t\t *    } );\n\t\t */\n\t\t\"bSearchable\": true,\n\t\n\t\n\t\t/**\n\t\t * Enable or disable ordering on this column.\n\t\t *  @type boolean\n\t\t *  @default true\n\t\t *\n\t\t *  @name DataTable.defaults.column.orderable\n\t\t *  @dtopt Columns\n\t\t *\n\t\t *  @example\n\t\t *    // Using `columnDefs`\n\t\t *    $(document).ready( function() {\n\t\t *      $('#example').dataTable( {\n\t\t *        \"columnDefs\": [\n\t\t *          { \"orderable\": false, \"targets\": [ 0 ] }\n\t\t *        ] } );\n\t\t *    } );\n\t\t *\n\t\t *  @example\n\t\t *    // Using `columns`\n\t\t *    $(document).ready( function() {\n\t\t *      $('#example').dataTable( {\n\t\t *        \"columns\": [\n\t\t *          { \"orderable\": false },\n\t\t *          null,\n\t\t *          null,\n\t\t *          null,\n\t\t *          null\n\t\t *        ] } );\n\t\t *    } );\n\t\t */\n\t\t\"bSortable\": true,\n\t\n\t\n\t\t/**\n\t\t * Enable or disable the display of this column.\n\t\t *  @type boolean\n\t\t *  @default true\n\t\t *\n\t\t *  @name DataTable.defaults.column.visible\n\t\t *  @dtopt Columns\n\t\t *\n\t\t *  @example\n\t\t *    // Using `columnDefs`\n\t\t *    $(document).ready( function() {\n\t\t *      $('#example').dataTable( {\n\t\t *        \"columnDefs\": [\n\t\t *          { \"visible\": false, \"targets\": [ 0 ] }\n\t\t *        ] } );\n\t\t *    } );\n\t\t *\n\t\t *  @example\n\t\t *    // Using `columns`\n\t\t *    $(document).ready( function() {\n\t\t *      $('#example').dataTable( {\n\t\t *        \"columns\": [\n\t\t *          { \"visible\": false },\n\t\t *          null,\n\t\t *          null,\n\t\t *          null,\n\t\t *          null\n\t\t *        ] } );\n\t\t *    } );\n\t\t */\n\t\t\"bVisible\": true,\n\t\n\t\n\t\t/**\n\t\t * Developer definable function that is called whenever a cell is created (Ajax source,\n\t\t * etc) or processed for input (DOM source). This can be used as a compliment to mRender\n\t\t * allowing you to modify the DOM element (add background colour for example) when the\n\t\t * element is available.\n\t\t *  @type function\n\t\t *  @param {element} td The TD node that has been created\n\t\t *  @param {*} cellData The Data for the cell\n\t\t *  @param {array|object} rowData The data for the whole row\n\t\t *  @param {int} row The row index for the aoData data store\n\t\t *  @param {int} col The column index for aoColumns\n\t\t *\n\t\t *  @name DataTable.defaults.column.createdCell\n\t\t *  @dtopt Columns\n\t\t *\n\t\t *  @example\n\t\t *    $(document).ready( function() {\n\t\t *      $('#example').dataTable( {\n\t\t *        \"columnDefs\": [ {\n\t\t *          \"targets\": [3],\n\t\t *          \"createdCell\": function (td, cellData, rowData, row, col) {\n\t\t *            if ( cellData == \"1.7\" ) {\n\t\t *              $(td).css('color', 'blue')\n\t\t *            }\n\t\t *          }\n\t\t *        } ]\n\t\t *      });\n\t\t *    } );\n\t\t */\n\t\t\"fnCreatedCell\": null,\n\t\n\t\n\t\t/**\n\t\t * This parameter has been replaced by `data` in DataTables to ensure naming\n\t\t * consistency. `dataProp` can still be used, as there is backwards\n\t\t * compatibility in DataTables for this option, but it is strongly\n\t\t * recommended that you use `data` in preference to `dataProp`.\n\t\t *  @name DataTable.defaults.column.dataProp\n\t\t */\n\t\n\t\n\t\t/**\n\t\t * This property can be used to read data from any data source property,\n\t\t * including deeply nested objects / properties. `data` can be given in a\n\t\t * number of different ways which effect its behaviour:\n\t\t *\n\t\t * * `integer` - treated as an array index for the data source. This is the\n\t\t *   default that DataTables uses (incrementally increased for each column).\n\t\t * * `string` - read an object property from the data source. There are\n\t\t *   three 'special' options that can be used in the string to alter how\n\t\t *   DataTables reads the data from the source object:\n\t\t *    * `.` - Dotted Javascript notation. Just as you use a `.` in\n\t\t *      Javascript to read from nested objects, so to can the options\n\t\t *      specified in `data`. For example: `browser.version` or\n\t\t *      `browser.name`. If your object parameter name contains a period, use\n\t\t *      `\\\\` to escape it - i.e. `first\\\\.name`.\n\t\t *    * `[]` - Array notation. DataTables can automatically combine data\n\t\t *      from and array source, joining the data with the characters provided\n\t\t *      between the two brackets. For example: `name[, ]` would provide a\n\t\t *      comma-space separated list from the source array. If no characters\n\t\t *      are provided between the brackets, the original array source is\n\t\t *      returned.\n\t\t *    * `()` - Function notation. Adding `()` to the end of a parameter will\n\t\t *      execute a function of the name given. For example: `browser()` for a\n\t\t *      simple function on the data source, `browser.version()` for a\n\t\t *      function in a nested property or even `browser().version` to get an\n\t\t *      object property if the function called returns an object. Note that\n\t\t *      function notation is recommended for use in `render` rather than\n\t\t *      `data` as it is much simpler to use as a renderer.\n\t\t * * `null` - use the original data source for the row rather than plucking\n\t\t *   data directly from it. This action has effects on two other\n\t\t *   initialisation options:\n\t\t *    * `defaultContent` - When null is given as the `data` option and\n\t\t *      `defaultContent` is specified for the column, the value defined by\n\t\t *      `defaultContent` will be used for the cell.\n\t\t *    * `render` - When null is used for the `data` option and the `render`\n\t\t *      option is specified for the column, the whole data source for the\n\t\t *      row is used for the renderer.\n\t\t * * `function` - the function given will be executed whenever DataTables\n\t\t *   needs to set or get the data for a cell in the column. The function\n\t\t *   takes three parameters:\n\t\t *    * Parameters:\n\t\t *      * `{array|object}` The data source for the row\n\t\t *      * `{string}` The type call data requested - this will be 'set' when\n\t\t *        setting data or 'filter', 'display', 'type', 'sort' or undefined\n\t\t *        when gathering data. Note that when `undefined` is given for the\n\t\t *        type DataTables expects to get the raw data for the object back<\n\t\t *      * `{*}` Data to set when the second parameter is 'set'.\n\t\t *    * Return:\n\t\t *      * The return value from the function is not required when 'set' is\n\t\t *        the type of call, but otherwise the return is what will be used\n\t\t *        for the data requested.\n\t\t *\n\t\t * Note that `data` is a getter and setter option. If you just require\n\t\t * formatting of data for output, you will likely want to use `render` which\n\t\t * is simply a getter and thus simpler to use.\n\t\t *\n\t\t * Note that prior to DataTables 1.9.2 `data` was called `mDataProp`. The\n\t\t * name change reflects the flexibility of this property and is consistent\n\t\t * with the naming of mRender. If 'mDataProp' is given, then it will still\n\t\t * be used by DataTables, as it automatically maps the old name to the new\n\t\t * if required.\n\t\t *\n\t\t *  @type string|int|function|null\n\t\t *  @default null <i>Use automatically calculated column index</i>\n\t\t *\n\t\t *  @name DataTable.defaults.column.data\n\t\t *  @dtopt Columns\n\t\t *\n\t\t *  @example\n\t\t *    // Read table data from objects\n\t\t *    // JSON structure for each row:\n\t\t *    //   {\n\t\t *    //      \"engine\": {value},\n\t\t *    //      \"browser\": {value},\n\t\t *    //      \"platform\": {value},\n\t\t *    //      \"version\": {value},\n\t\t *    //      \"grade\": {value}\n\t\t *    //   }\n\t\t *    $(document).ready( function() {\n\t\t *      $('#example').dataTable( {\n\t\t *        \"ajaxSource\": \"sources/objects.txt\",\n\t\t *        \"columns\": [\n\t\t *          { \"data\": \"engine\" },\n\t\t *          { \"data\": \"browser\" },\n\t\t *          { \"data\": \"platform\" },\n\t\t *          { \"data\": \"version\" },\n\t\t *          { \"data\": \"grade\" }\n\t\t *        ]\n\t\t *      } );\n\t\t *    } );\n\t\t *\n\t\t *  @example\n\t\t *    // Read information from deeply nested objects\n\t\t *    // JSON structure for each row:\n\t\t *    //   {\n\t\t *    //      \"engine\": {value},\n\t\t *    //      \"browser\": {value},\n\t\t *    //      \"platform\": {\n\t\t *    //         \"inner\": {value}\n\t\t *    //      },\n\t\t *    //      \"details\": [\n\t\t *    //         {value}, {value}\n\t\t *    //      ]\n\t\t *    //   }\n\t\t *    $(document).ready( function() {\n\t\t *      $('#example').dataTable( {\n\t\t *        \"ajaxSource\": \"sources/deep.txt\",\n\t\t *        \"columns\": [\n\t\t *          { \"data\": \"engine\" },\n\t\t *          { \"data\": \"browser\" },\n\t\t *          { \"data\": \"platform.inner\" },\n\t\t *          { \"data\": \"platform.details.0\" },\n\t\t *          { \"data\": \"platform.details.1\" }\n\t\t *        ]\n\t\t *      } );\n\t\t *    } );\n\t\t *\n\t\t *  @example\n\t\t *    // Using `data` as a function to provide different information for\n\t\t *    // sorting, filtering and display. In this case, currency (price)\n\t\t *    $(document).ready( function() {\n\t\t *      $('#example').dataTable( {\n\t\t *        \"columnDefs\": [ {\n\t\t *          \"targets\": [ 0 ],\n\t\t *          \"data\": function ( source, type, val ) {\n\t\t *            if (type === 'set') {\n\t\t *              source.price = val;\n\t\t *              // Store the computed dislay and filter values for efficiency\n\t\t *              source.price_display = val==\"\" ? \"\" : \"$\"+numberFormat(val);\n\t\t *              source.price_filter  = val==\"\" ? \"\" : \"$\"+numberFormat(val)+\" \"+val;\n\t\t *              return;\n\t\t *            }\n\t\t *            else if (type === 'display') {\n\t\t *              return source.price_display;\n\t\t *            }\n\t\t *            else if (type === 'filter') {\n\t\t *              return source.price_filter;\n\t\t *            }\n\t\t *            // 'sort', 'type' and undefined all just use the integer\n\t\t *            return source.price;\n\t\t *          }\n\t\t *        } ]\n\t\t *      } );\n\t\t *    } );\n\t\t *\n\t\t *  @example\n\t\t *    // Using default content\n\t\t *    $(document).ready( function() {\n\t\t *      $('#example').dataTable( {\n\t\t *        \"columnDefs\": [ {\n\t\t *          \"targets\": [ 0 ],\n\t\t *          \"data\": null,\n\t\t *          \"defaultContent\": \"Click to edit\"\n\t\t *        } ]\n\t\t *      } );\n\t\t *    } );\n\t\t *\n\t\t *  @example\n\t\t *    // Using array notation - outputting a list from an array\n\t\t *    $(document).ready( function() {\n\t\t *      $('#example').dataTable( {\n\t\t *        \"columnDefs\": [ {\n\t\t *          \"targets\": [ 0 ],\n\t\t *          \"data\": \"name[, ]\"\n\t\t *        } ]\n\t\t *      } );\n\t\t *    } );\n\t\t *\n\t\t */\n\t\t\"mData\": null,\n\t\n\t\n\t\t/**\n\t\t * This property is the rendering partner to `data` and it is suggested that\n\t\t * when you want to manipulate data for display (including filtering,\n\t\t * sorting etc) without altering the underlying data for the table, use this\n\t\t * property. `render` can be considered to be the the read only companion to\n\t\t * `data` which is read / write (then as such more complex). Like `data`\n\t\t * this option can be given in a number of different ways to effect its\n\t\t * behaviour:\n\t\t *\n\t\t * * `integer` - treated as an array index for the data source. This is the\n\t\t *   default that DataTables uses (incrementally increased for each column).\n\t\t * * `string` - read an object property from the data source. There are\n\t\t *   three 'special' options that can be used in the string to alter how\n\t\t *   DataTables reads the data from the source object:\n\t\t *    * `.` - Dotted Javascript notation. Just as you use a `.` in\n\t\t *      Javascript to read from nested objects, so to can the options\n\t\t *      specified in `data`. For example: `browser.version` or\n\t\t *      `browser.name`. If your object parameter name contains a period, use\n\t\t *      `\\\\` to escape it - i.e. `first\\\\.name`.\n\t\t *    * `[]` - Array notation. DataTables can automatically combine data\n\t\t *      from and array source, joining the data with the characters provided\n\t\t *      between the two brackets. For example: `name[, ]` would provide a\n\t\t *      comma-space separated list from the source array. If no characters\n\t\t *      are provided between the brackets, the original array source is\n\t\t *      returned.\n\t\t *    * `()` - Function notation. Adding `()` to the end of a parameter will\n\t\t *      execute a function of the name given. For example: `browser()` for a\n\t\t *      simple function on the data source, `browser.version()` for a\n\t\t *      function in a nested property or even `browser().version` to get an\n\t\t *      object property if the function called returns an object.\n\t\t * * `object` - use different data for the different data types requested by\n\t\t *   DataTables ('filter', 'display', 'type' or 'sort'). The property names\n\t\t *   of the object is the data type the property refers to and the value can\n\t\t *   defined using an integer, string or function using the same rules as\n\t\t *   `render` normally does. Note that an `_` option _must_ be specified.\n\t\t *   This is the default value to use if you haven't specified a value for\n\t\t *   the data type requested by DataTables.\n\t\t * * `function` - the function given will be executed whenever DataTables\n\t\t *   needs to set or get the data for a cell in the column. The function\n\t\t *   takes three parameters:\n\t\t *    * Parameters:\n\t\t *      * {array|object} The data source for the row (based on `data`)\n\t\t *      * {string} The type call data requested - this will be 'filter',\n\t\t *        'display', 'type' or 'sort'.\n\t\t *      * {array|object} The full data source for the row (not based on\n\t\t *        `data`)\n\t\t *    * Return:\n\t\t *      * The return value from the function is what will be used for the\n\t\t *        data requested.\n\t\t *\n\t\t *  @type string|int|function|object|null\n\t\t *  @default null Use the data source value.\n\t\t *\n\t\t *  @name DataTable.defaults.column.render\n\t\t *  @dtopt Columns\n\t\t *\n\t\t *  @example\n\t\t *    // Create a comma separated list from an array of objects\n\t\t *    $(document).ready( function() {\n\t\t *      $('#example').dataTable( {\n\t\t *        \"ajaxSource\": \"sources/deep.txt\",\n\t\t *        \"columns\": [\n\t\t *          { \"data\": \"engine\" },\n\t\t *          { \"data\": \"browser\" },\n\t\t *          {\n\t\t *            \"data\": \"platform\",\n\t\t *            \"render\": \"[, ].name\"\n\t\t *          }\n\t\t *        ]\n\t\t *      } );\n\t\t *    } );\n\t\t *\n\t\t *  @example\n\t\t *    // Execute a function to obtain data\n\t\t *    $(document).ready( function() {\n\t\t *      $('#example').dataTable( {\n\t\t *        \"columnDefs\": [ {\n\t\t *          \"targets\": [ 0 ],\n\t\t *          \"data\": null, // Use the full data source object for the renderer's source\n\t\t *          \"render\": \"browserName()\"\n\t\t *        } ]\n\t\t *      } );\n\t\t *    } );\n\t\t *\n\t\t *  @example\n\t\t *    // As an object, extracting different data for the different types\n\t\t *    // This would be used with a data source such as:\n\t\t *    //   { \"phone\": 5552368, \"phone_filter\": \"5552368 555-2368\", \"phone_display\": \"555-2368\" }\n\t\t *    // Here the `phone` integer is used for sorting and type detection, while `phone_filter`\n\t\t *    // (which has both forms) is used for filtering for if a user inputs either format, while\n\t\t *    // the formatted phone number is the one that is shown in the table.\n\t\t *    $(document).ready( function() {\n\t\t *      $('#example').dataTable( {\n\t\t *        \"columnDefs\": [ {\n\t\t *          \"targets\": [ 0 ],\n\t\t *          \"data\": null, // Use the full data source object for the renderer's source\n\t\t *          \"render\": {\n\t\t *            \"_\": \"phone\",\n\t\t *            \"filter\": \"phone_filter\",\n\t\t *            \"display\": \"phone_display\"\n\t\t *          }\n\t\t *        } ]\n\t\t *      } );\n\t\t *    } );\n\t\t *\n\t\t *  @example\n\t\t *    // Use as a function to create a link from the data source\n\t\t *    $(document).ready( function() {\n\t\t *      $('#example').dataTable( {\n\t\t *        \"columnDefs\": [ {\n\t\t *          \"targets\": [ 0 ],\n\t\t *          \"data\": \"download_link\",\n\t\t *          \"render\": function ( data, type, full ) {\n\t\t *            return '<a href=\"'+data+'\">Download</a>';\n\t\t *          }\n\t\t *        } ]\n\t\t *      } );\n\t\t *    } );\n\t\t */\n\t\t\"mRender\": null,\n\t\n\t\n\t\t/**\n\t\t * Change the cell type created for the column - either TD cells or TH cells. This\n\t\t * can be useful as TH cells have semantic meaning in the table body, allowing them\n\t\t * to act as a header for a row (you may wish to add scope='row' to the TH elements).\n\t\t *  @type string\n\t\t *  @default td\n\t\t *\n\t\t *  @name DataTable.defaults.column.cellType\n\t\t *  @dtopt Columns\n\t\t *\n\t\t *  @example\n\t\t *    // Make the first column use TH cells\n\t\t *    $(document).ready( function() {\n\t\t *      $('#example').dataTable( {\n\t\t *        \"columnDefs\": [ {\n\t\t *          \"targets\": [ 0 ],\n\t\t *          \"cellType\": \"th\"\n\t\t *        } ]\n\t\t *      } );\n\t\t *    } );\n\t\t */\n\t\t\"sCellType\": \"td\",\n\t\n\t\n\t\t/**\n\t\t * Class to give to each cell in this column.\n\t\t *  @type string\n\t\t *  @default <i>Empty string</i>\n\t\t *\n\t\t *  @name DataTable.defaults.column.class\n\t\t *  @dtopt Columns\n\t\t *\n\t\t *  @example\n\t\t *    // Using `columnDefs`\n\t\t *    $(document).ready( function() {\n\t\t *      $('#example').dataTable( {\n\t\t *        \"columnDefs\": [\n\t\t *          { \"class\": \"my_class\", \"targets\": [ 0 ] }\n\t\t *        ]\n\t\t *      } );\n\t\t *    } );\n\t\t *\n\t\t *  @example\n\t\t *    // Using `columns`\n\t\t *    $(document).ready( function() {\n\t\t *      $('#example').dataTable( {\n\t\t *        \"columns\": [\n\t\t *          { \"class\": \"my_class\" },\n\t\t *          null,\n\t\t *          null,\n\t\t *          null,\n\t\t *          null\n\t\t *        ]\n\t\t *      } );\n\t\t *    } );\n\t\t */\n\t\t\"sClass\": \"\",\n\t\n\t\t/**\n\t\t * When DataTables calculates the column widths to assign to each column,\n\t\t * it finds the longest string in each column and then constructs a\n\t\t * temporary table and reads the widths from that. The problem with this\n\t\t * is that \"mmm\" is much wider then \"iiii\", but the latter is a longer\n\t\t * string - thus the calculation can go wrong (doing it properly and putting\n\t\t * it into an DOM object and measuring that is horribly(!) slow). Thus as\n\t\t * a \"work around\" we provide this option. It will append its value to the\n\t\t * text that is found to be the longest string for the column - i.e. padding.\n\t\t * Generally you shouldn't need this!\n\t\t *  @type string\n\t\t *  @default <i>Empty string<i>\n\t\t *\n\t\t *  @name DataTable.defaults.column.contentPadding\n\t\t *  @dtopt Columns\n\t\t *\n\t\t *  @example\n\t\t *    // Using `columns`\n\t\t *    $(document).ready( function() {\n\t\t *      $('#example').dataTable( {\n\t\t *        \"columns\": [\n\t\t *          null,\n\t\t *          null,\n\t\t *          null,\n\t\t *          {\n\t\t *            \"contentPadding\": \"mmm\"\n\t\t *          }\n\t\t *        ]\n\t\t *      } );\n\t\t *    } );\n\t\t */\n\t\t\"sContentPadding\": \"\",\n\t\n\t\n\t\t/**\n\t\t * Allows a default value to be given for a column's data, and will be used\n\t\t * whenever a null data source is encountered (this can be because `data`\n\t\t * is set to null, or because the data source itself is null).\n\t\t *  @type string\n\t\t *  @default null\n\t\t *\n\t\t *  @name DataTable.defaults.column.defaultContent\n\t\t *  @dtopt Columns\n\t\t *\n\t\t *  @example\n\t\t *    // Using `columnDefs`\n\t\t *    $(document).ready( function() {\n\t\t *      $('#example').dataTable( {\n\t\t *        \"columnDefs\": [\n\t\t *          {\n\t\t *            \"data\": null,\n\t\t *            \"defaultContent\": \"Edit\",\n\t\t *            \"targets\": [ -1 ]\n\t\t *          }\n\t\t *        ]\n\t\t *      } );\n\t\t *    } );\n\t\t *\n\t\t *  @example\n\t\t *    // Using `columns`\n\t\t *    $(document).ready( function() {\n\t\t *      $('#example').dataTable( {\n\t\t *        \"columns\": [\n\t\t *          null,\n\t\t *          null,\n\t\t *          null,\n\t\t *          {\n\t\t *            \"data\": null,\n\t\t *            \"defaultContent\": \"Edit\"\n\t\t *          }\n\t\t *        ]\n\t\t *      } );\n\t\t *    } );\n\t\t */\n\t\t\"sDefaultContent\": null,\n\t\n\t\n\t\t/**\n\t\t * This parameter is only used in DataTables' server-side processing. It can\n\t\t * be exceptionally useful to know what columns are being displayed on the\n\t\t * client side, and to map these to database fields. When defined, the names\n\t\t * also allow DataTables to reorder information from the server if it comes\n\t\t * back in an unexpected order (i.e. if you switch your columns around on the\n\t\t * client-side, your server-side code does not also need updating).\n\t\t *  @type string\n\t\t *  @default <i>Empty string</i>\n\t\t *\n\t\t *  @name DataTable.defaults.column.name\n\t\t *  @dtopt Columns\n\t\t *\n\t\t *  @example\n\t\t *    // Using `columnDefs`\n\t\t *    $(document).ready( function() {\n\t\t *      $('#example').dataTable( {\n\t\t *        \"columnDefs\": [\n\t\t *          { \"name\": \"engine\", \"targets\": [ 0 ] },\n\t\t *          { \"name\": \"browser\", \"targets\": [ 1 ] },\n\t\t *          { \"name\": \"platform\", \"targets\": [ 2 ] },\n\t\t *          { \"name\": \"version\", \"targets\": [ 3 ] },\n\t\t *          { \"name\": \"grade\", \"targets\": [ 4 ] }\n\t\t *        ]\n\t\t *      } );\n\t\t *    } );\n\t\t *\n\t\t *  @example\n\t\t *    // Using `columns`\n\t\t *    $(document).ready( function() {\n\t\t *      $('#example').dataTable( {\n\t\t *        \"columns\": [\n\t\t *          { \"name\": \"engine\" },\n\t\t *          { \"name\": \"browser\" },\n\t\t *          { \"name\": \"platform\" },\n\t\t *          { \"name\": \"version\" },\n\t\t *          { \"name\": \"grade\" }\n\t\t *        ]\n\t\t *      } );\n\t\t *    } );\n\t\t */\n\t\t\"sName\": \"\",\n\t\n\t\n\t\t/**\n\t\t * Defines a data source type for the ordering which can be used to read\n\t\t * real-time information from the table (updating the internally cached\n\t\t * version) prior to ordering. This allows ordering to occur on user\n\t\t * editable elements such as form inputs.\n\t\t *  @type string\n\t\t *  @default std\n\t\t *\n\t\t *  @name DataTable.defaults.column.orderDataType\n\t\t *  @dtopt Columns\n\t\t *\n\t\t *  @example\n\t\t *    // Using `columnDefs`\n\t\t *    $(document).ready( function() {\n\t\t *      $('#example').dataTable( {\n\t\t *        \"columnDefs\": [\n\t\t *          { \"orderDataType\": \"dom-text\", \"targets\": [ 2, 3 ] },\n\t\t *          { \"type\": \"numeric\", \"targets\": [ 3 ] },\n\t\t *          { \"orderDataType\": \"dom-select\", \"targets\": [ 4 ] },\n\t\t *          { \"orderDataType\": \"dom-checkbox\", \"targets\": [ 5 ] }\n\t\t *        ]\n\t\t *      } );\n\t\t *    } );\n\t\t *\n\t\t *  @example\n\t\t *    // Using `columns`\n\t\t *    $(document).ready( function() {\n\t\t *      $('#example').dataTable( {\n\t\t *        \"columns\": [\n\t\t *          null,\n\t\t *          null,\n\t\t *          { \"orderDataType\": \"dom-text\" },\n\t\t *          { \"orderDataType\": \"dom-text\", \"type\": \"numeric\" },\n\t\t *          { \"orderDataType\": \"dom-select\" },\n\t\t *          { \"orderDataType\": \"dom-checkbox\" }\n\t\t *        ]\n\t\t *      } );\n\t\t *    } );\n\t\t */\n\t\t\"sSortDataType\": \"std\",\n\t\n\t\n\t\t/**\n\t\t * The title of this column.\n\t\t *  @type string\n\t\t *  @default null <i>Derived from the 'TH' value for this column in the\n\t\t *    original HTML table.</i>\n\t\t *\n\t\t *  @name DataTable.defaults.column.title\n\t\t *  @dtopt Columns\n\t\t *\n\t\t *  @example\n\t\t *    // Using `columnDefs`\n\t\t *    $(document).ready( function() {\n\t\t *      $('#example').dataTable( {\n\t\t *        \"columnDefs\": [\n\t\t *          { \"title\": \"My column title\", \"targets\": [ 0 ] }\n\t\t *        ]\n\t\t *      } );\n\t\t *    } );\n\t\t *\n\t\t *  @example\n\t\t *    // Using `columns`\n\t\t *    $(document).ready( function() {\n\t\t *      $('#example').dataTable( {\n\t\t *        \"columns\": [\n\t\t *          { \"title\": \"My column title\" },\n\t\t *          null,\n\t\t *          null,\n\t\t *          null,\n\t\t *          null\n\t\t *        ]\n\t\t *      } );\n\t\t *    } );\n\t\t */\n\t\t\"sTitle\": null,\n\t\n\t\n\t\t/**\n\t\t * The type allows you to specify how the data for this column will be\n\t\t * ordered. Four types (string, numeric, date and html (which will strip\n\t\t * HTML tags before ordering)) are currently available. Note that only date\n\t\t * formats understood by Javascript's Date() object will be accepted as type\n\t\t * date. For example: \"Mar 26, 2008 5:03 PM\". May take the values: 'string',\n\t\t * 'numeric', 'date' or 'html' (by default). Further types can be adding\n\t\t * through plug-ins.\n\t\t *  @type string\n\t\t *  @default null <i>Auto-detected from raw data</i>\n\t\t *\n\t\t *  @name DataTable.defaults.column.type\n\t\t *  @dtopt Columns\n\t\t *\n\t\t *  @example\n\t\t *    // Using `columnDefs`\n\t\t *    $(document).ready( function() {\n\t\t *      $('#example').dataTable( {\n\t\t *        \"columnDefs\": [\n\t\t *          { \"type\": \"html\", \"targets\": [ 0 ] }\n\t\t *        ]\n\t\t *      } );\n\t\t *    } );\n\t\t *\n\t\t *  @example\n\t\t *    // Using `columns`\n\t\t *    $(document).ready( function() {\n\t\t *      $('#example').dataTable( {\n\t\t *        \"columns\": [\n\t\t *          { \"type\": \"html\" },\n\t\t *          null,\n\t\t *          null,\n\t\t *          null,\n\t\t *          null\n\t\t *        ]\n\t\t *      } );\n\t\t *    } );\n\t\t */\n\t\t\"sType\": null,\n\t\n\t\n\t\t/**\n\t\t * Defining the width of the column, this parameter may take any CSS value\n\t\t * (3em, 20px etc). DataTables applies 'smart' widths to columns which have not\n\t\t * been given a specific width through this interface ensuring that the table\n\t\t * remains readable.\n\t\t *  @type string\n\t\t *  @default null <i>Automatic</i>\n\t\t *\n\t\t *  @name DataTable.defaults.column.width\n\t\t *  @dtopt Columns\n\t\t *\n\t\t *  @example\n\t\t *    // Using `columnDefs`\n\t\t *    $(document).ready( function() {\n\t\t *      $('#example').dataTable( {\n\t\t *        \"columnDefs\": [\n\t\t *          { \"width\": \"20%\", \"targets\": [ 0 ] }\n\t\t *        ]\n\t\t *      } );\n\t\t *    } );\n\t\t *\n\t\t *  @example\n\t\t *    // Using `columns`\n\t\t *    $(document).ready( function() {\n\t\t *      $('#example').dataTable( {\n\t\t *        \"columns\": [\n\t\t *          { \"width\": \"20%\" },\n\t\t *          null,\n\t\t *          null,\n\t\t *          null,\n\t\t *          null\n\t\t *        ]\n\t\t *      } );\n\t\t *    } );\n\t\t */\n\t\t\"sWidth\": null\n\t};\n\t\n\t_fnHungarianMap( DataTable.defaults.column );\n\t\n\t\n\t\n\t/**\n\t * DataTables settings object - this holds all the information needed for a\n\t * given table, including configuration, data and current application of the\n\t * table options. DataTables does not have a single instance for each DataTable\n\t * with the settings attached to that instance, but rather instances of the\n\t * DataTable \"class\" are created on-the-fly as needed (typically by a\n\t * $().dataTable() call) and the settings object is then applied to that\n\t * instance.\n\t *\n\t * Note that this object is related to {@link DataTable.defaults} but this\n\t * one is the internal data store for DataTables's cache of columns. It should\n\t * NOT be manipulated outside of DataTables. Any configuration should be done\n\t * through the initialisation options.\n\t *  @namespace\n\t *  @todo Really should attach the settings object to individual instances so we\n\t *    don't need to create new instances on each $().dataTable() call (if the\n\t *    table already exists). It would also save passing oSettings around and\n\t *    into every single function. However, this is a very significant\n\t *    architecture change for DataTables and will almost certainly break\n\t *    backwards compatibility with older installations. This is something that\n\t *    will be done in 2.0.\n\t */\n\tDataTable.models.oSettings = {\n\t\t/**\n\t\t * Primary features of DataTables and their enablement state.\n\t\t *  @namespace\n\t\t */\n\t\t\"oFeatures\": {\n\t\n\t\t\t/**\n\t\t\t * Flag to say if DataTables should automatically try to calculate the\n\t\t\t * optimum table and columns widths (true) or not (false).\n\t\t\t * Note that this parameter will be set by the initialisation routine. To\n\t\t\t * set a default use {@link DataTable.defaults}.\n\t\t\t *  @type boolean\n\t\t\t */\n\t\t\t\"bAutoWidth\": null,\n\t\n\t\t\t/**\n\t\t\t * Delay the creation of TR and TD elements until they are actually\n\t\t\t * needed by a driven page draw. This can give a significant speed\n\t\t\t * increase for Ajax source and Javascript source data, but makes no\n\t\t\t * difference at all fro DOM and server-side processing tables.\n\t\t\t * Note that this parameter will be set by the initialisation routine. To\n\t\t\t * set a default use {@link DataTable.defaults}.\n\t\t\t *  @type boolean\n\t\t\t */\n\t\t\t\"bDeferRender\": null,\n\t\n\t\t\t/**\n\t\t\t * Enable filtering on the table or not. Note that if this is disabled\n\t\t\t * then there is no filtering at all on the table, including fnFilter.\n\t\t\t * To just remove the filtering input use sDom and remove the 'f' option.\n\t\t\t * Note that this parameter will be set by the initialisation routine. To\n\t\t\t * set a default use {@link DataTable.defaults}.\n\t\t\t *  @type boolean\n\t\t\t */\n\t\t\t\"bFilter\": null,\n\t\n\t\t\t/**\n\t\t\t * Table information element (the 'Showing x of y records' div) enable\n\t\t\t * flag.\n\t\t\t * Note that this parameter will be set by the initialisation routine. To\n\t\t\t * set a default use {@link DataTable.defaults}.\n\t\t\t *  @type boolean\n\t\t\t */\n\t\t\t\"bInfo\": null,\n\t\n\t\t\t/**\n\t\t\t * Present a user control allowing the end user to change the page size\n\t\t\t * when pagination is enabled.\n\t\t\t * Note that this parameter will be set by the initialisation routine. To\n\t\t\t * set a default use {@link DataTable.defaults}.\n\t\t\t *  @type boolean\n\t\t\t */\n\t\t\t\"bLengthChange\": null,\n\t\n\t\t\t/**\n\t\t\t * Pagination enabled or not. Note that if this is disabled then length\n\t\t\t * changing must also be disabled.\n\t\t\t * Note that this parameter will be set by the initialisation routine. To\n\t\t\t * set a default use {@link DataTable.defaults}.\n\t\t\t *  @type boolean\n\t\t\t */\n\t\t\t\"bPaginate\": null,\n\t\n\t\t\t/**\n\t\t\t * Processing indicator enable flag whenever DataTables is enacting a\n\t\t\t * user request - typically an Ajax request for server-side processing.\n\t\t\t * Note that this parameter will be set by the initialisation routine. To\n\t\t\t * set a default use {@link DataTable.defaults}.\n\t\t\t *  @type boolean\n\t\t\t */\n\t\t\t\"bProcessing\": null,\n\t\n\t\t\t/**\n\t\t\t * Server-side processing enabled flag - when enabled DataTables will\n\t\t\t * get all data from the server for every draw - there is no filtering,\n\t\t\t * sorting or paging done on the client-side.\n\t\t\t * Note that this parameter will be set by the initialisation routine. To\n\t\t\t * set a default use {@link DataTable.defaults}.\n\t\t\t *  @type boolean\n\t\t\t */\n\t\t\t\"bServerSide\": null,\n\t\n\t\t\t/**\n\t\t\t * Sorting enablement flag.\n\t\t\t * Note that this parameter will be set by the initialisation routine. To\n\t\t\t * set a default use {@link DataTable.defaults}.\n\t\t\t *  @type boolean\n\t\t\t */\n\t\t\t\"bSort\": null,\n\t\n\t\t\t/**\n\t\t\t * Multi-column sorting\n\t\t\t * Note that this parameter will be set by the initialisation routine. To\n\t\t\t * set a default use {@link DataTable.defaults}.\n\t\t\t *  @type boolean\n\t\t\t */\n\t\t\t\"bSortMulti\": null,\n\t\n\t\t\t/**\n\t\t\t * Apply a class to the columns which are being sorted to provide a\n\t\t\t * visual highlight or not. This can slow things down when enabled since\n\t\t\t * there is a lot of DOM interaction.\n\t\t\t * Note that this parameter will be set by the initialisation routine. To\n\t\t\t * set a default use {@link DataTable.defaults}.\n\t\t\t *  @type boolean\n\t\t\t */\n\t\t\t\"bSortClasses\": null,\n\t\n\t\t\t/**\n\t\t\t * State saving enablement flag.\n\t\t\t * Note that this parameter will be set by the initialisation routine. To\n\t\t\t * set a default use {@link DataTable.defaults}.\n\t\t\t *  @type boolean\n\t\t\t */\n\t\t\t\"bStateSave\": null\n\t\t},\n\t\n\t\n\t\t/**\n\t\t * Scrolling settings for a table.\n\t\t *  @namespace\n\t\t */\n\t\t\"oScroll\": {\n\t\t\t/**\n\t\t\t * When the table is shorter in height than sScrollY, collapse the\n\t\t\t * table container down to the height of the table (when true).\n\t\t\t * Note that this parameter will be set by the initialisation routine. To\n\t\t\t * set a default use {@link DataTable.defaults}.\n\t\t\t *  @type boolean\n\t\t\t */\n\t\t\t\"bCollapse\": null,\n\t\n\t\t\t/**\n\t\t\t * Width of the scrollbar for the web-browser's platform. Calculated\n\t\t\t * during table initialisation.\n\t\t\t *  @type int\n\t\t\t *  @default 0\n\t\t\t */\n\t\t\t\"iBarWidth\": 0,\n\t\n\t\t\t/**\n\t\t\t * Viewport width for horizontal scrolling. Horizontal scrolling is\n\t\t\t * disabled if an empty string.\n\t\t\t * Note that this parameter will be set by the initialisation routine. To\n\t\t\t * set a default use {@link DataTable.defaults}.\n\t\t\t *  @type string\n\t\t\t */\n\t\t\t\"sX\": null,\n\t\n\t\t\t/**\n\t\t\t * Width to expand the table to when using x-scrolling. Typically you\n\t\t\t * should not need to use this.\n\t\t\t * Note that this parameter will be set by the initialisation routine. To\n\t\t\t * set a default use {@link DataTable.defaults}.\n\t\t\t *  @type string\n\t\t\t *  @deprecated\n\t\t\t */\n\t\t\t\"sXInner\": null,\n\t\n\t\t\t/**\n\t\t\t * Viewport height for vertical scrolling. Vertical scrolling is disabled\n\t\t\t * if an empty string.\n\t\t\t * Note that this parameter will be set by the initialisation routine. To\n\t\t\t * set a default use {@link DataTable.defaults}.\n\t\t\t *  @type string\n\t\t\t */\n\t\t\t\"sY\": null\n\t\t},\n\t\n\t\t/**\n\t\t * Language information for the table.\n\t\t *  @namespace\n\t\t *  @extends DataTable.defaults.oLanguage\n\t\t */\n\t\t\"oLanguage\": {\n\t\t\t/**\n\t\t\t * Information callback function. See\n\t\t\t * {@link DataTable.defaults.fnInfoCallback}\n\t\t\t *  @type function\n\t\t\t *  @default null\n\t\t\t */\n\t\t\t\"fnInfoCallback\": null\n\t\t},\n\t\n\t\t/**\n\t\t * Browser support parameters\n\t\t *  @namespace\n\t\t */\n\t\t\"oBrowser\": {\n\t\t\t/**\n\t\t\t * Indicate if the browser incorrectly calculates width:100% inside a\n\t\t\t * scrolling element (IE6/7)\n\t\t\t *  @type boolean\n\t\t\t *  @default false\n\t\t\t */\n\t\t\t\"bScrollOversize\": false,\n\t\n\t\t\t/**\n\t\t\t * Determine if the vertical scrollbar is on the right or left of the\n\t\t\t * scrolling container - needed for rtl language layout, although not\n\t\t\t * all browsers move the scrollbar (Safari).\n\t\t\t *  @type boolean\n\t\t\t *  @default false\n\t\t\t */\n\t\t\t\"bScrollbarLeft\": false,\n\t\n\t\t\t/**\n\t\t\t * Flag for if `getBoundingClientRect` is fully supported or not\n\t\t\t *  @type boolean\n\t\t\t *  @default false\n\t\t\t */\n\t\t\t\"bBounding\": false,\n\t\n\t\t\t/**\n\t\t\t * Browser scrollbar width\n\t\t\t *  @type integer\n\t\t\t *  @default 0\n\t\t\t */\n\t\t\t\"barWidth\": 0\n\t\t},\n\t\n\t\n\t\t\"ajax\": null,\n\t\n\t\n\t\t/**\n\t\t * Array referencing the nodes which are used for the features. The\n\t\t * parameters of this object match what is allowed by sDom - i.e.\n\t\t *   <ul>\n\t\t *     <li>'l' - Length changing</li>\n\t\t *     <li>'f' - Filtering input</li>\n\t\t *     <li>'t' - The table!</li>\n\t\t *     <li>'i' - Information</li>\n\t\t *     <li>'p' - Pagination</li>\n\t\t *     <li>'r' - pRocessing</li>\n\t\t *   </ul>\n\t\t *  @type array\n\t\t *  @default []\n\t\t */\n\t\t\"aanFeatures\": [],\n\t\n\t\t/**\n\t\t * Store data information - see {@link DataTable.models.oRow} for detailed\n\t\t * information.\n\t\t *  @type array\n\t\t *  @default []\n\t\t */\n\t\t\"aoData\": [],\n\t\n\t\t/**\n\t\t * Array of indexes which are in the current display (after filtering etc)\n\t\t *  @type array\n\t\t *  @default []\n\t\t */\n\t\t\"aiDisplay\": [],\n\t\n\t\t/**\n\t\t * Array of indexes for display - no filtering\n\t\t *  @type array\n\t\t *  @default []\n\t\t */\n\t\t\"aiDisplayMaster\": [],\n\t\n\t\t/**\n\t\t * Map of row ids to data indexes\n\t\t *  @type object\n\t\t *  @default {}\n\t\t */\n\t\t\"aIds\": {},\n\t\n\t\t/**\n\t\t * Store information about each column that is in use\n\t\t *  @type array\n\t\t *  @default []\n\t\t */\n\t\t\"aoColumns\": [],\n\t\n\t\t/**\n\t\t * Store information about the table's header\n\t\t *  @type array\n\t\t *  @default []\n\t\t */\n\t\t\"aoHeader\": [],\n\t\n\t\t/**\n\t\t * Store information about the table's footer\n\t\t *  @type array\n\t\t *  @default []\n\t\t */\n\t\t\"aoFooter\": [],\n\t\n\t\t/**\n\t\t * Store the applied global search information in case we want to force a\n\t\t * research or compare the old search to a new one.\n\t\t * Note that this parameter will be set by the initialisation routine. To\n\t\t * set a default use {@link DataTable.defaults}.\n\t\t *  @namespace\n\t\t *  @extends DataTable.models.oSearch\n\t\t */\n\t\t\"oPreviousSearch\": {},\n\t\n\t\t/**\n\t\t * Store the applied search for each column - see\n\t\t * {@link DataTable.models.oSearch} for the format that is used for the\n\t\t * filtering information for each column.\n\t\t *  @type array\n\t\t *  @default []\n\t\t */\n\t\t\"aoPreSearchCols\": [],\n\t\n\t\t/**\n\t\t * Sorting that is applied to the table. Note that the inner arrays are\n\t\t * used in the following manner:\n\t\t * <ul>\n\t\t *   <li>Index 0 - column number</li>\n\t\t *   <li>Index 1 - current sorting direction</li>\n\t\t * </ul>\n\t\t * Note that this parameter will be set by the initialisation routine. To\n\t\t * set a default use {@link DataTable.defaults}.\n\t\t *  @type array\n\t\t *  @todo These inner arrays should really be objects\n\t\t */\n\t\t\"aaSorting\": null,\n\t\n\t\t/**\n\t\t * Sorting that is always applied to the table (i.e. prefixed in front of\n\t\t * aaSorting).\n\t\t * Note that this parameter will be set by the initialisation routine. To\n\t\t * set a default use {@link DataTable.defaults}.\n\t\t *  @type array\n\t\t *  @default []\n\t\t */\n\t\t\"aaSortingFixed\": [],\n\t\n\t\t/**\n\t\t * Classes to use for the striping of a table.\n\t\t * Note that this parameter will be set by the initialisation routine. To\n\t\t * set a default use {@link DataTable.defaults}.\n\t\t *  @type array\n\t\t *  @default []\n\t\t */\n\t\t\"asStripeClasses\": null,\n\t\n\t\t/**\n\t\t * If restoring a table - we should restore its striping classes as well\n\t\t *  @type array\n\t\t *  @default []\n\t\t */\n\t\t\"asDestroyStripes\": [],\n\t\n\t\t/**\n\t\t * If restoring a table - we should restore its width\n\t\t *  @type int\n\t\t *  @default 0\n\t\t */\n\t\t\"sDestroyWidth\": 0,\n\t\n\t\t/**\n\t\t * Callback functions array for every time a row is inserted (i.e. on a draw).\n\t\t *  @type array\n\t\t *  @default []\n\t\t */\n\t\t\"aoRowCallback\": [],\n\t\n\t\t/**\n\t\t * Callback functions for the header on each draw.\n\t\t *  @type array\n\t\t *  @default []\n\t\t */\n\t\t\"aoHeaderCallback\": [],\n\t\n\t\t/**\n\t\t * Callback function for the footer on each draw.\n\t\t *  @type array\n\t\t *  @default []\n\t\t */\n\t\t\"aoFooterCallback\": [],\n\t\n\t\t/**\n\t\t * Array of callback functions for draw callback functions\n\t\t *  @type array\n\t\t *  @default []\n\t\t */\n\t\t\"aoDrawCallback\": [],\n\t\n\t\t/**\n\t\t * Array of callback functions for row created function\n\t\t *  @type array\n\t\t *  @default []\n\t\t */\n\t\t\"aoRowCreatedCallback\": [],\n\t\n\t\t/**\n\t\t * Callback functions for just before the table is redrawn. A return of\n\t\t * false will be used to cancel the draw.\n\t\t *  @type array\n\t\t *  @default []\n\t\t */\n\t\t\"aoPreDrawCallback\": [],\n\t\n\t\t/**\n\t\t * Callback functions for when the table has been initialised.\n\t\t *  @type array\n\t\t *  @default []\n\t\t */\n\t\t\"aoInitComplete\": [],\n\t\n\t\n\t\t/**\n\t\t * Callbacks for modifying the settings to be stored for state saving, prior to\n\t\t * saving state.\n\t\t *  @type array\n\t\t *  @default []\n\t\t */\n\t\t\"aoStateSaveParams\": [],\n\t\n\t\t/**\n\t\t * Callbacks for modifying the settings that have been stored for state saving\n\t\t * prior to using the stored values to restore the state.\n\t\t *  @type array\n\t\t *  @default []\n\t\t */\n\t\t\"aoStateLoadParams\": [],\n\t\n\t\t/**\n\t\t * Callbacks for operating on the settings object once the saved state has been\n\t\t * loaded\n\t\t *  @type array\n\t\t *  @default []\n\t\t */\n\t\t\"aoStateLoaded\": [],\n\t\n\t\t/**\n\t\t * Cache the table ID for quick access\n\t\t *  @type string\n\t\t *  @default <i>Empty string</i>\n\t\t */\n\t\t\"sTableId\": \"\",\n\t\n\t\t/**\n\t\t * The TABLE node for the main table\n\t\t *  @type node\n\t\t *  @default null\n\t\t */\n\t\t\"nTable\": null,\n\t\n\t\t/**\n\t\t * Permanent ref to the thead element\n\t\t *  @type node\n\t\t *  @default null\n\t\t */\n\t\t\"nTHead\": null,\n\t\n\t\t/**\n\t\t * Permanent ref to the tfoot element - if it exists\n\t\t *  @type node\n\t\t *  @default null\n\t\t */\n\t\t\"nTFoot\": null,\n\t\n\t\t/**\n\t\t * Permanent ref to the tbody element\n\t\t *  @type node\n\t\t *  @default null\n\t\t */\n\t\t\"nTBody\": null,\n\t\n\t\t/**\n\t\t * Cache the wrapper node (contains all DataTables controlled elements)\n\t\t *  @type node\n\t\t *  @default null\n\t\t */\n\t\t\"nTableWrapper\": null,\n\t\n\t\t/**\n\t\t * Indicate if when using server-side processing the loading of data\n\t\t * should be deferred until the second draw.\n\t\t * Note that this parameter will be set by the initialisation routine. To\n\t\t * set a default use {@link DataTable.defaults}.\n\t\t *  @type boolean\n\t\t *  @default false\n\t\t */\n\t\t\"bDeferLoading\": false,\n\t\n\t\t/**\n\t\t * Indicate if all required information has been read in\n\t\t *  @type boolean\n\t\t *  @default false\n\t\t */\n\t\t\"bInitialised\": false,\n\t\n\t\t/**\n\t\t * Information about open rows. Each object in the array has the parameters\n\t\t * 'nTr' and 'nParent'\n\t\t *  @type array\n\t\t *  @default []\n\t\t */\n\t\t\"aoOpenRows\": [],\n\t\n\t\t/**\n\t\t * Dictate the positioning of DataTables' control elements - see\n\t\t * {@link DataTable.model.oInit.sDom}.\n\t\t * Note that this parameter will be set by the initialisation routine. To\n\t\t * set a default use {@link DataTable.defaults}.\n\t\t *  @type string\n\t\t *  @default null\n\t\t */\n\t\t\"sDom\": null,\n\t\n\t\t/**\n\t\t * Search delay (in mS)\n\t\t *  @type integer\n\t\t *  @default null\n\t\t */\n\t\t\"searchDelay\": null,\n\t\n\t\t/**\n\t\t * Which type of pagination should be used.\n\t\t * Note that this parameter will be set by the initialisation routine. To\n\t\t * set a default use {@link DataTable.defaults}.\n\t\t *  @type string\n\t\t *  @default two_button\n\t\t */\n\t\t\"sPaginationType\": \"two_button\",\n\t\n\t\t/**\n\t\t * The state duration (for `stateSave`) in seconds.\n\t\t * Note that this parameter will be set by the initialisation routine. To\n\t\t * set a default use {@link DataTable.defaults}.\n\t\t *  @type int\n\t\t *  @default 0\n\t\t */\n\t\t\"iStateDuration\": 0,\n\t\n\t\t/**\n\t\t * Array of callback functions for state saving. Each array element is an\n\t\t * object with the following parameters:\n\t\t *   <ul>\n\t\t *     <li>function:fn - function to call. Takes two parameters, oSettings\n\t\t *       and the JSON string to save that has been thus far created. Returns\n\t\t *       a JSON string to be inserted into a json object\n\t\t *       (i.e. '\"param\": [ 0, 1, 2]')</li>\n\t\t *     <li>string:sName - name of callback</li>\n\t\t *   </ul>\n\t\t *  @type array\n\t\t *  @default []\n\t\t */\n\t\t\"aoStateSave\": [],\n\t\n\t\t/**\n\t\t * Array of callback functions for state loading. Each array element is an\n\t\t * object with the following parameters:\n\t\t *   <ul>\n\t\t *     <li>function:fn - function to call. Takes two parameters, oSettings\n\t\t *       and the object stored. May return false to cancel state loading</li>\n\t\t *     <li>string:sName - name of callback</li>\n\t\t *   </ul>\n\t\t *  @type array\n\t\t *  @default []\n\t\t */\n\t\t\"aoStateLoad\": [],\n\t\n\t\t/**\n\t\t * State that was saved. Useful for back reference\n\t\t *  @type object\n\t\t *  @default null\n\t\t */\n\t\t\"oSavedState\": null,\n\t\n\t\t/**\n\t\t * State that was loaded. Useful for back reference\n\t\t *  @type object\n\t\t *  @default null\n\t\t */\n\t\t\"oLoadedState\": null,\n\t\n\t\t/**\n\t\t * Source url for AJAX data for the table.\n\t\t * Note that this parameter will be set by the initialisation routine. To\n\t\t * set a default use {@link DataTable.defaults}.\n\t\t *  @type string\n\t\t *  @default null\n\t\t */\n\t\t\"sAjaxSource\": null,\n\t\n\t\t/**\n\t\t * Property from a given object from which to read the table data from. This\n\t\t * can be an empty string (when not server-side processing), in which case\n\t\t * it is  assumed an an array is given directly.\n\t\t * Note that this parameter will be set by the initialisation routine. To\n\t\t * set a default use {@link DataTable.defaults}.\n\t\t *  @type string\n\t\t */\n\t\t\"sAjaxDataProp\": null,\n\t\n\t\t/**\n\t\t * Note if draw should be blocked while getting data\n\t\t *  @type boolean\n\t\t *  @default true\n\t\t */\n\t\t\"bAjaxDataGet\": true,\n\t\n\t\t/**\n\t\t * The last jQuery XHR object that was used for server-side data gathering.\n\t\t * This can be used for working with the XHR information in one of the\n\t\t * callbacks\n\t\t *  @type object\n\t\t *  @default null\n\t\t */\n\t\t\"jqXHR\": null,\n\t\n\t\t/**\n\t\t * JSON returned from the server in the last Ajax request\n\t\t *  @type object\n\t\t *  @default undefined\n\t\t */\n\t\t\"json\": undefined,\n\t\n\t\t/**\n\t\t * Data submitted as part of the last Ajax request\n\t\t *  @type object\n\t\t *  @default undefined\n\t\t */\n\t\t\"oAjaxData\": undefined,\n\t\n\t\t/**\n\t\t * Function to get the server-side data.\n\t\t * Note that this parameter will be set by the initialisation routine. To\n\t\t * set a default use {@link DataTable.defaults}.\n\t\t *  @type function\n\t\t */\n\t\t\"fnServerData\": null,\n\t\n\t\t/**\n\t\t * Functions which are called prior to sending an Ajax request so extra\n\t\t * parameters can easily be sent to the server\n\t\t *  @type array\n\t\t *  @default []\n\t\t */\n\t\t\"aoServerParams\": [],\n\t\n\t\t/**\n\t\t * Send the XHR HTTP method - GET or POST (could be PUT or DELETE if\n\t\t * required).\n\t\t * Note that this parameter will be set by the initialisation routine. To\n\t\t * set a default use {@link DataTable.defaults}.\n\t\t *  @type string\n\t\t */\n\t\t\"sServerMethod\": null,\n\t\n\t\t/**\n\t\t * Format numbers for display.\n\t\t * Note that this parameter will be set by the initialisation routine. To\n\t\t * set a default use {@link DataTable.defaults}.\n\t\t *  @type function\n\t\t */\n\t\t\"fnFormatNumber\": null,\n\t\n\t\t/**\n\t\t * List of options that can be used for the user selectable length menu.\n\t\t * Note that this parameter will be set by the initialisation routine. To\n\t\t * set a default use {@link DataTable.defaults}.\n\t\t *  @type array\n\t\t *  @default []\n\t\t */\n\t\t\"aLengthMenu\": null,\n\t\n\t\t/**\n\t\t * Counter for the draws that the table does. Also used as a tracker for\n\t\t * server-side processing\n\t\t *  @type int\n\t\t *  @default 0\n\t\t */\n\t\t\"iDraw\": 0,\n\t\n\t\t/**\n\t\t * Indicate if a redraw is being done - useful for Ajax\n\t\t *  @type boolean\n\t\t *  @default false\n\t\t */\n\t\t\"bDrawing\": false,\n\t\n\t\t/**\n\t\t * Draw index (iDraw) of the last error when parsing the returned data\n\t\t *  @type int\n\t\t *  @default -1\n\t\t */\n\t\t\"iDrawError\": -1,\n\t\n\t\t/**\n\t\t * Paging display length\n\t\t *  @type int\n\t\t *  @default 10\n\t\t */\n\t\t\"_iDisplayLength\": 10,\n\t\n\t\t/**\n\t\t * Paging start point - aiDisplay index\n\t\t *  @type int\n\t\t *  @default 0\n\t\t */\n\t\t\"_iDisplayStart\": 0,\n\t\n\t\t/**\n\t\t * Server-side processing - number of records in the result set\n\t\t * (i.e. before filtering), Use fnRecordsTotal rather than\n\t\t * this property to get the value of the number of records, regardless of\n\t\t * the server-side processing setting.\n\t\t *  @type int\n\t\t *  @default 0\n\t\t *  @private\n\t\t */\n\t\t\"_iRecordsTotal\": 0,\n\t\n\t\t/**\n\t\t * Server-side processing - number of records in the current display set\n\t\t * (i.e. after filtering). Use fnRecordsDisplay rather than\n\t\t * this property to get the value of the number of records, regardless of\n\t\t * the server-side processing setting.\n\t\t *  @type boolean\n\t\t *  @default 0\n\t\t *  @private\n\t\t */\n\t\t\"_iRecordsDisplay\": 0,\n\t\n\t\t/**\n\t\t * Flag to indicate if jQuery UI marking and classes should be used.\n\t\t * Note that this parameter will be set by the initialisation routine. To\n\t\t * set a default use {@link DataTable.defaults}.\n\t\t *  @type boolean\n\t\t */\n\t\t\"bJUI\": null,\n\t\n\t\t/**\n\t\t * The classes to use for the table\n\t\t *  @type object\n\t\t *  @default {}\n\t\t */\n\t\t\"oClasses\": {},\n\t\n\t\t/**\n\t\t * Flag attached to the settings object so you can check in the draw\n\t\t * callback if filtering has been done in the draw. Deprecated in favour of\n\t\t * events.\n\t\t *  @type boolean\n\t\t *  @default false\n\t\t *  @deprecated\n\t\t */\n\t\t\"bFiltered\": false,\n\t\n\t\t/**\n\t\t * Flag attached to the settings object so you can check in the draw\n\t\t * callback if sorting has been done in the draw. Deprecated in favour of\n\t\t * events.\n\t\t *  @type boolean\n\t\t *  @default false\n\t\t *  @deprecated\n\t\t */\n\t\t\"bSorted\": false,\n\t\n\t\t/**\n\t\t * Indicate that if multiple rows are in the header and there is more than\n\t\t * one unique cell per column, if the top one (true) or bottom one (false)\n\t\t * should be used for sorting / title by DataTables.\n\t\t * Note that this parameter will be set by the initialisation routine. To\n\t\t * set a default use {@link DataTable.defaults}.\n\t\t *  @type boolean\n\t\t */\n\t\t\"bSortCellsTop\": null,\n\t\n\t\t/**\n\t\t * Initialisation object that is used for the table\n\t\t *  @type object\n\t\t *  @default null\n\t\t */\n\t\t\"oInit\": null,\n\t\n\t\t/**\n\t\t * Destroy callback functions - for plug-ins to attach themselves to the\n\t\t * destroy so they can clean up markup and events.\n\t\t *  @type array\n\t\t *  @default []\n\t\t */\n\t\t\"aoDestroyCallback\": [],\n\t\n\t\n\t\t/**\n\t\t * Get the number of records in the current record set, before filtering\n\t\t *  @type function\n\t\t */\n\t\t\"fnRecordsTotal\": function ()\n\t\t{\n\t\t\treturn _fnDataSource( this ) == 'ssp' ?\n\t\t\t\tthis._iRecordsTotal * 1 :\n\t\t\t\tthis.aiDisplayMaster.length;\n\t\t},\n\t\n\t\t/**\n\t\t * Get the number of records in the current record set, after filtering\n\t\t *  @type function\n\t\t */\n\t\t\"fnRecordsDisplay\": function ()\n\t\t{\n\t\t\treturn _fnDataSource( this ) == 'ssp' ?\n\t\t\t\tthis._iRecordsDisplay * 1 :\n\t\t\t\tthis.aiDisplay.length;\n\t\t},\n\t\n\t\t/**\n\t\t * Get the display end point - aiDisplay index\n\t\t *  @type function\n\t\t */\n\t\t\"fnDisplayEnd\": function ()\n\t\t{\n\t\t\tvar\n\t\t\t\tlen      = this._iDisplayLength,\n\t\t\t\tstart    = this._iDisplayStart,\n\t\t\t\tcalc     = start + len,\n\t\t\t\trecords  = this.aiDisplay.length,\n\t\t\t\tfeatures = this.oFeatures,\n\t\t\t\tpaginate = features.bPaginate;\n\t\n\t\t\tif ( features.bServerSide ) {\n\t\t\t\treturn paginate === false || len === -1 ?\n\t\t\t\t\tstart + records :\n\t\t\t\t\tMath.min( start+len, this._iRecordsDisplay );\n\t\t\t}\n\t\t\telse {\n\t\t\t\treturn ! paginate || calc>records || len===-1 ?\n\t\t\t\t\trecords :\n\t\t\t\t\tcalc;\n\t\t\t}\n\t\t},\n\t\n\t\t/**\n\t\t * The DataTables object for this table\n\t\t *  @type object\n\t\t *  @default null\n\t\t */\n\t\t\"oInstance\": null,\n\t\n\t\t/**\n\t\t * Unique identifier for each instance of the DataTables object. If there\n\t\t * is an ID on the table node, then it takes that value, otherwise an\n\t\t * incrementing internal counter is used.\n\t\t *  @type string\n\t\t *  @default null\n\t\t */\n\t\t\"sInstance\": null,\n\t\n\t\t/**\n\t\t * tabindex attribute value that is added to DataTables control elements, allowing\n\t\t * keyboard navigation of the table and its controls.\n\t\t */\n\t\t\"iTabIndex\": 0,\n\t\n\t\t/**\n\t\t * DIV container for the footer scrolling table if scrolling\n\t\t */\n\t\t\"nScrollHead\": null,\n\t\n\t\t/**\n\t\t * DIV container for the footer scrolling table if scrolling\n\t\t */\n\t\t\"nScrollFoot\": null,\n\t\n\t\t/**\n\t\t * Last applied sort\n\t\t *  @type array\n\t\t *  @default []\n\t\t */\n\t\t\"aLastSort\": [],\n\t\n\t\t/**\n\t\t * Stored plug-in instances\n\t\t *  @type object\n\t\t *  @default {}\n\t\t */\n\t\t\"oPlugins\": {},\n\t\n\t\t/**\n\t\t * Function used to get a row's id from the row's data\n\t\t *  @type function\n\t\t *  @default null\n\t\t */\n\t\t\"rowIdFn\": null,\n\t\n\t\t/**\n\t\t * Data location where to store a row's id\n\t\t *  @type string\n\t\t *  @default null\n\t\t */\n\t\t\"rowId\": null\n\t};\n\n\t/**\n\t * Extension object for DataTables that is used to provide all extension\n\t * options.\n\t *\n\t * Note that the `DataTable.ext` object is available through\n\t * `jQuery.fn.dataTable.ext` where it may be accessed and manipulated. It is\n\t * also aliased to `jQuery.fn.dataTableExt` for historic reasons.\n\t *  @namespace\n\t *  @extends DataTable.models.ext\n\t */\n\t\n\t\n\t/**\n\t * DataTables extensions\n\t * \n\t * This namespace acts as a collection area for plug-ins that can be used to\n\t * extend DataTables capabilities. Indeed many of the build in methods\n\t * use this method to provide their own capabilities (sorting methods for\n\t * example).\n\t *\n\t * Note that this namespace is aliased to `jQuery.fn.dataTableExt` for legacy\n\t * reasons\n\t *\n\t *  @namespace\n\t */\n\tDataTable.ext = _ext = {\n\t\t/**\n\t\t * Buttons. For use with the Buttons extension for DataTables. This is\n\t\t * defined here so other extensions can define buttons regardless of load\n\t\t * order. It is _not_ used by DataTables core.\n\t\t *\n\t\t *  @type object\n\t\t *  @default {}\n\t\t */\n\t\tbuttons: {},\n\t\n\t\n\t\t/**\n\t\t * Element class names\n\t\t *\n\t\t *  @type object\n\t\t *  @default {}\n\t\t */\n\t\tclasses: {},\n\t\n\t\n\t\t/**\n\t\t * DataTables build type (expanded by the download builder)\n\t\t *\n\t\t *  @type string\n\t\t */\n\t\tbuilder: \"-source-\",\n\t\n\t\n\t\t/**\n\t\t * Error reporting.\n\t\t * \n\t\t * How should DataTables report an error. Can take the value 'alert',\n\t\t * 'throw', 'none' or a function.\n\t\t *\n\t\t *  @type string|function\n\t\t *  @default alert\n\t\t */\n\t\terrMode: \"alert\",\n\t\n\t\n\t\t/**\n\t\t * Feature plug-ins.\n\t\t * \n\t\t * This is an array of objects which describe the feature plug-ins that are\n\t\t * available to DataTables. These feature plug-ins are then available for\n\t\t * use through the `dom` initialisation option.\n\t\t * \n\t\t * Each feature plug-in is described by an object which must have the\n\t\t * following properties:\n\t\t * \n\t\t * * `fnInit` - function that is used to initialise the plug-in,\n\t\t * * `cFeature` - a character so the feature can be enabled by the `dom`\n\t\t *   instillation option. This is case sensitive.\n\t\t *\n\t\t * The `fnInit` function has the following input parameters:\n\t\t *\n\t\t * 1. `{object}` DataTables settings object: see\n\t\t *    {@link DataTable.models.oSettings}\n\t\t *\n\t\t * And the following return is expected:\n\t\t * \n\t\t * * {node|null} The element which contains your feature. Note that the\n\t\t *   return may also be void if your plug-in does not require to inject any\n\t\t *   DOM elements into DataTables control (`dom`) - for example this might\n\t\t *   be useful when developing a plug-in which allows table control via\n\t\t *   keyboard entry\n\t\t *\n\t\t *  @type array\n\t\t *\n\t\t *  @example\n\t\t *    $.fn.dataTable.ext.features.push( {\n\t\t *      \"fnInit\": function( oSettings ) {\n\t\t *        return new TableTools( { \"oDTSettings\": oSettings } );\n\t\t *      },\n\t\t *      \"cFeature\": \"T\"\n\t\t *    } );\n\t\t */\n\t\tfeature: [],\n\t\n\t\n\t\t/**\n\t\t * Row searching.\n\t\t * \n\t\t * This method of searching is complimentary to the default type based\n\t\t * searching, and a lot more comprehensive as it allows you complete control\n\t\t * over the searching logic. Each element in this array is a function\n\t\t * (parameters described below) that is called for every row in the table,\n\t\t * and your logic decides if it should be included in the searching data set\n\t\t * or not.\n\t\t *\n\t\t * Searching functions have the following input parameters:\n\t\t *\n\t\t * 1. `{object}` DataTables settings object: see\n\t\t *    {@link DataTable.models.oSettings}\n\t\t * 2. `{array|object}` Data for the row to be processed (same as the\n\t\t *    original format that was passed in as the data source, or an array\n\t\t *    from a DOM data source\n\t\t * 3. `{int}` Row index ({@link DataTable.models.oSettings.aoData}), which\n\t\t *    can be useful to retrieve the `TR` element if you need DOM interaction.\n\t\t *\n\t\t * And the following return is expected:\n\t\t *\n\t\t * * {boolean} Include the row in the searched result set (true) or not\n\t\t *   (false)\n\t\t *\n\t\t * Note that as with the main search ability in DataTables, technically this\n\t\t * is \"filtering\", since it is subtractive. However, for consistency in\n\t\t * naming we call it searching here.\n\t\t *\n\t\t *  @type array\n\t\t *  @default []\n\t\t *\n\t\t *  @example\n\t\t *    // The following example shows custom search being applied to the\n\t\t *    // fourth column (i.e. the data[3] index) based on two input values\n\t\t *    // from the end-user, matching the data in a certain range.\n\t\t *    $.fn.dataTable.ext.search.push(\n\t\t *      function( settings, data, dataIndex ) {\n\t\t *        var min = document.getElementById('min').value * 1;\n\t\t *        var max = document.getElementById('max').value * 1;\n\t\t *        var version = data[3] == \"-\" ? 0 : data[3]*1;\n\t\t *\n\t\t *        if ( min == \"\" && max == \"\" ) {\n\t\t *          return true;\n\t\t *        }\n\t\t *        else if ( min == \"\" && version < max ) {\n\t\t *          return true;\n\t\t *        }\n\t\t *        else if ( min < version && \"\" == max ) {\n\t\t *          return true;\n\t\t *        }\n\t\t *        else if ( min < version && version < max ) {\n\t\t *          return true;\n\t\t *        }\n\t\t *        return false;\n\t\t *      }\n\t\t *    );\n\t\t */\n\t\tsearch: [],\n\t\n\t\n\t\t/**\n\t\t * Selector extensions\n\t\t *\n\t\t * The `selector` option can be used to extend the options available for the\n\t\t * selector modifier options (`selector-modifier` object data type) that\n\t\t * each of the three built in selector types offer (row, column and cell +\n\t\t * their plural counterparts). For example the Select extension uses this\n\t\t * mechanism to provide an option to select only rows, columns and cells\n\t\t * that have been marked as selected by the end user (`{selected: true}`),\n\t\t * which can be used in conjunction with the existing built in selector\n\t\t * options.\n\t\t *\n\t\t * Each property is an array to which functions can be pushed. The functions\n\t\t * take three attributes:\n\t\t *\n\t\t * * Settings object for the host table\n\t\t * * Options object (`selector-modifier` object type)\n\t\t * * Array of selected item indexes\n\t\t *\n\t\t * The return is an array of the resulting item indexes after the custom\n\t\t * selector has been applied.\n\t\t *\n\t\t *  @type object\n\t\t */\n\t\tselector: {\n\t\t\tcell: [],\n\t\t\tcolumn: [],\n\t\t\trow: []\n\t\t},\n\t\n\t\n\t\t/**\n\t\t * Internal functions, exposed for used in plug-ins.\n\t\t * \n\t\t * Please note that you should not need to use the internal methods for\n\t\t * anything other than a plug-in (and even then, try to avoid if possible).\n\t\t * The internal function may change between releases.\n\t\t *\n\t\t *  @type object\n\t\t *  @default {}\n\t\t */\n\t\tinternal: {},\n\t\n\t\n\t\t/**\n\t\t * Legacy configuration options. Enable and disable legacy options that\n\t\t * are available in DataTables.\n\t\t *\n\t\t *  @type object\n\t\t */\n\t\tlegacy: {\n\t\t\t/**\n\t\t\t * Enable / disable DataTables 1.9 compatible server-side processing\n\t\t\t * requests\n\t\t\t *\n\t\t\t *  @type boolean\n\t\t\t *  @default null\n\t\t\t */\n\t\t\tajax: null\n\t\t},\n\t\n\t\n\t\t/**\n\t\t * Pagination plug-in methods.\n\t\t * \n\t\t * Each entry in this object is a function and defines which buttons should\n\t\t * be shown by the pagination rendering method that is used for the table:\n\t\t * {@link DataTable.ext.renderer.pageButton}. The renderer addresses how the\n\t\t * buttons are displayed in the document, while the functions here tell it\n\t\t * what buttons to display. This is done by returning an array of button\n\t\t * descriptions (what each button will do).\n\t\t *\n\t\t * Pagination types (the four built in options and any additional plug-in\n\t\t * options defined here) can be used through the `paginationType`\n\t\t * initialisation parameter.\n\t\t *\n\t\t * The functions defined take two parameters:\n\t\t *\n\t\t * 1. `{int} page` The current page index\n\t\t * 2. `{int} pages` The number of pages in the table\n\t\t *\n\t\t * Each function is expected to return an array where each element of the\n\t\t * array can be one of:\n\t\t *\n\t\t * * `first` - Jump to first page when activated\n\t\t * * `last` - Jump to last page when activated\n\t\t * * `previous` - Show previous page when activated\n\t\t * * `next` - Show next page when activated\n\t\t * * `{int}` - Show page of the index given\n\t\t * * `{array}` - A nested array containing the above elements to add a\n\t\t *   containing 'DIV' element (might be useful for styling).\n\t\t *\n\t\t * Note that DataTables v1.9- used this object slightly differently whereby\n\t\t * an object with two functions would be defined for each plug-in. That\n\t\t * ability is still supported by DataTables 1.10+ to provide backwards\n\t\t * compatibility, but this option of use is now decremented and no longer\n\t\t * documented in DataTables 1.10+.\n\t\t *\n\t\t *  @type object\n\t\t *  @default {}\n\t\t *\n\t\t *  @example\n\t\t *    // Show previous, next and current page buttons only\n\t\t *    $.fn.dataTableExt.oPagination.current = function ( page, pages ) {\n\t\t *      return [ 'previous', page, 'next' ];\n\t\t *    };\n\t\t */\n\t\tpager: {},\n\t\n\t\n\t\trenderer: {\n\t\t\tpageButton: {},\n\t\t\theader: {}\n\t\t},\n\t\n\t\n\t\t/**\n\t\t * Ordering plug-ins - custom data source\n\t\t * \n\t\t * The extension options for ordering of data available here is complimentary\n\t\t * to the default type based ordering that DataTables typically uses. It\n\t\t * allows much greater control over the the data that is being used to\n\t\t * order a column, but is necessarily therefore more complex.\n\t\t * \n\t\t * This type of ordering is useful if you want to do ordering based on data\n\t\t * live from the DOM (for example the contents of an 'input' element) rather\n\t\t * than just the static string that DataTables knows of.\n\t\t * \n\t\t * The way these plug-ins work is that you create an array of the values you\n\t\t * wish to be ordering for the column in question and then return that\n\t\t * array. The data in the array much be in the index order of the rows in\n\t\t * the table (not the currently ordering order!). Which order data gathering\n\t\t * function is run here depends on the `dt-init columns.orderDataType`\n\t\t * parameter that is used for the column (if any).\n\t\t *\n\t\t * The functions defined take two parameters:\n\t\t *\n\t\t * 1. `{object}` DataTables settings object: see\n\t\t *    {@link DataTable.models.oSettings}\n\t\t * 2. `{int}` Target column index\n\t\t *\n\t\t * Each function is expected to return an array:\n\t\t *\n\t\t * * `{array}` Data for the column to be ordering upon\n\t\t *\n\t\t *  @type array\n\t\t *\n\t\t *  @example\n\t\t *    // Ordering using `input` node values\n\t\t *    $.fn.dataTable.ext.order['dom-text'] = function  ( settings, col )\n\t\t *    {\n\t\t *      return this.api().column( col, {order:'index'} ).nodes().map( function ( td, i ) {\n\t\t *        return $('input', td).val();\n\t\t *      } );\n\t\t *    }\n\t\t */\n\t\torder: {},\n\t\n\t\n\t\t/**\n\t\t * Type based plug-ins.\n\t\t *\n\t\t * Each column in DataTables has a type assigned to it, either by automatic\n\t\t * detection or by direct assignment using the `type` option for the column.\n\t\t * The type of a column will effect how it is ordering and search (plug-ins\n\t\t * can also make use of the column type if required).\n\t\t *\n\t\t * @namespace\n\t\t */\n\t\ttype: {\n\t\t\t/**\n\t\t\t * Type detection functions.\n\t\t\t *\n\t\t\t * The functions defined in this object are used to automatically detect\n\t\t\t * a column's type, making initialisation of DataTables super easy, even\n\t\t\t * when complex data is in the table.\n\t\t\t *\n\t\t\t * The functions defined take two parameters:\n\t\t\t *\n\t\t     *  1. `{*}` Data from the column cell to be analysed\n\t\t     *  2. `{settings}` DataTables settings object. This can be used to\n\t\t     *     perform context specific type detection - for example detection\n\t\t     *     based on language settings such as using a comma for a decimal\n\t\t     *     place. Generally speaking the options from the settings will not\n\t\t     *     be required\n\t\t\t *\n\t\t\t * Each function is expected to return:\n\t\t\t *\n\t\t\t * * `{string|null}` Data type detected, or null if unknown (and thus\n\t\t\t *   pass it on to the other type detection functions.\n\t\t\t *\n\t\t\t *  @type array\n\t\t\t *\n\t\t\t *  @example\n\t\t\t *    // Currency type detection plug-in:\n\t\t\t *    $.fn.dataTable.ext.type.detect.push(\n\t\t\t *      function ( data, settings ) {\n\t\t\t *        // Check the numeric part\n\t\t\t *        if ( ! $.isNumeric( data.substring(1) ) ) {\n\t\t\t *          return null;\n\t\t\t *        }\n\t\t\t *\n\t\t\t *        // Check prefixed by currency\n\t\t\t *        if ( data.charAt(0) == '$' || data.charAt(0) == '&pound;' ) {\n\t\t\t *          return 'currency';\n\t\t\t *        }\n\t\t\t *        return null;\n\t\t\t *      }\n\t\t\t *    );\n\t\t\t */\n\t\t\tdetect: [],\n\t\n\t\n\t\t\t/**\n\t\t\t * Type based search formatting.\n\t\t\t *\n\t\t\t * The type based searching functions can be used to pre-format the\n\t\t\t * data to be search on. For example, it can be used to strip HTML\n\t\t\t * tags or to de-format telephone numbers for numeric only searching.\n\t\t\t *\n\t\t\t * Note that is a search is not defined for a column of a given type,\n\t\t\t * no search formatting will be performed.\n\t\t\t * \n\t\t\t * Pre-processing of searching data plug-ins - When you assign the sType\n\t\t\t * for a column (or have it automatically detected for you by DataTables\n\t\t\t * or a type detection plug-in), you will typically be using this for\n\t\t\t * custom sorting, but it can also be used to provide custom searching\n\t\t\t * by allowing you to pre-processing the data and returning the data in\n\t\t\t * the format that should be searched upon. This is done by adding\n\t\t\t * functions this object with a parameter name which matches the sType\n\t\t\t * for that target column. This is the corollary of <i>afnSortData</i>\n\t\t\t * for searching data.\n\t\t\t *\n\t\t\t * The functions defined take a single parameter:\n\t\t\t *\n\t\t     *  1. `{*}` Data from the column cell to be prepared for searching\n\t\t\t *\n\t\t\t * Each function is expected to return:\n\t\t\t *\n\t\t\t * * `{string|null}` Formatted string that will be used for the searching.\n\t\t\t *\n\t\t\t *  @type object\n\t\t\t *  @default {}\n\t\t\t *\n\t\t\t *  @example\n\t\t\t *    $.fn.dataTable.ext.type.search['title-numeric'] = function ( d ) {\n\t\t\t *      return d.replace(/\\n/g,\" \").replace( /<.*?>/g, \"\" );\n\t\t\t *    }\n\t\t\t */\n\t\t\tsearch: {},\n\t\n\t\n\t\t\t/**\n\t\t\t * Type based ordering.\n\t\t\t *\n\t\t\t * The column type tells DataTables what ordering to apply to the table\n\t\t\t * when a column is sorted upon. The order for each type that is defined,\n\t\t\t * is defined by the functions available in this object.\n\t\t\t *\n\t\t\t * Each ordering option can be described by three properties added to\n\t\t\t * this object:\n\t\t\t *\n\t\t\t * * `{type}-pre` - Pre-formatting function\n\t\t\t * * `{type}-asc` - Ascending order function\n\t\t\t * * `{type}-desc` - Descending order function\n\t\t\t *\n\t\t\t * All three can be used together, only `{type}-pre` or only\n\t\t\t * `{type}-asc` and `{type}-desc` together. It is generally recommended\n\t\t\t * that only `{type}-pre` is used, as this provides the optimal\n\t\t\t * implementation in terms of speed, although the others are provided\n\t\t\t * for compatibility with existing Javascript sort functions.\n\t\t\t *\n\t\t\t * `{type}-pre`: Functions defined take a single parameter:\n\t\t\t *\n\t\t     *  1. `{*}` Data from the column cell to be prepared for ordering\n\t\t\t *\n\t\t\t * And return:\n\t\t\t *\n\t\t\t * * `{*}` Data to be sorted upon\n\t\t\t *\n\t\t\t * `{type}-asc` and `{type}-desc`: Functions are typical Javascript sort\n\t\t\t * functions, taking two parameters:\n\t\t\t *\n\t\t     *  1. `{*}` Data to compare to the second parameter\n\t\t     *  2. `{*}` Data to compare to the first parameter\n\t\t\t *\n\t\t\t * And returning:\n\t\t\t *\n\t\t\t * * `{*}` Ordering match: <0 if first parameter should be sorted lower\n\t\t\t *   than the second parameter, ===0 if the two parameters are equal and\n\t\t\t *   >0 if the first parameter should be sorted height than the second\n\t\t\t *   parameter.\n\t\t\t * \n\t\t\t *  @type object\n\t\t\t *  @default {}\n\t\t\t *\n\t\t\t *  @example\n\t\t\t *    // Numeric ordering of formatted numbers with a pre-formatter\n\t\t\t *    $.extend( $.fn.dataTable.ext.type.order, {\n\t\t\t *      \"string-pre\": function(x) {\n\t\t\t *        a = (a === \"-\" || a === \"\") ? 0 : a.replace( /[^\\d\\-\\.]/g, \"\" );\n\t\t\t *        return parseFloat( a );\n\t\t\t *      }\n\t\t\t *    } );\n\t\t\t *\n\t\t\t *  @example\n\t\t\t *    // Case-sensitive string ordering, with no pre-formatting method\n\t\t\t *    $.extend( $.fn.dataTable.ext.order, {\n\t\t\t *      \"string-case-asc\": function(x,y) {\n\t\t\t *        return ((x < y) ? -1 : ((x > y) ? 1 : 0));\n\t\t\t *      },\n\t\t\t *      \"string-case-desc\": function(x,y) {\n\t\t\t *        return ((x < y) ? 1 : ((x > y) ? -1 : 0));\n\t\t\t *      }\n\t\t\t *    } );\n\t\t\t */\n\t\t\torder: {}\n\t\t},\n\t\n\t\t/**\n\t\t * Unique DataTables instance counter\n\t\t *\n\t\t * @type int\n\t\t * @private\n\t\t */\n\t\t_unique: 0,\n\t\n\t\n\t\t//\n\t\t// Depreciated\n\t\t// The following properties are retained for backwards compatiblity only.\n\t\t// The should not be used in new projects and will be removed in a future\n\t\t// version\n\t\t//\n\t\n\t\t/**\n\t\t * Version check function.\n\t\t *  @type function\n\t\t *  @depreciated Since 1.10\n\t\t */\n\t\tfnVersionCheck: DataTable.fnVersionCheck,\n\t\n\t\n\t\t/**\n\t\t * Index for what 'this' index API functions should use\n\t\t *  @type int\n\t\t *  @deprecated Since v1.10\n\t\t */\n\t\tiApiIndex: 0,\n\t\n\t\n\t\t/**\n\t\t * jQuery UI class container\n\t\t *  @type object\n\t\t *  @deprecated Since v1.10\n\t\t */\n\t\toJUIClasses: {},\n\t\n\t\n\t\t/**\n\t\t * Software version\n\t\t *  @type string\n\t\t *  @deprecated Since v1.10\n\t\t */\n\t\tsVersion: DataTable.version\n\t};\n\t\n\t\n\t//\n\t// Backwards compatibility. Alias to pre 1.10 Hungarian notation counter parts\n\t//\n\t$.extend( _ext, {\n\t\tafnFiltering: _ext.search,\n\t\taTypes:       _ext.type.detect,\n\t\tofnSearch:    _ext.type.search,\n\t\toSort:        _ext.type.order,\n\t\tafnSortData:  _ext.order,\n\t\taoFeatures:   _ext.feature,\n\t\toApi:         _ext.internal,\n\t\toStdClasses:  _ext.classes,\n\t\toPagination:  _ext.pager\n\t} );\n\t\n\t\n\t$.extend( DataTable.ext.classes, {\n\t\t\"sTable\": \"dataTable\",\n\t\t\"sNoFooter\": \"no-footer\",\n\t\n\t\t/* Paging buttons */\n\t\t\"sPageButton\": \"paginate_button\",\n\t\t\"sPageButtonActive\": \"current\",\n\t\t\"sPageButtonDisabled\": \"disabled\",\n\t\n\t\t/* Striping classes */\n\t\t\"sStripeOdd\": \"odd\",\n\t\t\"sStripeEven\": \"even\",\n\t\n\t\t/* Empty row */\n\t\t\"sRowEmpty\": \"dataTables_empty\",\n\t\n\t\t/* Features */\n\t\t\"sWrapper\": \"dataTables_wrapper\",\n\t\t\"sFilter\": \"dataTables_filter\",\n\t\t\"sInfo\": \"dataTables_info\",\n\t\t\"sPaging\": \"dataTables_paginate paging_\", /* Note that the type is postfixed */\n\t\t\"sLength\": \"dataTables_length\",\n\t\t\"sProcessing\": \"dataTables_processing\",\n\t\n\t\t/* Sorting */\n\t\t\"sSortAsc\": \"sorting_asc\",\n\t\t\"sSortDesc\": \"sorting_desc\",\n\t\t\"sSortable\": \"sorting\", /* Sortable in both directions */\n\t\t\"sSortableAsc\": \"sorting_asc_disabled\",\n\t\t\"sSortableDesc\": \"sorting_desc_disabled\",\n\t\t\"sSortableNone\": \"sorting_disabled\",\n\t\t\"sSortColumn\": \"sorting_\", /* Note that an int is postfixed for the sorting order */\n\t\n\t\t/* Filtering */\n\t\t\"sFilterInput\": \"\",\n\t\n\t\t/* Page length */\n\t\t\"sLengthSelect\": \"\",\n\t\n\t\t/* Scrolling */\n\t\t\"sScrollWrapper\": \"dataTables_scroll\",\n\t\t\"sScrollHead\": \"dataTables_scrollHead\",\n\t\t\"sScrollHeadInner\": \"dataTables_scrollHeadInner\",\n\t\t\"sScrollBody\": \"dataTables_scrollBody\",\n\t\t\"sScrollFoot\": \"dataTables_scrollFoot\",\n\t\t\"sScrollFootInner\": \"dataTables_scrollFootInner\",\n\t\n\t\t/* Misc */\n\t\t\"sHeaderTH\": \"\",\n\t\t\"sFooterTH\": \"\",\n\t\n\t\t// Deprecated\n\t\t\"sSortJUIAsc\": \"\",\n\t\t\"sSortJUIDesc\": \"\",\n\t\t\"sSortJUI\": \"\",\n\t\t\"sSortJUIAscAllowed\": \"\",\n\t\t\"sSortJUIDescAllowed\": \"\",\n\t\t\"sSortJUIWrapper\": \"\",\n\t\t\"sSortIcon\": \"\",\n\t\t\"sJUIHeader\": \"\",\n\t\t\"sJUIFooter\": \"\"\n\t} );\n\t\n\t\n\t(function() {\n\t\n\t// Reused strings for better compression. Closure compiler appears to have a\n\t// weird edge case where it is trying to expand strings rather than use the\n\t// variable version. This results in about 200 bytes being added, for very\n\t// little preference benefit since it this run on script load only.\n\tvar _empty = '';\n\t_empty = '';\n\t\n\tvar _stateDefault = _empty + 'ui-state-default';\n\tvar _sortIcon     = _empty + 'css_right ui-icon ui-icon-';\n\tvar _headerFooter = _empty + 'fg-toolbar ui-toolbar ui-widget-header ui-helper-clearfix';\n\t\n\t$.extend( DataTable.ext.oJUIClasses, DataTable.ext.classes, {\n\t\t/* Full numbers paging buttons */\n\t\t\"sPageButton\":         \"fg-button ui-button \"+_stateDefault,\n\t\t\"sPageButtonActive\":   \"ui-state-disabled\",\n\t\t\"sPageButtonDisabled\": \"ui-state-disabled\",\n\t\n\t\t/* Features */\n\t\t\"sPaging\": \"dataTables_paginate fg-buttonset ui-buttonset fg-buttonset-multi \"+\n\t\t\t\"ui-buttonset-multi paging_\", /* Note that the type is postfixed */\n\t\n\t\t/* Sorting */\n\t\t\"sSortAsc\":            _stateDefault+\" sorting_asc\",\n\t\t\"sSortDesc\":           _stateDefault+\" sorting_desc\",\n\t\t\"sSortable\":           _stateDefault+\" sorting\",\n\t\t\"sSortableAsc\":        _stateDefault+\" sorting_asc_disabled\",\n\t\t\"sSortableDesc\":       _stateDefault+\" sorting_desc_disabled\",\n\t\t\"sSortableNone\":       _stateDefault+\" sorting_disabled\",\n\t\t\"sSortJUIAsc\":         _sortIcon+\"triangle-1-n\",\n\t\t\"sSortJUIDesc\":        _sortIcon+\"triangle-1-s\",\n\t\t\"sSortJUI\":            _sortIcon+\"carat-2-n-s\",\n\t\t\"sSortJUIAscAllowed\":  _sortIcon+\"carat-1-n\",\n\t\t\"sSortJUIDescAllowed\": _sortIcon+\"carat-1-s\",\n\t\t\"sSortJUIWrapper\":     \"DataTables_sort_wrapper\",\n\t\t\"sSortIcon\":           \"DataTables_sort_icon\",\n\t\n\t\t/* Scrolling */\n\t\t\"sScrollHead\": \"dataTables_scrollHead \"+_stateDefault,\n\t\t\"sScrollFoot\": \"dataTables_scrollFoot \"+_stateDefault,\n\t\n\t\t/* Misc */\n\t\t\"sHeaderTH\":  _stateDefault,\n\t\t\"sFooterTH\":  _stateDefault,\n\t\t\"sJUIHeader\": _headerFooter+\" ui-corner-tl ui-corner-tr\",\n\t\t\"sJUIFooter\": _headerFooter+\" ui-corner-bl ui-corner-br\"\n\t} );\n\t\n\t}());\n\t\n\t\n\t\n\tvar extPagination = DataTable.ext.pager;\n\t\n\tfunction _numbers ( page, pages ) {\n\t\tvar\n\t\t\tnumbers = [],\n\t\t\tbuttons = extPagination.numbers_length,\n\t\t\thalf = Math.floor( buttons / 2 ),\n\t\t\ti = 1;\n\t\n\t\tif ( pages <= buttons ) {\n\t\t\tnumbers = _range( 0, pages );\n\t\t}\n\t\telse if ( page <= half ) {\n\t\t\tnumbers = _range( 0, buttons-2 );\n\t\t\tnumbers.push( 'ellipsis' );\n\t\t\tnumbers.push( pages-1 );\n\t\t}\n\t\telse if ( page >= pages - 1 - half ) {\n\t\t\tnumbers = _range( pages-(buttons-2), pages );\n\t\t\tnumbers.splice( 0, 0, 'ellipsis' ); // no unshift in ie6\n\t\t\tnumbers.splice( 0, 0, 0 );\n\t\t}\n\t\telse {\n\t\t\tnumbers = _range( page-half+2, page+half-1 );\n\t\t\tnumbers.push( 'ellipsis' );\n\t\t\tnumbers.push( pages-1 );\n\t\t\tnumbers.splice( 0, 0, 'ellipsis' );\n\t\t\tnumbers.splice( 0, 0, 0 );\n\t\t}\n\t\n\t\tnumbers.DT_el = 'span';\n\t\treturn numbers;\n\t}\n\t\n\t\n\t$.extend( extPagination, {\n\t\tsimple: function ( page, pages ) {\n\t\t\treturn [ 'previous', 'next' ];\n\t\t},\n\t\n\t\tfull: function ( page, pages ) {\n\t\t\treturn [  'first', 'previous', 'next', 'last' ];\n\t\t},\n\t\n\t\tnumbers: function ( page, pages ) {\n\t\t\treturn [ _numbers(page, pages) ];\n\t\t},\n\t\n\t\tsimple_numbers: function ( page, pages ) {\n\t\t\treturn [ 'previous', _numbers(page, pages), 'next' ];\n\t\t},\n\t\n\t\tfull_numbers: function ( page, pages ) {\n\t\t\treturn [ 'first', 'previous', _numbers(page, pages), 'next', 'last' ];\n\t\t},\n\t\t\n\t\tfirst_last_numbers: function (page, pages) {\n\t \t\treturn ['first', _numbers(page, pages), 'last'];\n\t \t},\n\t\n\t\t// For testing and plug-ins to use\n\t\t_numbers: _numbers,\n\t\n\t\t// Number of number buttons (including ellipsis) to show. _Must be odd!_\n\t\tnumbers_length: 7\n\t} );\n\t\n\t\n\t$.extend( true, DataTable.ext.renderer, {\n\t\tpageButton: {\n\t\t\t_: function ( settings, host, idx, buttons, page, pages ) {\n\t\t\t\tvar classes = settings.oClasses;\n\t\t\t\tvar lang = settings.oLanguage.oPaginate;\n\t\t\t\tvar aria = settings.oLanguage.oAria.paginate || {};\n\t\t\t\tvar btnDisplay, btnClass, counter=0;\n\t\n\t\t\t\tvar attach = function( container, buttons ) {\n\t\t\t\t\tvar i, ien, node, button;\n\t\t\t\t\tvar clickHandler = function ( e ) {\n\t\t\t\t\t\t_fnPageChange( settings, e.data.action, true );\n\t\t\t\t\t};\n\t\n\t\t\t\t\tfor ( i=0, ien=buttons.length ; i<ien ; i++ ) {\n\t\t\t\t\t\tbutton = buttons[i];\n\t\n\t\t\t\t\t\tif ( $.isArray( button ) ) {\n\t\t\t\t\t\t\tvar inner = $( '<'+(button.DT_el || 'div')+'/>' )\n\t\t\t\t\t\t\t\t.appendTo( container );\n\t\t\t\t\t\t\tattach( inner, button );\n\t\t\t\t\t\t}\n\t\t\t\t\t\telse {\n\t\t\t\t\t\t\tbtnDisplay = null;\n\t\t\t\t\t\t\tbtnClass = '';\n\t\n\t\t\t\t\t\t\tswitch ( button ) {\n\t\t\t\t\t\t\t\tcase 'ellipsis':\n\t\t\t\t\t\t\t\t\tcontainer.append('<span class=\"ellipsis\">&#x2026;</span>');\n\t\t\t\t\t\t\t\t\tbreak;\n\t\n\t\t\t\t\t\t\t\tcase 'first':\n\t\t\t\t\t\t\t\t\tbtnDisplay = lang.sFirst;\n\t\t\t\t\t\t\t\t\tbtnClass = button + (page > 0 ?\n\t\t\t\t\t\t\t\t\t\t'' : ' '+classes.sPageButtonDisabled);\n\t\t\t\t\t\t\t\t\tbreak;\n\t\n\t\t\t\t\t\t\t\tcase 'previous':\n\t\t\t\t\t\t\t\t\tbtnDisplay = lang.sPrevious;\n\t\t\t\t\t\t\t\t\tbtnClass = button + (page > 0 ?\n\t\t\t\t\t\t\t\t\t\t'' : ' '+classes.sPageButtonDisabled);\n\t\t\t\t\t\t\t\t\tbreak;\n\t\n\t\t\t\t\t\t\t\tcase 'next':\n\t\t\t\t\t\t\t\t\tbtnDisplay = lang.sNext;\n\t\t\t\t\t\t\t\t\tbtnClass = button + (page < pages-1 ?\n\t\t\t\t\t\t\t\t\t\t'' : ' '+classes.sPageButtonDisabled);\n\t\t\t\t\t\t\t\t\tbreak;\n\t\n\t\t\t\t\t\t\t\tcase 'last':\n\t\t\t\t\t\t\t\t\tbtnDisplay = lang.sLast;\n\t\t\t\t\t\t\t\t\tbtnClass = button + (page < pages-1 ?\n\t\t\t\t\t\t\t\t\t\t'' : ' '+classes.sPageButtonDisabled);\n\t\t\t\t\t\t\t\t\tbreak;\n\t\n\t\t\t\t\t\t\t\tdefault:\n\t\t\t\t\t\t\t\t\tbtnDisplay = button + 1;\n\t\t\t\t\t\t\t\t\tbtnClass = page === button ?\n\t\t\t\t\t\t\t\t\t\tclasses.sPageButtonActive : '';\n\t\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t}\n\t\n\t\t\t\t\t\t\tif ( btnDisplay !== null ) {\n\t\t\t\t\t\t\t\tnode = $('<a>', {\n\t\t\t\t\t\t\t\t\t\t'class': classes.sPageButton+' '+btnClass,\n\t\t\t\t\t\t\t\t\t\t'aria-controls': settings.sTableId,\n\t\t\t\t\t\t\t\t\t\t'aria-label': aria[ button ],\n\t\t\t\t\t\t\t\t\t\t'data-dt-idx': counter,\n\t\t\t\t\t\t\t\t\t\t'tabindex': settings.iTabIndex,\n\t\t\t\t\t\t\t\t\t\t'id': idx === 0 && typeof button === 'string' ?\n\t\t\t\t\t\t\t\t\t\t\tsettings.sTableId +'_'+ button :\n\t\t\t\t\t\t\t\t\t\t\tnull\n\t\t\t\t\t\t\t\t\t} )\n\t\t\t\t\t\t\t\t\t.html( btnDisplay )\n\t\t\t\t\t\t\t\t\t.appendTo( container );\n\t\n\t\t\t\t\t\t\t\t_fnBindAction(\n\t\t\t\t\t\t\t\t\tnode, {action: button}, clickHandler\n\t\t\t\t\t\t\t\t);\n\t\n\t\t\t\t\t\t\t\tcounter++;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t};\n\t\n\t\t\t\t// IE9 throws an 'unknown error' if document.activeElement is used\n\t\t\t\t// inside an iframe or frame. Try / catch the error. Not good for\n\t\t\t\t// accessibility, but neither are frames.\n\t\t\t\tvar activeEl;\n\t\n\t\t\t\ttry {\n\t\t\t\t\t// Because this approach is destroying and recreating the paging\n\t\t\t\t\t// elements, focus is lost on the select button which is bad for\n\t\t\t\t\t// accessibility. So we want to restore focus once the draw has\n\t\t\t\t\t// completed\n\t\t\t\t\tactiveEl = $(host).find(document.activeElement).data('dt-idx');\n\t\t\t\t}\n\t\t\t\tcatch (e) {}\n\t\n\t\t\t\tattach( $(host).empty(), buttons );\n\t\n\t\t\t\tif ( activeEl !== undefined ) {\n\t\t\t\t\t$(host).find( '[data-dt-idx='+activeEl+']' ).focus();\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t} );\n\t\n\t\n\t\n\t// Built in type detection. See model.ext.aTypes for information about\n\t// what is required from this methods.\n\t$.extend( DataTable.ext.type.detect, [\n\t\t// Plain numbers - first since V8 detects some plain numbers as dates\n\t\t// e.g. Date.parse('55') (but not all, e.g. Date.parse('22')...).\n\t\tfunction ( d, settings )\n\t\t{\n\t\t\tvar decimal = settings.oLanguage.sDecimal;\n\t\t\treturn _isNumber( d, decimal ) ? 'num'+decimal : null;\n\t\t},\n\t\n\t\t// Dates (only those recognised by the browser's Date.parse)\n\t\tfunction ( d, settings )\n\t\t{\n\t\t\t// V8 tries _very_ hard to make a string passed into `Date.parse()`\n\t\t\t// valid, so we need to use a regex to restrict date formats. Use a\n\t\t\t// plug-in for anything other than ISO8601 style strings\n\t\t\tif ( d && !(d instanceof Date) && ! _re_date.test(d) ) {\n\t\t\t\treturn null;\n\t\t\t}\n\t\t\tvar parsed = Date.parse(d);\n\t\t\treturn (parsed !== null && !isNaN(parsed)) || _empty(d) ? 'date' : null;\n\t\t},\n\t\n\t\t// Formatted numbers\n\t\tfunction ( d, settings )\n\t\t{\n\t\t\tvar decimal = settings.oLanguage.sDecimal;\n\t\t\treturn _isNumber( d, decimal, true ) ? 'num-fmt'+decimal : null;\n\t\t},\n\t\n\t\t// HTML numeric\n\t\tfunction ( d, settings )\n\t\t{\n\t\t\tvar decimal = settings.oLanguage.sDecimal;\n\t\t\treturn _htmlNumeric( d, decimal ) ? 'html-num'+decimal : null;\n\t\t},\n\t\n\t\t// HTML numeric, formatted\n\t\tfunction ( d, settings )\n\t\t{\n\t\t\tvar decimal = settings.oLanguage.sDecimal;\n\t\t\treturn _htmlNumeric( d, decimal, true ) ? 'html-num-fmt'+decimal : null;\n\t\t},\n\t\n\t\t// HTML (this is strict checking - there must be html)\n\t\tfunction ( d, settings )\n\t\t{\n\t\t\treturn _empty( d ) || (typeof d === 'string' && d.indexOf('<') !== -1) ?\n\t\t\t\t'html' : null;\n\t\t}\n\t] );\n\t\n\t\n\t\n\t// Filter formatting functions. See model.ext.ofnSearch for information about\n\t// what is required from these methods.\n\t// \n\t// Note that additional search methods are added for the html numbers and\n\t// html formatted numbers by `_addNumericSort()` when we know what the decimal\n\t// place is\n\t\n\t\n\t$.extend( DataTable.ext.type.search, {\n\t\thtml: function ( data ) {\n\t\t\treturn _empty(data) ?\n\t\t\t\tdata :\n\t\t\t\ttypeof data === 'string' ?\n\t\t\t\t\tdata\n\t\t\t\t\t\t.replace( _re_new_lines, \" \" )\n\t\t\t\t\t\t.replace( _re_html, \"\" ) :\n\t\t\t\t\t'';\n\t\t},\n\t\n\t\tstring: function ( data ) {\n\t\t\treturn _empty(data) ?\n\t\t\t\tdata :\n\t\t\t\ttypeof data === 'string' ?\n\t\t\t\t\tdata.replace( _re_new_lines, \" \" ) :\n\t\t\t\t\tdata;\n\t\t}\n\t} );\n\t\n\t\n\t\n\tvar __numericReplace = function ( d, decimalPlace, re1, re2 ) {\n\t\tif ( d !== 0 && (!d || d === '-') ) {\n\t\t\treturn -Infinity;\n\t\t}\n\t\n\t\t// If a decimal place other than `.` is used, it needs to be given to the\n\t\t// function so we can detect it and replace with a `.` which is the only\n\t\t// decimal place Javascript recognises - it is not locale aware.\n\t\tif ( decimalPlace ) {\n\t\t\td = _numToDecimal( d, decimalPlace );\n\t\t}\n\t\n\t\tif ( d.replace ) {\n\t\t\tif ( re1 ) {\n\t\t\t\td = d.replace( re1, '' );\n\t\t\t}\n\t\n\t\t\tif ( re2 ) {\n\t\t\t\td = d.replace( re2, '' );\n\t\t\t}\n\t\t}\n\t\n\t\treturn d * 1;\n\t};\n\t\n\t\n\t// Add the numeric 'deformatting' functions for sorting and search. This is done\n\t// in a function to provide an easy ability for the language options to add\n\t// additional methods if a non-period decimal place is used.\n\tfunction _addNumericSort ( decimalPlace ) {\n\t\t$.each(\n\t\t\t{\n\t\t\t\t// Plain numbers\n\t\t\t\t\"num\": function ( d ) {\n\t\t\t\t\treturn __numericReplace( d, decimalPlace );\n\t\t\t\t},\n\t\n\t\t\t\t// Formatted numbers\n\t\t\t\t\"num-fmt\": function ( d ) {\n\t\t\t\t\treturn __numericReplace( d, decimalPlace, _re_formatted_numeric );\n\t\t\t\t},\n\t\n\t\t\t\t// HTML numeric\n\t\t\t\t\"html-num\": function ( d ) {\n\t\t\t\t\treturn __numericReplace( d, decimalPlace, _re_html );\n\t\t\t\t},\n\t\n\t\t\t\t// HTML numeric, formatted\n\t\t\t\t\"html-num-fmt\": function ( d ) {\n\t\t\t\t\treturn __numericReplace( d, decimalPlace, _re_html, _re_formatted_numeric );\n\t\t\t\t}\n\t\t\t},\n\t\t\tfunction ( key, fn ) {\n\t\t\t\t// Add the ordering method\n\t\t\t\t_ext.type.order[ key+decimalPlace+'-pre' ] = fn;\n\t\n\t\t\t\t// For HTML types add a search formatter that will strip the HTML\n\t\t\t\tif ( key.match(/^html\\-/) ) {\n\t\t\t\t\t_ext.type.search[ key+decimalPlace ] = _ext.type.search.html;\n\t\t\t\t}\n\t\t\t}\n\t\t);\n\t}\n\t\n\t\n\t// Default sort methods\n\t$.extend( _ext.type.order, {\n\t\t// Dates\n\t\t\"date-pre\": function ( d ) {\n\t\t\treturn Date.parse( d ) || -Infinity;\n\t\t},\n\t\n\t\t// html\n\t\t\"html-pre\": function ( a ) {\n\t\t\treturn _empty(a) ?\n\t\t\t\t'' :\n\t\t\t\ta.replace ?\n\t\t\t\t\ta.replace( /<.*?>/g, \"\" ).toLowerCase() :\n\t\t\t\t\ta+'';\n\t\t},\n\t\n\t\t// string\n\t\t\"string-pre\": function ( a ) {\n\t\t\t// This is a little complex, but faster than always calling toString,\n\t\t\t// http://jsperf.com/tostring-v-check\n\t\t\treturn _empty(a) ?\n\t\t\t\t'' :\n\t\t\t\ttypeof a === 'string' ?\n\t\t\t\t\ta.toLowerCase() :\n\t\t\t\t\t! a.toString ?\n\t\t\t\t\t\t'' :\n\t\t\t\t\t\ta.toString();\n\t\t},\n\t\n\t\t// string-asc and -desc are retained only for compatibility with the old\n\t\t// sort methods\n\t\t\"string-asc\": function ( x, y ) {\n\t\t\treturn ((x < y) ? -1 : ((x > y) ? 1 : 0));\n\t\t},\n\t\n\t\t\"string-desc\": function ( x, y ) {\n\t\t\treturn ((x < y) ? 1 : ((x > y) ? -1 : 0));\n\t\t}\n\t} );\n\t\n\t\n\t// Numeric sorting types - order doesn't matter here\n\t_addNumericSort( '' );\n\t\n\t\n\t$.extend( true, DataTable.ext.renderer, {\n\t\theader: {\n\t\t\t_: function ( settings, cell, column, classes ) {\n\t\t\t\t// No additional mark-up required\n\t\t\t\t// Attach a sort listener to update on sort - note that using the\n\t\t\t\t// `DT` namespace will allow the event to be removed automatically\n\t\t\t\t// on destroy, while the `dt` namespaced event is the one we are\n\t\t\t\t// listening for\n\t\t\t\t$(settings.nTable).on( 'order.dt.DT', function ( e, ctx, sorting, columns ) {\n\t\t\t\t\tif ( settings !== ctx ) { // need to check this this is the host\n\t\t\t\t\t\treturn;               // table, not a nested one\n\t\t\t\t\t}\n\t\n\t\t\t\t\tvar colIdx = column.idx;\n\t\n\t\t\t\t\tcell\n\t\t\t\t\t\t.removeClass(\n\t\t\t\t\t\t\tcolumn.sSortingClass +' '+\n\t\t\t\t\t\t\tclasses.sSortAsc +' '+\n\t\t\t\t\t\t\tclasses.sSortDesc\n\t\t\t\t\t\t)\n\t\t\t\t\t\t.addClass( columns[ colIdx ] == 'asc' ?\n\t\t\t\t\t\t\tclasses.sSortAsc : columns[ colIdx ] == 'desc' ?\n\t\t\t\t\t\t\t\tclasses.sSortDesc :\n\t\t\t\t\t\t\t\tcolumn.sSortingClass\n\t\t\t\t\t\t);\n\t\t\t\t} );\n\t\t\t},\n\t\n\t\t\tjqueryui: function ( settings, cell, column, classes ) {\n\t\t\t\t$('<div/>')\n\t\t\t\t\t.addClass( classes.sSortJUIWrapper )\n\t\t\t\t\t.append( cell.contents() )\n\t\t\t\t\t.append( $('<span/>')\n\t\t\t\t\t\t.addClass( classes.sSortIcon+' '+column.sSortingClassJUI )\n\t\t\t\t\t)\n\t\t\t\t\t.appendTo( cell );\n\t\n\t\t\t\t// Attach a sort listener to update on sort\n\t\t\t\t$(settings.nTable).on( 'order.dt.DT', function ( e, ctx, sorting, columns ) {\n\t\t\t\t\tif ( settings !== ctx ) {\n\t\t\t\t\t\treturn;\n\t\t\t\t\t}\n\t\n\t\t\t\t\tvar colIdx = column.idx;\n\t\n\t\t\t\t\tcell\n\t\t\t\t\t\t.removeClass( classes.sSortAsc +\" \"+classes.sSortDesc )\n\t\t\t\t\t\t.addClass( columns[ colIdx ] == 'asc' ?\n\t\t\t\t\t\t\tclasses.sSortAsc : columns[ colIdx ] == 'desc' ?\n\t\t\t\t\t\t\t\tclasses.sSortDesc :\n\t\t\t\t\t\t\t\tcolumn.sSortingClass\n\t\t\t\t\t\t);\n\t\n\t\t\t\t\tcell\n\t\t\t\t\t\t.find( 'span.'+classes.sSortIcon )\n\t\t\t\t\t\t.removeClass(\n\t\t\t\t\t\t\tclasses.sSortJUIAsc +\" \"+\n\t\t\t\t\t\t\tclasses.sSortJUIDesc +\" \"+\n\t\t\t\t\t\t\tclasses.sSortJUI +\" \"+\n\t\t\t\t\t\t\tclasses.sSortJUIAscAllowed +\" \"+\n\t\t\t\t\t\t\tclasses.sSortJUIDescAllowed\n\t\t\t\t\t\t)\n\t\t\t\t\t\t.addClass( columns[ colIdx ] == 'asc' ?\n\t\t\t\t\t\t\tclasses.sSortJUIAsc : columns[ colIdx ] == 'desc' ?\n\t\t\t\t\t\t\t\tclasses.sSortJUIDesc :\n\t\t\t\t\t\t\t\tcolumn.sSortingClassJUI\n\t\t\t\t\t\t);\n\t\t\t\t} );\n\t\t\t}\n\t\t}\n\t} );\n\t\n\t/*\n\t * Public helper functions. These aren't used internally by DataTables, or\n\t * called by any of the options passed into DataTables, but they can be used\n\t * externally by developers working with DataTables. They are helper functions\n\t * to make working with DataTables a little bit easier.\n\t */\n\t\n\tvar __htmlEscapeEntities = function ( d ) {\n\t\treturn typeof d === 'string' ?\n\t\t\td.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\"/g, '&quot;') :\n\t\t\td;\n\t};\n\t\n\t/**\n\t * Helpers for `columns.render`.\n\t *\n\t * The options defined here can be used with the `columns.render` initialisation\n\t * option to provide a display renderer. The following functions are defined:\n\t *\n\t * * `number` - Will format numeric data (defined by `columns.data`) for\n\t *   display, retaining the original unformatted data for sorting and filtering.\n\t *   It takes 5 parameters:\n\t *   * `string` - Thousands grouping separator\n\t *   * `string` - Decimal point indicator\n\t *   * `integer` - Number of decimal points to show\n\t *   * `string` (optional) - Prefix.\n\t *   * `string` (optional) - Postfix (/suffix).\n\t * * `text` - Escape HTML to help prevent XSS attacks. It has no optional\n\t *   parameters.\n\t *\n\t * @example\n\t *   // Column definition using the number renderer\n\t *   {\n\t *     data: \"salary\",\n\t *     render: $.fn.dataTable.render.number( '\\'', '.', 0, '$' )\n\t *   }\n\t *\n\t * @namespace\n\t */\n\tDataTable.render = {\n\t\tnumber: function ( thousands, decimal, precision, prefix, postfix ) {\n\t\t\treturn {\n\t\t\t\tdisplay: function ( d ) {\n\t\t\t\t\tif ( typeof d !== 'number' && typeof d !== 'string' ) {\n\t\t\t\t\t\treturn d;\n\t\t\t\t\t}\n\t\n\t\t\t\t\tvar negative = d < 0 ? '-' : '';\n\t\t\t\t\tvar flo = parseFloat( d );\n\t\n\t\t\t\t\t// If NaN then there isn't much formatting that we can do - just\n\t\t\t\t\t// return immediately, escaping any HTML (this was supposed to\n\t\t\t\t\t// be a number after all)\n\t\t\t\t\tif ( isNaN( flo ) ) {\n\t\t\t\t\t\treturn __htmlEscapeEntities( d );\n\t\t\t\t\t}\n\t\n\t\t\t\t\tflo = flo.toFixed( precision );\n\t\t\t\t\td = Math.abs( flo );\n\t\n\t\t\t\t\tvar intPart = parseInt( d, 10 );\n\t\t\t\t\tvar floatPart = precision ?\n\t\t\t\t\t\tdecimal+(d - intPart).toFixed( precision ).substring( 2 ):\n\t\t\t\t\t\t'';\n\t\n\t\t\t\t\treturn negative + (prefix||'') +\n\t\t\t\t\t\tintPart.toString().replace(\n\t\t\t\t\t\t\t/\\B(?=(\\d{3})+(?!\\d))/g, thousands\n\t\t\t\t\t\t) +\n\t\t\t\t\t\tfloatPart +\n\t\t\t\t\t\t(postfix||'');\n\t\t\t\t}\n\t\t\t};\n\t\t},\n\t\n\t\ttext: function () {\n\t\t\treturn {\n\t\t\t\tdisplay: __htmlEscapeEntities\n\t\t\t};\n\t\t}\n\t};\n\t\n\t\n\t/*\n\t * This is really a good bit rubbish this method of exposing the internal methods\n\t * publicly... - To be fixed in 2.0 using methods on the prototype\n\t */\n\t\n\t\n\t/**\n\t * Create a wrapper function for exporting an internal functions to an external API.\n\t *  @param {string} fn API function name\n\t *  @returns {function} wrapped function\n\t *  @memberof DataTable#internal\n\t */\n\tfunction _fnExternApiFunc (fn)\n\t{\n\t\treturn function() {\n\t\t\tvar args = [_fnSettingsFromNode( this[DataTable.ext.iApiIndex] )].concat(\n\t\t\t\tArray.prototype.slice.call(arguments)\n\t\t\t);\n\t\t\treturn DataTable.ext.internal[fn].apply( this, args );\n\t\t};\n\t}\n\t\n\t\n\t/**\n\t * Reference to internal functions for use by plug-in developers. Note that\n\t * these methods are references to internal functions and are considered to be\n\t * private. If you use these methods, be aware that they are liable to change\n\t * between versions.\n\t *  @namespace\n\t */\n\t$.extend( DataTable.ext.internal, {\n\t\t_fnExternApiFunc: _fnExternApiFunc,\n\t\t_fnBuildAjax: _fnBuildAjax,\n\t\t_fnAjaxUpdate: _fnAjaxUpdate,\n\t\t_fnAjaxParameters: _fnAjaxParameters,\n\t\t_fnAjaxUpdateDraw: _fnAjaxUpdateDraw,\n\t\t_fnAjaxDataSrc: _fnAjaxDataSrc,\n\t\t_fnAddColumn: _fnAddColumn,\n\t\t_fnColumnOptions: _fnColumnOptions,\n\t\t_fnAdjustColumnSizing: _fnAdjustColumnSizing,\n\t\t_fnVisibleToColumnIndex: _fnVisibleToColumnIndex,\n\t\t_fnColumnIndexToVisible: _fnColumnIndexToVisible,\n\t\t_fnVisbleColumns: _fnVisbleColumns,\n\t\t_fnGetColumns: _fnGetColumns,\n\t\t_fnColumnTypes: _fnColumnTypes,\n\t\t_fnApplyColumnDefs: _fnApplyColumnDefs,\n\t\t_fnHungarianMap: _fnHungarianMap,\n\t\t_fnCamelToHungarian: _fnCamelToHungarian,\n\t\t_fnLanguageCompat: _fnLanguageCompat,\n\t\t_fnBrowserDetect: _fnBrowserDetect,\n\t\t_fnAddData: _fnAddData,\n\t\t_fnAddTr: _fnAddTr,\n\t\t_fnNodeToDataIndex: _fnNodeToDataIndex,\n\t\t_fnNodeToColumnIndex: _fnNodeToColumnIndex,\n\t\t_fnGetCellData: _fnGetCellData,\n\t\t_fnSetCellData: _fnSetCellData,\n\t\t_fnSplitObjNotation: _fnSplitObjNotation,\n\t\t_fnGetObjectDataFn: _fnGetObjectDataFn,\n\t\t_fnSetObjectDataFn: _fnSetObjectDataFn,\n\t\t_fnGetDataMaster: _fnGetDataMaster,\n\t\t_fnClearTable: _fnClearTable,\n\t\t_fnDeleteIndex: _fnDeleteIndex,\n\t\t_fnInvalidate: _fnInvalidate,\n\t\t_fnGetRowElements: _fnGetRowElements,\n\t\t_fnCreateTr: _fnCreateTr,\n\t\t_fnBuildHead: _fnBuildHead,\n\t\t_fnDrawHead: _fnDrawHead,\n\t\t_fnDraw: _fnDraw,\n\t\t_fnReDraw: _fnReDraw,\n\t\t_fnAddOptionsHtml: _fnAddOptionsHtml,\n\t\t_fnDetectHeader: _fnDetectHeader,\n\t\t_fnGetUniqueThs: _fnGetUniqueThs,\n\t\t_fnFeatureHtmlFilter: _fnFeatureHtmlFilter,\n\t\t_fnFilterComplete: _fnFilterComplete,\n\t\t_fnFilterCustom: _fnFilterCustom,\n\t\t_fnFilterColumn: _fnFilterColumn,\n\t\t_fnFilter: _fnFilter,\n\t\t_fnFilterCreateSearch: _fnFilterCreateSearch,\n\t\t_fnEscapeRegex: _fnEscapeRegex,\n\t\t_fnFilterData: _fnFilterData,\n\t\t_fnFeatureHtmlInfo: _fnFeatureHtmlInfo,\n\t\t_fnUpdateInfo: _fnUpdateInfo,\n\t\t_fnInfoMacros: _fnInfoMacros,\n\t\t_fnInitialise: _fnInitialise,\n\t\t_fnInitComplete: _fnInitComplete,\n\t\t_fnLengthChange: _fnLengthChange,\n\t\t_fnFeatureHtmlLength: _fnFeatureHtmlLength,\n\t\t_fnFeatureHtmlPaginate: _fnFeatureHtmlPaginate,\n\t\t_fnPageChange: _fnPageChange,\n\t\t_fnFeatureHtmlProcessing: _fnFeatureHtmlProcessing,\n\t\t_fnProcessingDisplay: _fnProcessingDisplay,\n\t\t_fnFeatureHtmlTable: _fnFeatureHtmlTable,\n\t\t_fnScrollDraw: _fnScrollDraw,\n\t\t_fnApplyToChildren: _fnApplyToChildren,\n\t\t_fnCalculateColumnWidths: _fnCalculateColumnWidths,\n\t\t_fnThrottle: _fnThrottle,\n\t\t_fnConvertToWidth: _fnConvertToWidth,\n\t\t_fnGetWidestNode: _fnGetWidestNode,\n\t\t_fnGetMaxLenString: _fnGetMaxLenString,\n\t\t_fnStringToCss: _fnStringToCss,\n\t\t_fnSortFlatten: _fnSortFlatten,\n\t\t_fnSort: _fnSort,\n\t\t_fnSortAria: _fnSortAria,\n\t\t_fnSortListener: _fnSortListener,\n\t\t_fnSortAttachListener: _fnSortAttachListener,\n\t\t_fnSortingClasses: _fnSortingClasses,\n\t\t_fnSortData: _fnSortData,\n\t\t_fnSaveState: _fnSaveState,\n\t\t_fnLoadState: _fnLoadState,\n\t\t_fnSettingsFromNode: _fnSettingsFromNode,\n\t\t_fnLog: _fnLog,\n\t\t_fnMap: _fnMap,\n\t\t_fnBindAction: _fnBindAction,\n\t\t_fnCallbackReg: _fnCallbackReg,\n\t\t_fnCallbackFire: _fnCallbackFire,\n\t\t_fnLengthOverflow: _fnLengthOverflow,\n\t\t_fnRenderer: _fnRenderer,\n\t\t_fnDataSource: _fnDataSource,\n\t\t_fnRowAttributes: _fnRowAttributes,\n\t\t_fnCalculateEnd: function () {} // Used by a lot of plug-ins, but redundant\n\t\t                                // in 1.10, so this dead-end function is\n\t\t                                // added to prevent errors\n\t} );\n\t\n\n\t// jQuery access\n\t$.fn.dataTable = DataTable;\n\n\t// Provide access to the host jQuery object (circular reference)\n\tDataTable.$ = $;\n\n\t// Legacy aliases\n\t$.fn.dataTableSettings = DataTable.settings;\n\t$.fn.dataTableExt = DataTable.ext;\n\n\t// With a capital `D` we return a DataTables API instance rather than a\n\t// jQuery object\n\t$.fn.DataTable = function ( opts ) {\n\t\treturn $(this).dataTable( opts ).api();\n\t};\n\n\t// All properties that are available to $.fn.dataTable should also be\n\t// available on $.fn.DataTable\n\t$.each( DataTable, function ( prop, val ) {\n\t\t$.fn.DataTable[ prop ] = val;\n\t} );\n\n\n\t// Information about events fired by DataTables - for documentation.\n\t/**\n\t * Draw event, fired whenever the table is redrawn on the page, at the same\n\t * point as fnDrawCallback. This may be useful for binding events or\n\t * performing calculations when the table is altered at all.\n\t *  @name DataTable#draw.dt\n\t *  @event\n\t *  @param {event} e jQuery event object\n\t *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}\n\t */\n\n\t/**\n\t * Search event, fired when the searching applied to the table (using the\n\t * built-in global search, or column filters) is altered.\n\t *  @name DataTable#search.dt\n\t *  @event\n\t *  @param {event} e jQuery event object\n\t *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}\n\t */\n\n\t/**\n\t * Page change event, fired when the paging of the table is altered.\n\t *  @name DataTable#page.dt\n\t *  @event\n\t *  @param {event} e jQuery event object\n\t *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}\n\t */\n\n\t/**\n\t * Order event, fired when the ordering applied to the table is altered.\n\t *  @name DataTable#order.dt\n\t *  @event\n\t *  @param {event} e jQuery event object\n\t *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}\n\t */\n\n\t/**\n\t * DataTables initialisation complete event, fired when the table is fully\n\t * drawn, including Ajax data loaded, if Ajax data is required.\n\t *  @name DataTable#init.dt\n\t *  @event\n\t *  @param {event} e jQuery event object\n\t *  @param {object} oSettings DataTables settings object\n\t *  @param {object} json The JSON object request from the server - only\n\t *    present if client-side Ajax sourced data is used</li></ol>\n\t */\n\n\t/**\n\t * State save event, fired when the table has changed state a new state save\n\t * is required. This event allows modification of the state saving object\n\t * prior to actually doing the save, including addition or other state\n\t * properties (for plug-ins) or modification of a DataTables core property.\n\t *  @name DataTable#stateSaveParams.dt\n\t *  @event\n\t *  @param {event} e jQuery event object\n\t *  @param {object} oSettings DataTables settings object\n\t *  @param {object} json The state information to be saved\n\t */\n\n\t/**\n\t * State load event, fired when the table is loading state from the stored\n\t * data, but prior to the settings object being modified by the saved state\n\t * - allowing modification of the saved state is required or loading of\n\t * state for a plug-in.\n\t *  @name DataTable#stateLoadParams.dt\n\t *  @event\n\t *  @param {event} e jQuery event object\n\t *  @param {object} oSettings DataTables settings object\n\t *  @param {object} json The saved state information\n\t */\n\n\t/**\n\t * State loaded event, fired when state has been loaded from stored data and\n\t * the settings object has been modified by the loaded data.\n\t *  @name DataTable#stateLoaded.dt\n\t *  @event\n\t *  @param {event} e jQuery event object\n\t *  @param {object} oSettings DataTables settings object\n\t *  @param {object} json The saved state information\n\t */\n\n\t/**\n\t * Processing event, fired when DataTables is doing some kind of processing\n\t * (be it, order, searcg or anything else). It can be used to indicate to\n\t * the end user that there is something happening, or that something has\n\t * finished.\n\t *  @name DataTable#processing.dt\n\t *  @event\n\t *  @param {event} e jQuery event object\n\t *  @param {object} oSettings DataTables settings object\n\t *  @param {boolean} bShow Flag for if DataTables is doing processing or not\n\t */\n\n\t/**\n\t * Ajax (XHR) event, fired whenever an Ajax request is completed from a\n\t * request to made to the server for new data. This event is called before\n\t * DataTables processed the returned data, so it can also be used to pre-\n\t * process the data returned from the server, if needed.\n\t *\n\t * Note that this trigger is called in `fnServerData`, if you override\n\t * `fnServerData` and which to use this event, you need to trigger it in you\n\t * success function.\n\t *  @name DataTable#xhr.dt\n\t *  @event\n\t *  @param {event} e jQuery event object\n\t *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}\n\t *  @param {object} json JSON returned from the server\n\t *\n\t *  @example\n\t *     // Use a custom property returned from the server in another DOM element\n\t *     $('#table').dataTable().on('xhr.dt', function (e, settings, json) {\n\t *       $('#status').html( json.status );\n\t *     } );\n\t *\n\t *  @example\n\t *     // Pre-process the data returned from the server\n\t *     $('#table').dataTable().on('xhr.dt', function (e, settings, json) {\n\t *       for ( var i=0, ien=json.aaData.length ; i<ien ; i++ ) {\n\t *         json.aaData[i].sum = json.aaData[i].one + json.aaData[i].two;\n\t *       }\n\t *       // Note no return - manipulate the data directly in the JSON object.\n\t *     } );\n\t */\n\n\t/**\n\t * Destroy event, fired when the DataTable is destroyed by calling fnDestroy\n\t * or passing the bDestroy:true parameter in the initialisation object. This\n\t * can be used to remove bound events, added DOM nodes, etc.\n\t *  @name DataTable#destroy.dt\n\t *  @event\n\t *  @param {event} e jQuery event object\n\t *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}\n\t */\n\n\t/**\n\t * Page length change event, fired when number of records to show on each\n\t * page (the length) is changed.\n\t *  @name DataTable#length.dt\n\t *  @event\n\t *  @param {event} e jQuery event object\n\t *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}\n\t *  @param {integer} len New length\n\t */\n\n\t/**\n\t * Column sizing has changed.\n\t *  @name DataTable#column-sizing.dt\n\t *  @event\n\t *  @param {event} e jQuery event object\n\t *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}\n\t */\n\n\t/**\n\t * Column visibility has changed.\n\t *  @name DataTable#column-visibility.dt\n\t *  @event\n\t *  @param {event} e jQuery event object\n\t *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}\n\t *  @param {int} column Column index\n\t *  @param {bool} vis `false` if column now hidden, or `true` if visible\n\t */\n\n\treturn $.fn.dataTable;\n}));\n"

/***/ }),

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1)(__webpack_require__(261))

/***/ }),

/***/ 272:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1)(__webpack_require__(262))

/***/ }),

/***/ 273:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1)(__webpack_require__(263))

/***/ }),

/***/ 274:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1)(__webpack_require__(264))

/***/ }),

/***/ 330:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
 * Part of the Antares Project package.
 *
 * NOTICE OF LICENSE
 *
 * Licensed under the 3-clause BSD License.
 *
 * This source file is subject to the 3-clause BSD License that is
 * bundled with this package in the LICENSE file.
 *
 * @package    Files
 * @version    0.9.0
 * @author     Antares Team
 * @license    BSD License (3-clause)
 * @copyright  (c) 2017, Antares Project
 * @link       http://antaresproject.io
 *
 
 */

/*!
 Autosize 3.0.20
 license: MIT
 http://www.jacklmoore.com/autosize
 */

__webpack_require__(140); // css in package
__webpack_require__(274);
__webpack_require__(272); // no css
__webpack_require__(273); // no css
__webpack_require__(271); // no css
// APP COMPONENTS:
__webpack_require__(131);
__webpack_require__(132);
// OUTED BY SERVERSIDE VERSION:
__webpack_require__(130);
__webpack_require__(8);
__webpack_require__(62);
window.autosize = __webpack_require__(359);

/***/ }),

/***/ 359:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

/*!
	Autosize 3.0.20
	license: MIT
	http://www.jacklmoore.com/autosize
*/
(function (global, factory) {
	if (true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, module], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
		factory(exports, module);
	} else {
		var mod = {
			exports: {}
		};
		factory(mod.exports, mod);
		global.autosize = mod.exports;
	}
})(undefined, function (exports, module) {
	'use strict';

	var map = typeof Map === "function" ? new Map() : function () {
		var keys = [];
		var values = [];

		return {
			has: function has(key) {
				return keys.indexOf(key) > -1;
			},
			get: function get(key) {
				return values[keys.indexOf(key)];
			},
			set: function set(key, value) {
				if (keys.indexOf(key) === -1) {
					keys.push(key);
					values.push(value);
				}
			},
			'delete': function _delete(key) {
				var index = keys.indexOf(key);
				if (index > -1) {
					keys.splice(index, 1);
					values.splice(index, 1);
				}
			}
		};
	}();

	var createEvent = function createEvent(name) {
		return new Event(name, { bubbles: true });
	};
	try {
		new Event('test');
	} catch (e) {
		// IE does not support `new Event()`
		createEvent = function createEvent(name) {
			var evt = document.createEvent('Event');
			evt.initEvent(name, true, false);
			return evt;
		};
	}

	function assign(ta) {
		if (!ta || !ta.nodeName || ta.nodeName !== 'TEXTAREA' || map.has(ta)) return;

		var heightOffset = null;
		var clientWidth = ta.clientWidth;
		var cachedHeight = null;

		function init() {
			var style = window.getComputedStyle(ta, null);

			if (style.resize === 'vertical') {
				ta.style.resize = 'none';
			} else if (style.resize === 'both') {
				ta.style.resize = 'horizontal';
			}

			if (style.boxSizing === 'content-box') {
				heightOffset = -(parseFloat(style.paddingTop) + parseFloat(style.paddingBottom));
			} else {
				heightOffset = parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
			}
			// Fix when a textarea is not on document body and heightOffset is Not a Number
			if (isNaN(heightOffset)) {
				heightOffset = 0;
			}

			update();
		}

		function changeOverflow(value) {
			{
				// Chrome/Safari-specific fix:
				// When the textarea y-overflow is hidden, Chrome/Safari do not reflow the text to account for the space
				// made available by removing the scrollbar. The following forces the necessary text reflow.
				var width = ta.style.width;
				ta.style.width = '0px';
				// Force reflow:
				/* jshint ignore:start */
				ta.offsetWidth;
				/* jshint ignore:end */
				ta.style.width = width;
			}

			ta.style.overflowY = value;
		}

		function getParentOverflows(el) {
			var arr = [];

			while (el && el.parentNode && el.parentNode instanceof Element) {
				if (el.parentNode.scrollTop) {
					arr.push({
						node: el.parentNode,
						scrollTop: el.parentNode.scrollTop
					});
				}
				el = el.parentNode;
			}

			return arr;
		}

		function resize() {
			var originalHeight = ta.style.height;
			var overflows = getParentOverflows(ta);
			var docTop = document.documentElement && document.documentElement.scrollTop; // Needed for Mobile IE (ticket #240)

			ta.style.height = 'auto';

			var endHeight = ta.scrollHeight + heightOffset;

			if (ta.scrollHeight === 0) {
				// If the scrollHeight is 0, then the element probably has display:none or is detached from the DOM.
				ta.style.height = originalHeight;
				return;
			}

			ta.style.height = endHeight + 'px';

			// used to check if an update is actually necessary on window.resize
			clientWidth = ta.clientWidth;

			// prevents scroll-position jumping
			overflows.forEach(function (el) {
				el.node.scrollTop = el.scrollTop;
			});

			if (docTop) {
				document.documentElement.scrollTop = docTop;
			}
		}

		function update() {
			resize();

			var styleHeight = Math.round(parseFloat(ta.style.height));
			var computed = window.getComputedStyle(ta, null);
			var actualHeight = Math.round(parseFloat(computed.height));

			// The actual height not matching the style height (set via the resize method) indicates that
			// the max-height has been exceeded, in which case the overflow should be set to visible.
			if (actualHeight !== styleHeight) {
				if (computed.overflowY !== 'visible') {
					changeOverflow('visible');
					resize();
					actualHeight = Math.round(parseFloat(window.getComputedStyle(ta, null).height));
				}
			} else {
				// Normally keep overflow set to hidden, to avoid flash of scrollbar as the textarea expands.
				if (computed.overflowY !== 'hidden') {
					changeOverflow('hidden');
					resize();
					actualHeight = Math.round(parseFloat(window.getComputedStyle(ta, null).height));
				}
			}

			if (cachedHeight !== actualHeight) {
				cachedHeight = actualHeight;
				var evt = createEvent('autosize:resized');
				try {
					ta.dispatchEvent(evt);
				} catch (err) {
					// Firefox will throw an error on dispatchEvent for a detached element
					// https://bugzilla.mozilla.org/show_bug.cgi?id=889376
				}
			}
		}

		var pageResize = function pageResize() {
			if (ta.clientWidth !== clientWidth) {
				update();
			}
		};

		var destroy = function (style) {
			window.removeEventListener('resize', pageResize, false);
			ta.removeEventListener('input', update, false);
			ta.removeEventListener('keyup', update, false);
			ta.removeEventListener('autosize:destroy', destroy, false);
			ta.removeEventListener('autosize:update', update, false);

			Object.keys(style).forEach(function (key) {
				ta.style[key] = style[key];
			});

			map['delete'](ta);
		}.bind(ta, {
			height: ta.style.height,
			resize: ta.style.resize,
			overflowY: ta.style.overflowY,
			overflowX: ta.style.overflowX,
			wordWrap: ta.style.wordWrap
		});

		ta.addEventListener('autosize:destroy', destroy, false);

		// IE9 does not fire onpropertychange or oninput for deletions,
		// so binding to onkeyup to catch most of those events.
		// There is no way that I know of to detect something like 'cut' in IE9.
		if ('onpropertychange' in ta && 'oninput' in ta) {
			ta.addEventListener('keyup', update, false);
		}

		window.addEventListener('resize', pageResize, false);
		ta.addEventListener('input', update, false);
		ta.addEventListener('autosize:update', update, false);
		ta.style.overflowX = 'hidden';
		ta.style.wordWrap = 'break-word';

		map.set(ta, {
			destroy: destroy,
			update: update
		});

		init();
	}

	function destroy(ta) {
		var methods = map.get(ta);
		if (methods) {
			methods.destroy();
		}
	}

	function update(ta) {
		var methods = map.get(ta);
		if (methods) {
			methods.update();
		}
	}

	var autosize = null;

	// Do nothing in Node.js environment and IE8 (or lower)
	if (typeof window === 'undefined' || typeof window.getComputedStyle !== 'function') {
		autosize = function autosize(el) {
			return el;
		};
		autosize.destroy = function (el) {
			return el;
		};
		autosize.update = function (el) {
			return el;
		};
	} else {
		autosize = function autosize(el, options) {
			if (el) {
				Array.prototype.forEach.call(el.length ? el : [el], function (x) {
					return assign(x, options);
				});
			}
			return el;
		};
		autosize.destroy = function (el) {
			if (el) {
				Array.prototype.forEach.call(el.length ? el : [el], destroy);
			}
			return el;
		};
		autosize.update = function (el) {
			if (el) {
				Array.prototype.forEach.call(el.length ? el : [el], update);
			}
			return el;
		};
	}

	module.exports = autosize;
});

/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _antares_mechanics = __webpack_require__(8);

_antares_mechanics.Antares.prototype.swal = {

    //example of use:
    // APP.swal.init('skin1', 'typeError', {title: 'Some Title, RIGHT?!', text: 'Up We go...'});

    init: function init(theme, type, custom, confirmFunction) {

        $('.sweet-alert').attr('class', 'sweet-alert');

        //if exist
        if (typeof APP.swal[theme] !== "undefined" && typeof APP.swal[type] !== "undefined") {

            var medley = $.extend({}, APP.swal.base, APP.swal[theme], APP.swal[type], custom);
            //load!
            if (confirmFunction && typeof confirmFunction === "function") {
                swal(medley, function () {
                    return confirmFunction();
                });
            } else {
                swal(medley);
            }

            //update mdl
            componentHandler.upgradeAllRegistered();
        } else {
            // console.log('wrong parameter.');
            return false;
        }
    },

    close: function close() {
        swal.closeModal();
    },
    base: {
        allowEscapeKey: true,
        showLoaderOnConfirm: true,
        buttonsStyling: false,
        showCancelButton: true,
        type: 'success',
        title: "Warning Confirmation Modal",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie mi erat, Pellegestas. ",
        animation: false
    },

    //skins are revered
    skin2: {
        customClass: 'CB CB--type1'
    },

    skin1: {
        customClass: 'CB CB--type2'
    },

    //types
    typeWarning: {
        type: 'warning'
    },

    typeError: {
        type: 'error'
    },

    typeSucces: {
        type: 'success'
    },
    typeInfo: {
        type: 'info'
    },
    cb1Warning: function cb1Warning() {
        return $.extend({}, this.base, this.skin1, this.typeWarning);
    },
    cb1Error: function cb1Error() {
        return $.extend({}, this.base, this.skin1, this.typeError);
    },
    cb1Success: function cb1Success() {
        return $.extend({}, this.base, this.skin1, this.typeSucces);
    },
    cb1Info: function cb1Info() {
        return $.extend({}, this.base, this.skin1, this.typeInfo);
    },

    cb2Warning: function cb2Warning() {
        return $.extend({}, this.base, this.skin2, this.typeWarning);
    },
    cb2Error: function cb2Error() {
        return $.extend({}, this.base, this.skin2, this.typeError);
    },
    cb2Success: function cb2Success() {
        return $.extend({}, this.base, this.skin2, this.typeSucces);
    },
    cb2Info: function cb2Info() {
        return $.extend({}, this.base, this.skin2, this.typeInfo);
    }

};

// //noty theme
// $.noty.layouts.centerFull = {
//     name: 'CenterFull',
//     options: { // overrides options

//     },
//     container: {
//         object: '<ul id="noty_CenterFull_layout_container" />',
//         selector: 'ul#noty_CenterFull_layout_container',
//         style: function() {
//             $(this).css({
//                 margin: 0,
//                 padding: 0,
//                 listStyleType: 'none',
//                 zIndex: 10000000,
//                 // width: 'auto'

//             });

//             $(this).css({
//                 left: ($(window).width() - $(this).outerWidth(false)) / 2 + 'px'
//             });
//         }
//     },
//     parent: {
//         object: '<li />',
//         selector: 'li',
//         css: {}
//     },
//     css: {
//         display: 'none',
//         width: 'auto'
//     },
//     addClass: ''
// };


// 
//usage
// noty($.extend( {}, APP.noti.successFM("lg", "full"), {text: "abracadarba, epsium!"}));
// 

_antares_mechanics.Antares.prototype.noti = {

    base: {
        // layout: 'centerFull',
        layout: 'topRight',
        type: 'warning',
        text: '',
        animation: {
            open: 'animated slideInRight', // Animate.css class names
            close: 'animated slideOutRight' },
        template: '<div class="noty_message"><i class="zmdi zmdi-info noty_icon"></i><span class="noty_text"></span><i class="zmdi zmdi-close noty_close"></i></div>',
        maxVisible: 5,
        // 14000
        timeout: 2500
    },
    generateTheme: function generateTheme() {

        //cleanup
        var contentArr = [];
        APP.noti.className = '';
        //default theme
        contentArr.push(APP.noti.theme);
        //argument for each
        var args = Array.prototype.slice.call(arguments);
        args.forEach(function (arg) {

            //if set
            if (typeof APP.noti[arg] != "undefined") {
                contentArr.push(APP.noti[arg]);
            } else {
                // if no match
                console.log('bad argument');
            }
        });

        //join and create classname
        APP.noti.className = contentArr.join(' ');
        // console.log(APP.noti.className);
    },

    ///
    // usage 
    // noty($.extend( {}, APP.noti.alertFM("lg", "full"), {text: "abracadarba, epsium!"}));
    // noty($.extend( {}, APP.noti.successFM("lg", "full"), {text: "abracadarba, epsium!"}));
    ///


    alertFM: function alertFM(size, glow, icon, bg) {
        this.generateTheme.apply(this, arguments);
        var notyConfig = $.extend({}, this.base, this.typeAlert, { theme: APP.noti.className });
        return notyConfig;
    },

    successFM: function successFM(size, glow, icon, bg) {
        this.generateTheme.apply(this, arguments);
        var notyConfig = $.extend({}, this.base, this.typeSuccess, { theme: APP.noti.className });
        return notyConfig;
    },
    errorFM: function errorFM(size, glow, icon, bg) {
        this.generateTheme.apply(this, arguments);
        var notyConfig = $.extend({}, this.base, this.typeError, { theme: APP.noti.className });
        return notyConfig;
    },
    warningFM: function warningFM(size, glow, icon, bg) {
        this.generateTheme.apply(this, arguments);
        var notyConfig = $.extend({}, this.base, this.typeWarning, { theme: APP.noti.className });
        return notyConfig;
    },
    infoFM: function infoFM(size, glow, icon, bg) {
        this.generateTheme.apply(this, arguments);
        var notyConfig = $.extend({}, this.base, this.typeInfo, { theme: APP.noti.className });
        return notyConfig;
    },
    confirmFM: function confirmFM(size, glow, icon, bg) {
        this.generateTheme.apply(this, arguments);
        var notyConfig = $.extend({}, this.base, this.typeConfirm, { theme: APP.noti.className });
        return notyConfig;
    },

    //Base
    theme: 'FM',
    //Sizes
    lg: 'FM--lg',
    md: 'FM--md',
    sm: 'FM--sm',
    xs: 'FM--xs',
    glow: 'FM--glow',
    noIcon: 'FM--noicon',
    bg: 'FM--bg',
    border: 'FM--border',
    outline: 'FM--outline',
    full: 'FM--glow FM--border FM--bg FM--border',
    // close: 'FM--close',

    //close button
    closeButton: {
        closeWith: ['button']
    },
    //types
    typeAlert: {
        type: 'alert',
        template: '<div class="noty_message"><i class="zmdi zmdi-alert-circle noty_icon"></i><span class="noty_text"></span><i class="zmdi zmdi-close noty_close"></i></div>'
    },
    typeSuccess: {
        type: 'success',
        template: '<div class="noty_message"><i class="zmdi zmdi-check-circle noty_icon"></i><span class="noty_text"></span><i class="zmdi zmdi-close noty_close"></i></div>'
    },
    typeError: {
        type: 'error',
        template: '<div class="noty_message"><i class="zmdi zmdi-alert-circle noty_icon"></i><span class="noty_text"></span><i class="zmdi zmdi-close noty_close"></i></div>'
    },
    typeWarning: {
        type: 'warning',
        template: '<div class="noty_message"><i class="zmdi zmdi-alert-triangle noty_icon"></i><span class="noty_text"></span><i class="zmdi zmdi-close noty_close"></i></div>'
    },
    typeInfo: {
        type: 'information',
        template: '<div class="noty_message"><i class="zmdi zmdi-info noty_icon"></i><span class="noty_text"></span><i class="zmdi zmdi-close noty_close"></i></div>'
    },
    typeConfirm: {
        type: 'confirm',
        template: '<div class="noty_message"><i class="zmdi zmdi-info noty_icon"></i><span class="noty_text"></span><i class="zmdi zmdi-close noty_close"></i></div>'
    }

};

// usage
// APP.modal.init({
//     title: 'Test Title',
//     buttons: {
//         'Confirm': {
//             type: 'primary',
//             action: function() {
//                 alert('action1');
//             },
//         },
//         'Cancel': {
//             type: 'default',
//             action: function() {
//                 $.modal.close();
//             },
//         }
//     }
// });

//
//INIT SAMPLE
//  

// APP.dialog.init({
//     content: 'Lorem',
//     title: 'asdasd',
//     actionPosition: 'right',
//     width:'95%',
//     height:'500px',
//     buttons: {
//         Confirm: {
//             type: "primary",
//             action: function() {
//                 alert("action1");
//             }
//         },
//         Cancel: {
//             type: "default",
//             action: function() {
//                 alert("action2");
//             }
//         },
//         Custom: {
//             type: "red",
//             action: function() {
//                 APP.dialog.init({
//                     content: '<button class="btn-link btn--md btn--primary mdl-button mdl-js-button mdl-js-ripple-effect show-dialog">Click</button>',
//                     title: 'asdasd',
//                     actionPosition: 'rig6ht',
//                     buttons: {
//                         Confirm: {
//                             type: "primary",
//                             action: function() {
//                                 alert("action1");
//                             }
//                         },
//                         Cancel: {
//                             type: "default",
//                             action: function() {
//                                 alert("action2");
//                             }
//                         },
//                         Abort: {
//                             type: "red",
//                             action: function() {
//                                alert("action3");
//                             }
//                         }
//                     }
//                 });
//             }
//         }
//     }
// });

_antares_mechanics.Antares.prototype.dialog = {

    // clean html use - onLoad
    onLoad: function onLoad() {
        // Create modal when html is defined
        function dialogModal(showModalButton, dialogElement) {

            // Variables
            var showModalButton = document.querySelector('.show-dialog');
            var dialog = document.querySelector('dialog');

            // Restrict
            if (!dialog || !showModalButton) {
                // console.log('aborting - no dialogModal HTML found'); //we need dialog and .show-modal class
                return false;
            }

            // Polyfill when needed
            if (!dialog.showModal) {
                dialogPolyfill.registerDialog(dialog);
            }

            if (showModalButton && dialog) {

                //my custom
                //add class if non existent
                dialog.classList.add("ar-dialog");

                //mechanics if mutiple
                if ($('dialog').length > 1) {

                    $('.show-dialog').each(function (index, el) {

                        var data = $(el).data('dialog-id');

                        $(el).on('click', function () {

                            var $targetDialog = $('dialog[data-dialog-id="' + data + '"');
                            var targetDialog = $('dialog[data-dialog-id="' + data + '"')[0];

                            //close
                            $targetDialog.find('.close').on('click', function () {
                                $targetDialog[0].close();
                            });

                            targetDialog.showModal();
                        });
                    });
                } else {

                    dialog.querySelectorAll('.ar-dialog .close').forEach(function (element, index) {
                        element.addEventListener('click', function () {
                            dialog.close();
                        });
                    });
                    showModalButton.addEventListener('click', function () {
                        dialog.showModal();
                    });
                }
            }
        }

        dialogModal();

        // this.clearErrors($('dialog form'));
    },

    //for progrramatic use
    init: function init(options) {
        this.cleanUp(options);
        this.addHeader(options);
        this.addContent(options);
        this.addFooter(options);
        this.display(options);
        this.setSize(options);
        this.extend(options);
    },

    cleanUp: function cleanUp(options) {

        // remove current class - CLEANUP
        $('.ar-dialog').removeClass('is-current');
        $('.ar-dialog').removeAttr('open');

        //add new Dialog HTML
        var dialogElement = "";
        dialogElement += "<dialog class=\"mdl-dialog ar-dialog is-current\">";
        dialogElement += "<div class=\"mdl-dialog__canvas\">";
        dialogElement += "<div class=\"mdl-dialog__header\">";
        dialogElement += "<span class=\"mdl-dialog__title\">Modal<\/span>";
        dialogElement += "<a class=\"mdl-js-button mdl-js-ripple-effect close\" href=\"#\"><i class=\"zmdi zmdi-close\"><\/i><\/a>";
        dialogElement += "<\/div>";
        dialogElement += "<div class=\"mdl-dialog__content\" data-scrollable>";
        dialogElement += "<p>";
        dialogElement += "<\/p>";
        dialogElement += "<\/div>";
        dialogElement += "<div class=\"mdl-dialog__actions\">";
        dialogElement += "<button type=\"button\" class=\"btn btn--s-small btn--primary mdl-js-button mdl-js-ripple-effect mr8\">Agree<\/button>";
        dialogElement += "<button type=\"button\" class=\"btn btn--s-small btn--dark mdl-js-button mdl-js-ripple-effect close\">Disagree<\/button>";
        dialogElement += "<\/div>";
        dialogElement += "<\/div>";
        dialogElement += "<\/dialog>";

        // remove current class
        $('ar-dialog').removeClass('is-current');
        $('body').append(dialogElement);
        var dialog = document.querySelector('dialog.is-current');
    },

    addHeader: function addHeader(options) {

        var dialog = document.querySelector('dialog.is-current');

        if (!$.isEmptyObject(options) && 'title' in options) {

            console.log(options.title);

            // Dialog Title
            $('dialog.is-current .mdl-dialog__title').text(options.title);
        }

        // Close buttons
        dialog.querySelectorAll('.ar-dialog .close').forEach(function (element, index) {
            element.addEventListener('click', function () {
                dialog.close();
            });
        });
    },

    addContent: function addContent(options) {

        var dialog = document.querySelector('dialog.is-current');

        dialog.classList.add("is-programmatic");

        if (!$.isEmptyObject(options) && 'ajaxURL' in options) {

            $.get(options.ajaxURL, function (response) {
                $('.ar-dialog.is-current .mdl-dialog__content').html(response);
            });
        } else if (!$.isEmptyObject(options) && 'content' in options) {

            //jquery selector or string = hmm?

            if ($(options.content).length) {

                var dialogContent = '',
                    dialogContent = $(options.content).clone();

                // Content - copy from body
                $('.ar-dialog.is-current .mdl-dialog__content').html('');
                $('.ar-dialog.is-current .mdl-dialog__content').append(dialogContent);
            } else {

                $('.ar-dialog.is-current .mdl-dialog__content').html(options.content);
            }
        }
    },

    addFooter: function addFooter(options) {

        if (!$.isEmptyObject(options) && 'buttons' in options) {

            $('.ar-dialog.is-current .mdl-dialog__actions').html('');

            //for each button
            Object.keys(options.buttons).forEach(function (key) {

                //types
                var btnclass = 'btn btn--s-small btn--primary';

                if (options.buttons[key].type === 'primary') {
                    btnclass = 'btn btn--s-small btn--primary';
                } else if (options.buttons[key].type === 'default') {
                    btnclass = 'btn btn--s-small btn--default';
                } else if (options.buttons[key].type === 'red') {
                    btnclass = 'btn btn--s-small btn--red';
                } else if (options.buttons[key].type === 'dark') {
                    btnclass = 'btn btn--s-small btn--dark';
                } else {
                    console.log('modal footer button type unknown');
                }

                //attach button html
                $('.ar-dialog.is-current .mdl-dialog__actions').prepend('<button class="' + btnclass + ' ">' + key + '</button>');

                //button assign action method
                $('.ar-dialog.is-current .mdl-dialog__actions > *:first-child').on('click', function () {
                    options.buttons[key].action();
                });
            });
        }

        if (!$.isEmptyObject(options) && 'actionPosition' in options && options.actionPosition == 'right') {

            $('.ar-dialog.is-current').addClass('ar-dialog--actions-right');
        }
    },

    display: function display(options) {

        var dialog = document.querySelector('.ar-dialog.is-current');

        dialog.showModal();

        //MDL
        componentHandler.upgradeAllRegistered();
        $('.ar-dialog.is-current .mdl-dialog__content').perfectScrollbar();

        //extend

    },
    setSize: function setSize(options) {

        if (!$.isEmptyObject(options) && 'width' in options) {

            // $('.ar-dialog.is-current').css('min-width', 'auto');

            // $('.ar-dialog.is-current').css('width', options.width);
            $('.ar-dialog.is-current').css('width', options.width);
            $('.ar-dialog.is-current').css('min-width', options.width);
        }

        if (!$.isEmptyObject(options) && 'height' in options) {

            // $('.ar-dialog.is-current').css('min-height', 'auto');

            $('.ar-dialog.is-current').css('height', options.height);
            $('.ar-dialog.is-current').css('min-height', options.height);
        }
    },
    validation: function validation(errors, form) {

        $('dialog form').on('submit', function () {

            $.each(errors, function (key, value) {
                var input = form.find('input[name="' + key + '"], textarea[name="' + key + '"], select[name="' + key + '"]');
                if (input.length) {
                    input.addClass('error');
                    input.parent().append('<span class="error">' + value + '</span>');
                }
            });
        });
    },
    clearErrors: function clearErrors(form) {

        $(form).on('submit', function () {

            $.each(form.find('input, textarea, select'), function (e) {
                // $(this).removeClass('error');
                // $(this).parent().find('span.error').remove();
                // alert('validacja');
            });
        });
    },
    extend: function extend(options) {
        // Variables
        var showModalButton = document.querySelector('.show-dialog');
        var dialog = document.querySelector('dialog');

        if (showModalButton && dialog) {

            //my custom
            //add class if non existent
            dialog.classList.add("ar-dialog");

            showModalButton.addEventListener('click', function () {
                dialog.showModal();
                $('.is-programmatic').removeAttr('open');
            });

            dialog.querySelectorAll('.ar-dialog .close').forEach(function (element, index) {
                element.addEventListener('click', function () {
                    dialog.close();
                });
            });

            APP.init();
            // AntaresGridstack.init();
        }
    }

};

//CSS MODAL
$(function () {

    $('[data-armodal] .modal__close').on('click', function (e) {

        var scrollV,
            scrollH,
            loc = window.location;
        // if ("pushState" in history) {
        //     // history.pushState("", document.title, loc.pathname + loc.search);
        // } else {

        // }

        // Prevent scrolling by storing the page's current scroll offset
        scrollV = document.body.scrollTop;
        scrollH = document.body.scrollLeft;

        var url = window.location.href.substr(0, window.location.href.indexOf('#'));

        setTimeout(function () {

            window.history.pushState('page2', 'Title', url);
            console.log('hash removed');
        }, 220);

        // Restore the scroll offset, should be flicker free
        document.body.scrollTop = scrollV;
        document.body.scrollLeft = scrollH;
    });
});

_antares_mechanics.Antares.prototype.modal = {

    init: function init(options) {
        this.showModal(options);
        this.addFooter(options);
        this.addHeader(options);
        this.setWidth(options);
    },
    orgOptions: {
        showClose: false
    },
    setWidth: function setWidth(options) {
        if (!$.isEmptyObject(options) && 'width' in options) {
            var dataWidth = options.width;
            // console.log(dataWidth);
            $('.jquery-modal.current .modal').css('width', dataWidth);
        }
    },
    showModal: function showModal(options) {

        if (!$.isEmptyObject(options) && 'element' in options) {

            var target = $(options.element);
            target.modal(this.orgOptions);
        } else {

            //start with DOM
            $('[data-modal="true"]').modal(this.orgOptions);
        }
    },
    addFooter: function addFooter(options) {
        //if options exist && buttons exist
        if (!$.isEmptyObject(options) && 'buttons' in options) {

            //clear
            $('.jquery-modal.current .modal .modal__footer').remove();

            //create footer when buttons
            $('.jquery-modal.current .modal').append('<div class="modal__footer"></div>');

            //for each button
            Object.keys(options.buttons).forEach(function (key) {

                //types
                var btnclass = 'btn btn--md btn--primary';

                if (options.buttons[key].type === 'primary') {
                    btnclass = 'btn btn--md btn--primary';
                } else if (options.buttons[key].type === 'default') {
                    btnclass = 'btn btn--md btn--default';
                } else if (options.buttons[key].type === 'red') {
                    btnclass = 'btn btn--md btn--red';
                } else if (options.buttons[key].type === 'dark') {
                    btnclass = 'btn btn--md btn--dark';
                } else {
                    console.log('modal footer button type unknown');
                }

                //attach button html
                $('.jquery-modal.current .modal__footer').prepend('<button class="' + btnclass + ' ">' + key + '</button>');

                //button assign action method
                $('.jquery-modal.current .modal__footer .btn:first-child').on('click', function () {
                    options.buttons[key].action();
                });
            });
        } else {
            //allign padding
            $('.jquery-modal.current .modal').css('padding-bottom', '24px');
        }
    },
    addHeader: function addHeader(options) {
        //clear
        $('.jquery-modal.current .modal .modal__header').remove();
        //create footer when buttons
        $('.jquery-modal.current .modal').prepend('<div class="modal__header"><div class="modal__title">Title</div><a class="modal__close" href="#" rel="modal:close"><i class="zmdi zmdi-close"></i></a></div>');
        if (!$.isEmptyObject(options) && 'title' in options) {
            //insert title
            $('.jquery-modal.current .modal__title').html(options.title);
        }
    }

};

$(function () {

    // window.APP = APP;


    // APP.dialog.onLoad();


    $('.mdl-dialog').on('open', function (event) {
        $('#app-wrapper').addClass('dialog-is-open');
    });
    $('.mdl-dialog').on('close', function (event) {
        $('#app-wrapper').removeClass('dialog-is-open');
    });
});

// $.fn.ARmodal = function(options) {
//     $.modal.close();
//     var mixin = $.extend({}, APP.modal.orgOptions, options);
//     console.log(mixin);
//     $(this).modal(mixin);
//     APP.modal.addHeader();
//     APP.modal.addFooter();
// };

/***/ }),

/***/ 748:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(330);


/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/*
 * Part of the Antares Project package.
 *
 * NOTICE OF LICENSE
 *
 * Licensed under the 3-clause BSD License.
 *
 * This source file is subject to the 3-clause BSD License that is
 * bundled with this package in the LICENSE file.
 *
 * @package    Files
 * @version    0.9.0
 * @author     Antares Team
 * @license    BSD License (3-clause)
 * @copyright  (c) 2017, Antares Project
 * @link       http://antaresproject.io
 * 
 
 */

var Antares = exports.Antares = function Antares() {};
Antares.prototype.init = function () {
    var self = this;
    // APP.components.pagePreloader('on');
    (function core() {
        self.helpers();
        self.RWD.init();
    })();
    (function components() {
        //need to move bowser to separate file
        self.components.frameworkPage();
        self.components.divPreloader();
        self.components.preloader();
        self.components.scroll();
        // self.components.systemScroll();
        self.components.sidebarNotifications();
        self.components.sidebarAlerts();
        self.components.settingsMenu();
        self.components.colorControl();
        self.components.cardTruncate();
        self.components.mutationService();
        self.animations.appAnime();
        //moved to examples:
        // self.components.chatDemo();
        self.components.autoComplete();
        // self.components.inlineAlerts();
    })();

    $(window).on('load', function () {

        // APP.components.pagePreloader('off');
    });

    // (function secondary() {
    //     if ($("body[data-id='dashboard'").length) {
    //         self.components.breadcrumbs('Dashboard');
    //         $('.breadcrumbs li:not(:first-child').remove();
    //     }
    //     if ($("body[data-id='clients-list'").length) {
    //         self.components.breadcrumbs('Clients');
    //         $('.breadcrumbs li:not(:first-child').remove();
    //     }
    //     if ($("body[data-id='settings-page'").length) {
    //         self.components.breadcrumbs('Settings', 'General Settings');
    //     }
    //     if ($("body[data-id='settings-page'").length) {
    //         self.components.breadcrumbs('Settings', 'General Settings');
    //     }
    // }());
    //tmp - wip:
    // self.components.tabScroll();
    //unused
    // self.animations.animator();
    // self.animations.animate();
    // self.dashboard.gridShowCase();
    // self.dashboard.cardReadability();
    // self.charts.labelBackground();
};
Antares.prototype.helpers = function () {
    var self = this;

    // $('.main-menu--primary > li:nth-child(3)').addClass('hovered submenu-open');
    //input file manual
    // $('.file-upload').each(function(index, el) {

    //     $(this).find('input.input-upload').on('change', function() {

    //         var curVal = $(this).val();

    //         $(this).siblings('.file-path').val(curVal);

    //     });

    // });


    (function ($) {
        $.fn.hasScrollBar = function () {
            return this.get(0) ? this.get(0).scrollWidth > this.innerWidth() : false;
        };
    })(jQuery);
    $('.ddown-multi__init').on('click', function () {
        $(this).closest('.ddown-multi').find('.ddown-multi__menu').perfectScrollbar();
    });

    function radioButtonsBigBg() {
        $('.radio-btns--big .btn').each(function (index, el) {
            var dataBg = $(this).data('bg');
            var dataColor = $(this).data('color');
            if (dataBg) {
                $(this).css('background-image', 'url(' + dataBg + ')');
            }
            if (dataColor) {
                $(this).css('color', 'url(' + dataColor + ')');
            }
        });
    }
    //tmp add expanded sidebar
    // $('#app-wrapper').addClass('main-sidebar--expanded');
    radioButtonsBigBg();
    //     $('.card >* ').css('opacity', '0');
    //     $('.card >* ').css('transition', '500ms');
    // window.addEventListener("load", function(event) {
    //     setTimeout(function() {
    //         $('.card > * ').css('opacity', '1');
    //     }, 500);
    //   });
    // if ($('.grid-container--1col').length) {
    //     $('.app-content .main-content').css('height', '100%');
    // }
    //simulate widnowResizeEnd
    $(window).on('resize', function () {
        if (this.resizeTO) clearTimeout(this.resizeTO);
        this.resizeTO = setTimeout(function () {
            $(this).trigger('resizeEnd');
        }, 500);
    });
    //use:    
    $(window).on('resizeEnd', function () {
        //do something, window hasn't changed size in 500ms
    });
    // cursor at end of input plugin
    jQuery.fn.putCursorAtEnd = function () {
        return this.each(function () {
            // Cache references
            var $el = $(this),
                el = this;
            // Only focus if input isn't already
            if (!$el.is(":focus")) {
                $el.focus();
            }
            // If this function exists... (IE 9+)
            if (el.setSelectionRange) {
                // Double the length because Opera is inconsistent about whether a carriage return is one character or two.
                var len = $el.val().length * 2;
                // Timeout seems to be required for Blink
                setTimeout(function () {
                    el.setSelectionRange(len, len);
                }, 1);
            } else {
                // As a fallback, replace the contents with itself
                // Doesn't work in Chrome, but Chrome supports setSelectionRange
                $el.val($el.val());
            }
            // Scroll to the bottom, in case we're in a tall textarea
            // (Necessary for Firefox and Chrome)
            this.scrollTop = 999999;
        });
    };
    //if footer absolute add class to container (card)
    // if ( $('.app-content__footer--absolute').length ) {
    //    $(this).closest('.card__content').addClass('');
    // }
    //fix on tags widget 
    if ($('.card--tags').length) {
        $('.card--tags').closest('.grid-stack-item-content').css('overflow', 'visible !important');
    }
    //plugin
    $.fn.extend({
        animateCss: function animateCss(animationName) {
            var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            $(this).addClass('animated ' + animationName).one(animationEnd, function () {
                $(this).removeClass('animated ' + animationName);
                $(this).show();
            });
        }
    });
    $.fn.extend({
        animateAndRemove: function animateAndRemove(animationName) {
            var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            $(this).addClass('animated ' + animationName).one(animationEnd, function () {
                $(this).removeClass('animated ' + animationName);
                $(this).remove();
            });
        }
    });

    function isDOMLoaded() {
        return document.readyState == 'complete';
    }

    function trigger() {
        $(window).trigger('resize');
    }
    //cpanel FIx
    $('#translationImport').closest('.input-field__inner').addClass('w100p');
    ready('.select2-dropdown .select2-results__options', function (element) {
        $(element).attr('data-scrollable', 'true');
        APP.components.scroll();
    });
};
Antares.prototype.components = {
    autoComplete: function autoComplete() {},
    mutationService: function mutationService() {
        ready('[data-scrollable]', function (element) {
            APP.components.scroll();
        });
    },
    preloader: function preloader() {
        // if (!$('.page-preloader').length) {
        //     return false;
        // }
        var target = $('.main-preloader');

        function mainPrelaoderOn() {
            // target.show();
            // target.velocity({
            //     opacity: '1',
            // }, 250);
        }

        function mainPrelaoderOff() {}
        // target.velocity({
        //     opacity: '0',
        // }, 250, function() {
        //     target.hide();
        // });

        // mainPrelaoderOn();
        // setTimeout(function() {
        //     mainPrelaoderOff();
        // }, 5000);
        Pace.start({
            elements: false,
            document: true,
            // Only show the progress on regular and ajax-y page navigation,
            // not every request
            restartOnRequestAfter: false
        });
        // Pace.restart();
        var timer = 2200;
        setTimeout(function () {
            // self.processing = false;
            // Pace.stop();
        }, timer);
    },
    colorControl: function colorControl() {
        // pallette control
        $('.c-group .c-single').each(function (index, el) {
            var getC1 = $(this).data('color');
            $(this).css('background', getC1);
        });
        //label color control
        $('.label-circle').each(function (index, el) {
            var getC2 = $(this).data('color');
            $(this).css('color', getC2);
        });
        // timeline pallette control
        $('.timeline .timeline__indicator').each(function (index, el) {
            var getC3 = $(this).data('color');
            $(this).css('color', getC3);
        });
    },
    cardTruncate: function cardTruncate() {
        //truncate size
        function truncateFix() {}
        // setTimeout(function() {
        //     $('.card__header-left').each(function(index, el) {
        //         var width = $(this).outerWidth() - 24;
        //         $(this).find('>span').css('max-width', width);
        //     });
        // }, 1000);

        // truncateFix();
        // $(window).on('resize', function() {
        //     truncateFix();
        // });
        // $('.grid-stack').on('change', function(event, ui) {
        //     truncateFix();
        // });
    },
    pagePreloader: function pagePreloader(action) {
        // paceOptions = {
        //     // Disable the 'elements' source
        //     elements: false,
        //     eventLag: true,
        //     document: true,
        //     // Only show the progress on regular and ajax-y page navigation,
        //     // not every request
        //     restartOnRequestAfter: true
        // };
        // var pagePreloader = $('.preloader');
        // if (action === "on") {
        //     // pagePreloader.css({ 'opacity': '1', 'width': '100vw', 'display': 'flex' });
        //     // pagePreloader.find('img').css('width', 'auto');
        //     // console.log('pre.on');
        //     // preloader.on();
        // } else if (action === "off") {
        //     // pagePreloader.velocity({ opacity: 0, width: "toggle", }, 500);
        //     // pagePreloader.find('img').velocity({ width: "toggle", }, 400);
        //     // console.log('pre.off');
        //     setTimeout(function() {
        //         // preloader.off();
        //     }, 1000);
        // } else {
        //     return false;
        // }
    },
    divPreloader: function divPreloader() {
        $.fn.divPreload = function (action) {
            var self = $(this);
            if (action === "on") {
                self.prepend('<div class="md-preloader-container"><div class="md-preloader"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="75" width="75" viewbox="0 0 75 75"><circle cx="37.5" cy="37.5" r="33.5" stroke-width="8"/></svg></div></div>');
            } else if (action === "off") {
                setTimeout(function () {
                    self.children('.md-preloader-container').remove();
                }, 500);
            } else {
                return false;
            }
        };
    },
    scroll: function scroll() {
        function addScroll(selector, relative) {
            $(selector).each(function (index, el) {
                if ($(this).hasClass('ps-container')) {
                    $(this).perfectScrollbar('update');
                }
            });
            var perfectScrollbarCFG = {
                wheelPropagation: true,
                suppressScrollX: true
            };
            if (relative) {
                $(selector).perfectScrollbar(perfectScrollbarCFG).css('position', 'relative');
            } else {
                $(selector).perfectScrollbar(perfectScrollbarCFG);
            }
        }
        enquire.register("screen and (min-width:1200px)", {
            match: function match() {
                //main
                addScroll('.app-content', true);
                addScroll('.sidebar--notifications .sidebar__content', true);
                addScroll('.sidebar--alerts .sidebar__content', true);
                //menu
                addScroll('nav .main-menu--primary', false);
                addScroll('nav .main-menu--secondary', false);
                addScroll('nav .submenu', false);
                // addScroll('.menu-aside-container', false);
                //custom selector for scrolling
                addScroll('[data-scrollable]', true);
                addScroll('[data-scrollable--alt]', false);
                (function update(argument) {
                    //update
                    //update scroll when needed
                    $(window).on('resize', function () {
                        setTimeout(function () {
                            $('.app-content').perfectScrollbar('update');
                        }, 500);
                    });
                    setTimeout(function () {
                        $('.ps-container').perfectScrollbar('update');
                    }, 500);
                })();
            },
            unmatch: function unmatch() {
                $('.ps-container').each(function (index, el) {
                    $(this).perfectScrollbar('destroy');
                });
            }
        });
    },
    sidebarAlerts: function sidebarAlerts(action) {
        var alerts_button = $('#main-alerts'),
            sidebar_a = $('.sidebar--alerts'),
            closeElement = $('.sidebar--alerts #close-sidebar'),
            closeSingle = $('.flex-block__close'),
            openClass = 'sidebar--open';

        var openSidebarA = function openSidebarA() {
            sidebar_a.addClass(openClass);
        };
        var closeSidebarA = function closeSidebarA() {
            sidebar_a.removeClass(openClass);
        };

        alerts_button.on('click', function (e) {
            e.stopPropagation();
            openSidebarA();
        });

        sidebar_a.on('click', '#close-sidebar', function (e) {
            e.preventDefault();
            e.stopPropagation();
            closeSidebarA();
        });
        sidebar_a.find(closeSingle).on('click', function (e) {
            e.stopPropagation();
            $(this).closest('.flex-block').animateAndRemove('fadeOut');
        });

        sidebar_a.on('click', '.sidebar__footer .btn', function (e) {
            sidebar_a.find('.sidebar__list .flex-block').animateAndRemove('fadeOut');
        });

        sidebar_a.on('click', function (e) {
            e.stopPropagation();
        });

        $('.main-content, .main-sidebar, .main-head').on('click', function () {
            closeSidebarA();
        });
    },
    sidebarNotifications: function sidebarNotifications(action) {
        var notifications_button = $('#main-notifications'),
            sidebar_n = $('.sidebar--notifications'),
            closeElement = $('.sidebar--notifications #close-sidebar'),
            closeSingle = $('.flex-block__close'),
            openClass = 'sidebar--open';

        var openSidebarN = function openSidebarN() {
            sidebar_n.addClass(openClass);
        };
        var closeSidebarN = function closeSidebarN() {
            sidebar_n.removeClass(openClass);
        };

        notifications_button.on('click', function (e) {
            e.stopPropagation();
            openSidebarN();
        });

        sidebar_n.on('click', '#close-sidebar', function (e) {
            e.preventDefault();
            e.stopPropagation();
            closeSidebarN();
        });
        sidebar_n.find(closeSingle).on('click', function (e) {
            e.stopPropagation();
            $(this).closest('.flex-block').animateAndRemove('fadeOut');
        });
        sidebar_n.on('click', '.sidebar__footer .btn', function (e) {
            sidebar_n.find('.sidebar__list .flex-block').animateAndRemove('fadeOut');
        });

        sidebar_n.on('click', function (e) {
            e.stopPropagation();
        });

        $('.main-content, .main-sidebar, .main-head').on('click', function () {
            closeSidebarN();
        });
    },
    settingsMenu: function settingsMenu(action) {

        //settings menu dropdown

        $('.menu-aside > li').each(function (index, el) {
            if ($(this).children('.menu-aside__submenu').length) {
                $(this).addClass('has-submenu');
            }
        });
        $(document).on('click', '.menu-aside > li.has-submenu', function (e) {
            e.stopPropagation();
            $(this).addClass('submenu-open');
        });
        $(document).on('click', '.menu-aside > li.has-submenu.submenu-open ul', function (e) {
            e.stopPropagation();
        });
        $(document).on('click', '.menu-aside > li.has-submenu.submenu-open', function (e) {
            e.stopPropagation();
            $(this).removeClass('submenu-open');
        });
        $('.app-content').scroll(function (e) {
            var el = $('.menu-aside-container'),
                toTop = $('.main-head').outerHeight(),
                isPositionFixed = el.css('position') == 'fixed';
            // console.log(toTop);
            // console.log(isPositionFixed);
            if ($(this).scrollTop() > toTop && !isPositionFixed) {
                el.addClass('menu-aside-container--fixed');
            }
            if ($(this).scrollTop() < toTop && isPositionFixed) {
                el.removeClass('menu-aside-container--fixed');
            }
        });
    },
    frameworkPage: function frameworkPage() {
        var frameworkPage = $('.page-framework');
        //limit
        if (!frameworkPage.length) {
            return false;
        }
        //links
        $(document).on('click', 'page-framework a', function (e) {
            e.preventDefault(); // same thing as above
            return false;
        });
        //height
        $('[data-children-height="equal"] >div').matchHeight();
        APP.components.pagePreloader('off');
    },
    breadcrumbs: function breadcrumbs(first, second) {
        // var firstLi = $('.breadcrumbs li:first-child > a'),
        //     secondLi = $('.breadcrumbs li:nth-child(2) .ddown__init a');
        // if (second === undefined || second === null) {
        //     firstLi.html(first);
        // } else {
        //     firstLi.html(first);
        //     secondLi.html(second);
        // }
    },
    tabScroll: function tabScroll() {
        var self = this;
        // console.log(singleTabsWidth);
        // console.log(tabBarWidth);
        var job = function job() {
            setTimeout(function () {
                var tabContainer = $('.card--tabs').find('.mdl-tabs'),
                    tabBar = tabContainer.find('.mdl-tabs__tab-bar'),
                    arrowLeft = tabContainer.find('.mdl-tabs__arrow--left'),
                    arrowRight = tabContainer.find('.mdl-tabs__arrow--right');
                arrowLeft.on('click', function () {
                    tabBar.velocity({
                        left: "-=" + '20px'
                    });
                });
                arrowRight.on('click', function () {
                    tabBar.velocity({
                        left: "+=" + '20px'
                    });
                });
                $('.card--tabs').each(function (index, el) {
                    var tabContainer = $(el).find('.mdl-tabs'),
                        tabBar = tabContainer.find('.mdl-tabs__tab-bar'),
                        tabBarWidth = tabContainer.find('.mdl-tabs__tab-bar').outerWidth(true),
                        singleTabsWidth = 0,
                        singleTab = tabContainer.find('.mdl-tabs__tab'),
                        scrollDistance = singleTab.outerWidth() * 2,
                        transition = 300;
                    tabBar.find('.mdl-tabs__tab').each(function () {
                        singleTabsWidth += $(this).outerWidth();
                    });
                    console.log(tabBarWidth);
                    console.log(singleTabsWidth);
                    if (singleTabsWidth > tabBarWidth) {
                        tabContainer.addClass('mdl-tabs--arows');
                    } else {
                        tabContainer.removeClass('mdl-tabs--arows');
                    }
                });
            }, 300);
        };
        $(window).on('resize', function () {
            job();
        });
        if ($('.grid-stack').length) {
            $('.grid-stack').on('change', function (event, ui) {
                job();
            });
        }
    }
};
Antares.prototype.animations = {
    //animator
    animator: function animator(elem, animation) {
        if (!elem || elem === undefined || elem === null) console.log('bad argument');
        $(elem).removeClass('animated');
        $(elem).addClass(animation);
        setTimeout(function () {
            $(elem).removeClass(animation);
            // console.log('Animation Completed.');
        }, 1000);
    },
    animate: function animate() {
        var self = this;
        enquire.register("screen and (min-width:768px)", {
            match: function match() {
                // animator('.main-head', 'animated fadeInDown');
                self.animator('aside', 'animated fadeInLeft');
            },
            unmatch: function unmatch() {
                // animator('.main-head', 'animated fadeInDown');
                self.animator('aside', 'animated fadeInLeft');
            }
        });
    },
    appAnime: function appAnime() {
        // console.log(anime.easings);
        // anime({
        //     targets: '.card',
        //     scale: [1, .98, 1],
        //     delay: function(el, index) {
        //         return index * 2.7;
        //     },
        //     direction: 'alternate',
        //     loop: false,
        //     elasticity: 0,
        //     easing: 'easeInOutQuad',
        //     // width: 100,
        //     opacity: {
        //         value: 0.5,
        //         duration: 30
        //     },
        // });
        // anime({
        //     targets: '.submenu',
        //     scale: [1, .98, 1],
        //     delay: function(el, index) {
        //         return index * 2.7;
        //     },
        //     direction: 'alternate',
        //     loop: false,
        //     elasticity: 0,
        //     easing: 'easeInOutQuad',
        //     // width: 100,
        //     opacity: {
        //         value: 0.1,
        //         duration: 30
        //     },
        //     begin: function() {
        //         // $('.form-block').css('opacity', '0');
        //     },
        //     update: function() {
        //         // $('.form-block').css('opacity', '0.2');
        //     },
        // });
    }
};
Antares.prototype.RWD = {
    init: function init() {
        this.RWDplugin();
        $('.card--tabs').rwdHelper('card--slim', '860', '1200');
        $('.main-head').rwdHelper('main-head--slim', '1050');
        $('.page-dashboard .card--chart').rwdHelper('card-chart--slim', '780');

        // card logs scrolling
        enquire.register("screen and (max-width:768px)", {
            match: function match() {

                // here
                // $('.app-content').
            },
            unmatch: function unmatch() {}
        });
    },
    RWDplugin: function RWDplugin() {
        $.fn.rwdHelper = function (rwdClass, limitInPx, activationBreakpoint) {
            var self = this;
            if (activationBreakpoint === undefined || null) {
                activationBreakpoint = 0;
            }
            var job = function job() {
                if ($(window).width() > activationBreakpoint) {
                    if (self.outerWidth() <= limitInPx) {
                        self.addClass(rwdClass);
                    } else {
                        self.removeClass(rwdClass);
                    }
                } else {
                    self.removeClass(rwdClass);
                }
            };
            $(window).on('resize', function () {
                job();
            });
            job();
        };
    }
};
//not needed
__webpack_require__(62);
//fire on document ready
$(function () {
    window.APP = new Antares();
    APP.init();
});
// function displayNotification(type) {
//     noty(APP.noti.type);
// }
//graveyard
// Antares.prototype.destroy = function() {
//     setTimeout(function() {
//         $('body').hide(3000);
//     }, 2000);
//     console.log('hiding...');
//     return true;
// };
// Antares.prototype.bulid = function() {
//     setTimeout(function() {
//         $('body').show(3000);
//     }, 2000);
//     console.log('showing...');
//     return true;
// };
// Antares.prototype.helpers = {
//     logger: function() {
//         console.log(message + " running accordingly.");
//     },
//     positiveNumber: function(argument) {
//         var sandbox = parseInt(argument, 10);
//         if (isNaN(sandbox)) {
//             console.log('Not a Number');
//             return false;
//         }
//         positive = -sandbox > 0 ? -sandbox : sandbox;
//         return positive;
//     },
//     initComponent: function(name, description) {
//         if (typeof name === "function") {
//             name();
//         } else {
//             console.log('||||| Not a Correct Function, im afraid!');
//         }
//         if (typeof description !== 'undefined') logger(description);
//     }
// };

/***/ })

/******/ });