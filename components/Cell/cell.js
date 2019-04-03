// components/Cell/cell.js
Component({
  "properties": {
    title: {
      type: String,
      value: 'cell模板'
    }
  },
  data: {
  },
  "methods": {
    _linkFun() {
      this.triggerEvent("linkFun")
    }
  }
})
