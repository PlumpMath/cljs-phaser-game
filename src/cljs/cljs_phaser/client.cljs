(ns hello-clojurescript)

(defn handle-click [& argz]
  (js/alert (apply str (map class argz))))

(def clickable (.getElementById js/document "clickable"))
(.addEventListener clickable "click" handle-click)
