export const LINE_STEP_TWO_CONTENT_COMPONENT = 'stepTwoContent';

export const stepTwoContentComponent = {
  template : `
  <div
    class="animate-switch"
    ng-switch-when="second">
    <div class="col-md-4">
      <step-two-command-panel></step-two-command-panel>
    </div>
    <div class="col-md-8">
      <step-two-visual-panel
        configuration="$ctrl.configuration"
        set-active-line-number="$ctrl.setActiveLineNumberParent(index)"
        show-modal-add-ctrl-to-column="$ctrl.showModalAddCtrlToColumnParent(size, indexLine, numcolumn)">
      </step-two-visual-panel>
    </div>
  </div>
  `,
  bindings : {
    configuration:              '=',
    increaseNumberOfColumns:    '&',
    decreaseNumberOfColumns:    '&',
    setActiveLineNumberParent:  '&'
  },
  controller:
  class stepTwoContentController {
    constructor() {

    }

    ///////////////////////////////////
    // WHY this function is needed :
    ///////////////////////////////////
    // CASE OF :  function with parameter passing from parent to caller through another level component
    //            parent -> intermediate component (here) -> caller
    // NOTE : intermediate should call parent function to be sure to pass function parameter upward to parent
    setActiveLineNumberParent(index) {
      this.setActiveLineNumberParent({ index: index });
    }

    // Needed for same reason as setActiveLineNumberParent
    showModalAddCtrlToColumnParent(size, indexLine, numcolumn) {
      this.showModalAddCtrlToColumn({
        size,
        indexLine,
        numcolumn
      });
    }

    static get $inject() {
      return [];
    }
  }
};
