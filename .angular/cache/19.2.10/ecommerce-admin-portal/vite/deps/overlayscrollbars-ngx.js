import {
  Component,
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  NgModule,
  NgZone,
  Output,
  ViewChild,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵloadQuery,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵviewQuery
} from "./chunk-6D3IVTSZ.js";
import "./chunk-TXDUYLVM.js";

// node_modules/overlayscrollbars/overlayscrollbars.mjs
var createCache = (t2, n2) => {
  const {
    o: o2,
    i: s2,
    u: e2
  } = t2;
  let c2 = o2;
  let r2;
  const cacheUpdateContextual = (t3, n3) => {
    const o3 = c2;
    const i2 = t3;
    const l2 = n3 || (s2 ? !s2(o3, i2) : o3 !== i2);
    if (l2 || e2) {
      c2 = i2;
      r2 = o3;
    }
    return [c2, l2, r2];
  };
  const cacheUpdateIsolated = (t3) => cacheUpdateContextual(n2(c2, r2), t3);
  const getCurrentCache = (t3) => [c2, !!t3, r2];
  return [n2 ? cacheUpdateIsolated : cacheUpdateContextual, getCurrentCache];
};
var t = typeof window !== "undefined" && typeof HTMLElement !== "undefined" && !!window.document;
var n = t ? window : {};
var o = Math.max;
var s = Math.min;
var e = Math.round;
var c = Math.abs;
var r = Math.sign;
var i = n.cancelAnimationFrame;
var l = n.requestAnimationFrame;
var a = n.setTimeout;
var u = n.clearTimeout;
var getApi = (t2) => typeof n[t2] !== "undefined" ? n[t2] : void 0;
var f = getApi("MutationObserver");
var d = getApi("IntersectionObserver");
var _ = getApi("ResizeObserver");
var p = getApi("ScrollTimeline");
var isUndefined = (t2) => t2 === void 0;
var isNull = (t2) => t2 === null;
var isNumber = (t2) => typeof t2 === "number";
var isString = (t2) => typeof t2 === "string";
var isBoolean = (t2) => typeof t2 === "boolean";
var isFunction = (t2) => typeof t2 === "function";
var isArray = (t2) => Array.isArray(t2);
var isObject = (t2) => typeof t2 === "object" && !isArray(t2) && !isNull(t2);
var isArrayLike = (t2) => {
  const n2 = !!t2 && t2.length;
  const o2 = isNumber(n2) && n2 > -1 && n2 % 1 == 0;
  return isArray(t2) || !isFunction(t2) && o2 ? n2 > 0 && isObject(t2) ? n2 - 1 in t2 : true : false;
};
var isPlainObject = (t2) => !!t2 && t2.constructor === Object;
var isHTMLElement = (t2) => t2 instanceof HTMLElement;
var isElement = (t2) => t2 instanceof Element;
var animationCurrentTime = () => performance.now();
var animateNumber = (t2, n2, s2, e2, c2) => {
  let r2 = 0;
  const a2 = animationCurrentTime();
  const u2 = o(0, s2);
  const frame = (s3) => {
    const i2 = animationCurrentTime();
    const f2 = i2 - a2;
    const d2 = f2 >= u2;
    const _2 = s3 ? 1 : 1 - (o(0, a2 + u2 - i2) / u2 || 0);
    const p2 = (n2 - t2) * (isFunction(c2) ? c2(_2, _2 * u2, 0, 1, u2) : _2) + t2;
    const g2 = d2 || _2 === 1;
    if (e2) {
      e2(p2, _2, g2);
    }
    r2 = g2 ? 0 : l(() => frame());
  };
  frame();
  return (t3) => {
    i(r2);
    if (t3) {
      frame(t3);
    }
  };
};
function each(t2, n2) {
  if (isArrayLike(t2)) {
    for (let o2 = 0; o2 < t2.length; o2++) {
      if (n2(t2[o2], o2, t2) === false) {
        break;
      }
    }
  } else if (t2) {
    each(Object.keys(t2), (o2) => n2(t2[o2], o2, t2));
  }
  return t2;
}
var inArray = (t2, n2) => t2.indexOf(n2) >= 0;
var concat = (t2, n2) => t2.concat(n2);
var push = (t2, n2, o2) => {
  if (!isString(n2) && isArrayLike(n2)) {
    Array.prototype.push.apply(t2, n2);
  } else {
    t2.push(n2);
  }
  return t2;
};
var from = (t2) => Array.from(t2 || []);
var createOrKeepArray = (t2) => {
  if (isArray(t2)) {
    return t2;
  }
  return !isString(t2) && isArrayLike(t2) ? from(t2) : [t2];
};
var isEmptyArray = (t2) => !!t2 && !t2.length;
var deduplicateArray = (t2) => from(new Set(t2));
var runEachAndClear = (t2, n2, o2) => {
  const runFn = (t3) => t3 ? t3.apply(void 0, n2 || []) : true;
  each(t2, runFn);
  if (!o2) {
    t2.length = 0;
  }
};
var g = "paddingTop";
var v = "paddingRight";
var h = "paddingLeft";
var b = "paddingBottom";
var w = "marginLeft";
var y = "marginRight";
var S = "marginBottom";
var m = "overflowX";
var O = "overflowY";
var $ = "width";
var C = "height";
var x = "visible";
var H = "hidden";
var E = "scroll";
var capitalizeFirstLetter = (t2) => {
  const n2 = String(t2 || "");
  return n2 ? n2[0].toUpperCase() + n2.slice(1) : "";
};
var equal = (t2, n2, o2, s2) => {
  if (t2 && n2) {
    let s3 = true;
    each(o2, (o3) => {
      const e2 = t2[o3];
      const c2 = n2[o3];
      if (e2 !== c2) {
        s3 = false;
      }
    });
    return s3;
  }
  return false;
};
var equalWH = (t2, n2) => equal(t2, n2, ["w", "h"]);
var equalXY = (t2, n2) => equal(t2, n2, ["x", "y"]);
var equalTRBL = (t2, n2) => equal(t2, n2, ["t", "r", "b", "l"]);
var bind = (t2, ...n2) => t2.bind(0, ...n2);
var selfClearTimeout = (t2) => {
  let n2;
  const o2 = t2 ? a : l;
  const s2 = t2 ? u : i;
  return [(e2) => {
    s2(n2);
    n2 = o2(() => e2(), isFunction(t2) ? t2() : t2);
  }, () => s2(n2)];
};
var getDebouncer = (t2) => {
  const n2 = isFunction(t2) ? t2() : t2;
  if (isNumber(n2)) {
    const t3 = n2 ? a : l;
    const o2 = n2 ? u : i;
    return (s2) => {
      const e2 = t3(() => s2(), n2);
      return () => {
        o2(e2);
      };
    };
  }
  return n2 && n2._;
};
var debounce = (t2, n2) => {
  const {
    p: o2,
    v: s2,
    S: e2,
    m: c2
  } = n2 || {};
  let r2;
  let i2;
  let l2;
  let a2;
  let u2;
  const f2 = function invokeFunctionToDebounce(n3) {
    if (i2) {
      i2();
    }
    if (r2) {
      r2();
    }
    u2 = i2 = r2 = l2 = void 0;
    t2.apply(this, n3);
  };
  const mergeParms = (t3) => c2 && l2 ? c2(l2, t3) : t3;
  const flush = () => {
    if (i2) {
      f2(mergeParms(a2) || a2);
    }
  };
  const d2 = function debouncedFn() {
    const t3 = from(arguments);
    const n3 = getDebouncer(o2);
    if (n3) {
      const o3 = getDebouncer(s2);
      const c3 = mergeParms(t3);
      const d3 = c3 || t3;
      const _2 = f2.bind(0, d3);
      if (i2) {
        i2();
      }
      if (e2 && !u2) {
        _2();
        u2 = true;
        i2 = n3(() => u2 = void 0);
      } else {
        i2 = n3(_2);
        if (o3 && !r2) {
          r2 = o3(flush);
        }
      }
      l2 = a2 = d3;
    } else {
      f2(t3);
    }
  };
  d2.O = flush;
  return d2;
};
var hasOwnProperty = (t2, n2) => Object.prototype.hasOwnProperty.call(t2, n2);
var keys = (t2) => t2 ? Object.keys(t2) : [];
var assignDeep = (t2, n2, o2, s2, e2, c2, r2) => {
  const i2 = [n2, o2, s2, e2, c2, r2];
  if ((typeof t2 !== "object" || isNull(t2)) && !isFunction(t2)) {
    t2 = {};
  }
  each(i2, (n3) => {
    each(n3, (o3, s3) => {
      const e3 = n3[s3];
      if (t2 === e3) {
        return true;
      }
      const c3 = isArray(e3);
      if (e3 && isPlainObject(e3)) {
        const n4 = t2[s3];
        let o4 = n4;
        if (c3 && !isArray(n4)) {
          o4 = [];
        } else if (!c3 && !isPlainObject(n4)) {
          o4 = {};
        }
        t2[s3] = assignDeep(o4, e3);
      } else {
        t2[s3] = c3 ? e3.slice() : e3;
      }
    });
  });
  return t2;
};
var removeUndefinedProperties = (t2, n2) => each(assignDeep({}, t2), (t3, n3, o2) => {
  if (t3 === void 0) {
    delete o2[n3];
  } else if (t3 && isPlainObject(t3)) {
    o2[n3] = removeUndefinedProperties(t3);
  }
});
var isEmptyObject = (t2) => !keys(t2).length;
var noop = () => {
};
var capNumber = (t2, n2, e2) => o(t2, s(n2, e2));
var getDomTokensArray = (t2) => deduplicateArray((isArray(t2) ? t2 : (t2 || "").split(" ")).filter((t3) => t3));
var getAttr = (t2, n2) => t2 && t2.getAttribute(n2);
var hasAttr = (t2, n2) => t2 && t2.hasAttribute(n2);
var setAttrs = (t2, n2, o2) => {
  each(getDomTokensArray(n2), (n3) => {
    if (t2) {
      t2.setAttribute(n3, String(o2 || ""));
    }
  });
};
var removeAttrs = (t2, n2) => {
  each(getDomTokensArray(n2), (n3) => t2 && t2.removeAttribute(n3));
};
var domTokenListAttr = (t2, n2) => {
  const o2 = getDomTokensArray(getAttr(t2, n2));
  const s2 = bind(setAttrs, t2, n2);
  const domTokenListOperation = (t3, n3) => {
    const s3 = new Set(o2);
    each(getDomTokensArray(t3), (t4) => {
      s3[n3](t4);
    });
    return from(s3).join(" ");
  };
  return {
    $: (t3) => s2(domTokenListOperation(t3, "delete")),
    C: (t3) => s2(domTokenListOperation(t3, "add")),
    H: (t3) => {
      const n3 = getDomTokensArray(t3);
      return n3.reduce((t4, n4) => t4 && o2.includes(n4), n3.length > 0);
    }
  };
};
var removeAttrClass = (t2, n2, o2) => {
  domTokenListAttr(t2, n2).$(o2);
  return bind(addAttrClass, t2, n2, o2);
};
var addAttrClass = (t2, n2, o2) => {
  domTokenListAttr(t2, n2).C(o2);
  return bind(removeAttrClass, t2, n2, o2);
};
var addRemoveAttrClass = (t2, n2, o2, s2) => (s2 ? addAttrClass : removeAttrClass)(t2, n2, o2);
var hasAttrClass = (t2, n2, o2) => domTokenListAttr(t2, n2).H(o2);
var createDomTokenListClass = (t2) => domTokenListAttr(t2, "class");
var removeClass = (t2, n2) => {
  createDomTokenListClass(t2).$(n2);
};
var addClass = (t2, n2) => {
  createDomTokenListClass(t2).C(n2);
  return bind(removeClass, t2, n2);
};
var find = (t2, n2) => {
  const o2 = n2 ? isElement(n2) && n2 : document;
  return o2 ? from(o2.querySelectorAll(t2)) : [];
};
var findFirst = (t2, n2) => {
  const o2 = n2 ? isElement(n2) && n2 : document;
  return o2 && o2.querySelector(t2);
};
var is = (t2, n2) => isElement(t2) && t2.matches(n2);
var isBodyElement = (t2) => is(t2, "body");
var contents = (t2) => t2 ? from(t2.childNodes) : [];
var parent = (t2) => t2 && t2.parentElement;
var closest = (t2, n2) => isElement(t2) && t2.closest(n2);
var getFocusedElement = (t2) => document.activeElement;
var liesBetween = (t2, n2, o2) => {
  const s2 = closest(t2, n2);
  const e2 = t2 && findFirst(o2, s2);
  const c2 = closest(e2, n2) === s2;
  return s2 && e2 ? s2 === t2 || e2 === t2 || c2 && closest(closest(t2, o2), n2) !== s2 : false;
};
var removeElements = (t2) => {
  each(createOrKeepArray(t2), (t3) => {
    const n2 = parent(t3);
    if (t3 && n2) {
      n2.removeChild(t3);
    }
  });
};
var appendChildren = (t2, n2) => bind(removeElements, t2 && n2 && each(createOrKeepArray(n2), (n3) => {
  if (n3) {
    t2.appendChild(n3);
  }
}));
var z;
var getTrustedTypePolicy = () => z;
var setTrustedTypePolicy = (t2) => {
  z = t2;
};
var createDiv = (t2) => {
  const n2 = document.createElement("div");
  setAttrs(n2, "class", t2);
  return n2;
};
var createDOM = (t2) => {
  const n2 = createDiv();
  const o2 = getTrustedTypePolicy();
  const s2 = t2.trim();
  n2.innerHTML = o2 ? o2.createHTML(s2) : s2;
  return each(contents(n2), (t3) => removeElements(t3));
};
var getCSSVal = (t2, n2) => t2.getPropertyValue(n2) || t2[n2] || "";
var validFiniteNumber = (t2) => {
  const n2 = t2 || 0;
  return isFinite(n2) ? n2 : 0;
};
var parseToZeroOrNumber = (t2) => validFiniteNumber(parseFloat(t2 || ""));
var roundCssNumber = (t2) => Math.round(t2 * 1e4) / 1e4;
var numberToCssPx = (t2) => `${roundCssNumber(validFiniteNumber(t2))}px`;
function setStyles(t2, n2) {
  t2 && n2 && each(n2, (n3, o2) => {
    try {
      const s2 = t2.style;
      const e2 = isNull(n3) || isBoolean(n3) ? "" : isNumber(n3) ? numberToCssPx(n3) : n3;
      if (o2.indexOf("--") === 0) {
        s2.setProperty(o2, e2);
      } else {
        s2[o2] = e2;
      }
    } catch (s2) {
    }
  });
}
function getStyles(t2, o2, s2) {
  const e2 = isString(o2);
  let c2 = e2 ? "" : {};
  if (t2) {
    const r2 = n.getComputedStyle(t2, s2) || t2.style;
    c2 = e2 ? getCSSVal(r2, o2) : from(o2).reduce((t3, n2) => {
      t3[n2] = getCSSVal(r2, n2);
      return t3;
    }, c2);
  }
  return c2;
}
var topRightBottomLeft = (t2, n2, o2) => {
  const s2 = n2 ? `${n2}-` : "";
  const e2 = o2 ? `-${o2}` : "";
  const c2 = `${s2}top${e2}`;
  const r2 = `${s2}right${e2}`;
  const i2 = `${s2}bottom${e2}`;
  const l2 = `${s2}left${e2}`;
  const a2 = getStyles(t2, [c2, r2, i2, l2]);
  return {
    t: parseToZeroOrNumber(a2[c2]),
    r: parseToZeroOrNumber(a2[r2]),
    b: parseToZeroOrNumber(a2[i2]),
    l: parseToZeroOrNumber(a2[l2])
  };
};
var getTrasformTranslateValue = (t2, n2) => `translate${isObject(t2) ? `(${t2.x},${t2.y})` : `${n2 ? "X" : "Y"}(${t2})`}`;
var elementHasDimensions = (t2) => !!(t2.offsetWidth || t2.offsetHeight || t2.getClientRects().length);
var I = {
  w: 0,
  h: 0
};
var getElmWidthHeightProperty = (t2, n2) => n2 ? {
  w: n2[`${t2}Width`],
  h: n2[`${t2}Height`]
} : I;
var getWindowSize = (t2) => getElmWidthHeightProperty("inner", t2 || n);
var T = bind(getElmWidthHeightProperty, "offset");
var A = bind(getElmWidthHeightProperty, "client");
var D = bind(getElmWidthHeightProperty, "scroll");
var getFractionalSize = (t2) => {
  const n2 = parseFloat(getStyles(t2, $)) || 0;
  const o2 = parseFloat(getStyles(t2, C)) || 0;
  return {
    w: n2 - e(n2),
    h: o2 - e(o2)
  };
};
var getBoundingClientRect = (t2) => t2.getBoundingClientRect();
var hasDimensions = (t2) => !!t2 && elementHasDimensions(t2);
var domRectHasDimensions = (t2) => !!(t2 && (t2[C] || t2[$]));
var domRectAppeared = (t2, n2) => {
  const o2 = domRectHasDimensions(t2);
  const s2 = domRectHasDimensions(n2);
  return !s2 && o2;
};
var removeEventListener = (t2, n2, o2, s2) => {
  each(getDomTokensArray(n2), (n3) => {
    if (t2) {
      t2.removeEventListener(n3, o2, s2);
    }
  });
};
var addEventListener = (t2, n2, o2, s2) => {
  var e2;
  const c2 = (e2 = s2 && s2.I) != null ? e2 : true;
  const r2 = s2 && s2.T || false;
  const i2 = s2 && s2.A || false;
  const l2 = {
    passive: c2,
    capture: r2
  };
  return bind(runEachAndClear, getDomTokensArray(n2).map((n3) => {
    const s3 = i2 ? (e3) => {
      removeEventListener(t2, n3, s3, r2);
      if (o2) {
        o2(e3);
      }
    } : o2;
    if (t2) {
      t2.addEventListener(n3, s3, l2);
    }
    return bind(removeEventListener, t2, n3, s3, r2);
  }));
};
var stopPropagation = (t2) => t2.stopPropagation();
var preventDefault = (t2) => t2.preventDefault();
var stopAndPrevent = (t2) => stopPropagation(t2) || preventDefault(t2);
var scrollElementTo = (t2, n2) => {
  const {
    x: o2,
    y: s2
  } = isNumber(n2) ? {
    x: n2,
    y: n2
  } : n2 || {};
  isNumber(o2) && (t2.scrollLeft = o2);
  isNumber(s2) && (t2.scrollTop = s2);
};
var getElementScroll = (t2) => ({
  x: t2.scrollLeft,
  y: t2.scrollTop
});
var getZeroScrollCoordinates = () => ({
  D: {
    x: 0,
    y: 0
  },
  M: {
    x: 0,
    y: 0
  }
});
var sanitizeScrollCoordinates = (t2, n2) => {
  const {
    D: o2,
    M: s2
  } = t2;
  const {
    w: e2,
    h: i2
  } = n2;
  const sanitizeAxis = (t3, n3, o3) => {
    let s3 = r(t3) * o3;
    let e3 = r(n3) * o3;
    if (s3 === e3) {
      const o4 = c(t3);
      const r2 = c(n3);
      e3 = o4 > r2 ? 0 : e3;
      s3 = o4 < r2 ? 0 : s3;
    }
    s3 = s3 === e3 ? 0 : s3;
    return [s3 + 0, e3 + 0];
  };
  const [l2, a2] = sanitizeAxis(o2.x, s2.x, e2);
  const [u2, f2] = sanitizeAxis(o2.y, s2.y, i2);
  return {
    D: {
      x: l2,
      y: u2
    },
    M: {
      x: a2,
      y: f2
    }
  };
};
var isDefaultDirectionScrollCoordinates = ({
  D: t2,
  M: n2
}) => {
  const getAxis = (t3, n3) => t3 === 0 && t3 <= n3;
  return {
    x: getAxis(t2.x, n2.x),
    y: getAxis(t2.y, n2.y)
  };
};
var getScrollCoordinatesPercent = ({
  D: t2,
  M: n2
}, o2) => {
  const getAxis = (t3, n3, o3) => capNumber(0, 1, (t3 - o3) / (t3 - n3) || 0);
  return {
    x: getAxis(t2.x, n2.x, o2.x),
    y: getAxis(t2.y, n2.y, o2.y)
  };
};
var focusElement = (t2) => {
  if (t2 && t2.focus) {
    t2.focus({
      preventScroll: true
    });
  }
};
var manageListener = (t2, n2) => {
  each(createOrKeepArray(n2), t2);
};
var createEventListenerHub = (t2) => {
  const n2 = /* @__PURE__ */ new Map();
  const removeEvent = (t3, o2) => {
    if (t3) {
      const s2 = n2.get(t3);
      manageListener((t4) => {
        if (s2) {
          s2[t4 ? "delete" : "clear"](t4);
        }
      }, o2);
    } else {
      n2.forEach((t4) => {
        t4.clear();
      });
      n2.clear();
    }
  };
  const addEvent = (t3, o2) => {
    if (isString(t3)) {
      const s3 = n2.get(t3) || /* @__PURE__ */ new Set();
      n2.set(t3, s3);
      manageListener((t4) => {
        if (isFunction(t4)) {
          s3.add(t4);
        }
      }, o2);
      return bind(removeEvent, t3, o2);
    }
    if (isBoolean(o2) && o2) {
      removeEvent();
    }
    const s2 = keys(t3);
    const e2 = [];
    each(s2, (n3) => {
      const o3 = t3[n3];
      if (o3) {
        push(e2, addEvent(n3, o3));
      }
    });
    return bind(runEachAndClear, e2);
  };
  const triggerEvent = (t3, o2) => {
    each(from(n2.get(t3)), (t4) => {
      if (o2 && !isEmptyArray(o2)) {
        t4.apply(0, o2);
      } else {
        t4();
      }
    });
  };
  addEvent(t2 || {});
  return [addEvent, removeEvent, triggerEvent];
};
var M = {};
var k = {};
var addPlugins = (t2) => {
  each(t2, (t3) => each(t3, (n2, o2) => {
    M[o2] = t3[o2];
  }));
};
var registerPluginModuleInstances = (t2, n2, o2) => keys(t2).map((s2) => {
  const {
    static: e2,
    instance: c2
  } = t2[s2];
  const [r2, i2, l2] = o2 || [];
  const a2 = o2 ? c2 : e2;
  if (a2) {
    const t3 = o2 ? a2(r2, i2, n2) : a2(n2);
    return (l2 || k)[s2] = t3;
  }
});
var getStaticPluginModuleInstance = (t2) => k[t2];
var R = "__osOptionsValidationPlugin";
var V = `data-overlayscrollbars`;
var L = "os-environment";
var U = `${L}-scrollbar-hidden`;
var P = `${V}-initialize`;
var N = "noClipping";
var q = `${V}-body`;
var B = V;
var F = "host";
var j = `${V}-viewport`;
var X = m;
var Y = O;
var W = "arrange";
var J = "measuring";
var G = "scrolling";
var K = "scrollbarHidden";
var Q = "noContent";
var Z = `${V}-padding`;
var tt = `${V}-content`;
var nt = "os-size-observer";
var ot = `${nt}-appear`;
var st = `${nt}-listener`;
var et = `${st}-scroll`;
var ct = `${st}-item`;
var rt = `${ct}-final`;
var it = "os-trinsic-observer";
var lt = "os-theme-none";
var at = "os-scrollbar";
var ut = `${at}-rtl`;
var ft = `${at}-horizontal`;
var dt = `${at}-vertical`;
var _t = `${at}-track`;
var pt = `${at}-handle`;
var gt = `${at}-visible`;
var vt = `${at}-cornerless`;
var ht = `${at}-interaction`;
var bt = `${at}-unusable`;
var wt = `${at}-auto-hide`;
var yt = `${wt}-hidden`;
var St = `${at}-wheel`;
var mt = `${_t}-interactive`;
var Ot = `${pt}-interactive`;
var $t = "__osSizeObserverPlugin";
var Ct = (() => ({
  [$t]: {
    static: () => (t2, n2, o2) => {
      const s2 = 3333333;
      const e2 = "scroll";
      const c2 = createDOM(`<div class="${ct}" dir="ltr"><div class="${ct}"><div class="${rt}"></div></div><div class="${ct}"><div class="${rt}" style="width: 200%; height: 200%"></div></div></div>`);
      const r2 = c2[0];
      const a2 = r2.lastChild;
      const u2 = r2.firstChild;
      const f2 = u2 == null ? void 0 : u2.firstChild;
      let d2 = T(r2);
      let _2 = d2;
      let p2 = false;
      let g2;
      const reset = () => {
        scrollElementTo(u2, s2);
        scrollElementTo(a2, s2);
      };
      const onResized = (t3) => {
        g2 = 0;
        if (p2) {
          d2 = _2;
          n2(t3 === true);
        }
      };
      const onScroll = (t3) => {
        _2 = T(r2);
        p2 = !t3 || !equalWH(_2, d2);
        if (t3) {
          stopPropagation(t3);
          if (p2 && !g2) {
            i(g2);
            g2 = l(onResized);
          }
        } else {
          onResized(t3 === false);
        }
        reset();
      };
      const v2 = [appendChildren(t2, c2), addEventListener(u2, e2, onScroll), addEventListener(a2, e2, onScroll)];
      addClass(t2, et);
      setStyles(f2, {
        [$]: s2,
        [C]: s2
      });
      l(reset);
      return [o2 ? bind(onScroll, false) : reset, v2];
    }
  }
}))();
var getShowNativeOverlaidScrollbars = (t2, n2) => {
  const {
    k: o2
  } = n2;
  const [s2, e2] = t2("showNativeOverlaidScrollbars");
  return [s2 && o2.x && o2.y, e2];
};
var overflowIsVisible = (t2) => t2.indexOf(x) === 0;
var overflowBehaviorToOverflowStyle = (t2) => t2.replace(`${x}-`, "");
var overflowCssValueToOverflowStyle = (t2) => t2 ? [H, E, x].includes(t2) ? t2 : H : H;
var xt = "__osScrollbarsHidingPlugin";
var Ht = (() => ({
  [xt]: {
    static: () => ({
      R: (t2, n2, o2, s2, e2) => {
        const {
          V: c2,
          L: r2
        } = t2;
        const {
          U: i2,
          k: l2,
          P: a2
        } = s2;
        const u2 = !c2 && !i2 && (l2.x || l2.y);
        const [f2] = getShowNativeOverlaidScrollbars(e2, s2);
        const readViewportOverflowStyle = () => {
          const getStatePerAxis = (t3) => overflowCssValueToOverflowStyle(getStyles(r2, t3));
          return {
            x: getStatePerAxis(m),
            y: getStatePerAxis(O)
          };
        };
        const _getViewportOverflowHideOffset = (t3) => {
          const n3 = i2 || f2 ? 0 : 42;
          const getHideOffsetPerAxis = (t4, o4, s4) => {
            const e4 = t4 ? n3 : s4;
            const c4 = o4 && !i2 ? e4 : 0;
            const r3 = t4 && !!n3;
            return [c4, r3];
          };
          const [o3, s3] = getHideOffsetPerAxis(l2.x, t3.x === E, a2.x);
          const [e3, c3] = getHideOffsetPerAxis(l2.y, t3.y === E, a2.y);
          return {
            N: {
              x: o3,
              y: e3
            },
            q: {
              x: s3,
              y: c3
            }
          };
        };
        const _hideNativeScrollbars = (t3, {
          B: o3
        }, s3) => {
          if (!c2) {
            const e3 = assignDeep({}, {
              [y]: 0,
              [S]: 0,
              [w]: 0
            });
            const {
              N: c3,
              q: r3
            } = _getViewportOverflowHideOffset(t3);
            const {
              x: i3,
              y: l3
            } = r3;
            const {
              x: a3,
              y: u3
            } = c3;
            const {
              F: f3
            } = n2;
            const d2 = o3 ? w : y;
            const _2 = o3 ? h : v;
            const p2 = f3[d2];
            const g2 = f3[S];
            const m2 = f3[_2];
            const O2 = f3[b];
            e3[$] = `calc(100% + ${u3 + p2 * -1}px)`;
            e3[d2] = -u3 + p2;
            e3[S] = -a3 + g2;
            if (s3) {
              e3[_2] = m2 + (l3 ? u3 : 0);
              e3[b] = O2 + (i3 ? a3 : 0);
            }
            return e3;
          }
        };
        const _arrangeViewport = (t3, s3, e3) => {
          if (u2) {
            const {
              F: c3
            } = n2;
            const {
              N: i3,
              q: l3
            } = _getViewportOverflowHideOffset(t3);
            const {
              x: a3,
              y: u3
            } = l3;
            const {
              x: f3,
              y: d2
            } = i3;
            const {
              B: _2
            } = o2;
            const p2 = _2 ? v : h;
            const g2 = c3[p2];
            const b2 = c3.paddingTop;
            const w2 = s3.w + e3.w;
            const y2 = s3.h + e3.h;
            const S2 = {
              w: d2 && u3 ? `${d2 + w2 - g2}px` : "",
              h: f3 && a3 ? `${f3 + y2 - b2}px` : ""
            };
            setStyles(r2, {
              "--os-vaw": S2.w,
              "--os-vah": S2.h
            });
          }
          return u2;
        };
        const _undoViewportArrange = () => {
          if (u2) {
            const t3 = readViewportOverflowStyle();
            const {
              F: s3
            } = n2;
            const {
              q: e3
            } = _getViewportOverflowHideOffset(t3);
            const {
              x: c3,
              y: i3
            } = e3;
            const l3 = {};
            const assignProps = (t4) => each(t4, (t5) => {
              l3[t5] = s3[t5];
            });
            if (c3) {
              assignProps([S, g, b]);
            }
            if (i3) {
              assignProps([w, y, h, v]);
            }
            const a3 = getStyles(r2, keys(l3));
            const f3 = removeAttrClass(r2, j, W);
            setStyles(r2, l3);
            return [() => {
              setStyles(r2, assignDeep({}, a3, _hideNativeScrollbars(t3, o2, u2)));
              f3();
            }, t3];
          }
          return [noop];
        };
        return {
          j: _getViewportOverflowHideOffset,
          X: _arrangeViewport,
          Y: _undoViewportArrange,
          W: _hideNativeScrollbars
        };
      }
    })
  }
}))();
var Et = "__osClickScrollPlugin";
var zt = (() => ({
  [Et]: {
    static: () => (t2, n2, o2, s2) => {
      let e2 = false;
      let c2 = noop;
      const r2 = 133;
      const i2 = 222;
      const [l2, a2] = selfClearTimeout(r2);
      const u2 = Math.sign(n2);
      const f2 = o2 * u2;
      const d2 = f2 / 2;
      const easing = (t3) => 1 - (1 - t3) * (1 - t3);
      const easedEndPressAnimation = (n3, o3) => animateNumber(n3, o3, i2, t2, easing);
      const linearPressAnimation = (o3, s3) => animateNumber(o3, n2 - f2, r2 * s3, (o4, s4, e3) => {
        t2(o4);
        if (e3) {
          c2 = easedEndPressAnimation(o4, n2);
        }
      });
      const _2 = animateNumber(0, f2, i2, (r3, i3, a3) => {
        t2(r3);
        if (a3) {
          s2(e2);
          if (!e2) {
            const t3 = n2 - r3;
            const s3 = Math.sign(t3 - d2) === u2;
            if (s3) {
              l2(() => {
                const s4 = t3 - f2;
                const e3 = Math.sign(s4) === u2;
                c2 = e3 ? linearPressAnimation(r3, Math.abs(s4) / o2) : easedEndPressAnimation(r3, n2);
              });
            }
          }
        }
      }, easing);
      return (t3) => {
        e2 = true;
        if (t3) {
          _2();
        }
        a2();
        c2();
      };
    }
  }
}))();
var opsStringify = (t2) => JSON.stringify(t2, (t3, n2) => {
  if (isFunction(n2)) {
    throw 0;
  }
  return n2;
});
var getPropByPath = (t2, n2) => t2 ? `${n2}`.split(".").reduce((t3, n3) => t3 && hasOwnProperty(t3, n3) ? t3[n3] : void 0, t2) : void 0;
var It = {
  paddingAbsolute: false,
  showNativeOverlaidScrollbars: false,
  update: {
    elementEvents: [["img", "load"]],
    debounce: [0, 33],
    attributes: null,
    ignoreMutation: null
  },
  overflow: {
    x: "scroll",
    y: "scroll"
  },
  scrollbars: {
    theme: "os-theme-dark",
    visibility: "auto",
    autoHide: "never",
    autoHideDelay: 1300,
    autoHideSuspend: false,
    dragScroll: true,
    clickScroll: false,
    pointers: ["mouse", "touch", "pen"]
  }
};
var getOptionsDiff = (t2, n2) => {
  const o2 = {};
  const s2 = concat(keys(n2), keys(t2));
  each(s2, (s3) => {
    const e2 = t2[s3];
    const c2 = n2[s3];
    if (isObject(e2) && isObject(c2)) {
      assignDeep(o2[s3] = {}, getOptionsDiff(e2, c2));
      if (isEmptyObject(o2[s3])) {
        delete o2[s3];
      }
    } else if (hasOwnProperty(n2, s3) && c2 !== e2) {
      let t3 = true;
      if (isArray(e2) || isArray(c2)) {
        try {
          if (opsStringify(e2) === opsStringify(c2)) {
            t3 = false;
          }
        } catch (r2) {
        }
      }
      if (t3) {
        o2[s3] = c2;
      }
    }
  });
  return o2;
};
var createOptionCheck = (t2, n2, o2) => (s2) => [getPropByPath(t2, s2), o2 || getPropByPath(n2, s2) !== void 0];
var Tt;
var getNonce = () => Tt;
var setNonce = (t2) => {
  Tt = t2;
};
var At;
var createEnvironment = () => {
  const getNativeScrollbarSize = (t3, n2, o3) => {
    appendChildren(document.body, t3);
    appendChildren(document.body, t3);
    const s3 = A(t3);
    const e3 = T(t3);
    const c3 = getFractionalSize(n2);
    if (o3) {
      removeElements(t3);
    }
    return {
      x: e3.h - s3.h + c3.h,
      y: e3.w - s3.w + c3.w
    };
  };
  const getNativeScrollbarsHiding = (t3) => {
    let n2 = false;
    const o3 = addClass(t3, U);
    try {
      n2 = getStyles(t3, "scrollbar-width") === "none" || getStyles(t3, "display", "::-webkit-scrollbar") === "none";
    } catch (s3) {
    }
    o3();
    return n2;
  };
  const t2 = `.${L}{scroll-behavior:auto!important;position:fixed;opacity:0;visibility:hidden;overflow:scroll;height:200px;width:200px;z-index:-1}.${L} div{width:200%;height:200%;margin:10px 0}.${U}{scrollbar-width:none!important}.${U}::-webkit-scrollbar,.${U}::-webkit-scrollbar-corner{appearance:none!important;display:none!important;width:0!important;height:0!important}`;
  const o2 = createDOM(`<div class="${L}"><div></div><style>${t2}</style></div>`);
  const s2 = o2[0];
  const e2 = s2.firstChild;
  const c2 = s2.lastChild;
  const r2 = getNonce();
  if (r2) {
    c2.nonce = r2;
  }
  const [i2, , l2] = createEventListenerHub();
  const [a2, u2] = createCache({
    o: getNativeScrollbarSize(s2, e2),
    i: equalXY
  }, bind(getNativeScrollbarSize, s2, e2, true));
  const [f2] = u2();
  const d2 = getNativeScrollbarsHiding(s2);
  const _2 = {
    x: f2.x === 0,
    y: f2.y === 0
  };
  const g2 = {
    elements: {
      host: null,
      padding: !d2,
      viewport: (t3) => d2 && isBodyElement(t3) && t3,
      content: false
    },
    scrollbars: {
      slot: true
    },
    cancel: {
      nativeScrollbarsOverlaid: false,
      body: null
    }
  };
  const v2 = assignDeep({}, It);
  const h2 = bind(assignDeep, {}, v2);
  const b2 = bind(assignDeep, {}, g2);
  const w2 = {
    P: f2,
    k: _2,
    U: d2,
    J: !!p,
    G: bind(i2, "r"),
    K: b2,
    Z: (t3) => assignDeep(g2, t3) && b2(),
    tt: h2,
    nt: (t3) => assignDeep(v2, t3) && h2(),
    ot: assignDeep({}, g2),
    st: assignDeep({}, v2)
  };
  removeAttrs(s2, "style");
  removeElements(s2);
  addEventListener(n, "resize", () => {
    l2("r", []);
  });
  if (isFunction(n.matchMedia) && !d2 && (!_2.x || !_2.y)) {
    const addZoomListener = (t3) => {
      const o3 = n.matchMedia(`(resolution: ${n.devicePixelRatio}dppx)`);
      addEventListener(o3, "change", () => {
        t3();
        addZoomListener(t3);
      }, {
        A: true
      });
    };
    addZoomListener(() => {
      const [t3, n2] = a2();
      assignDeep(w2.P, t3);
      l2("r", [n2]);
    });
  }
  return w2;
};
var getEnvironment = () => {
  if (!At) {
    At = createEnvironment();
  }
  return At;
};
var createEventContentChange = (t2, n2, o2) => {
  let s2 = false;
  const e2 = o2 ? /* @__PURE__ */ new WeakMap() : false;
  const destroy = () => {
    s2 = true;
  };
  const updateElements = (c2) => {
    if (e2 && o2) {
      const r2 = o2.map((n3) => {
        const [o3, s3] = n3 || [];
        const e3 = s3 && o3 ? (c2 || find)(o3, t2) : [];
        return [e3, s3];
      });
      each(r2, (o3) => each(o3[0], (c3) => {
        const r3 = o3[1];
        const i2 = e2.get(c3) || [];
        const l2 = t2.contains(c3);
        if (l2 && r3) {
          const t3 = addEventListener(c3, r3, (o4) => {
            if (s2) {
              t3();
              e2.delete(c3);
            } else {
              n2(o4);
            }
          });
          e2.set(c3, push(i2, t3));
        } else {
          runEachAndClear(i2);
          e2.delete(c3);
        }
      }));
    }
  };
  updateElements();
  return [destroy, updateElements];
};
var createDOMObserver = (t2, n2, o2, s2) => {
  let e2 = false;
  const {
    et: c2,
    ct: r2,
    rt: i2,
    it: l2,
    lt: a2,
    ut: u2
  } = s2 || {};
  const d2 = debounce(() => e2 && o2(true), {
    p: 33,
    v: 99
  });
  const [_2, p2] = createEventContentChange(t2, d2, i2);
  const g2 = c2 || [];
  const v2 = r2 || [];
  const h2 = concat(g2, v2);
  const observerCallback = (e3, c3) => {
    if (!isEmptyArray(c3)) {
      const r3 = a2 || noop;
      const i3 = u2 || noop;
      const f2 = [];
      const d3 = [];
      let _3 = false;
      let g3 = false;
      each(c3, (o3) => {
        const {
          attributeName: e4,
          target: c4,
          type: a3,
          oldValue: u3,
          addedNodes: p3,
          removedNodes: h3
        } = o3;
        const b3 = a3 === "attributes";
        const w2 = a3 === "childList";
        const y2 = t2 === c4;
        const S2 = b3 && e4;
        const m2 = S2 && getAttr(c4, e4 || "");
        const O2 = isString(m2) ? m2 : null;
        const $2 = S2 && u3 !== O2;
        const C2 = inArray(v2, e4) && $2;
        if (n2 && (w2 || !y2)) {
          const n3 = b3 && $2;
          const a4 = n3 && l2 && is(c4, l2);
          const d4 = a4 ? !r3(c4, e4, u3, O2) : !b3 || n3;
          const _4 = d4 && !i3(o3, !!a4, t2, s2);
          each(p3, (t3) => push(f2, t3));
          each(h3, (t3) => push(f2, t3));
          g3 = g3 || _4;
        }
        if (!n2 && y2 && $2 && !r3(c4, e4, u3, O2)) {
          push(d3, e4);
          _3 = _3 || C2;
        }
      });
      p2((t3) => deduplicateArray(f2).reduce((n3, o3) => {
        push(n3, find(t3, o3));
        return is(o3, t3) ? push(n3, o3) : n3;
      }, []));
      if (n2) {
        if (!e3 && g3) {
          o2(false);
        }
        return [false];
      }
      if (!isEmptyArray(d3) || _3) {
        const t3 = [deduplicateArray(d3), _3];
        if (!e3) {
          o2.apply(0, t3);
        }
        return t3;
      }
    }
  };
  const b2 = new f(bind(observerCallback, false));
  return [() => {
    b2.observe(t2, {
      attributes: true,
      attributeOldValue: true,
      attributeFilter: h2,
      subtree: n2,
      childList: n2,
      characterData: n2
    });
    e2 = true;
    return () => {
      if (e2) {
        _2();
        b2.disconnect();
        e2 = false;
      }
    };
  }, () => {
    if (e2) {
      d2.O();
      return observerCallback(true, b2.takeRecords());
    }
  }];
};
var Dt = null;
var createSizeObserver = (t2, n2, o2) => {
  const {
    ft: s2
  } = o2 || {};
  const e2 = getStaticPluginModuleInstance($t);
  const [c2] = createCache({
    o: false,
    u: true
  });
  return () => {
    const o3 = [];
    const r2 = createDOM(`<div class="${nt}"><div class="${st}"></div></div>`);
    const i2 = r2[0];
    const l2 = i2.firstChild;
    const onSizeChangedCallbackProxy = (t3) => {
      const o4 = isArray(t3) && !isEmptyArray(t3);
      let s3 = false;
      let e3 = false;
      if (o4) {
        const n3 = t3[0];
        const [o5, , r3] = c2(n3.contentRect);
        const i3 = domRectHasDimensions(o5);
        e3 = domRectAppeared(o5, r3);
        s3 = !e3 && !i3;
      } else {
        e3 = t3 === true;
      }
      if (!s3) {
        n2({
          dt: true,
          ft: e3
        });
      }
    };
    if (_) {
      if (!isBoolean(Dt)) {
        const n4 = new _(noop);
        n4.observe(t2, {
          get box() {
            Dt = true;
          }
        });
        Dt = Dt || false;
        n4.disconnect();
      }
      const n3 = debounce(onSizeChangedCallbackProxy, {
        p: 0,
        v: 0
      });
      const resizeObserverCallback = (t3) => n3(t3);
      const s3 = new _(resizeObserverCallback);
      s3.observe(Dt ? t2 : l2);
      push(o3, [() => {
        s3.disconnect();
      }, !Dt && appendChildren(t2, i2)]);
      if (Dt) {
        const n4 = new _(resizeObserverCallback);
        n4.observe(t2, {
          box: "border-box"
        });
        push(o3, () => n4.disconnect());
      }
    } else if (e2) {
      const [n3, c3] = e2(l2, onSizeChangedCallbackProxy, s2);
      push(o3, concat([addClass(i2, ot), addEventListener(i2, "animationstart", n3), appendChildren(t2, i2)], c3));
    } else {
      return noop;
    }
    return bind(runEachAndClear, o3);
  };
};
var createTrinsicObserver = (t2, n2) => {
  let o2;
  const isHeightIntrinsic = (t3) => t3.h === 0 || t3.isIntersecting || t3.intersectionRatio > 0;
  const s2 = createDiv(it);
  const [e2] = createCache({
    o: false
  });
  const triggerOnTrinsicChangedCallback = (t3, o3) => {
    if (t3) {
      const s3 = e2(isHeightIntrinsic(t3));
      const [, c2] = s3;
      return c2 && !o3 && n2(s3) && [s3];
    }
  };
  const intersectionObserverCallback = (t3, n3) => triggerOnTrinsicChangedCallback(n3.pop(), t3);
  return [() => {
    const n3 = [];
    if (d) {
      o2 = new d(bind(intersectionObserverCallback, false), {
        root: t2
      });
      o2.observe(s2);
      push(n3, () => {
        o2.disconnect();
      });
    } else {
      const onSizeChanged = () => {
        const t3 = T(s2);
        triggerOnTrinsicChangedCallback(t3);
      };
      push(n3, createSizeObserver(s2, onSizeChanged)());
      onSizeChanged();
    }
    return bind(runEachAndClear, push(n3, appendChildren(t2, s2)));
  }, () => o2 && intersectionObserverCallback(true, o2.takeRecords())];
};
var createObserversSetup = (t2, n2, o2, s2) => {
  let e2;
  let c2;
  let r2;
  let i2;
  let l2;
  let a2;
  const u2 = `[${B}]`;
  const f2 = `[${j}]`;
  const d2 = ["id", "class", "style", "open", "wrap", "cols", "rows"];
  const {
    _t: p2,
    gt: g2,
    L: v2,
    vt: h2,
    ht: b2,
    V: w2,
    bt: y2,
    wt: S2,
    yt: m2,
    St: O2
  } = t2;
  const getDirectionIsRTL = (t3) => getStyles(t3, "direction") === "rtl";
  const $2 = {
    Ot: false,
    B: getDirectionIsRTL(p2)
  };
  const C2 = getEnvironment();
  const x2 = getStaticPluginModuleInstance(xt);
  const [H2] = createCache({
    i: equalWH,
    o: {
      w: 0,
      h: 0
    }
  }, () => {
    const s3 = x2 && x2.R(t2, n2, $2, C2, o2).Y;
    const e3 = y2 && w2;
    const c3 = !e3 && hasAttrClass(g2, B, N);
    const r3 = !w2 && S2(W);
    const i3 = r3 && getElementScroll(h2);
    const l3 = i3 && O2();
    const a3 = m2(J, c3);
    const u3 = r3 && s3 && s3()[0];
    const f3 = D(v2);
    const d3 = getFractionalSize(v2);
    if (u3) {
      u3();
    }
    scrollElementTo(h2, i3);
    if (l3) {
      l3();
    }
    if (c3) {
      a3();
    }
    return {
      w: f3.w + d3.w,
      h: f3.h + d3.h
    };
  });
  const E2 = debounce(s2, {
    p: () => e2,
    v: () => c2,
    m(t3, n3) {
      const [o3] = t3;
      const [s3] = n3;
      return [concat(keys(o3), keys(s3)).reduce((t4, n4) => {
        t4[n4] = o3[n4] || s3[n4];
        return t4;
      }, {})];
    }
  });
  const setDirection = (t3) => {
    const n3 = getDirectionIsRTL(p2);
    assignDeep(t3, {
      $t: a2 !== n3
    });
    assignDeep($2, {
      B: n3
    });
    a2 = n3;
  };
  const onTrinsicChanged = (t3, n3) => {
    const [o3, e3] = t3;
    const c3 = {
      Ct: e3
    };
    assignDeep($2, {
      Ot: o3
    });
    if (!n3) {
      s2(c3);
    }
    return c3;
  };
  const onSizeChanged = ({
    dt: t3,
    ft: n3
  }) => {
    const o3 = t3 && !n3;
    const e3 = !o3 && C2.U ? E2 : s2;
    const c3 = {
      dt: t3 || n3,
      ft: n3
    };
    setDirection(c3);
    e3(c3);
  };
  const onContentMutation = (t3, n3) => {
    const [, o3] = H2();
    const e3 = {
      xt: o3
    };
    setDirection(e3);
    const c3 = t3 ? s2 : E2;
    if (o3 && !n3) {
      c3(e3);
    }
    return e3;
  };
  const onHostMutation = (t3, n3, o3) => {
    const s3 = {
      Ht: n3
    };
    setDirection(s3);
    if (n3 && !o3) {
      E2(s3);
    }
    return s3;
  };
  const [z2, I2] = b2 ? createTrinsicObserver(g2, onTrinsicChanged) : [];
  const T2 = !w2 && createSizeObserver(g2, onSizeChanged, {
    ft: true
  });
  const [A2, M2] = createDOMObserver(g2, false, onHostMutation, {
    ct: d2,
    et: d2
  });
  const k2 = w2 && _ && new _((t3) => {
    const n3 = t3[t3.length - 1].contentRect;
    onSizeChanged({
      dt: true,
      ft: domRectAppeared(n3, l2)
    });
    l2 = n3;
  });
  const R2 = debounce(() => {
    const [, t3] = H2();
    s2({
      xt: t3
    });
  }, {
    p: 222,
    S: true
  });
  return [() => {
    if (k2) {
      k2.observe(g2);
    }
    const t3 = T2 && T2();
    const n3 = z2 && z2();
    const o3 = A2();
    const s3 = C2.G((t4) => {
      if (t4) {
        E2({
          Et: t4
        });
      } else {
        R2();
      }
    });
    return () => {
      if (k2) {
        k2.disconnect();
      }
      if (t3) {
        t3();
      }
      if (n3) {
        n3();
      }
      if (i2) {
        i2();
      }
      o3();
      s3();
    };
  }, ({
    zt: t3,
    It: n3,
    Tt: o3
  }) => {
    const s3 = {};
    const [l3] = t3("update.ignoreMutation");
    const [a3, _2] = t3("update.attributes");
    const [p3, g3] = t3("update.elementEvents");
    const [h3, y3] = t3("update.debounce");
    const S3 = g3 || _2;
    const m3 = n3 || o3;
    const ignoreMutationFromOptions = (t4) => isFunction(l3) && l3(t4);
    if (S3) {
      if (r2) {
        r2();
      }
      if (i2) {
        i2();
      }
      const [t4, n4] = createDOMObserver(b2 || v2, true, onContentMutation, {
        et: concat(d2, a3 || []),
        rt: p3,
        it: u2,
        ut: (t5, n5) => {
          const {
            target: o4,
            attributeName: s4
          } = t5;
          const e3 = !n5 && s4 && !w2 ? liesBetween(o4, u2, f2) : false;
          return e3 || !!closest(o4, `.${at}`) || !!ignoreMutationFromOptions(t5);
        }
      });
      i2 = t4();
      r2 = n4;
    }
    if (y3) {
      E2.O();
      if (isArray(h3)) {
        const t4 = h3[0];
        const n4 = h3[1];
        e2 = isNumber(t4) && t4;
        c2 = isNumber(n4) && n4;
      } else if (isNumber(h3)) {
        e2 = h3;
        c2 = false;
      } else {
        e2 = false;
        c2 = false;
      }
    }
    if (m3) {
      const t4 = M2();
      const n4 = I2 && I2();
      const o4 = r2 && r2();
      if (t4) {
        assignDeep(s3, onHostMutation(t4[0], t4[1], m3));
      }
      if (n4) {
        assignDeep(s3, onTrinsicChanged(n4[0], m3));
      }
      if (o4) {
        assignDeep(s3, onContentMutation(o4[0], m3));
      }
    }
    setDirection(s3);
    return s3;
  }, $2];
};
var resolveInitialization = (t2, n2) => isFunction(n2) ? n2.apply(0, t2) : n2;
var staticInitializationElement = (t2, n2, o2, s2) => {
  const e2 = isUndefined(s2) ? o2 : s2;
  const c2 = resolveInitialization(t2, e2);
  return c2 || n2.apply(0, t2);
};
var dynamicInitializationElement = (t2, n2, o2, s2) => {
  const e2 = isUndefined(s2) ? o2 : s2;
  const c2 = resolveInitialization(t2, e2);
  return !!c2 && (isHTMLElement(c2) ? c2 : n2.apply(0, t2));
};
var cancelInitialization = (t2, n2) => {
  const {
    nativeScrollbarsOverlaid: o2,
    body: s2
  } = n2 || {};
  const {
    k: e2,
    U: c2,
    K: r2
  } = getEnvironment();
  const {
    nativeScrollbarsOverlaid: i2,
    body: l2
  } = r2().cancel;
  const a2 = o2 != null ? o2 : i2;
  const u2 = isUndefined(s2) ? l2 : s2;
  const f2 = (e2.x || e2.y) && a2;
  const d2 = t2 && (isNull(u2) ? !c2 : u2);
  return !!f2 || !!d2;
};
var createScrollbarsSetupElements = (t2, n2, o2, s2) => {
  const e2 = "--os-viewport-percent";
  const c2 = "--os-scroll-percent";
  const r2 = "--os-scroll-direction";
  const {
    K: i2
  } = getEnvironment();
  const {
    scrollbars: l2
  } = i2();
  const {
    slot: a2
  } = l2;
  const {
    _t: u2,
    gt: f2,
    L: d2,
    At: _2,
    vt: g2,
    bt: v2,
    V: h2
  } = n2;
  const {
    scrollbars: b2
  } = _2 ? {} : t2;
  const {
    slot: w2
  } = b2 || {};
  const y2 = [];
  const S2 = [];
  const m2 = [];
  const O2 = dynamicInitializationElement([u2, f2, d2], () => h2 && v2 ? u2 : f2, a2, w2);
  const initScrollTimeline = (t3) => {
    if (p) {
      let n3 = null;
      let s3 = [];
      const e3 = new p({
        source: g2,
        axis: t3
      });
      const cancelAnimation = () => {
        if (n3) {
          n3.cancel();
        }
        n3 = null;
      };
      const _setScrollPercentAnimation = (c3) => {
        const {
          Dt: r3
        } = o2;
        const i3 = isDefaultDirectionScrollCoordinates(r3)[t3];
        const l3 = t3 === "x";
        const a3 = [getTrasformTranslateValue(0, l3), getTrasformTranslateValue(`calc(100cq${l3 ? "w" : "h"} + -100%)`, l3)];
        const u3 = i3 ? a3 : a3.reverse();
        if (s3[0] === u3[0] && s3[1] === u3[1]) {
          return cancelAnimation;
        }
        cancelAnimation();
        s3 = u3;
        n3 = c3.Mt.animate({
          clear: ["left"],
          transform: u3
        }, {
          timeline: e3
        });
        return cancelAnimation;
      };
      return {
        kt: _setScrollPercentAnimation
      };
    }
  };
  const $2 = {
    x: initScrollTimeline("x"),
    y: initScrollTimeline("y")
  };
  const getViewportPercent = () => {
    const {
      Rt: t3,
      Vt: n3
    } = o2;
    const getAxisValue = (t4, n4) => capNumber(0, 1, t4 / (t4 + n4) || 0);
    return {
      x: getAxisValue(n3.x, t3.x),
      y: getAxisValue(n3.y, t3.y)
    };
  };
  const scrollbarStructureAddRemoveClass = (t3, n3, o3) => {
    const s3 = o3 ? addClass : removeClass;
    each(t3, (t4) => {
      s3(t4.Lt, n3);
    });
  };
  const scrollbarStyle = (t3, n3) => {
    each(t3, (t4) => {
      const [o3, s3] = n3(t4);
      setStyles(o3, s3);
    });
  };
  const scrollbarsAddRemoveClass = (t3, n3, o3) => {
    const s3 = isBoolean(o3);
    const e3 = s3 ? o3 : true;
    const c3 = s3 ? !o3 : true;
    if (e3) {
      scrollbarStructureAddRemoveClass(S2, t3, n3);
    }
    if (c3) {
      scrollbarStructureAddRemoveClass(m2, t3, n3);
    }
  };
  const refreshScrollbarsHandleLength = () => {
    const t3 = getViewportPercent();
    const createScrollbarStyleFn = (t4) => (n3) => [n3.Lt, {
      [e2]: roundCssNumber(t4) + ""
    }];
    scrollbarStyle(S2, createScrollbarStyleFn(t3.x));
    scrollbarStyle(m2, createScrollbarStyleFn(t3.y));
  };
  const refreshScrollbarsHandleOffset = () => {
    if (!p) {
      const {
        Dt: t3
      } = o2;
      const n3 = getScrollCoordinatesPercent(t3, getElementScroll(g2));
      const createScrollbarStyleFn = (t4) => (n4) => [n4.Lt, {
        [c2]: roundCssNumber(t4) + ""
      }];
      scrollbarStyle(S2, createScrollbarStyleFn(n3.x));
      scrollbarStyle(m2, createScrollbarStyleFn(n3.y));
    }
  };
  const refreshScrollbarsScrollCoordinates = () => {
    const {
      Dt: t3
    } = o2;
    const n3 = isDefaultDirectionScrollCoordinates(t3);
    const createScrollbarStyleFn = (t4) => (n4) => [n4.Lt, {
      [r2]: t4 ? "0" : "1"
    }];
    scrollbarStyle(S2, createScrollbarStyleFn(n3.x));
    scrollbarStyle(m2, createScrollbarStyleFn(n3.y));
    if (p) {
      S2.forEach($2.x.kt);
      m2.forEach($2.y.kt);
    }
  };
  const refreshScrollbarsScrollbarOffset = () => {
    if (h2 && !v2) {
      const {
        Rt: t3,
        Dt: n3
      } = o2;
      const s3 = isDefaultDirectionScrollCoordinates(n3);
      const e3 = getScrollCoordinatesPercent(n3, getElementScroll(g2));
      const styleScrollbarPosition = (n4) => {
        const {
          Lt: o3
        } = n4;
        const c3 = parent(o3) === d2 && o3;
        const getTranslateValue = (t4, n5, o4) => {
          const s4 = n5 * t4;
          return numberToCssPx(o4 ? s4 : -s4);
        };
        return [c3, c3 && {
          transform: getTrasformTranslateValue({
            x: getTranslateValue(e3.x, t3.x, s3.x),
            y: getTranslateValue(e3.y, t3.y, s3.y)
          })
        }];
      };
      scrollbarStyle(S2, styleScrollbarPosition);
      scrollbarStyle(m2, styleScrollbarPosition);
    }
  };
  const generateScrollbarDOM = (t3) => {
    const n3 = t3 ? "x" : "y";
    const o3 = t3 ? ft : dt;
    const e3 = createDiv(`${at} ${o3}`);
    const c3 = createDiv(_t);
    const r3 = createDiv(pt);
    const i3 = {
      Lt: e3,
      Ut: c3,
      Mt: r3
    };
    const l3 = $2[n3];
    push(t3 ? S2 : m2, i3);
    push(y2, [appendChildren(e3, c3), appendChildren(c3, r3), bind(removeElements, e3), l3 && l3.kt(i3), s2(i3, scrollbarsAddRemoveClass, t3)]);
    return i3;
  };
  const C2 = bind(generateScrollbarDOM, true);
  const x2 = bind(generateScrollbarDOM, false);
  const appendElements = () => {
    appendChildren(O2, S2[0].Lt);
    appendChildren(O2, m2[0].Lt);
    return bind(runEachAndClear, y2);
  };
  C2();
  x2();
  return [{
    Pt: refreshScrollbarsHandleLength,
    Nt: refreshScrollbarsHandleOffset,
    qt: refreshScrollbarsScrollCoordinates,
    Bt: refreshScrollbarsScrollbarOffset,
    Ft: scrollbarsAddRemoveClass,
    jt: {
      Xt: S2,
      Yt: C2,
      Wt: bind(scrollbarStyle, S2)
    },
    Jt: {
      Xt: m2,
      Yt: x2,
      Wt: bind(scrollbarStyle, m2)
    }
  }, appendElements];
};
var createScrollbarsSetupEvents = (t2, n2, o2, s2) => (r2, i2, l2) => {
  const {
    gt: u2,
    L: f2,
    V: d2,
    vt: _2,
    Gt: p2,
    St: g2
  } = n2;
  const {
    Lt: v2,
    Ut: h2,
    Mt: b2
  } = r2;
  const [w2, y2] = selfClearTimeout(333);
  const [S2, m2] = selfClearTimeout(444);
  const scrollOffsetElementScrollBy = (t3) => {
    if (isFunction(_2.scrollBy)) {
      _2.scrollBy({
        behavior: "smooth",
        left: t3.x,
        top: t3.y
      });
    }
  };
  const createInteractiveScrollEvents = () => {
    const n3 = "pointerup pointercancel lostpointercapture";
    const s3 = `client${l2 ? "X" : "Y"}`;
    const r3 = l2 ? $ : C;
    const i3 = l2 ? "left" : "top";
    const a2 = l2 ? "w" : "h";
    const u3 = l2 ? "x" : "y";
    const createRelativeHandleMove = (t3, n4) => (s4) => {
      const {
        Rt: e2
      } = o2;
      const c2 = T(h2)[a2] - T(b2)[a2];
      const r4 = n4 * s4 / c2;
      const i4 = r4 * e2[u3];
      scrollElementTo(_2, {
        [u3]: t3 + i4
      });
    };
    const f3 = [];
    return addEventListener(h2, "pointerdown", (o3) => {
      const l3 = closest(o3.target, `.${pt}`) === b2;
      const d3 = l3 ? b2 : h2;
      const v3 = t2.scrollbars;
      const w3 = v3[l3 ? "dragScroll" : "clickScroll"];
      const {
        button: y3,
        isPrimary: O3,
        pointerType: $2
      } = o3;
      const {
        pointers: C2
      } = v3;
      const x2 = y3 === 0 && O3 && w3 && (C2 || []).includes($2);
      if (x2) {
        runEachAndClear(f3);
        m2();
        const t3 = !l3 && (o3.shiftKey || w3 === "instant");
        const v4 = bind(getBoundingClientRect, b2);
        const y4 = bind(getBoundingClientRect, h2);
        const getHandleOffset = (t4, n4) => (t4 || v4())[i3] - (n4 || y4())[i3];
        const O4 = e(getBoundingClientRect(_2)[r3]) / T(_2)[a2] || 1;
        const $3 = createRelativeHandleMove(getElementScroll(_2)[u3], 1 / O4);
        const C3 = o3[s3];
        const x3 = v4();
        const H2 = y4();
        const E2 = x3[r3];
        const z2 = getHandleOffset(x3, H2) + E2 / 2;
        const I2 = C3 - H2[i3];
        const A2 = l3 ? 0 : I2 - z2;
        const releasePointerCapture = (t4) => {
          runEachAndClear(k2);
          d3.releasePointerCapture(t4.pointerId);
        };
        const D2 = l3 || t3;
        const M2 = g2();
        const k2 = [addEventListener(p2, n3, releasePointerCapture), addEventListener(p2, "selectstart", (t4) => preventDefault(t4), {
          I: false
        }), addEventListener(h2, n3, releasePointerCapture), D2 && addEventListener(h2, "pointermove", (t4) => $3(A2 + (t4[s3] - C3))), D2 && (() => {
          const t4 = getElementScroll(_2);
          M2();
          const n4 = getElementScroll(_2);
          const o4 = {
            x: n4.x - t4.x,
            y: n4.y - t4.y
          };
          if (c(o4.x) > 3 || c(o4.y) > 3) {
            g2();
            scrollElementTo(_2, t4);
            scrollOffsetElementScrollBy(o4);
            S2(M2);
          }
        })];
        d3.setPointerCapture(o3.pointerId);
        if (t3) {
          $3(A2);
        } else if (!l3) {
          const t4 = getStaticPluginModuleInstance(Et);
          if (t4) {
            const n4 = t4($3, A2, E2, (t5) => {
              if (t5) {
                M2();
              } else {
                push(k2, M2);
              }
            });
            push(k2, n4);
            push(f3, bind(n4, true));
          }
        }
      }
    });
  };
  let O2 = true;
  return bind(runEachAndClear, [addEventListener(b2, "pointermove pointerleave", s2), addEventListener(v2, "pointerenter", () => {
    i2(ht, true);
  }), addEventListener(v2, "pointerleave pointercancel", () => {
    i2(ht, false);
  }), !d2 && addEventListener(v2, "mousedown", () => {
    const t3 = getFocusedElement();
    if (hasAttr(t3, j) || hasAttr(t3, B) || t3 === document.body) {
      a(bind(focusElement, f2), 25);
    }
  }), addEventListener(v2, "wheel", (t3) => {
    const {
      deltaX: n3,
      deltaY: o3,
      deltaMode: s3
    } = t3;
    if (O2 && s3 === 0 && parent(v2) === u2) {
      scrollOffsetElementScrollBy({
        x: n3,
        y: o3
      });
    }
    O2 = false;
    i2(St, true);
    w2(() => {
      O2 = true;
      i2(St);
    });
    preventDefault(t3);
  }, {
    I: false,
    T: true
  }), addEventListener(v2, "pointerdown", bind(addEventListener, p2, "click", stopAndPrevent, {
    A: true,
    T: true,
    I: false
  }), {
    T: true
  }), createInteractiveScrollEvents(), y2, m2]);
};
var createScrollbarsSetup = (t2, n2, o2, s2, e2, c2) => {
  let r2;
  let i2;
  let l2;
  let a2;
  let u2;
  let f2 = noop;
  let d2 = 0;
  const _2 = ["mouse", "pen"];
  const isHoverablePointerType = (t3) => _2.includes(t3.pointerType);
  const [p2, g2] = selfClearTimeout();
  const [v2, h2] = selfClearTimeout(100);
  const [b2, w2] = selfClearTimeout(100);
  const [y2, S2] = selfClearTimeout(() => d2);
  const [m2, O2] = createScrollbarsSetupElements(t2, e2, s2, createScrollbarsSetupEvents(n2, e2, s2, (t3) => isHoverablePointerType(t3) && manageScrollbarsAutoHideInstantInteraction()));
  const {
    gt: $2,
    Kt: C2,
    bt: H2
  } = e2;
  const {
    Ft: z2,
    Pt: I2,
    Nt: T2,
    qt: A2,
    Bt: D2
  } = m2;
  const manageScrollbarsAutoHide = (t3, n3) => {
    S2();
    if (t3) {
      z2(yt);
    } else {
      const t4 = bind(z2, yt, true);
      if (d2 > 0 && !n3) {
        y2(t4);
      } else {
        t4();
      }
    }
  };
  const manageScrollbarsAutoHideInstantInteraction = () => {
    if (l2 ? !r2 : !a2) {
      manageScrollbarsAutoHide(true);
      v2(() => {
        manageScrollbarsAutoHide(false);
      });
    }
  };
  const manageAutoHideSuspension = (t3) => {
    z2(wt, t3, true);
    z2(wt, t3, false);
  };
  const onHostMouseEnter = (t3) => {
    if (isHoverablePointerType(t3)) {
      r2 = l2;
      if (l2) {
        manageScrollbarsAutoHide(true);
      }
    }
  };
  const M2 = [S2, h2, w2, g2, () => f2(), addEventListener($2, "pointerover", onHostMouseEnter, {
    A: true
  }), addEventListener($2, "pointerenter", onHostMouseEnter), addEventListener($2, "pointerleave", (t3) => {
    if (isHoverablePointerType(t3)) {
      r2 = false;
      if (l2) {
        manageScrollbarsAutoHide(false);
      }
    }
  }), addEventListener($2, "pointermove", (t3) => {
    if (isHoverablePointerType(t3) && i2) {
      manageScrollbarsAutoHideInstantInteraction();
    }
  }), addEventListener(C2, "scroll", (t3) => {
    p2(() => {
      T2();
      manageScrollbarsAutoHideInstantInteraction();
    });
    c2(t3);
    D2();
  })];
  return [() => bind(runEachAndClear, push(M2, O2())), ({
    zt: t3,
    Tt: n3,
    Qt: e3,
    Zt: c3
  }) => {
    const {
      tn: r3,
      nn: _3,
      sn: p3,
      en: g3
    } = c3 || {};
    const {
      $t: v3,
      ft: h3
    } = e3 || {};
    const {
      B: w3
    } = o2;
    const {
      k: y3
    } = getEnvironment();
    const {
      cn: S3,
      rn: m3
    } = s2;
    const [O3, $3] = t3("showNativeOverlaidScrollbars");
    const [M3, k2] = t3("scrollbars.theme");
    const [R2, V2] = t3("scrollbars.visibility");
    const [L2, U2] = t3("scrollbars.autoHide");
    const [P2, N2] = t3("scrollbars.autoHideSuspend");
    const [q2] = t3("scrollbars.autoHideDelay");
    const [B2, F2] = t3("scrollbars.dragScroll");
    const [j2, X2] = t3("scrollbars.clickScroll");
    const [Y2, W2] = t3("overflow");
    const J2 = h3 && !n3;
    const G2 = m3.x || m3.y;
    const K2 = r3 || _3 || g3 || v3 || n3;
    const Q2 = p3 || V2 || W2;
    const Z2 = O3 && y3.x && y3.y;
    const setScrollbarVisibility = (t4, n4, o3) => {
      const s3 = t4.includes(E) && (R2 === x || R2 === "auto" && n4 === E);
      z2(gt, s3, o3);
      return s3;
    };
    d2 = q2;
    if (J2) {
      if (P2 && G2) {
        manageAutoHideSuspension(false);
        f2();
        b2(() => {
          f2 = addEventListener(C2, "scroll", bind(manageAutoHideSuspension, true), {
            A: true
          });
        });
      } else {
        manageAutoHideSuspension(true);
      }
    }
    if ($3) {
      z2(lt, Z2);
    }
    if (k2) {
      z2(u2);
      z2(M3, true);
      u2 = M3;
    }
    if (N2 && !P2) {
      manageAutoHideSuspension(true);
    }
    if (U2) {
      i2 = L2 === "move";
      l2 = L2 === "leave";
      a2 = L2 === "never";
      manageScrollbarsAutoHide(a2, true);
    }
    if (F2) {
      z2(Ot, B2);
    }
    if (X2) {
      z2(mt, !!j2);
    }
    if (Q2) {
      const t4 = setScrollbarVisibility(Y2.x, S3.x, true);
      const n4 = setScrollbarVisibility(Y2.y, S3.y, false);
      const o3 = t4 && n4;
      z2(vt, !o3);
    }
    if (K2) {
      T2();
      I2();
      D2();
      if (g3) {
        A2();
      }
      z2(bt, !m3.x, true);
      z2(bt, !m3.y, false);
      z2(ut, w3 && !H2);
    }
  }, {}, m2];
};
var createStructureSetupElements = (t2) => {
  const o2 = getEnvironment();
  const {
    K: s2,
    U: e2
  } = o2;
  const {
    elements: c2
  } = s2();
  const {
    padding: r2,
    viewport: i2,
    content: l2
  } = c2;
  const a2 = isHTMLElement(t2);
  const u2 = a2 ? {} : t2;
  const {
    elements: f2
  } = u2;
  const {
    padding: d2,
    viewport: _2,
    content: p2
  } = f2 || {};
  const g2 = a2 ? t2 : u2.target;
  const v2 = isBodyElement(g2);
  const h2 = g2.ownerDocument;
  const b2 = h2.documentElement;
  const getDocumentWindow = () => h2.defaultView || n;
  const w2 = bind(staticInitializationElement, [g2]);
  const y2 = bind(dynamicInitializationElement, [g2]);
  const S2 = bind(createDiv, "");
  const $2 = bind(w2, S2, i2);
  const C2 = bind(y2, S2, l2);
  const elementHasOverflow = (t3) => {
    const n2 = T(t3);
    const o3 = D(t3);
    const s3 = getStyles(t3, m);
    const e3 = getStyles(t3, O);
    return o3.w - n2.w > 0 && !overflowIsVisible(s3) || o3.h - n2.h > 0 && !overflowIsVisible(e3);
  };
  const x2 = $2(_2);
  const H2 = x2 === g2;
  const E2 = H2 && v2;
  const z2 = !H2 && C2(p2);
  const I2 = !H2 && x2 === z2;
  const A2 = E2 ? b2 : x2;
  const M2 = E2 ? A2 : g2;
  const k2 = !H2 && y2(S2, r2, d2);
  const R2 = !I2 && z2;
  const V2 = [R2, A2, k2, M2].map((t3) => isHTMLElement(t3) && !parent(t3) && t3);
  const elementIsGenerated = (t3) => t3 && inArray(V2, t3);
  const L2 = !elementIsGenerated(A2) && elementHasOverflow(A2) ? A2 : g2;
  const U2 = E2 ? b2 : A2;
  const N2 = E2 ? h2 : A2;
  const X2 = {
    _t: g2,
    gt: M2,
    L: A2,
    ln: k2,
    ht: R2,
    vt: U2,
    Kt: N2,
    an: v2 ? b2 : L2,
    Gt: h2,
    bt: v2,
    At: a2,
    V: H2,
    un: getDocumentWindow,
    wt: (t3) => hasAttrClass(A2, j, t3),
    yt: (t3, n2) => addRemoveAttrClass(A2, j, t3, n2),
    St: () => addRemoveAttrClass(U2, j, G, true)
  };
  const {
    _t: Y2,
    gt: W2,
    ln: J2,
    L: Q2,
    ht: nt2
  } = X2;
  const ot2 = [() => {
    removeAttrs(W2, [B, P]);
    removeAttrs(Y2, P);
    if (v2) {
      removeAttrs(b2, [P, B]);
    }
  }];
  let st2 = contents([nt2, Q2, J2, W2, Y2].find((t3) => t3 && !elementIsGenerated(t3)));
  const et2 = E2 ? Y2 : nt2 || Q2;
  const ct2 = bind(runEachAndClear, ot2);
  const appendElements = () => {
    const t3 = getDocumentWindow();
    const n2 = getFocusedElement();
    const unwrap = (t4) => {
      appendChildren(parent(t4), contents(t4));
      removeElements(t4);
    };
    const prepareWrapUnwrapFocus = (t4) => addEventListener(t4, "focusin focusout focus blur", stopAndPrevent, {
      T: true,
      I: false
    });
    const o3 = "tabindex";
    const s3 = getAttr(Q2, o3);
    const c3 = prepareWrapUnwrapFocus(n2);
    setAttrs(W2, B, H2 ? "" : F);
    setAttrs(J2, Z, "");
    setAttrs(Q2, j, "");
    setAttrs(nt2, tt, "");
    if (!H2) {
      setAttrs(Q2, o3, s3 || "-1");
      if (v2) {
        setAttrs(b2, q, "");
      }
    }
    appendChildren(et2, st2);
    appendChildren(W2, J2);
    appendChildren(J2 || W2, !H2 && Q2);
    appendChildren(Q2, nt2);
    push(ot2, [c3, () => {
      const t4 = getFocusedElement();
      const n3 = elementIsGenerated(Q2);
      const e3 = n3 && t4 === Q2 ? Y2 : t4;
      const c4 = prepareWrapUnwrapFocus(e3);
      removeAttrs(J2, Z);
      removeAttrs(nt2, tt);
      removeAttrs(Q2, j);
      if (v2) {
        removeAttrs(b2, q);
      }
      if (s3) {
        setAttrs(Q2, o3, s3);
      } else {
        removeAttrs(Q2, o3);
      }
      if (elementIsGenerated(nt2)) {
        unwrap(nt2);
      }
      if (n3) {
        unwrap(Q2);
      }
      if (elementIsGenerated(J2)) {
        unwrap(J2);
      }
      focusElement(e3);
      c4();
    }]);
    if (e2 && !H2) {
      addAttrClass(Q2, j, K);
      push(ot2, bind(removeAttrs, Q2, j));
    }
    focusElement(!H2 && v2 && n2 === Y2 && t3.top === t3 ? Q2 : n2);
    c3();
    st2 = 0;
    return ct2;
  };
  return [X2, appendElements, ct2];
};
var createTrinsicUpdateSegment = ({
  ht: t2
}) => ({
  Qt: n2,
  fn: o2,
  Tt: s2
}) => {
  const {
    Ct: e2
  } = n2 || {};
  const {
    Ot: c2
  } = o2;
  const r2 = t2 && (e2 || s2);
  if (r2) {
    setStyles(t2, {
      [C]: c2 && "100%"
    });
  }
};
var createPaddingUpdateSegment = ({
  gt: t2,
  ln: n2,
  L: o2,
  V: s2
}, e2) => {
  const [c2, r2] = createCache({
    i: equalTRBL,
    o: topRightBottomLeft()
  }, bind(topRightBottomLeft, t2, "padding", ""));
  return ({
    zt: t3,
    Qt: i2,
    fn: l2,
    Tt: a2
  }) => {
    let [u2, f2] = r2(a2);
    const {
      U: d2
    } = getEnvironment();
    const {
      dt: _2,
      xt: p2,
      $t: m2
    } = i2 || {};
    const {
      B: O2
    } = l2;
    const [C2, x2] = t3("paddingAbsolute");
    const H2 = a2 || p2;
    if (_2 || f2 || H2) {
      [u2, f2] = c2(a2);
    }
    const E2 = !s2 && (x2 || m2 || f2);
    if (E2) {
      const t4 = !C2 || !n2 && !d2;
      const s3 = u2.r + u2.l;
      const c3 = u2.t + u2.b;
      const r3 = {
        [y]: t4 && !O2 ? -s3 : 0,
        [S]: t4 ? -c3 : 0,
        [w]: t4 && O2 ? -s3 : 0,
        top: t4 ? -u2.t : 0,
        right: t4 ? O2 ? -u2.r : "auto" : 0,
        left: t4 ? O2 ? "auto" : -u2.l : 0,
        [$]: t4 && `calc(100% + ${s3}px)`
      };
      const i3 = {
        [g]: t4 ? u2.t : 0,
        [v]: t4 ? u2.r : 0,
        [b]: t4 ? u2.b : 0,
        [h]: t4 ? u2.l : 0
      };
      setStyles(n2 || o2, r3);
      setStyles(o2, i3);
      assignDeep(e2, {
        ln: u2,
        dn: !t4,
        F: n2 ? i3 : assignDeep({}, r3, i3)
      });
    }
    return {
      _n: E2
    };
  };
};
var createOverflowUpdateSegment = (t2, s2) => {
  const e2 = getEnvironment();
  const {
    gt: c2,
    ln: r2,
    L: i2,
    V: a2,
    Kt: u2,
    vt: f2,
    bt: d2,
    yt: _2,
    un: p2
  } = t2;
  const {
    U: g2
  } = e2;
  const v2 = d2 && a2;
  const h2 = bind(o, 0);
  const b2 = {
    display: () => false,
    direction: (t3) => t3 !== "ltr",
    flexDirection: (t3) => t3.endsWith("-reverse"),
    writingMode: (t3) => t3 !== "horizontal-tb"
  };
  const w2 = keys(b2);
  const y2 = {
    i: equalWH,
    o: {
      w: 0,
      h: 0
    }
  };
  const S2 = {
    i: equalXY,
    o: {}
  };
  const setMeasuringMode = (t3) => {
    _2(J, !v2 && t3);
  };
  const getMeasuredScrollCoordinates = (t3) => {
    const n2 = w2.some((n3) => {
      const o3 = t3[n3];
      return o3 && b2[n3](o3);
    });
    if (!n2) {
      return {
        D: {
          x: 0,
          y: 0
        },
        M: {
          x: 1,
          y: 1
        }
      };
    }
    setMeasuringMode(true);
    const o2 = getElementScroll(f2);
    const s3 = _2(Q, true);
    const e3 = addEventListener(u2, E, (t4) => {
      const n3 = getElementScroll(f2);
      if (t4.isTrusted && n3.x === o2.x && n3.y === o2.y) {
        stopPropagation(t4);
      }
    }, {
      T: true,
      A: true
    });
    scrollElementTo(f2, {
      x: 0,
      y: 0
    });
    s3();
    const c3 = getElementScroll(f2);
    const r3 = D(f2);
    scrollElementTo(f2, {
      x: r3.w,
      y: r3.h
    });
    const i3 = getElementScroll(f2);
    scrollElementTo(f2, {
      x: i3.x - c3.x < 1 && -r3.w,
      y: i3.y - c3.y < 1 && -r3.h
    });
    const a3 = getElementScroll(f2);
    scrollElementTo(f2, o2);
    l(() => e3());
    return {
      D: c3,
      M: a3
    };
  };
  const getOverflowAmount = (t3, o2) => {
    const s3 = n.devicePixelRatio % 1 !== 0 ? 1 : 0;
    const e3 = {
      w: h2(t3.w - o2.w),
      h: h2(t3.h - o2.h)
    };
    return {
      w: e3.w > s3 ? e3.w : 0,
      h: e3.h > s3 ? e3.h : 0
    };
  };
  const getViewportOverflowStyle = (t3, n2) => {
    const getAxisOverflowStyle = (t4, n3, o2, s3) => {
      const e3 = t4 === x ? H : overflowBehaviorToOverflowStyle(t4);
      const c3 = overflowIsVisible(t4);
      const r3 = overflowIsVisible(o2);
      if (!n3 && !s3) {
        return H;
      }
      if (c3 && r3) {
        return x;
      }
      if (c3) {
        const t5 = n3 ? x : H;
        return n3 && s3 ? e3 : t5;
      }
      const i3 = r3 && s3 ? x : H;
      return n3 ? e3 : i3;
    };
    return {
      x: getAxisOverflowStyle(n2.x, t3.x, n2.y, t3.y),
      y: getAxisOverflowStyle(n2.y, t3.y, n2.x, t3.x)
    };
  };
  const setViewportOverflowStyle = (t3) => {
    const createAllOverflowStyleClassNames = (t4) => [x, H, E].map((n3) => createViewportOverflowStyleClassName(overflowCssValueToOverflowStyle(n3), t4));
    const n2 = createAllOverflowStyleClassNames(true).concat(createAllOverflowStyleClassNames()).join(" ");
    _2(n2);
    _2(keys(t3).map((n3) => createViewportOverflowStyleClassName(t3[n3], n3 === "x")).join(" "), true);
  };
  const [$2, C2] = createCache(y2, bind(getFractionalSize, i2));
  const [z2, I2] = createCache(y2, bind(D, i2));
  const [T2, M2] = createCache(y2);
  const [k2] = createCache(S2);
  const [R2, V2] = createCache(y2);
  const [L2] = createCache(S2);
  const [U2] = createCache({
    i: (t3, n2) => equal(t3, n2, w2),
    o: {}
  }, () => hasDimensions(i2) ? getStyles(i2, w2) : {});
  const [P2, q2] = createCache({
    i: (t3, n2) => equalXY(t3.D, n2.D) && equalXY(t3.M, n2.M),
    o: getZeroScrollCoordinates()
  });
  const F2 = getStaticPluginModuleInstance(xt);
  const createViewportOverflowStyleClassName = (t3, n2) => {
    const o2 = n2 ? X : Y;
    return `${o2}${capitalizeFirstLetter(t3)}`;
  };
  return ({
    zt: n2,
    Qt: o2,
    fn: l2,
    Tt: a3
  }, {
    _n: u3
  }) => {
    const {
      dt: f3,
      Ht: d3,
      xt: b3,
      $t: w3,
      ft: y3,
      Et: S3
    } = o2 || {};
    const x2 = F2 && F2.R(t2, s2, l2, e2, n2);
    const {
      X: H2,
      Y: E2,
      W: D2
    } = x2 || {};
    const [j2, X2] = getShowNativeOverlaidScrollbars(n2, e2);
    const [Y2, W2] = n2("overflow");
    const J2 = overflowIsVisible(Y2.x);
    const G2 = overflowIsVisible(Y2.y);
    const Q2 = f3 || u3 || b3 || w3 || S3 || X2;
    let tt2 = C2(a3);
    let nt2 = I2(a3);
    let ot2 = M2(a3);
    let st2 = V2(a3);
    if (X2 && g2) {
      _2(K, !j2);
    }
    if (Q2) {
      if (hasAttrClass(c2, B, N)) {
        setMeasuringMode(true);
      }
      const [t3] = E2 ? E2() : [];
      const [n3] = tt2 = $2(a3);
      const [o3] = nt2 = z2(a3);
      const s3 = A(i2);
      const e3 = v2 && getWindowSize(p2());
      const r3 = {
        w: h2(o3.w + n3.w),
        h: h2(o3.h + n3.h)
      };
      const l3 = {
        w: h2((e3 ? e3.w : s3.w + h2(s3.w - o3.w)) + n3.w),
        h: h2((e3 ? e3.h : s3.h + h2(s3.h - o3.h)) + n3.h)
      };
      if (t3) {
        t3();
      }
      st2 = R2(l3);
      ot2 = T2(getOverflowAmount(r3, l3), a3);
    }
    const [et2, ct2] = st2;
    const [rt2, it2] = ot2;
    const [lt2, at2] = nt2;
    const [ut2, ft2] = tt2;
    const [dt2, _t2] = k2({
      x: rt2.w > 0,
      y: rt2.h > 0
    });
    const pt2 = J2 && G2 && (dt2.x || dt2.y) || J2 && dt2.x && !dt2.y || G2 && dt2.y && !dt2.x;
    const gt2 = u3 || w3 || S3 || ft2 || at2 || ct2 || it2 || W2 || X2 || Q2 || d3 && v2;
    const [vt2, ht2] = U2(a3);
    const bt2 = w3 || y3 || ht2 || _t2 || a3;
    const [wt2, yt2] = bt2 ? P2(getMeasuredScrollCoordinates(vt2), a3) : q2();
    let St2 = getViewportOverflowStyle(dt2, Y2);
    setMeasuringMode(false);
    if (gt2) {
      setViewportOverflowStyle(St2);
      const {
        overflowX: t3,
        overflowY: n3
      } = getStyles(i2, [m, O]);
      St2 = {
        x: overflowCssValueToOverflowStyle(t3),
        y: overflowCssValueToOverflowStyle(n3)
      };
      if (D2 && H2) {
        setStyles(i2, D2(St2, l2, H2(St2, lt2, ut2)));
      }
    }
    const [mt2, Ot2] = L2(St2);
    addRemoveAttrClass(c2, B, N, pt2);
    addRemoveAttrClass(r2, Z, N, pt2);
    assignDeep(s2, {
      cn: mt2,
      Vt: {
        x: et2.w,
        y: et2.h
      },
      Rt: {
        x: rt2.w,
        y: rt2.h
      },
      rn: dt2,
      Dt: sanitizeScrollCoordinates(wt2, rt2)
    });
    return {
      sn: Ot2,
      tn: ct2,
      nn: it2,
      en: yt2 || it2,
      pn: bt2
    };
  };
};
var createStructureSetup = (t2) => {
  const [n2, o2, s2] = createStructureSetupElements(t2);
  const e2 = {
    ln: {
      t: 0,
      r: 0,
      b: 0,
      l: 0
    },
    dn: false,
    F: {
      [y]: 0,
      [S]: 0,
      [w]: 0,
      [g]: 0,
      [v]: 0,
      [b]: 0,
      [h]: 0
    },
    Vt: {
      x: 0,
      y: 0
    },
    Rt: {
      x: 0,
      y: 0
    },
    cn: {
      x: H,
      y: H
    },
    rn: {
      x: false,
      y: false
    },
    Dt: getZeroScrollCoordinates()
  };
  const {
    _t: c2,
    vt: r2,
    V: i2,
    St: l2
  } = n2;
  const {
    U: a2,
    k: u2
  } = getEnvironment();
  const f2 = !a2 && (u2.x || u2.y);
  const d2 = [createTrinsicUpdateSegment(n2), createPaddingUpdateSegment(n2, e2), createOverflowUpdateSegment(n2, e2)];
  return [o2, (t3) => {
    const n3 = {};
    const o3 = f2;
    const s3 = o3 && getElementScroll(r2);
    const e3 = s3 && l2();
    each(d2, (o4) => {
      assignDeep(n3, o4(t3, n3) || {});
    });
    scrollElementTo(r2, s3);
    if (e3) {
      e3();
    }
    if (!i2) {
      scrollElementTo(c2, 0);
    }
    return n3;
  }, e2, n2, s2];
};
var createSetups = (t2, n2, o2, s2, e2) => {
  let c2 = false;
  const r2 = createOptionCheck(n2, {});
  const [i2, l2, a2, u2, f2] = createStructureSetup(t2);
  const [d2, _2, p2] = createObserversSetup(u2, a2, r2, (t3) => {
    update({}, t3);
  });
  const [g2, v2, , h2] = createScrollbarsSetup(t2, n2, p2, a2, u2, e2);
  const updateHintsAreTruthy = (t3) => keys(t3).some((n3) => !!t3[n3]);
  const update = (t3, e3) => {
    if (o2()) {
      return false;
    }
    const {
      gn: r3,
      Tt: i3,
      It: a3,
      vn: u3
    } = t3;
    const f3 = r3 || {};
    const d3 = !!i3 || !c2;
    const g3 = {
      zt: createOptionCheck(n2, f3, d3),
      gn: f3,
      Tt: d3
    };
    if (u3) {
      v2(g3);
      return false;
    }
    const h3 = e3 || _2(assignDeep({}, g3, {
      It: a3
    }));
    const b2 = l2(assignDeep({}, g3, {
      fn: p2,
      Qt: h3
    }));
    v2(assignDeep({}, g3, {
      Qt: h3,
      Zt: b2
    }));
    const w2 = updateHintsAreTruthy(h3);
    const y2 = updateHintsAreTruthy(b2);
    const S2 = w2 || y2 || !isEmptyObject(f3) || d3;
    c2 = true;
    if (S2) {
      s2(t3, {
        Qt: h3,
        Zt: b2
      });
    }
    return S2;
  };
  return [() => {
    const {
      an: t3,
      vt: n3,
      St: o3
    } = u2;
    const s3 = getElementScroll(t3);
    const e3 = [d2(), i2(), g2()];
    const c3 = o3();
    scrollElementTo(n3, s3);
    c3();
    return bind(runEachAndClear, e3);
  }, update, () => ({
    hn: p2,
    bn: a2
  }), {
    wn: u2,
    yn: h2
  }, f2];
};
var Mt = /* @__PURE__ */ new WeakMap();
var addInstance = (t2, n2) => {
  Mt.set(t2, n2);
};
var removeInstance = (t2) => {
  Mt.delete(t2);
};
var getInstance = (t2) => Mt.get(t2);
var OverlayScrollbars = (t2, n2, o2) => {
  const {
    tt: s2
  } = getEnvironment();
  const e2 = isHTMLElement(t2);
  const c2 = e2 ? t2 : t2.target;
  const r2 = getInstance(c2);
  if (n2 && !r2) {
    let r3 = false;
    const i2 = [];
    const l2 = {};
    const validateOptions = (t3) => {
      const n3 = removeUndefinedProperties(t3);
      const o3 = getStaticPluginModuleInstance(R);
      return o3 ? o3(n3, true) : n3;
    };
    const a2 = assignDeep({}, s2(), validateOptions(n2));
    const [u2, f2, d2] = createEventListenerHub();
    const [_2, p2, g2] = createEventListenerHub(o2);
    const triggerEvent = (t3, n3) => {
      g2(t3, n3);
      d2(t3, n3);
    };
    const [v2, h2, b2, w2, y2] = createSetups(t2, a2, () => r3, ({
      gn: t3,
      Tt: n3
    }, {
      Qt: o3,
      Zt: s3
    }) => {
      const {
        dt: e3,
        $t: c3,
        Ct: r4,
        xt: i3,
        Ht: l3,
        ft: a3
      } = o3;
      const {
        tn: u3,
        nn: f3,
        sn: d3,
        en: _3
      } = s3;
      triggerEvent("updated", [S2, {
        updateHints: {
          sizeChanged: !!e3,
          directionChanged: !!c3,
          heightIntrinsicChanged: !!r4,
          overflowEdgeChanged: !!u3,
          overflowAmountChanged: !!f3,
          overflowStyleChanged: !!d3,
          scrollCoordinatesChanged: !!_3,
          contentMutation: !!i3,
          hostMutation: !!l3,
          appear: !!a3
        },
        changedOptions: t3 || {},
        force: !!n3
      }]);
    }, (t3) => triggerEvent("scroll", [S2, t3]));
    const destroy = (t3) => {
      removeInstance(c2);
      runEachAndClear(i2);
      r3 = true;
      triggerEvent("destroyed", [S2, t3]);
      f2();
      p2();
    };
    const S2 = {
      options(t3, n3) {
        if (t3) {
          const o3 = n3 ? s2() : {};
          const e3 = getOptionsDiff(a2, assignDeep(o3, validateOptions(t3)));
          if (!isEmptyObject(e3)) {
            assignDeep(a2, e3);
            h2({
              gn: e3
            });
          }
        }
        return assignDeep({}, a2);
      },
      on: _2,
      off: (t3, n3) => {
        if (t3 && n3) {
          p2(t3, n3);
        }
      },
      state() {
        const {
          hn: t3,
          bn: n3
        } = b2();
        const {
          B: o3
        } = t3;
        const {
          Vt: s3,
          Rt: e3,
          cn: c3,
          rn: i3,
          ln: l3,
          dn: a3,
          Dt: u3
        } = n3;
        return assignDeep({}, {
          overflowEdge: s3,
          overflowAmount: e3,
          overflowStyle: c3,
          hasOverflow: i3,
          scrollCoordinates: {
            start: u3.D,
            end: u3.M
          },
          padding: l3,
          paddingAbsolute: a3,
          directionRTL: o3,
          destroyed: r3
        });
      },
      elements() {
        const {
          _t: t3,
          gt: n3,
          ln: o3,
          L: s3,
          ht: e3,
          vt: c3,
          Kt: r4
        } = w2.wn;
        const {
          jt: i3,
          Jt: l3
        } = w2.yn;
        const translateScrollbarStructure = (t4) => {
          const {
            Mt: n4,
            Ut: o4,
            Lt: s4
          } = t4;
          return {
            scrollbar: s4,
            track: o4,
            handle: n4
          };
        };
        const translateScrollbarsSetupElement = (t4) => {
          const {
            Xt: n4,
            Yt: o4
          } = t4;
          const s4 = translateScrollbarStructure(n4[0]);
          return assignDeep({}, s4, {
            clone: () => {
              const t5 = translateScrollbarStructure(o4());
              h2({
                vn: true
              });
              return t5;
            }
          });
        };
        return assignDeep({}, {
          target: t3,
          host: n3,
          padding: o3 || s3,
          viewport: s3,
          content: e3 || s3,
          scrollOffsetElement: c3,
          scrollEventElement: r4,
          scrollbarHorizontal: translateScrollbarsSetupElement(i3),
          scrollbarVertical: translateScrollbarsSetupElement(l3)
        });
      },
      update: (t3) => h2({
        Tt: t3,
        It: true
      }),
      destroy: bind(destroy, false),
      plugin: (t3) => l2[keys(t3)[0]]
    };
    push(i2, [y2]);
    addInstance(c2, S2);
    registerPluginModuleInstances(M, OverlayScrollbars, [S2, u2, l2]);
    if (cancelInitialization(w2.wn.bt, !e2 && t2.cancel)) {
      destroy(true);
      return S2;
    }
    push(i2, v2());
    triggerEvent("initialized", [S2]);
    S2.update();
    return S2;
  }
  return r2;
};
OverlayScrollbars.plugin = (t2) => {
  const n2 = isArray(t2);
  const o2 = n2 ? t2 : [t2];
  const s2 = o2.map((t3) => registerPluginModuleInstances(t3, OverlayScrollbars)[0]);
  addPlugins(o2);
  return n2 ? s2 : s2[0];
};
OverlayScrollbars.valid = (t2) => {
  const n2 = t2 && t2.elements;
  const o2 = isFunction(n2) && n2();
  return isPlainObject(o2) && !!getInstance(o2.target);
};
OverlayScrollbars.env = () => {
  const {
    P: t2,
    k: n2,
    U: o2,
    J: s2,
    ot: e2,
    st: c2,
    K: r2,
    Z: i2,
    tt: l2,
    nt: a2
  } = getEnvironment();
  return assignDeep({}, {
    scrollbarsSize: t2,
    scrollbarsOverlaid: n2,
    scrollbarsHiding: o2,
    scrollTimeline: s2,
    staticDefaultInitialization: e2,
    staticDefaultOptions: c2,
    getDefaultInitialization: r2,
    setDefaultInitialization: i2,
    getDefaultOptions: l2,
    setDefaultOptions: a2
  });
};
OverlayScrollbars.nonce = setNonce;
OverlayScrollbars.trustedTypePolicy = setTrustedTypePolicy;

