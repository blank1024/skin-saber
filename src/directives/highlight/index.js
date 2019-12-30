import Vue from "vue";
import hljs from "highlight.js";

const Highlight = () => {
    Vue.directive("highlight", function(el) {
        let blocks = el.querySelectorAll("pre code");
        blocks.forEach(block => {
            hljs.highlightBlock(block);
        });
    });
}

Vue.use(Highlight);
