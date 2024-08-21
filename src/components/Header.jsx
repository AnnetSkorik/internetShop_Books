// С отправкой формы только на LocalStorage

// import React, { useState } from 'react';
// import { FaShoppingCart } from "react-icons/fa";
// import Order from './Order';
// import { NavLink } from 'react-router-dom';
// import classes from '../../src/index.css';

// const Header = ({ orders, onDelete, showPresentation = true }) => {
//   const [cartOpen, setCartOpen] = useState(false);
//   const [formVisible, setFormVisible] = useState(false);
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: ''
//   });
//   const [emailHint, setEmailHint] = useState(''); // Подсказка для email
//   const [countryCode, setCountryCode] = useState('+1'); // Код страны по умолчанию

//   const countryCodes = [
//     { code: '+1', name: 'США/Канада' },
//     { code: '+7', name: 'Россия' },
//     { code: '+44', name: 'Великобритания' },
//     { code: '+49', name: 'Германия' },
//     { code: '+380', name: 'Украина' },
//     // Добавьте другие коды стран по необходимости
//   ];

//   const saveOrdersToLocalStorage = () => {
//     const orderData = {
//       orders: orders,
//       formData: formData
//     };
//     localStorage.setItem('orderData', JSON.stringify(orderData));
//     setFormVisible(true);  // Показать форму после сохранения заказа
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevData => ({ ...prevData, [name]: value }));
//   };

//   const handlePhoneInput = (e) => {
//     const { value } = e.target;
//     const filteredValue = value.replace(/\D/g, ''); // Убираем все нецифровые символы
//     setFormData(prevData => ({ ...prevData, phone: filteredValue }));
//   };

//   const handlePhoneKeyPress = (e) => {
//     if (!/[0-9]/.test(e.key)) {
//       e.preventDefault(); // Запрещаем ввод любых символов, кроме цифр
//     }
//   };

//   const handleEmailInput = (e) => {
//     const { value } = e.target;
//     const englishChars = /^[a-zA-Z0-9@._-]*$/; // Разрешаем английские буквы, цифры и некоторые символы

//     if (!englishChars.test(value)) {
//       setEmailHint('Смените язык на английский'); // Показываем подсказку
//     } else {
//       setEmailHint(''); // Убираем подсказку, если все в порядке
//     }

//     setFormData(prevData => ({ ...prevData, email: value }));
//   };

//   const handleCountryCodeChange = (e) => {
//     setCountryCode(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const orderData = {
//       orders: orders,
//       formData: {
//         ...formData,
//         phone: `${countryCode}${formData.phone}` // Добавляем код страны к номеру телефона
//       }
//     };
//     localStorage.setItem('orderData', JSON.stringify(orderData));

//     console.log("Данные формы и заказа:", orderData);
//     alert("Форма успешно отправлена!");

//     setFormVisible(false);  // Закрыть форму после отправки
//   };

//   const showOrders = () => {
//     const totalAmount = orders.reduce((sum, order) => 
//       sum + Number(order.price) * (order.quantity || 1), 0
//     );

//     return (
//       <div className={classes}>
//         {orders.map(order => (
//           <Order onDelete={onDelete} key={order.id} item={order} />
//         ))}
//         <div className="order-summary">
//           <p className='summa'>
//             Загальна сума: {new Intl.NumberFormat().format(totalAmount)}$
//           </p>
//           <button className="fill-form-btn" onClick={saveOrdersToLocalStorage}>
//             Заполнить форму
//           </button>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <header className="header">
//       <div>
//         <span className="logo">AnnaSkorik <br />Poetry</span>
//         <ul className="nav">
//           <li>
//             <NavLink to="/">Головна</NavLink>
//           </li>
//           <li>
//             <NavLink to="/about">Про автора</NavLink>
//           </li>
//           <li>
//             <NavLink to="/contacts">Контакти</NavLink>
//           </li>
//         </ul>

//         <FaShoppingCart onClick={() => setCartOpen(!cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`} />

//         {cartOpen && (
//           <div className="shop-cart">
//             <div className="close-btn" onClick={() => setCartOpen(false)}>
//               X
//             </div>

//             {orders.length > 0 ? showOrders() : 
//               <div className='empty'>
//                 <h2>Корзина порожня</h2>
//               </div>}
//           </div>
//         )}

