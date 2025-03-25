"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _material = require("@mui/material");
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function Form() {
  var _useState = (0, _react.useState)({
      nom: '',
      prenom: '',
      email: '',
      dateNaissance: '',
      ville: '',
      codePostal: ''
    }),
    _useState2 = _slicedToArray(_useState, 2),
    formData = _useState2[0],
    setFormData = _useState2[1];
  var _useState3 = (0, _react.useState)({}),
    _useState4 = _slicedToArray(_useState3, 2),
    errors = _useState4[0],
    setErrors = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isFormValid = _useState6[0],
    setIsFormValid = _useState6[1];
  var _useState7 = (0, _react.useState)(''),
    _useState8 = _slicedToArray(_useState7, 2),
    successMessage = _useState8[0],
    setSuccessMessage = _useState8[1];
  var handleChange = function handleChange(e) {
    var _e$target = e.target,
      name = _e$target.name,
      value = _e$target.value;
    setFormData(_objectSpread(_objectSpread({}, formData), {}, _defineProperty({}, name, value)));
  };
  var validate = (0, _react.useCallback)(function () {
    var tempErrors = {};
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var codePostalRegex = /^[0-9]{5}$/;
    var nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/;
    var today = new Date();
    var birthDate = new Date(formData.dateNaissance);
    var age = today.getFullYear() - birthDate.getFullYear();
    if (!formData.nom) tempErrors.nom = "Nom est requis";else if (!nameRegex.test(formData.nom)) tempErrors.nom = "Nom invalide";
    if (!formData.prenom) tempErrors.prenom = "Prénom est requis";else if (!nameRegex.test(formData.prenom)) tempErrors.prenom = "Prénom invalide";
    if (!emailRegex.test(formData.email)) tempErrors.email = "Email invalide";
    if (age < 18) tempErrors.dateNaissance = "Vous devez avoir au moins 18 ans";
    if (!codePostalRegex.test(formData.codePostal)) tempErrors.codePostal = "Code postal invalide";
    if (!formData.ville) tempErrors.ville = "Ville invalide";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  }, [formData]);
  (0, _react.useEffect)(function () {
    setIsFormValid(validate());
  }, [formData, validate]);
  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    if (validate()) {
      localStorage.setItem('formData', JSON.stringify(formData));
      setSuccessMessage('Formulaire soumis avec succès');
      setFormData({
        nom: '',
        prenom: '',
        email: '',
        dateNaissance: '',
        ville: '',
        codePostal: ''
      });
    }
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
    component: "form",
    sx: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    },
    onSubmit: handleSubmit,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.TextField, {
      label: "Nom",
      variant: "outlined",
      name: "nom",
      value: formData.nom,
      onChange: handleChange,
      error: !!errors.nom,
      helperText: errors.nom
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.TextField, {
      label: "Prenom",
      variant: "outlined",
      name: "prenom",
      value: formData.prenom,
      onChange: handleChange,
      error: !!errors.prenom,
      helperText: errors.prenom
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.TextField, {
      label: "Email",
      variant: "outlined",
      type: "email",
      name: "email",
      value: formData.email,
      onChange: handleChange,
      error: !!errors.email,
      helperText: errors.email
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.TextField, {
      label: "Date de naissance",
      variant: "outlined",
      type: "date",
      name: "dateNaissance",
      value: formData.dateNaissance,
      onChange: handleChange,
      slotProps: {
        inputLabel: {
          shrink: true
        }
      },
      error: !!errors.dateNaissance,
      helperText: errors.dateNaissance
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.TextField, {
      label: "Ville",
      variant: "outlined",
      name: "ville",
      value: formData.ville,
      onChange: handleChange,
      error: !!errors.ville,
      helperText: errors.ville
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.TextField, {
      label: "Code postal",
      variant: "outlined",
      name: "codePostal",
      value: formData.codePostal,
      onChange: handleChange,
      error: !!errors.codePostal,
      helperText: errors.codePostal
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Button, {
      variant: "contained",
      color: "primary",
      type: "submit",
      disabled: !isFormValid,
      children: "Envoyer"
    }), successMessage && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Typography, {
      color: "success",
      children: successMessage
    })]
  });
}
var _default = exports["default"] = Form;