// node_modules/overlayscrollbars-ngx/fesm2020/overlayscrollbars-ngx.mjs
var _c0 = ["content"];
var _c1 = ["*"];
var createDefer = () => {
  if (typeof window === "undefined") {
    const noop2 = () => {
    };
    return [noop2, noop2];
  }
  let idleId;
  let rafId;
  const wnd = window;
  const idleSupported = typeof wnd.requestIdleCallback === "function";
  const rAF = wnd.requestAnimationFrame;
  const cAF = wnd.cancelAnimationFrame;
  const rIdle = idleSupported ? wnd.requestIdleCallback : rAF;
  const cIdle = idleSupported ? wnd.cancelIdleCallback : cAF;
  const clear = () => {
    cIdle(idleId);
    cAF(rafId);
  };
  return [(callback, options) => {
    clear();
    idleId = rIdle(
      idleSupported ? () => {
        clear();
        rafId = rAF(callback);
      } : callback,
      // @ts-ignore
      typeof options === "object" ? options : {
        timeout: 2233
      }
    );
  }, clear];
};
var OverlayScrollbarsDirective = class {
  constructor(ngZone) {
    this.ngZone = ngZone;
    this.instanceRef = null;
    const [requestDefer, cancelDefer] = createDefer();
    this.requestDefer = requestDefer;
    this.cancelDefer = cancelDefer;
  }
  osInitialize(target) {
    this.ngZone.runOutsideAngular(() => {
      const init = () => {
        this.instanceRef = OverlayScrollbars(
          target,
          this.options || {},
          /* istanbul ignore next */
          this.events || {}
        );
      };
      if (this.defer) {
        this.requestDefer(init, this.defer);
      } else {
        init();
      }
    });
  }
  osInstance() {
    return this.instanceRef;
  }
  ngOnChanges(changes) {
    const optionsChange = changes.options;
    const eventsChange = changes.events;
    if (optionsChange) {
      const curr = optionsChange.currentValue;
      this.options = curr;
      if (OverlayScrollbars.valid(this.instanceRef)) {
        this.instanceRef.options(curr || {}, true);
      }
    }
    if (eventsChange) {
      const curr = eventsChange.currentValue;
      this.events = curr;
      if (OverlayScrollbars.valid(this.instanceRef)) {
        this.instanceRef.on(
          /* istanbul ignore next */
          curr || {},
          true
        );
      }
    }
  }
  ngOnDestroy() {
    this.cancelDefer();
  }
};
OverlayScrollbarsDirective.ɵfac = function OverlayScrollbarsDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || OverlayScrollbarsDirective)(ɵɵdirectiveInject(NgZone));
};
OverlayScrollbarsDirective.ɵdir = ɵɵdefineDirective({
  type: OverlayScrollbarsDirective,
  selectors: [["", "overlayScrollbars", ""]],
  inputs: {
    options: "options",
    events: "events",
    defer: "defer"
  },
  standalone: false,
  features: [ɵɵNgOnChangesFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OverlayScrollbarsDirective, [{
    type: Directive,
    args: [{
      selector: "[overlayScrollbars]"
      // https://angular.io/guide/styleguide#directive-selectors
    }]
  }], function() {
    return [{
      type: NgZone
    }];
  }, {
    options: [{
      type: Input,
      args: ["options"]
    }],
    events: [{
      type: Input,
      args: ["events"]
    }],
    defer: [{
      type: Input,
      args: ["defer"]
    }]
  });
})();
var mergeEventListeners = (emits, events) => Object.keys(emits).reduce((obj, name) => {
  const emitListener = emits[name];
  const eventListener = events[name];
  obj[name] = [emitListener, ...(Array.isArray(eventListener) ? eventListener : [eventListener]).filter(Boolean)];
  return obj;
}, {});
var OverlayScrollbarsComponent = class {
  constructor(ngZone, targetRef) {
    this.ngZone = ngZone;
    this.targetRef = targetRef;
    this.onInitialized = new EventEmitter();
    this.onUpdated = new EventEmitter();
    this.onDestroyed = new EventEmitter();
    this.onScroll = new EventEmitter();
  }
  osInstance() {
    return this.osDirective.osInstance();
  }
  getElement() {
    return this.targetRef.nativeElement;
  }
  ngAfterViewInit() {
    const targetElm = this.getElement();
    const contentElm = this.contentRef.nativeElement;
    if (targetElm && contentElm) {
      this.osDirective.osInitialize({
        target: targetElm,
        elements: {
          viewport: contentElm,
          content: contentElm
        }
      });
    }
  }
  ngOnDestroy() {
    this.osDirective?.osInstance()?.destroy();
  }
  mergeEvents(originalEvents) {
    return mergeEventListeners({
      initialized: (...args) => this.dispatchEventIfHasObservers(this.onInitialized, args),
      updated: (...args) => this.dispatchEventIfHasObservers(this.onUpdated, args),
      destroyed: (...args) => this.dispatchEventIfHasObservers(this.onDestroyed, args),
      scroll: (...args) => this.dispatchEventIfHasObservers(this.onScroll, args)
    }, originalEvents || {});
  }
  dispatchEventIfHasObservers(eventEmitter, args) {
    if (eventEmitter.observed || eventEmitter.observers.length > 0) {
      this.ngZone.run(() => eventEmitter.emit(args));
    }
  }
};
OverlayScrollbarsComponent.ɵfac = function OverlayScrollbarsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || OverlayScrollbarsComponent)(ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ElementRef));
};
OverlayScrollbarsComponent.ɵcmp = ɵɵdefineComponent({
  type: OverlayScrollbarsComponent,
  selectors: [["overlay-scrollbars"], ["", "overlay-scrollbars", ""]],
  viewQuery: function OverlayScrollbarsComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c0, 5);
      ɵɵviewQuery(_c0, 5, OverlayScrollbarsDirective);
    }
    if (rf & 2) {
      let _t2;
      ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx.contentRef = _t2.first);
      ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx.osDirective = _t2.first);
    }
  },
  hostAttrs: ["data-overlayscrollbars-initialize", ""],
  inputs: {
    options: "options",
    events: "events",
    defer: "defer"
  },
  outputs: {
    onInitialized: "osInitialized",
    onUpdated: "osUpdated",
    onDestroyed: "osDestroyed",
    onScroll: "osScroll"
  },
  standalone: false,
  ngContentSelectors: _c1,
  decls: 3,
  vars: 3,
  consts: [["content", ""], ["overlayScrollbars", "", "data-overlayscrollbars-contents", "", 3, "options", "events", "defer"]],
  template: function OverlayScrollbarsComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "div", 1, 0);
      ɵɵprojection(2);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵproperty("options", ctx.options)("events", ctx.mergeEvents(ctx.events))("defer", ctx.defer);
    }
  },
  dependencies: [OverlayScrollbarsDirective],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OverlayScrollbarsComponent, [{
    type: Component,
    args: [{
      selector: "overlay-scrollbars, [overlay-scrollbars]",
      host: {
        "data-overlayscrollbars-initialize": ""
      },
      template: `
    <div
      overlayScrollbars
      data-overlayscrollbars-contents=""
      [options]="options"
      [events]="mergeEvents(events)"
      [defer]="defer"
      #content
    >
      <ng-content></ng-content>
    </div>
  `
    }]
  }], function() {
    return [{
      type: NgZone
    }, {
      type: ElementRef
    }];
  }, {
    options: [{
      type: Input,
      args: ["options"]
    }],
    events: [{
      type: Input,
      args: ["events"]
    }],
    defer: [{
      type: Input,
      args: ["defer"]
    }],
    onInitialized: [{
      type: Output,
      args: ["osInitialized"]
    }],
    onUpdated: [{
      type: Output,
      args: ["osUpdated"]
    }],
    onDestroyed: [{
      type: Output,
      args: ["osDestroyed"]
    }],
    onScroll: [{
      type: Output,
      args: ["osScroll"]
    }],
    contentRef: [{
      type: ViewChild,
      args: ["content"]
    }],
    osDirective: [{
      type: ViewChild,
      args: ["content", {
        read: OverlayScrollbarsDirective
      }]
    }]
  });
})();
var OverlayscrollbarsModule = class {
};
OverlayscrollbarsModule.ɵfac = function OverlayscrollbarsModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || OverlayscrollbarsModule)();
};
OverlayscrollbarsModule.ɵmod = ɵɵdefineNgModule({
  type: OverlayscrollbarsModule,
  declarations: [OverlayScrollbarsComponent, OverlayScrollbarsDirective],
  exports: [OverlayScrollbarsComponent, OverlayScrollbarsDirective]
});
OverlayscrollbarsModule.ɵinj = ɵɵdefineInjector({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OverlayscrollbarsModule, [{
    type: NgModule,
    args: [{
      declarations: [OverlayScrollbarsComponent, OverlayScrollbarsDirective],
      exports: [OverlayScrollbarsComponent, OverlayScrollbarsDirective]
    }]
  }], null, null);
})();
export {
  OverlayScrollbarsComponent,
  OverlayScrollbarsDirective,
  OverlayscrollbarsModule
};
/*! Bundled license information:

overlayscrollbars/overlayscrollbars.mjs:
  (*!
   * OverlayScrollbars
   * Version: 2.11.2
   *
   * Copyright (c) Rene Haas | KingSora.
   * https://github.com/KingSora
   *
   * Released under the MIT license.
   *)
*/
//# sourceMappingURL=overlayscrollbars-ngx.js.map