//         {formVisible && (
//           <form className="order-form" onSubmit={handleSubmit}>
//             <h3>Заполните форму для завершения заказа</h3>
//             <input
//               type="text"
//               name="firstName"
//               placeholder="Имя"
//               value={formData.firstName}
//               onChange={handleInputChange}
//               required
//             />
//             <input
//               type="text"
//               name="lastName"
//               placeholder="Фамилия"
//               value={formData.lastName}
//               onChange={handleInputChange}
//               required
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               value={formData.email}
//               onChange={handleEmailInput}
//               required
//             />
//             {emailHint && <small className="email-hint">{emailHint}</small>}
//             <div className="phone-input">
//               <select value={countryCode} onChange={handleCountryCodeChange}>
//                 {countryCodes.map((country) => (
//                   <option key={country.code} value={country.code}>
//                     {country.name} ({country.code})
//                   </option>
//                 ))}
//               </select>
//               <input
//                 type="tel"
//                 name="phone"
//                 placeholder="Контактный телефон"
//                 value={formData.phone}
//                 onChange={handlePhoneInput}
//                 onKeyPress={handlePhoneKeyPress}
//                 required
//               />
//             </div>
//             <button type="submit" className="submit-btn">Отправить</button>
//           </form>
//         )}
//       </div>
//       <div className="presentation"></div>
//     </header>
//   );
// };

// export default Header;

// import React, { useState } from 'react';
// import { FaShoppingCart } from "react-icons/fa";
// import Order from './Order';
// import { NavLink } from 'react-router-dom';
// import classes from '../../src/index.css';

// const Header = ({ orders, onDelete, showPresentation = true }) => {
//   const [cartOpen, setCartOpen] = useState(false);
//   const [formVisible, setFormVisible] = useState(false);
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: ''
//   });
//   const [emailHint, setEmailHint] = useState(''); // Подсказка для email
//   const [countryCode, setCountryCode] = useState('+1'); // Код страны по умолчанию

//   const countryCodes = [
//     { code: '+1', name: 'США/Канада' },
//     { code: '+7', name: 'Россия' },
//     { code: '+44', name: 'Великобритания' },
//     { code: '+49', name: 'Германия' },
//     { code: '+380', name: 'Украина' },
//     // Добавьте другие коды стран по необходимости
//   ];

//   const saveOrdersToLocalStorage = () => {
//     const orderData = {
//       orders: orders,
//       formData: formData
//     };
//     localStorage.setItem('orderData', JSON.stringify(orderData));
//     setFormVisible(true);  // Показать форму после сохранения заказа
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevData => ({ ...prevData, [name]: value }));
//   };

//   const handlePhoneInput = (e) => {
//     const { value } = e.target;
//     const filteredValue = value.replace(/\D/g, ''); // Убираем все нецифровые символы
//     setFormData(prevData => ({ ...prevData, phone: filteredValue }));
//   };

//   const handlePhoneKeyPress = (e) => {
//     if (!/[0-9]/.test(e.key)) {
//       e.preventDefault(); // Запрещаем ввод любых символов, кроме цифр
//     }
//   };

//   const handleEmailInput = (e) => {
//     const { value } = e.target;
//     const englishChars = /^[a-zA-Z0-9@._-]*$/; // Разрешаем английские буквы, цифры и некоторые символы

//     if (!englishChars.test(value)) {
//       setEmailHint('Смените язык на английский'); // Показываем подсказку
//     } else {
//       setEmailHint(''); // Убираем подсказку, если все в порядке
//     }

//     setFormData(prevData => ({ ...prevData, email: value }));
//   };

//   const handleCountryCodeChange = (e) => {
//     setCountryCode(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const orderData = {
//       orders: orders,
//       formData: {
//         ...formData,
//         phone: `${countryCode}${formData.phone}` // Добавляем код страны к номеру телефона
//       }
//     };
//     localStorage.setItem('orderData', JSON.stringify(orderData));

//     console.log("Данные формы и заказа:", orderData);
//     alert("Форма успешно отправлена!");

//     setFormVisible(false);  // Закрыть форму после отправки
//   };

//   const showOrders = () => {
//     const totalAmount = orders.reduce((sum, order) => 
//       sum + Number(order.price) * (order.quantity || 1), 0
//     );

