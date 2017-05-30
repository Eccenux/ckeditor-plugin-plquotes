/*
	Copyright (c) 2017 Maciej Nux Jaros
	License: CC-BY
	https://creativecommons.org/licenses/by/4.0/
*/

/**
 * @file Plugin for inserting Polish quotes.
 */
(function() {
//---------------------
// TODO: HTML support
/*
var ranges = selection.getRanges();
range.cloneContents();
or
range.extractContents();
*/

function insertPlQuotes(editor) {
	var selectedText = "";
	var selection = editor.getSelection();
	if (selection) {
		selectedText = selection.getSelectedText();
	}
	editor.insertHtml('„' + selectedText + '”');
}

CKEDITOR.plugins.add( 'plquotes', {
	icons: 'plquotes',
	init: function( editor ) {
		editor.addCommand( 'insertPlQuotes', {
			exec: function( editor ) {
				insertPlQuotes(editor);
			}
		});
		editor.ui.addButton( 'PlQuotes', {
			label : Drupal.t('Insert Polish Quotes'),
			icon : this.path + 'icons/plquotes.png',
			command: 'insertPlQuotes'
		});
	}
});

//---------------------
// EOF
})();
