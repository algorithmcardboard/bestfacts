(function(angular, app) {
  "use strict";
  app.directive('autoGrow',function(){
    var link =  function(scope,element,attrs){

      var containerCSS = {
        position: "relative",
        minHeight:"30px"
      };

      var preCSS = {
        visibility: "hidden",
        border: "0 solid",
        whiteSpace: "pre-wrap"
      };

      var textareaCSS = {
        position: "absolute",
        height: "100%",
        resize: "none",
      };

      var buttonParentCSS = {
        position:"relative"
      };

      var buttonCSS = {
        bottom:"0",
        left:"0",
        position:"absolute"
      };

      var cloneCSSProperties = [
        'lineHeight', 'textDecoration', 'letterSpacing',
        'fontSize', 'fontFamily', 'fontStyle',
        'fontWeight', 'textTransform', 'textAlign',
        'direction', 'wordSpacing', 'fontSizeAdjust',
        'wordWrap', 'word-break',
        'borderLeftWidth', 'borderRightWidth',
        'borderTopWidth','borderBottomWidth',
        'paddingLeft', 'paddingRight',
        'paddingTop','paddingBottom',
        'marginLeft', 'marginRight',
        'marginTop','marginBottom',
        'boxSizing', 'webkitBoxSizing', 'mozBoxSizing', 'msBoxSizing'
      ];


      element.wrap("<div class='expandingText'></div>");
      element.after("<pre class='textareaClone'><div></div></pre>");

      var container = element.parent().css(containerCSS);
      var pre = container.find("pre").css(preCSS);

      $.each(cloneCSSProperties, function(i, p) {
        var val = element.css(p);

        // Only set if different to prevent overriding percentage css values.
        if (pre.css(p) !== val) {
          pre.css(p, val);
        }
      });
      
      element.css(textareaCSS);
      var expandingDiv = element.closest('.expandingText');
      var buttonDiv = element.closest('.new-entry').find('button').parent();
      buttonDiv.css(buttonParentCSS);
      buttonDiv.find('button').css(buttonCSS);
      element.on('input keyup propertychange',function(){
        expandingDiv.find('div').text(element.val().replace(/\r\n/g,"\n")+ ' ');
        buttonDiv.height(expandingDiv.height());
      });


      scope.$watch(attrs.ngModel,function(value){
        if(!value){
          element.closest('.expandingText').find('div').text( ' ');
          buttonDiv.height(expandingDiv.height());
        }
      });
    };
    return{
      link:link,
      restrict:'CE',
      priority:5
    };
  });
})(angular, app);