//     return (
//       <div className={classes}>
//         {orders.map(order => (
//           <Order onDelete={onDelete} key={order.id} item={order} />
//         ))}
//         <div className="order-summary">
//           <p className='summa'>
//             Загальна сума: {new Intl.NumberFormat().format(totalAmount)}$
//           </p>
//           <button className="fill-form-btn" onClick={saveOrdersToLocalStorage}>
//             Заполнить форму
//           </button>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <header className="header">
//       <div>
//         <span className="logo">AnnaSkorik <br />Poetry</span>
//         <ul className="nav">
//           <li>
//             <NavLink to="/">Головна</NavLink>
//           </li>
//           <li>
//             <NavLink to="/about">Про автора</NavLink>
//           </li>
//           <li>
//             <NavLink to="/contacts">Контакти</NavLink>
//           </li>
//         </ul>

//         <FaShoppingCart onClick={() => setCartOpen(!cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`} />

//         {cartOpen && (
//           <div className="shop-cart">
//             <div className="close-btn" onClick={() => setCartOpen(false)}>
//               X
//             </div>

//             {orders.length > 0 ? showOrders() : 
//               <div className='empty'>
//                 <h2>Корзина порожня</h2>
//               </div>}
//           </div>
//         )}

//         {formVisible && (
//           <form className="order-form" onSubmit={handleSubmit}>
//             <div className="close-form-btn" onClick={() => setFormVisible(false)}> {/* Добавляем крестик для закрытия */}
//               &times;
//             </div>
//             <h3>Заполните форму для завершения заказа</h3>
//             <input
//               type="text"
//               name="firstName"
//               placeholder="Имя"
//               value={formData.firstName}
//               onChange={handleInputChange}
//               required
//             />
//             <input
//               type="text"
//               name="lastName"
//               placeholder="Фамилия"
//               value={formData.lastName}
//               onChange={handleInputChange}
//               required
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               value={formData.email}
//               onChange={handleEmailInput}
//               required
//             />
//             {emailHint && <small className="email-hint">{emailHint}</small>}
//             <div className="phone-input">
//               <select value={countryCode} onChange={handleCountryCodeChange}>
//                 {countryCodes.map((country) => (
//                   <option key={country.code} value={country.code}>
//                     {country.name} ({country.code})
//                   </option>
//                 ))}
//               </select>
//               <input
//                 type="tel"
//                 name="phone"
//                 placeholder="Контактный телефон"
//                 value={formData.phone}
//                 onChange={handlePhoneInput}
//                 onKeyPress={handlePhoneKeyPress}
//                 required
//               />
//             </div>
//             <button type="submit" className="submit-btn">Отправить</button>
//           </form>
//         )}
//       </div>
//       <div className="presentation"></div>
//     </header>
//   );
// };

// export default Header;


// С отправкой формы на WhatsApp и LocalStorage

import React, { useState } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import Order from './Order';
import { NavLink } from 'react-router-dom';
import classes from '../../src/index.css';

