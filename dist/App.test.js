"use strict";

var _react = require("@testing-library/react");
var _App = _interopRequireDefault(require("./App"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
test('renders form title', function () {
  (0, _react.render)(/*#__PURE__*/(0, _jsxRuntime.jsx)(_App["default"], {}));
  expect(_react.screen.getByText(/formulaire/i)).toBeInTheDocument();
});
test('calculates age correctly', function () {
  (0, _react.render)(/*#__PURE__*/(0, _jsxRuntime.jsx)(_App["default"], {}));
  var birthDate = new Date();
  birthDate.setFullYear(birthDate.getFullYear() - 20);
  var dateInput = _react.screen.getByLabelText(/date de naissance/i);
  _react.fireEvent.change(dateInput, {
    target: {
      value: birthDate.toISOString().split('T')[0]
    }
  });
  expect(dateInput.value).toBe(birthDate.toISOString().split('T')[0]);
});
test('validates age > 18', function () {
  (0, _react.render)(/*#__PURE__*/(0, _jsxRuntime.jsx)(_App["default"], {}));
  var dateInput = _react.screen.getByLabelText(/date de naissance/i);
  _react.fireEvent.change(dateInput, {
    target: {
      value: '2010-01-01'
    }
  });
  _react.fireEvent.click(_react.screen.getByText(/envoyer/i));
  expect(_react.screen.getByText(/vous devez avoir au moins 18 ans/i)).toBeInTheDocument();
});
test('validates postal code format', function () {
  (0, _react.render)(/*#__PURE__*/(0, _jsxRuntime.jsx)(_App["default"], {}));
  var postalCodeInput = _react.screen.getByLabelText(/code postal/i);
  _react.fireEvent.change(postalCodeInput, {
    target: {
      value: '123'
    }
  });
  _react.fireEvent.click(_react.screen.getByText(/envoyer/i));
  expect(_react.screen.getByText(/code postal invalide/i)).toBeInTheDocument();
});
test('validates name, surname, and city format', function () {
  (0, _react.render)(/*#__PURE__*/(0, _jsxRuntime.jsx)(_App["default"], {}));
  var nameInput = _react.screen.getByLabelText('Nom', {
    exact: true
  });
  _react.fireEvent.change(nameInput, {
    target: {
      value: ''
    }
  });
  _react.fireEvent.click(_react.screen.getByText(/envoyer/i));
  expect(_react.screen.getByText('Nom est requis', {
    exact: true
  })).toBeInTheDocument();
  var surnameInput = _react.screen.getByLabelText(/prenom/i);
  _react.fireEvent.change(surnameInput, {
    target: {
      value: ''
    }
  });
  _react.fireEvent.click(_react.screen.getByText(/envoyer/i));
  expect(_react.screen.getByText('Prénom est requis', {
    exact: true
  })).toBeInTheDocument();
  var cityInput = _react.screen.getByLabelText(/ville/i);
  _react.fireEvent.change(cityInput, {
    target: {
      value: ''
    }
  });
  _react.fireEvent.click(_react.screen.getByText(/envoyer/i));
  expect(_react.screen.getByText(/Ville invalide/i)).toBeInTheDocument();
});
test('validates email format', function () {
  (0, _react.render)(/*#__PURE__*/(0, _jsxRuntime.jsx)(_App["default"], {}));
  var emailInput = _react.screen.getByLabelText(/email/i);
  _react.fireEvent.change(emailInput, {
    target: {
      value: 'invalid-email'
    }
  });
  _react.fireEvent.click(_react.screen.getByText(/envoyer/i));
  expect(_react.screen.getByText(/email invalide/i)).toBeInTheDocument();
});
test('disables submit button if fields are not filled', function () {
  (0, _react.render)(/*#__PURE__*/(0, _jsxRuntime.jsx)(_App["default"], {}));
  var submitButton = _react.screen.getByText(/envoyer/i);
  expect(submitButton).toBeDisabled();
});
test('shows success toaster and clears fields on successful submission', function () {
  (0, _react.render)(/*#__PURE__*/(0, _jsxRuntime.jsx)(_App["default"], {}));
  _react.fireEvent.change(_react.screen.getByLabelText('Nom', {
    exact: true
  }), {
    target: {
      value: 'Doe'
    }
  });
  _react.fireEvent.change(_react.screen.getByLabelText('Prenom', {
    exact: true
  }), {
    target: {
      value: 'John'
    }
  });
  _react.fireEvent.change(_react.screen.getByLabelText(/email/i), {
    target: {
      value: 'john.doe@example.com'
    }
  });
  _react.fireEvent.change(_react.screen.getByLabelText(/date de naissance/i), {
    target: {
      value: '2000-01-01'
    }
  });
  _react.fireEvent.change(_react.screen.getByLabelText(/ville/i), {
    target: {
      value: 'Paris'
    }
  });
  _react.fireEvent.change(_react.screen.getByLabelText(/code postal/i), {
    target: {
      value: '75000'
    }
  });
  _react.fireEvent.click(_react.screen.getByText(/envoyer/i));
  expect(_react.screen.getByText(/formulaire soumis avec succès/i)).toBeInTheDocument();
  expect(_react.screen.getByLabelText('Nom', {
    exact: true
  }).value).toBe('');
  expect(_react.screen.getByLabelText(/prenom/i).value).toBe('');
  expect(_react.screen.getByLabelText(/email/i).value).toBe('');
  expect(_react.screen.getByLabelText(/date de naissance/i).value).toBe('');
  expect(_react.screen.getByLabelText(/ville/i).value).toBe('');
  expect(_react.screen.getByLabelText(/code postal/i).value).toBe('');
});
test('shows corresponding errors in red', function () {
  (0, _react.render)(/*#__PURE__*/(0, _jsxRuntime.jsx)(_App["default"], {}));
  _react.fireEvent.change(_react.screen.getByLabelText('Nom', {
    exact: true
  }), {
    target: {
      value: ''
    }
  });
  _react.fireEvent.change(_react.screen.getByLabelText('Prenom', {
    exact: true
  }), {
    target: {
      value: ''
    }
  });
  _react.fireEvent.change(_react.screen.getByLabelText('Email', {
    exact: true
  }), {
    target: {
      value: ''
    }
  });
  _react.fireEvent.change(_react.screen.getByLabelText('Date de naissance', {
    exact: true
  }), {
    target: {
      value: ''
    }
  });
  _react.fireEvent.change(_react.screen.getByLabelText('Code postal', {
    exact: true
  }), {
    target: {
      value: ''
    }
  });
  _react.fireEvent.click(_react.screen.getByText(/envoyer/i));
  expect(_react.screen.getByText('Nom est requis', {
    exact: true
  })).toBeInTheDocument();
  expect(_react.screen.getByText('Prénom est requis', {
    exact: true
  })).toBeInTheDocument();
  expect(_react.screen.getByText('Email invalide', {
    exact: true
  })).toBeInTheDocument();
  expect(_react.screen.getByText('Code postal invalide', {
    exact: true
  })).toBeInTheDocument();
});