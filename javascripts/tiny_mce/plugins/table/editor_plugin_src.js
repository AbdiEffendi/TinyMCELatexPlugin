/**
 * editor_plugin_src.js
 *
 * TinyMCE Latex plugin
 * Author: Diego Caponera
 * Info: http://www.diegocaponera.com
 */

(function() {

	tinymce.PluginManager.requireLangPack('latex');

	tinymce.create('tinymce.plugins.LatexPlugin', {

		init : function(ed, url) {

			ed.addCommand('LatexPlugin', function() {
				ed.windowManager.open({
					file : url + '/dialog.htm',
					width : 560 + parseInt(ed.getLang('latex.delta_width', 0)),
					height : 420 + parseInt(ed.getLang('latex.delta_height', 0)),
					inline : 1
				}, {
					plugin_url : url
				});
			});

			ed.addButton('latex', {
				title : 'Insert latex code',
				cmd : 'LatexPlugin',
				image : url + '/img/latex.gif'
			});
			
			ed.onNodeChange.add(function(ed, cm, n) {
				cm.setActive('latex', n.nodeName == 'IMG');
			});
		},

		getInfo : function() {
			return {
				longname : 'Latex plugin',
				author : 'Diego Caponera',
				authorurl : 'http://www.diegocaponera.com',
				infourl : 'http://www.diegocaponera.com',
				version : "1.0"
			};
		}
	});

	tinymce.PluginManager.add('latex', tinymce.plugins.LatexPlugin);
})();