const Header = ({ orders, onDelete, showPresentation = true }) => {
  const [cartOpen, setCartOpen] = useState(false);
  const [formVisible, setFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });
  const [emailHint, setEmailHint] = useState(''); // Подсказка для email
  const [countryCode, setCountryCode] = useState('+1'); // Код страны по умолчанию

  const countryCodes = [
    { code: '+1', name: 'США/Канада' },
    { code: '+44', name: 'Великобританiя' },
    { code: '+49', name: 'Нiмеччина' },
    { code: '+972', name: 'Iзраiль' },
    { code: '+380', name: 'Україна' },
    // Добавьте другие коды стран по необходимости
  ];

  const saveOrdersToLocalStorage = () => {
    const orderData = {
      orders: orders,
      formData: formData
    };
    localStorage.setItem('orderData', JSON.stringify(orderData));
    setFormVisible(true);  // Показать форму после сохранения заказа
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handlePhoneInput = (e) => {
    const { value } = e.target;
    const filteredValue = value.replace(/\D/g, ''); // Убираем все нецифровые символы
    setFormData(prevData => ({ ...prevData, phone: filteredValue }));
  };

  const handlePhoneKeyPress = (e) => {
    if (!/[0-9]/.test(e.key)) {
      e.preventDefault(); // Запрещаем ввод любых символов, кроме цифр
    }
  };

  const handleEmailInput = (e) => {
    const { value } = e.target;
    const englishChars = /^[a-zA-Z0-9@._-]*$/; // Разрешаем английские буквы, цифры и некоторые символы

    if (!englishChars.test(value)) {
      setEmailHint('Вибирiть англiйську мову'); // Показываем подсказку
    } else {
      setEmailHint(''); // Убираем подсказку, если все в порядке
    }

    setFormData(prevData => ({ ...prevData, email: value }));
  };

  const handleCountryCodeChange = (e) => {
    setCountryCode(e.target.value);
  };
// ОТПРАВЛЯЕМ ДАННЫЕ ФОРМЫ НА WhatsApp
  const handleSubmit = (e) => {
    e.preventDefault();

    const orderData = {
      orders: orders,
      formData: {
        ...formData,
        phone: `${countryCode}${formData.phone}` // Добавляем код страны к номеру телефона
      }
    };

    // Сохранение данных в localStorage
    localStorage.setItem('orderData', JSON.stringify(orderData));

    // Формирование сообщения для отправки в WhatsApp
    const whatsappText = `
      Замовлення від ${formData.firstName} ${formData.lastName}
      Email: ${formData.email}
      Телефон: ${orderData.formData.phone}
      Товари: ${orders.map(order => `${order.name} - ${order.quantity || 1}шт.`).join(', ')}
    `;

    // URL для отправки на WhatsApp
    const whatsappUrl = `https://wa.me/491747606969?text=${encodeURIComponent(whatsappText)}`;

    // Открытие окна WhatsApp с предзаполненным сообщением
    window.open(whatsappUrl, '_blank');

    console.log("Данные формы и заказа:", orderData);
    alert("Форма успiшно вiдправлена!");

    setFormVisible(false);  // Закрыть форму после отправки
  };

  const showOrders = () => {
    const totalAmount = orders.reduce((sum, order) => 
      sum + Number(order.price) * (order.quantity || 1), 0
    );

    return (
      <div className={classes}>
        {orders.map(order => (
          <Order onDelete={onDelete} key={order.id} item={order} />
        ))}
        <div className="order-summary">
          <p className='summa'>
            Загальна сума: {new Intl.NumberFormat().format(totalAmount)}$
          </p>
          <button className="fill-form-btn" onClick={saveOrdersToLocalStorage}>
            Заповнити форму
          </button>
        </div>
      </div>
    );
  };

  return (
    <header className="header">
      <div>
        <span className="logo">AnnaSkorik <br />Poetry</span>
        <ul className="nav">
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => isActive ? 'active-link' : undefined}
            >
              Головна
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/about" 
              className={({ isActive }) => isActive ? 'active-link' : undefined}
            >
              Про автора
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/contacts" 
              className={({ isActive }) => isActive ? 'active-link' : undefined}
            >
              Контакти
            </NavLink>
          </li>
        </ul>

        <FaShoppingCart onClick={() => setCartOpen(!cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`} />

        {cartOpen && (
          <div className="shop-cart">
            <div className="close-btn" onClick={() => setCartOpen(false)}>
              X
            </div>

            {orders.length > 0 ? showOrders() : 
              <div className='empty'>
                <h2>Корзина порожня</h2>
              </div>}
          </div>
        )}

        {formVisible && (
          <form className="order-form" onSubmit={handleSubmit}>
            <div className="close-form-btn" onClick={() => setFormVisible(false)}> {/* Добавляем крестик для закрытия */}
              &times;
            </div>
            <h3>Заповнiть форму для завершення заказу</h3>
            <input
              type="text"
              name="firstName"
              placeholder="Iм'я"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Прiзвище"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleEmailInput}
              required
            />
            {emailHint && <small className="email-hint">{emailHint}</small>}
            <div className="phone-input">
              <select value={countryCode} onChange={handleCountryCodeChange}>
                {countryCodes.map((country) => (
                  <option key={country.code} value={country.code}>
                    {country.name} ({country.code})
                  </option>
                ))}
              </select>
              <input
                type="tel"
                name="phone"
                placeholder="Контактний телефон"
                value={formData.phone}
                onChange={handlePhoneInput}
                onKeyPress={handlePhoneKeyPress}
                required
              />
            </div>
            <button type="submit" className="submit-btn">Вiдправити</button>
          </form>
        )}
      </div>
      <div className="presentation"></div>
    </header>
  );
};

export default Header;
