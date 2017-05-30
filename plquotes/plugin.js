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

/**
	Get HTML of a range.
*/
function getRangeHtml(range) {
	var content = range.extractContents();
	// `content.$` is an actual DocumentFragment object (not a CKEDitor abstract)
	var children = content.$.childNodes;
	var html = '';
	for (var i = 0; i < children.length; i++) {
		var child = children[i];
		if (typeof child.outerHTML === 'string') {
			html += child.outerHTML;
		} else {
			html += child.textContent;
		}
	}
	return html;
}
/**
	Get HTML of a selection.
*/
function getSelectionHtml(selection) {
	var ranges = selection.getRanges();
	var html = '';
	for (var i = 0; i < ranges.length; i++) {
		html += getRangeHtml(ranges[i]);
	}
	return html;
}

/**
	Insert quotes arround selection.
*/
function insertPlQuotes(editor) {
	var selectedHtml = "";
	var selection = editor.getSelection();
	if (selection) {
		selectedHtml = getSelectionHtml(selection);
	}
	editor.insertHtml('„' + selectedHtml + '”');
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
