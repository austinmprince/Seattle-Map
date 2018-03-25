var onEachFeature = function(feature, layer) {
    // Load the default style.
    layer.setStyle(defaultStyle);
    // Create a self-invoking function that passes in the layer
    // and the properties associated with this particular record.
    (function(layer, properties) {
      // Create a mouseover event
      layer.on("mouseover", function (e) {
        // Change the style to the highlighted version
        layer.setStyle(highlightStyle);


      });
      // Create a mouseout event that undoes the mouseover changes
      layer.on("mouseout", function (e) {
        // Start by reverting the style back
        layer.setStyle(defaultStyle);
        // And then destroying the popup

      });
      // Close the "anonymous" wrapper function, and call it while passing
      // in the variables necessary to make the events work the way we want.
    })(layer, feature.properties);
};
