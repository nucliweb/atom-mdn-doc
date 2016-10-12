'use babel'

import { CompositeDisposable } from 'atom'

export default {

  activate() {
    atom.commands.add('atom-workspace', {
        'mdn-doc:doc': () => this.search()
    })
  },

  search() {
    var shell = require('shell')
    var wordToSearchFor = atom.workspace.getActiveTextEditor().getSelectedText() || atom.workspace.getActiveTextEditor().getWordUnderCursor()
    var grammar = atom.workspace.getActiveTextEditor().getGrammar().name;

    shell.openExternal('https://developer.mozilla.org/search?q=' + wordToSearchFor + '&topic=' + grammar)
  }

}
