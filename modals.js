var curcontent = new Array();

curcontent["rules"] = {
	xhead: 'Правила',
	xcon: '<div class="xbox_custom_rules"><div class="rules_content" style="padding: 0px 20px 20px 20px;"><p class="MsoNormal"><span>Информация</span></p>\
<p><span class="rules_rule"><i>1.1</i></span> - Незнание правил не освобождает Вас от ответственности. Зайдя на сервер Вы автоматически соглашаетесь со всеми нижеперечисленными пунктами правил.</p>\
<p><span class="rules_rule"><i>1.2</i></span> - Если Вы уже были замечены с читами / макросами или использованием просвета на другом сервере / проекте и на вас есть пруфы - мы имеем право забанить Вас без проверки.</p>\
<p><span class="rules_rule"><i>1.3</i></span> - Администрация сама выбирает наказание для игрока в зависимости от степени нарушения и обстоятельств.</p>\
<p><span class="rules_rule"><i>1.4</i></span> - Администрация не компенсирует игровые ценности, утраченные по причине вашей ошибки, технических проблем на сервере/хостинге, багов игры или контакта с нарушителями.</p>\
<p><span class="rules_rule"><i>1.5</i></span> - Вы несёте ответственность за все свои аккаунты. Получив бан на старом аккаунте, Вы получите его и на новом. Это относится как к нашим серверным банам, так и к EAC блокировкам.</p>\
<p><span class="rules_rule"><i>1.6</i></span> - Администраторы и модераторы вправе забанить игрока без предупреждения и объяснения, если у них есть доказательства нарушения правил.</p>\
<p class="MsoNormal"><span>Геймплей</span></li></p>\
<p><span class="rules_rule"><i>2.1</i></span> - Запрещено использовать/хранить/приобретать/распространять стороннее ПО или любые другие средства, позволяющие получить преимущество над другими игроками.</p>\
<p><span class="rules_rule"><i>2.2</i></span> - Запрещено использование услуг читеров.</p>\
<p><span class="rules_rule"><i>2.3</i></span> - Запрещено использование багов с целью или без цели получения преимущества над другими игроками.</p>\
<p><span class="rules_rule"><i>2.4</i></span> - Запрещено превышать лимит игроков в команде</p>\
<p><span class="rules_rule"><i>2.4.1</i></span> - Нельзя устраивать альянсы и перемирия с соседями если в сумме вас больше указанного в названии сервера максимума.</p>\
<p><span class="rules_rule"><i>2.4.2</i></span> - Нельзя рейдить/антирейдить или убивать в 1+/2+/3+.</p>\
<p><span class="rules_rule"><i>2.4.3</i></span> - Нельзя каким-либо образом кооперироваться с другими игроками если в вашей команде уже максимально возможное количество игроков.</p>\
<p><span class="rules_rule"><i>2.4.4</i></span> - Частая смена тиммейта будет считаться за нарушения правила о лимите.</p>\
<p><span class="rules_rule"><i>2.4.5</i></span> - Запрещена игра с другим игроком пока тиммейт стоит афк или не находится рядом.</p>\
<p><span class="rules_rule"><i>2.4.6</i></span> - Запрещена смена тиммейтов на время, если ваши основные тиммейты продолжат с вами играть.</p>\
<p><span class="rules_rule"><i>2.4.7</i></span> - Разрешено сменить напарника, если ваш предыдущий напарник в дальнейшем не будет с вами контактировать.</p>\
<p><span class="rules_rule"><i>2.5</i></span> - Запрещена продажа/покупка (или попытка продажи/покупки) игровых ценностей за реальную валюту или скины.</p>\
<p><span class="rules_rule"><i>2.6</i></span> - Не запрещено обманывать игроков при обмене и других игровых процессах.</p>\
<p class="MsoNormal"><span>Игровой Чат</span></li></p>\
<p><span class="rules_rule"><i>3.1</i></span> - Запрещены ссылки в чате на сторонние сервисы и сайты.</p>\
<p><span class="rules_rule"><i>3.2</i></span> - Запрещен флуд (многократное повторение бессмысленных фраз, символов) или многократное отправление одинаковых фраз за короткий промежуток времени.</p>\
<p><span class="rules_rule"><i>3.3</i></span> - Запрещено предлагать сделать действия, приводящие к нежеланному выходу с сервера. К таким действиям относится например нажатие "alt+f4", прописывание "disconnect" в консоль и прочие подобные действия, о значении которых другие игроки могут не знать.</p>\
<p><span class="rules_rule"><i>3.4</i></span> - Администрация оставляет за собой право выдать мут или заблокировать игроку в чате если тот ведёт себя неадекватно или некорректно по отношению к другим игрокам.</p>\
<p><span class="rules_rule"><i>3.5</i></span> - Запрещено выдавать себя за Администратора, Модератора или Проверяющего.</p>\
<p class="MsoNormal"><span>Проверки</span></li></p>\
<p><span class="rules_rule"><i>4.1</i></span> - Проверки проходят только через программу «Discord». Каждый игрок на нашем проекте, в обязательном порядке должен иметь эту программу на своём пк (или хотя-бы аккаунт, чтобы зайти в Discord через браузер).</p>\
<p><span class="rules_rule"><i>4.2</i></span> - Вызов на проверку осуществляется только через табличку на экране и ни в коем случае не через голосовой/текстовый чат.</p>\
<p><span class="rules_rule"><i>4.3</i></span> - Если игрок покинул сервер, предоставил некорректные контактные данные, игнорировал проверку или отказался от неё и после блокировки просит проверить его ПК на наличие стороннего ПО — ему будет отказано.</p>\
<p><span class="rules_rule"><i>4.4</i></span> - Запрещено очищать ПК до или во время проверки, а также хранить на ПК скрипты для очистки RegEdit, LastActivity, Prefetch, Recent и других системных данных. Проверяющий имеет право заблокировать вас за обнаруженные следы очистки или наличие таких скриптов на вашем устройстве.</p>\
<p><span class="rules_rule"><i>4.5</i></span> - За отказ предоставить необходимую для проверки информацию или за неадекватное поведение игрок может быть заблокирован за уклонение от проверки.</p>\
<p><span class="rules_rule"><i>4.6</i></span> - Если по итогам (итогом считается и блокировка за отказ/игнор/дисконект и предоставление некорректных данных для связи) проверки игрок блокируется — вся его команда может быть заблокирована вместе с ним.</p>\
<p><b>Отказ от прохождения проверки:</b></p>\
<p>— Вы имеете полное право отказаться от проверки, но в этом случае мы будем вынуждены забанить Вас на всех серверах проекта.</p>\
<p>— Также отказом от проверки будет считаться выход с сервера, предоставление некорректных контактных данных или игнорирование проверки.</p>\
<p><b>Если Вы согласны пройти проверку:</b></p>\
<p>— Вы разрешаете устанавливать сторонние программы нужные администрации для проверки вашего PC (AnyDesk/RustDesk, RustCheatCheck, LastActivityView).</p>\
<p>— Вы разрешаете проверять ПК, социальные сети и почту на наличие стороннего ПО или следов приобретения стороннего ПО.</p>\
<p>— Мы, в свою очередь, обязуемся обеспечить конфиденциальность и защиту вашей личной информации, исключая её распространение. Мы не будем сохранять или передавать любую информацию, не связанную с RUST и читами, которую получим от вас.</p>\
</div><div class="unban" style="background: white; border-radius: 10px; padding: 20px;"><p class="MsoNormal" style="font-weight: bold; margin-bottom: 5px;">Возможность разблокировки</p><span>Через месяц после блокировки можно подать апелляцию, но, только в случае если бан был получен не за читы или макросы. Писать апелляцию нужно в личные сообщения отдельной группы: <a href="https://vk.com/bloodappeal">vk.com/bloodappeal</a><div class="unbanwarn">⚠️ Учтите, блокировки не обсуждаются! Поэтому писать в основную группу, в чат дискорда/телеграма или куда-бы то ни было ещё - абсолютно бесполезно, вне группы для апелляций разблокировку не получить, ни при каких обстоятельствах.</div></span></div></div></div>'
};

curcontent["skins_ru"] = {
    xhead: 'Пополнение скинами',
    xcon: `<div class="skin-content">
	    <div class="warnings_skin">
	        ⚠️ Перед отправкой скинов, пожалуйста, ознакомьтесь с требованиями к обмену. Обратите внимание, что средства за скины будут зачислены исключительно на баланс того аккаунта, с которого они были отправлены.
	    </div>
	    <div class="spoiler">
	        <div class="x-spoiler">
	            <input class="spoil-button" type="checkbox" tabindex="-1">
	            <div class="spoil-box">
	                <span class="spoil-close fa"></span>
	                <span class="spoil-open fa"></span>
	                <span class="spoil-head">Как определяется стоимость скинов?</span><br>
	                <blockquote class="spoil-Untext">
	                    После отправки обмена нашему боту, он определит цену каждого скина и зачислит на баланс пользователя сумму, составляющую 80% от средней стоимости скинов за последний месяц на торговой площадке Steam. Например, если средняя стоимость скинов в обмене составляет 100 рублей, то на баланс пользователя будет зачислено 80 рублей.
	                </blockquote>
	            </div>
	        </div>
	        <div class="x-spoiler">
	            <input class="spoil-button" type="checkbox" tabindex="-1">
	            <div class="spoil-box">
	                <span class="spoil-close fa"></span>
	                <span class="spoil-open fa"></span>
	                <span class="spoil-head">Требования к обмену</span>
	                <blockquote class="spoil-Untext">
	                    » У вас не должно быть <a href="https://s3.bloodrust.io/trade_delay.jpg" target="_blank">удержания</a> обмена<br>
	                    » Принимаются скины только из <b>RUST</b> и <b>CS2</b><br>
	                    » В одном обмене не должно быть более 12-и предметов<br>
	                    » В обмене не должно быть скинов из CS2 дешевле <b>5-и рублей</b><br>
	                    » Баланс будет пополнен только того аккаунта, с которого были отправлены скины
	                </blockquote>
	            </div>
	        </div>
	        <div class="x-spoiler">
	            <input class="spoil-button" type="checkbox" tabindex="-1">
	            <div class="spoil-box">
	                <span class="spoil-close fa"></span>
	                <span class="spoil-open fa"></span>
	                <span class="spoil-head">Начать пополнение скинами</span><br>
	                <blockquote class="spoil-Untext">
	                    Чтобы пополнить баланс необходимо перейти на страницу обмена (нажав на кнопку снизу), выбрать скины которыми хотите пополнить, нажать кнопку "Предложить обмен" и подтвердить обмен через мобильное приложение Steam.<br><br>
	                    Если обмен соответствует требованиям - наш бот примет его в течение нескольких минут.
	                    <div class="btn-skins">
	                        <a class="btn-skin" onclick="openNewWindow('https://steamcommunity.com/tradeoffer/new/?partner=1748662763&token=v8jR-Ezt');">Начать обмен</a>
	                    </div>
	                </blockquote>
	            </div>
	        </div>
	        <div class="x-spoiler">
	            <input class="spoil-button" type="checkbox" tabindex="-1">
	            <div class="spoil-box">
	                <span class="spoil-close fa"></span>
	                <span class="spoil-open fa"></span>
	                <span class="spoil-head">Ошибка "Вы не можете обмениваться (34)"</span><br>
	                <blockquote class="spoil-Untext">
	                    Steam блокирует обмен на ~2 часа для аккаунтов, которые недавно сменили свой ник. Чтобы избежать этой проблемы, не меняйте ник в Steam, если собираетесь пополнить баланс скинами.
	                </blockquote>
	            </div>
	        </div>
	    </div>
	</div>`
};

curcontent["skins_en"] = {
	xhead: 'Deposit with skins',
	xcon: '<div class="skin-content"><div class="warnings_skin">⚠️ Before sending skins, please review the trade requirements. Please note that the funds for the skins will be credited only to the account from which they were sent.</div><div class="spoiler"><div class="x-spoiler">\
<input class="spoil-button" type="checkbox" tabindex="-1">\
     <div class="spoil-box"><span class="spoil-close fa"></span><span class="spoil-open fa"></span><span class="spoil-head">How skin prices are determined</span><br><blockquote class="spoil-Untext">After sending a trade offer to our bot, it will determine the price of each skin and credit the user balance with an amount equal to 80% of the average skin value over the last month on the Steam marketplace. For example, if the average skin value in the trade offer is 100 rubles, the user balance will be credited with 80 rubles.</span></blockquote>\
     </div></div>\
<div class="x-spoiler">\
<input class="spoil-button" type="checkbox" tabindex="-1">\
     <div class="spoil-box">\
         <span class="spoil-close fa"></span><span class="spoil-open fa"></span><span class="spoil-head">Trade requirements</span>\
         <blockquote class="spoil-Untext">\» You must not have any <a href="https://help.steampowered.com/ru/faqs/view/34A1-EA3F-83ED-54AB" target="_blank">trade hold</a><br>» Only skins from <b>RUST</b> and <b>CS2</b> are accepted<br>» There should not be more than 12 items in one exchange<br>» The trade offer must not contain CS skins cheaper than <b>5₽</b><br>» The balance will only be replenished for the account from which the skins were sent</li></ol>\
         </blockquote>\
     </div></div>\
<div class="x-spoiler">\
<input class="spoil-button" type="checkbox" tabindex="-1">\
     <div class="spoil-box"><span class="spoil-close fa"></span><span class="spoil-open fa"></span><span class="spoil-head">Start deposit with skins</span><br>\
	 <blockquote class="spoil-Untext">To refill the balance, you need to go to the trade page (by clicking the button below), select the skins you want to use for refill, click the "Start trade" button, and confirm the trade through the Steam mobile app.<br><br>If the trade meets the requirements, our bot will accept it within a few minutes.<div class="btn-skins"><a class="btn-skin" onclick="openNewWindow(\'https://steamcommunity.com/tradeoffer/new/?partner=1748662763&token=v8jR-Ezt\');">Start trade</a></blockquote>\
     </div></div></div></div>'
};

curcontent["skipqueue"] = {
	xhead: 'Вход без очереди',
	xcon: '<div class="queue-text">\
		<div>\
			<span>Вход без очереди работает сразу после покупки привилегии (как и написано в её описании). Для этого не нужно ничего активировать на сервере. Однако, после входа на сервер необходимо забрать привилегию из корзины, иначе вас кикнет. Если привилегия была приобретена, пока вы стояли в очереди, нужно выйти из очереди и подключиться к серверу вновь.<br><br>Если вас не пропускает вне очереди, проверьте, с того ли аккаунта вы авторизировались и приобрели привилегию. Также учтите, что привилегия работает только на сервере, где была забрана из корзины.<br><br><b>⚠️ Настоятельно рекомендуем всегда активировать привилегию перед вайпом, потому что первое время после вайпа (~10 минут) вход без очереди (при неактивированной привилегии) может работать нестабильно из-за большой нагрузки на сайт.</b></span>\
		</div>\
	</div>'
};

curcontent["enskipqueue"] = {
	xhead: 'Skip the queue',
	xcon: '<div class="queue-text">\
		<div>\
			<span>Skipping the queue works immediately after purchasing the privilege (as it is written in its description), for this you do not need to activate anything on the server, but after entering the server, you need to take the privilege from the basket (/store), otherwise you will be kicked. If the privilege has been acquired, then you have joined the queue - you must exit the queue and reconnect to the server.<br><br>If you are not allowed out of the queue - check with the help of the account you have authorized and received the privilege, and also note that the privilege works only on the server where it was taken from the basket.<br><br><b>⚠️ It is strongly recommended to always activate the privilege before the wipe, because the first minutes (~10 minutes) after wipe - skip queue queue (with unactivated privilege) can work unstable due to heavy load on the site.</b></span>\
		</div>\
	</div>'
};

curcontent["kit-kaban"] = {
	xhead: 'Платные киты',
	xcon: '<div class="store-categories">\
	<button class="btn btn-secondary" onclick="Open(\'kit-free\', false);">Start</button>\
	<button class="btn btn-secondary active">Boar</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-joker\', false);">Joker</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-masnik\', false);">Butcher</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-smert\', false);">Death</button>\
	<div class="xbox_custom_kits" ><div class="serverheader">Kit "Resources" - <span>Откат 24ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/stones.png">\
<div class="kit-item__quantity">x10000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/wood.png">\
<div class="kit-item__quantity">x10000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.fragments.png">\
<div class="kit-item__quantity">x5000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/gunpowder.png">\
<div class="kit-item__quantity">x2000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/sulfur.png">\
<div class="kit-item__quantity">x4000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/charcoal.png">\
<div class="kit-item__quantity">x8000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/lowgradefuel.png">\
<div class="kit-item__quantity">x500</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/cloth.png">\
<div class="kit-item__quantity">x1000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/leather.png">\
<div class="kit-item__quantity">x1000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.refined.png">\
<div class="kit-item__quantity">x100</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/gears.png">\
<div class="kit-item__quantity">x5</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/sewingkit.png">\
<div class="kit-item__quantity">x10</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metalpipe.png">\
<div class="kit-item__quantity">x10</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metalspring.png">\
<div class="kit-item__quantity">x10</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/smgbody.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/riflebody.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/semibody.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/roadsigns.png">\
<div class="kit-item__quantity">x10</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/rope.png">\
<div class="kit-item__quantity">x10</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/sheetmetal.png">\
<div class="kit-item__quantity">x5</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metalblade.png">\
<div class="kit-item__quantity">x5</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/tarp.png">\
<div class="kit-item__quantity">x10</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/scrap.png">\
<div class="kit-item__quantity">x200</div></div></div>\
</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Kit "Equipment" - <span>Откат 24ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/rifle.semiauto.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/ammo.rifle.png">\
<div class="kit-item__quantity">x100</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/wood.armor.helmet.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/wood.armor.jacket.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/wood.armor.pants.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/tshirt.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://s3.bloodrust.io/store/burlap.gloves.new.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/pants.shorts.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/shoes.boots.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/largemedkit.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/syringe.medical.png">\
<div class="kit-item__quantity">x4</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/pickaxe.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/hatchet.png">\
<div class="kit-item__quantity">x1</div></div></div>\
</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Kit "Other" - <span>Откат 48ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/workbench1.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/coffin.storage.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/keycard_green.png">\
<div class="kit-item__quantity">x1</div></div></div>\
</div></div></div>'
};

curcontent["kit-joker"] = {
	xhead: 'Платные киты',
	xcon: '<div class="store-categories">\
	<button class="btn btn-secondary" onclick="Open(\'kit-free\', false);">Start</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-kaban\', false);">Boar</button>\
	<button class="btn btn-secondary active">Joker</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-masnik\', false);">Butcher</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-smert\', false);">Death</button>\
	<div class="xbox_custom_kits" ><div class="serverheader">Kit "Resources" - <span>Откат 24ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/stones.png">\
<div class="kit-item__quantity">x15000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/wood.png">\
<div class="kit-item__quantity">x15000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.fragments.png">\
<div class="kit-item__quantity">x10000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/gunpowder.png">\
<div class="kit-item__quantity">x4000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/sulfur.png">\
<div class="kit-item__quantity">x6000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/charcoal.png">\
<div class="kit-item__quantity">x10000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/lowgradefuel.png">\
<div class="kit-item__quantity">x1000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/cloth.png">\
<div class="kit-item__quantity">x1500</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/leather.png">\
<div class="kit-item__quantity">x1500</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.refined.png">\
<div class="kit-item__quantity">x200</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/gears.png">\
<div class="kit-item__quantity">x10</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/sewingkit.png">\
<div class="kit-item__quantity">x15</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metalpipe.png">\
<div class="kit-item__quantity">x15</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metalspring.png">\
<div class="kit-item__quantity">x15</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/smgbody.png">\
<div class="kit-item__quantity">x2</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/riflebody.png">\
<div class="kit-item__quantity">x2</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/semibody.png">\
<div class="kit-item__quantity">x2</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/roadsigns.png">\
<div class="kit-item__quantity">x15</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/sheetmetal.png">\
<div class="kit-item__quantity">x10</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metalblade.png">\
<div class="kit-item__quantity">x10</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/rope.png">\
<div class="kit-item__quantity">x15</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/tarp.png">\
<div class="kit-item__quantity">x15</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/scrap.png">\
<div class="kit-item__quantity">x400</div></div></div>\
</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Kit "Equipment" - <span>Откат 24ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/rifle.m39.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/ammo.rifle.png">\
<div class="kit-item__quantity">x100</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/coffeecan.helmet.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/roadsign.jacket.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/roadsign.kilt.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/hoodie.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://s3.bloodrust.io/store/burlap.gloves.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/pants.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/shoes.boots.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/largemedkit.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/syringe.medical.png">\
<div class="kit-item__quantity">x6</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/icepick.salvaged.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/axe.salvaged.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/explosive.satchel.png">\
<div class="kit-item__quantity">x4</div></div></div>\
</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Kit "Other" - <span>Откат 48ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/workbench2.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/small.oil.refinery.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/coffin.storage.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/keycard_green.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/keycard_blue.png">\
<div class="kit-item__quantity">x1</div></div></div>\
</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Kit "Unique" (один на все привилегии) - <span>Откат 24ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://pic.moscow.ovh/images/2023/05/08/a09fbaa344230b0cb32acf00c542d654.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://pic.moscow.ovh/images/2023/05/08/614b43e9f1fe13e81a73002f4ea43b3c.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://pic.moscow.ovh/images/2023/05/08/e17e11ec3fc7c8b9d79366d10325a36b.png">\
<div class="kit-item__quantity">x2</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://pic.moscow.ovh/images/2024/03/15/3476e67e7b2e9b2661a42e76604e6c64.png">\
<div class="kit-item__quantity">x1</div></div></div>\
</div></div></div>'
};


curcontent["kit-masnik"] = {
	xhead: 'Платные киты',
	xcon: '<div class="store-categories">\
	<button class="btn btn-secondary" onclick="Open(\'kit-free\', false);">Start</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-kaban\', false);">Boar</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-joker\', false);">Joker</button>\
	<button class="btn btn-secondary active">Butcher</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-smert\', false);">Death</button>\
	<div class="xbox_custom_kits" ><div class="serverheader">Kit "Resources" - <span>Откат 24ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/stones.png">\
<div class="kit-item__quantity">x20000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/wood.png">\
<div class="kit-item__quantity">x20000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.fragments.png">\
<div class="kit-item__quantity">x15000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/gunpowder.png">\
<div class="kit-item__quantity">x6000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/sulfur.png">\
<div class="kit-item__quantity">x8000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/charcoal.png">\
<div class="kit-item__quantity">x12000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/lowgradefuel.png">\
<div class="kit-item__quantity">x1500</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/cloth.png">\
<div class="kit-item__quantity">x2000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/leather.png">\
<div class="kit-item__quantity">x2000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.refined.png">\
<div class="kit-item__quantity">x300</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/gears.png">\
<div class="kit-item__quantity">x15</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/sewingkit.png">\
<div class="kit-item__quantity">x20</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metalpipe.png">\
<div class="kit-item__quantity">x20</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metalspring.png">\
<div class="kit-item__quantity">x20</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/smgbody.png">\
<div class="kit-item__quantity">x3</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/riflebody.png">\
<div class="kit-item__quantity">x3</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/semibody.png">\
<div class="kit-item__quantity">x3</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/roadsigns.png">\
<div class="kit-item__quantity">x20</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/sheetmetal.png">\
<div class="kit-item__quantity">x15</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metalblade.png">\
<div class="kit-item__quantity">x15</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/rope.png">\
<div class="kit-item__quantity">x20</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/tarp.png">\
<div class="kit-item__quantity">x20</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/scrap.png">\
<div class="kit-item__quantity">x600</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/supply.signal.png">\
<div class="kit-item__quantity">x1</div></div></div>\
</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Kit "Equipment" - <span>Откат 24ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/rifle.ak.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/rifle.bolt.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons128/weapon.mod.small.scope.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/ammo.rifle.png">\
<div class="kit-item__quantity">x200</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.facemask.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.plate.torso.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/roadsign.kilt.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/hoodie.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://s3.bloodrust.io/store/tactical.gloves.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/pants.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/shoes.boots.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/largemedkit.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/syringe.medical.png">\
<div class="kit-item__quantity">x8</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/jackhammer.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/chainsaw.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/explosive.timed.png">\
<div class="kit-item__quantity">x2</div></div></div>\
</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Kit "Other" - <span>Откат 48ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/workbench3.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/furnace.large.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/small.oil.refinery.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/coffin.storage.png">\
<div class="kit-item__quantity">x2</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/keycard_green.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/keycard_blue.png">\
<div class="kit-item__quantity">x1</div></div></div>\
</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Kit "Unique" (один на все привилегии) - <span>Откат 24ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://pic.moscow.ovh/images/2023/05/08/a09fbaa344230b0cb32acf00c542d654.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://pic.moscow.ovh/images/2023/05/08/614b43e9f1fe13e81a73002f4ea43b3c.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://pic.moscow.ovh/images/2023/05/08/e17e11ec3fc7c8b9d79366d10325a36b.png">\
<div class="kit-item__quantity">x2</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://pic.moscow.ovh/images/2024/03/15/3476e67e7b2e9b2661a42e76604e6c64.png">\
<div class="kit-item__quantity">x1</div></div></div>\
</div></div></div>'
};


curcontent["kit-smert"] = {
	xhead: 'Платные киты',
	xcon: '<div class="store-categories">\
	<button class="btn btn-secondary" onclick="Open(\'kit-free\', false);">Start</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-kaban\', false);">Boar</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-joker\', false);">Joker</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-masnik\', false);">Butcher</button>\
	<button class="btn btn-secondary active">Death</button>\
	<div class="xbox_custom_kits" ><div class="serverheader">Kit "Resources" - <span>Откат 24ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/stones.png">\
<div class="kit-item__quantity">x25000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/wood.png">\
<div class="kit-item__quantity">x25000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.fragments.png">\
<div class="kit-item__quantity">x20000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/gunpowder.png">\
<div class="kit-item__quantity">x8000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/sulfur.png">\
<div class="kit-item__quantity">x10000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/charcoal.png">\
<div class="kit-item__quantity">x14000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/lowgradefuel.png">\
<div class="kit-item__quantity">x2000</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/cloth.png">\
<div class="kit-item__quantity">x2500</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/leather.png">\
<div class="kit-item__quantity">x2500</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.refined.png">\
<div class="kit-item__quantity">x400</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/gears.png">\
<div class="kit-item__quantity">x20</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/sewingkit.png">\
<div class="kit-item__quantity">x25</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metalpipe.png">\
<div class="kit-item__quantity">x25</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metalspring.png">\
<div class="kit-item__quantity">x25</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/smgbody.png">\
<div class="kit-item__quantity">x4</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/riflebody.png">\
<div class="kit-item__quantity">x4</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/semibody.png">\
<div class="kit-item__quantity">x4</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/roadsigns.png">\
<div class="kit-item__quantity">x25</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/sheetmetal.png">\
<div class="kit-item__quantity">x20</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metalblade.png">\
<div class="kit-item__quantity">x20</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/rope.png">\
<div class="kit-item__quantity">x25</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/tarp.png">\
<div class="kit-item__quantity">x25</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/scrap.png">\
<div class="kit-item__quantity">x800</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/supply.signal.png">\
<div class="kit-item__quantity">x2</div></div></div>\
</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Kit "Equipment" - <span>Откат 24ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/rifle.ak.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/rifle.l96.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons128/weapon.mod.small.scope.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/ammo.rifle.png">\
<div class="kit-item__quantity">x200</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.facemask.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/metal.plate.torso.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/roadsign.kilt.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/hoodie.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://s3.bloodrust.io/store/roadsign.gloves.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/pants.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/shoes.boots.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/largemedkit.png">\
<div class="kit-item__quantity">x2</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/syringe.medical.png">\
<div class="kit-item__quantity">x10</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/jackhammer.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/chainsaw.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/explosive.timed.png">\
<div class="kit-item__quantity">x2</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/rocket.launcher.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/ammo.rocket.basic.png">\
<div class="kit-item__quantity">x4</div></div></div>\
</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Kit "Other" - <span>Откат 48ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/workbench3.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/furnace.large.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/small.oil.refinery.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/coffin.storage.png">\
<div class="kit-item__quantity">x3</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/bed.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/keycard_green.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/keycard_blue.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://moscow-cdn.ru/rust/items/icons256/keycard_red.png">\
<div class="kit-item__quantity">x1</div></div></div>\
</div></div></div>\
<div class="xbox_custom_kits" ><div class="serverheader">Kit "Unique" (один на все привилегии) - <span>Откат 24ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://pic.moscow.ovh/images/2023/05/08/a09fbaa344230b0cb32acf00c542d654.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://pic.moscow.ovh/images/2023/05/08/614b43e9f1fe13e81a73002f4ea43b3c.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://pic.moscow.ovh/images/2023/05/08/e17e11ec3fc7c8b9d79366d10325a36b.png">\
<div class="kit-item__quantity">x2</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://pic.moscow.ovh/images/2024/03/15/3476e67e7b2e9b2661a42e76604e6c64.png">\
<div class="kit-item__quantity">x1</div></div></div>\
</div></div></div>'
};


curcontent["kit-free"] = {
	xhead: 'Стартовые киты',
	xcon: '<div class="store-categories">\
	<button class="btn btn-secondary active">Start</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-kaban\', false);">Boar</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-joker\', false);">Joker</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-masnik\', false);">Butcher</button>\
	<button class="btn btn-secondary" onclick="Open(\'kit-smert\', false);">Death</button>\
<div class="xbox_custom_kits" >\
<div class="serverheader">Kit "Start" - <span>Откат 15м</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/stone.pickaxe.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/stonehatchet.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/knife.butcher.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/bow.hunting.png">\
<div class="kit-item__quantity">2%</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/pistol.nailgun.png">\
<div class="kit-item__quantity">2%</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/pistol.eoka.png">\
<div class="kit-item__quantity">2%</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/hatchet.png">\
<div class="kit-item__quantity">4%</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/pickaxe.png">\
<div class="kit-item__quantity">4%</div></div></div>\
</div></div>\
<div class="xbox_custom_kits" >\
<div class="serverheader">Kit "Home" - <span>Откат 1ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/box.wooden.large.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/sleepingbag.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/door.hinged.wood.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/lock.code.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/building.planner.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/hammer.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/furnace.png">\
<div class="kit-item__quantity">25%</div></div></div>\
</div></div>\
<div class="xbox_custom_kits" >\
<div class="serverheader">Kit "Food" - <span>Откат 30м</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/wolfmeat.cooked.png">\
<div class="kit-item__quantity">x2</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/apple.png">\
<div class="kit-item__quantity">x4</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/jar.pickle.png">\
<div class="kit-item__quantity">x2</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://pic.moscow.ovh/images/2023/05/08/f20f1e507da7559c9b61ea579b95d6e2.png">\
<div class="kit-item__quantity">x1 - 50%</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/blueberries.png">\
<div class="kit-item__quantity">x2 - 50%</div></div></div>\
</div></div>\
<div class="serverheader">Kit for "#bloodrust" in the nickname - <span>Откат 48ч</span></div>\
<div class="kit_set"><div class="kit-items">\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/deer.skull.mask.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/bone.armor.suit.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/candycaneclub.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/workbench1.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/furnace.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/jackhammer.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/axe.salvaged.png">\
<div class="kit-item__quantity">x1</div></div></div>\
<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/pistol.nailgun.png">\
<div class="kit-item__quantity">x1</div></div></div>\
</div></div></div>'
};

//Vanilla kits

const kitsData = [
    {
        id: "kit-kaban-vanilla",
        title: "Boar",
        active: true,
        categories: [
            {
                name: "Kit \"Resources\"",
                cooldown: "24h",
                wipeblock: "4h",
                items: [
			    { image: "stones", quantity: 5000 },
			    { image: "wood", quantity: 5000 },
			    { image: "metal.fragments", quantity: 2500 },
			    { image: "gunpowder", quantity: 1000 },
			    { image: "lowgradefuel", quantity: 250 },
			    { image: "cloth", quantity: 500 },
			    { image: "leather", quantity: 500 },
			    { image: "metal.refined", quantity: 100 },
			    { image: "gears", quantity: 4 },
			    { image: "sewingkit", quantity: 10 },
			    { image: "metalpipe", quantity: 10 },
			    { image: "metalspring", quantity: 4 },
			    { image: "semibody", quantity: 2 },
			    { image: "smgbody", quantity: 2 },
			    { image: "roadsigns", quantity: 10 },
			    { image: "rope", quantity: 10 },
			    { image: "scrap", quantity: 100 }
			]
            },
            {
                name: "Kit \"Equipment #1\"",
                cooldown: "24h",
                wipeblock: "4h",
                items: [
                    { image: "pistol.semiauto", quantity: 1 },
                    { image: "ammo.pistol", quantity: 128 },
                    { image: "wood.armor.helmet", quantity: 1 },
                    { image: "wood.armor.jacket", quantity: 1 },
                    { image: "wood.armor.pants", quantity: 1 },
                    { image: "tshirt", quantity: 1 },
                    { image: "burlap.gloves.new", quantity: 1 },
                    { image: "pants.shorts", quantity: 1 },
                    { image: "shoes.boots", quantity: 1 },
                    { image: "largemedkit", quantity: 1 },
                    { image: "syringe.medical", quantity: 4 },
                    { image: "pickaxe", quantity: 1 },
                    { image: "hatchet", quantity: 1 }
                ]
            }
        ]
    },
    {
        id: "kit-joker-vanilla",
        title: "Joker",
        active: false,
        categories: [
            {
                name: "Kit \"Resources\"",
                cooldown: "24h",
                wipeblock: "4h",
                items: [
			    { image: "stones", quantity: 7000 },
			    { image: "wood", quantity: 7000 },
			    { image: "metal.fragments", quantity: 3500 },
			    { image: "gunpowder", quantity: 1500 },
			    { image: "lowgradefuel", quantity: 350 },
			    { image: "cloth", quantity: 700 },
			    { image: "leather", quantity: 700 },
			    { image: "metal.refined", quantity: 140 },
			    { image: "gears", quantity: 6 },
			    { image: "sewingkit", quantity: 14 },
			    { image: "metalpipe", quantity: 12 },
			    { image: "metalspring", quantity: 6 },
			    { image: "semibody", quantity: 3 },
			    { image: "smgbody", quantity: 3 },
			    { image: "roadsigns", quantity: 12 },
			    { image: "rope", quantity: 12 },
			    { image: "scrap", quantity: 150 }
                ]
            },
            {
                name: "Kit \"Equipment #1\"",
                cooldown: "24h",
                wipeblock: "6h",
                items: [
                    { image: "rifle.semiauto", quantity: 1 },
                    { image: "ammo.rifle", quantity: 128 },
                    { image: "coffeecan.helmet", quantity: 1 },
                    { image: "roadsign.jacket", quantity: 1 },
                    { image: "roadsign.kilt", quantity: 1 },
                    { image: "hoodie", quantity: 1 },
                    { image: "burlap.gloves", quantity: 1 },
                    { image: "pants", quantity: 1 },
                    { image: "shoes.boots", quantity: 1 },
                    { image: "largemedkit", quantity: 1 },
                    { image: "syringe.medical", quantity: 6 },
                    { image: "icepick.salvaged", quantity: 1 },
                    { image: "axe.salvaged", quantity: 1 }
                ]
            }
        ]
    },
    {
	    id: "kit-masnik-vanilla",
	    title: "Butcher",
	    active: false,
	    categories: [
	        {
	            name: "Kit \"Resources\"",
	            cooldown: "24h",
                 wipeblock: "4h",
	            items: [
			    { image: "stones", quantity: 10000 },
			    { image: "wood", quantity: 10000 },
			    { image: "metal.fragments", quantity: 5000 },
			    { image: "gunpowder", quantity: 2000 },
			    { image: "lowgradefuel", quantity: 500 },
			    { image: "cloth", quantity: 1000 },
			    { image: "leather", quantity: 1000 },
			    { image: "metal.refined", quantity: 200 },
			    { image: "gears", quantity: 8 },
			    { image: "sewingkit", quantity: 18 },
			    { image: "metalpipe", quantity: 15 },
			    { image: "metalspring", quantity: 8 },
			    { image: "semibody", quantity: 4 },
			    { image: "smgbody", quantity: 4 },
			    { image: "roadsigns", quantity: 15 },
			    { image: "rope", quantity: 15 },
			    { image: "scrap", quantity: 200 }
			]
	        },
	        {
	            name: "Kit \"Equipment #1\"",
	            cooldown: "24h",
                 wipeblock: "4h",
	            items: [
	                { image: "pistol.semiauto", quantity: 1 },
                     { image: "ammo.pistol", quantity: 128 },
                     { image: "wood.armor.helmet", quantity: 1 },
                     { image: "wood.armor.jacket", quantity: 1 },
                     { image: "wood.armor.pants", quantity: 1 },
                     { image: "tshirt", quantity: 1 },
                     { image: "burlap.gloves.new", quantity: 1 },
                     { image: "pants.shorts", quantity: 1 },
                     { image: "shoes.boots", quantity: 1 },
                     { image: "largemedkit", quantity: 1 },
                     { image: "syringe.medical", quantity: 4 },
                     { image: "pickaxe", quantity: 1 },
                     { image: "hatchet", quantity: 1 }
	            ]
	        },
	        {
	            name: "Kit \"Equipment #2\"",
	            cooldown: "24h",
                 wipeblock: "24h",
	            items: [
	                { image: "rifle.ak", quantity: 1 },
	                { image: "rifle.bolt", quantity: 1 },
	                { image: "weapon.mod.small.scope", quantity: 1 },
	                { image: "ammo.rifle", quantity: 128 },
	                { image: "metal.facemask", quantity: 1 },
	                { image: "metal.plate.torso", quantity: 1 },
	                { image: "roadsign.kilt", quantity: 1 },
	                { image: "hoodie", quantity: 1 },
	                { image: "tactical.gloves", quantity: 1 },
	                { image: "pants", quantity: 1 },
	                { image: "shoes.boots", quantity: 1 },
	                { image: "largemedkit", quantity: 1 },
	                { image: "syringe.medical", quantity: 6 },
	                { image: "jackhammer", quantity: 1 },
	                { image: "chainsaw", quantity: 1 }
	            ]
	        }
	    ]
    },
    {
        id: "kit-smert-vanilla",
        title: "Death",
        active: false,
        categories: [
            {
                name: "Kit \"Resources\"",
                cooldown: "24h",
                wipeblock: "4h",
                items: [
			    { image: "stones", quantity: 15000 },
			    { image: "wood", quantity: 15000 },
			    { image: "metal.fragments", quantity: 7500 },
			    { image: "gunpowder", quantity: 3000 },
			    { image: "lowgradefuel", quantity: 750 },
			    { image: "cloth", quantity: 1500 },
			    { image: "leather", quantity: 1500 },
			    { image: "metal.refined", quantity: 300 },
			    { image: "gears", quantity: 10 },
			    { image: "sewingkit", quantity: 25 },
			    { image: "metalpipe", quantity: 20 },
			    { image: "metalspring", quantity: 10 },
			    { image: "semibody", quantity: 5 },
			    { image: "smgbody", quantity: 5 },
			    { image: "roadsigns", quantity: 20 },
			    { image: "rope", quantity: 20 },
			    { image: "scrap", quantity: 300 }
			]
            },
            {
                name: "Kit \"Equipment #1\"",
                cooldown: "24h",
                wipeblock: "6h",
                items: [
                    { image: "rifle.semiauto", quantity: 1 },
                    { image: "ammo.rifle", quantity: 128 },
                    { image: "coffeecan.helmet", quantity: 1 },
                    { image: "roadsign.jacket", quantity: 1 },
                    { image: "roadsign.kilt", quantity: 1 },
                    { image: "hoodie", quantity: 1 },
                    { image: "burlap.gloves", quantity: 1 },
                    { image: "pants", quantity: 1 },
                    { image: "shoes.boots", quantity: 1 },
                    { image: "largemedkit", quantity: 1 },
                    { image: "syringe.medical", quantity: 6 },
                    { image: "icepick.salvaged", quantity: 1 },
                    { image: "axe.salvaged", quantity: 1 }
                ]
            },
            {
                name: "Kit \"Equipment #2\"",
                cooldown: "24h",
                wipeblock: "24h",
                items: [
                    { image: "rifle.ak", quantity: 1 },
                    { image: "rifle.l96", quantity: 1 },
                    { image: "weapon.mod.small.scope", quantity: 1 },
                    { image: "ammo.rifle", quantity: 128 },
                    { image: "metal.facemask", quantity: 1 },
                    { image: "metal.plate.torso", quantity: 1 },
                    { image: "roadsign.kilt", quantity: 1 },
                    { image: "hoodie", quantity: 1 },
                    { image: "roadsign.gloves", quantity: 1 },
                    { image: "pants", quantity: 1 },
                    { image: "shoes.boots", quantity: 1 },
                    { image: "largemedkit", quantity: 1 },
                    { image: "syringe.medical", quantity: 8 },
                    { image: "jackhammer", quantity: 1 },
                    { image: "chainsaw", quantity: 1 }
                ]
            }
        ]
    }
];

function generateCategoryButtons(kits, activeKitId) {
    return kits.map(kit => `
        <button class="btn btn-secondary ${kit.id === activeKitId ? "active" : ""}" 
                onclick="Open('${kit.id}', false);">
            ${kit.title}
        </button>
    `).join("");
}

function generateKitItems(items) {
    return items.map(item => `
        <div class="kit-items__item">
            <div class="kit-item">
                <img class="kit-item__image" src="https://s3.bloodrust.io/items/${item.image}.png">
                <div class="kit-item__quantity">x${item.quantity}</div>
            </div>
        </div>
    `).join("");
}

function generateKitSections(categories) {
    return categories.map(category => `
        <div class="xbox_custom_kits">
            <div class="serverheader">${category.name} - <span class="kit_cooldown">${category.cooldown}</span><span class="kit_wipeblock">${category.wipeblock}</span></div>
            <div class="kit_set">
                <div class="kit-items">
                    ${generateKitItems(category.items)}
                </div>
            </div>
        </div>
    `).join("");
}

function generateKitContent(kit, kits) {
    return `
        <div class="store-categories">
            ${generateCategoryButtons(kits, kit.id)}
            ${generateKitSections(kit.categories)}
        </div>
    `;
}

kitsData.forEach(kit => {
    curcontent[kit.id] = {
        xhead: "Vanilla Kits",
        xcon: generateKitContent(kit, kitsData)
    };
});

//end


curcontent["Oplata_RU"] = {
xhead: 'Выберите способ оплаты',
xcon: '<div class="xbox oplata_info">\
<div class="account-warning">⚠️ Внимание! Перед пополнением баланса обязательно проверьте, с какого аккаунта вы авторизованы на сайте, чтобы избежать ошибок.</div>\
<div class="forms-oplata-grid">\
	<div class="container-oplata-btn">\
		<a class="container-oplata-box" id="qiwi-inp-other2">\
			<img alt="" src="https://i.imgur.com/izriuxq.png" class="icon-user-oplata">\
			<div class="textContainer-oplata">\
				<span class="name-user">Карты (рф)</span>\
				<span class="category-user">Visa, Mastercard и Мир</span>\
			</div>\
		</a>\
		<a class="container-oplata-box" href="https://bloodstore.tebex.io/checkout/packages/add/5507691/single" target="_blank">\
			<img alt="" src="https://i.imgur.com/VpmVjET.png" class="icon-user-oplata">\
			<div class="textContainer-oplata">\
				<span class="name-user">Карты (укр/снг/eu/usa)</span>\
				<span class="category-user">Visa, Mastercard, PayPal</span>\
			</div>\
		</a>\
		<a class="container-oplata-box" id="qiwi-inp-other-skin" onclick="OpenXL(\'skins_ru\');" target="_blank">\
			<img alt="" src="https://i.imgur.com/k3JqyXs.png" class="icon-user-oplata">\
			<div class="textContainer-oplata">\
				<span class="name-user">Steam (скины)</span>\
				<span class="category-user">RUST и CS2</span>\
			</div>\
		</a>\
	</div>\
	<form onsubmit="return moruneHandler(event)" class="qiwi-inp-form" id="fk-inp-form" method="get" target="_blank" action="https://pay.bloodrust.io/api/integrations/enot/pay-link">\
		<div class="qiwi-inp-oplata" id="qiwi-inp-other">\
			<div class="qiwi-widget-title">СБП и карты<br><p>Криптовалюта (USDT/LTC/TRX/+)</p></div>\
			<div class="qiwi-inp-box">\
				<label for="fk-donation-amount" class="qiwi-label">Amount</label>\
				<div class="qiwi-rub">₽</div>\
				<input type="number" placeholder="Сумма" id="fk-donation-amount" name="sum" required="" value="">\
				<input type="hidden" id="fk-donation-account" name="acc" value="">\
				<div class="qiwi-error-box" id="fk-error-box"></div>\
			</div>\
			<div class="qiwi-button-box">\
				<button class="qiwi-submit-main" id="fk-submit-main" width="159px" type="submit">Оплатить</button>\
			</div>\
			<div class="payment-block">\
		        <div class="payment-type payment-block-mastercard"></div><div class="payment-type payment-block-visa"></div><div class="payment-type payment-block-mir"></div><div class="payment-type payment-block-crypto"></div>\
			</div>\
		</div>\
	</form>\
</div>\
	<div class="spoiler" style="margin-top: 10px;"><div class="x-spoiler">\
	<input class="spoil-button" type="checkbox" tabindex="-1">\
     <div class="spoil-box">\
     	<span class="spoil-close fa"></span>\
     	<span class="spoil-open fa"></span>\
     	<span class="spoil-head">Бонусы при пополнении</span>\
     	<br>\
     	<blockquote class="spoil-Untext">от <b>500₽</b> - бонус <b>+10%</b> к сумме пополнения<br>от <b>1000₽</b> - бонус <b>+20%</b> к сумме пополнения<br>от <b>2000₽</b> - бонус <b>+30%</b> к сумме пополнения<br>от <b>5000₽</b> - бонус <b>+40%</b> к сумме пополнения<br><br>⚠️ Бонусы не действуют при пополнении скинами!</span>\
     	</blockquote>\
	</div>\
</div>'
};

curcontent["Oplata_EN"] = {
xhead: 'Choose a payment method',
xcon: '<div class="xbox oplata_info">\
<div class="account-warning">⚠️ Attention! Before depositing, please make sure you are logged in with the correct Steam account to avoid errors.</div>\
<div class="forms-oplata-grid">\
	<div class="container-oplata-btn">\
		<a class="container-oplata-box" href="https://bloodstore.tebex.io/checkout/packages/add/5507691/single" target="_blank">\
			<img alt="" src="https://i.imgur.com/VpmVjET.png" class="icon-user-oplata">\
			<div class="textContainer-oplata">\
				<span class="name-user">Card</span>\
				<span class="category-user">Visa, Mastercard, PayPal</span>\
			</div>\
		</a>\
		<a class="container-oplata-box" id="qiwi-inp-other2">\
			<img alt="" src="https://i.imgur.com/izriuxq.png" class="icon-user-oplata">\
			<div class="textContainer-oplata">\
				<span class="name-user">Card (ru)</span>\
				<span class="category-user">Visa, Mastercard и Мир</span>\
			</div>\
		</a>\
		<a class="container-oplata-box" id="qiwi-inp-other-skin" onclick="OpenXL(\'skins_en\');" target="_blank">\
			<img alt="" src="https://i.imgur.com/k3JqyXs.png" class="icon-user-oplata">\
			<div class="textContainer-oplata">\
				<span class="name-user">Steam (skins)</span>\
				<span class="category-user">RUST and CS2</span>\
			</div>\
		</a>\
	</div>\
	<form onsubmit="return moruneHandler(event)" class="qiwi-inp-form" id="fk-inp-form" method="get" target="_blank" action="https://pay.bloodrust.io/api/integrations/enot/pay-link">\
		<div class="qiwi-inp-oplata" id="qiwi-inp-other">\
			<div class="qiwi-widget-title">Cryptocurrency<br><p>USDT/LTC/TRX etc.</p></div>\
			<div class="qiwi-inp-box">\
				<label for="fk-donation-amount" class="qiwi-label">Amount</label>\
				<div class="qiwi-rub">₽</div>\
				<input type="number" placeholder="Amount" id="fk-donation-amount" name="sum" required="" value="">\
				<input type="hidden" id="fk-donation-account" name="acc" value="">\
				<div class="qiwi-error-box" id="fk-error-box"></div>\
			</div>\
			<div class="qiwi-button-box">\
				<button class="qiwi-submit-main" id="fk-submit-main" width="159px" type="submit">Checkout</button>\
			</div>\
			<div class="payment-block">\
		        <div class="payment-type payment-block-mastercard"></div><div class="payment-type payment-block-visa"></div><div class="payment-type payment-block-mir"></div><div class="payment-type payment-block-crypto"></div>\
			</div>\
		</div>\
	</form>\
</div>\
	<div class="spoiler" style="margin-top: 10px;"><div class="x-spoiler">\
	<input class="spoil-button" type="checkbox" tabindex="-1">\
     <div class="spoil-box">\
     	<span class="spoil-close fa"></span>\
     	<span class="spoil-open fa"></span>\
     	<span class="spoil-head">Deposit bonuses</span>\
     	<br>\
     	<blockquote class="spoil-Untext">from <b>500₽</b> - bonus <b>+10%</b> to the deposit amount<br>from <b>1000₽</b> - bonus <b>+20%</b> to the deposit amount<br>from <b>2000₽</b> - bonus <b>+30%</b> to the deposit amount<br>from <b>5000₽</b> - bonus <b>+40%</b> to the deposit amount<br><br>⚠️ Bonuses are not valid when depositing with skins!</span>\
     	</blockquote>\
	</div>\
</div>'
};

const weapons = [
    { image: 'shotgun.waterpipe', time: '2h' },
    { image: 'pistol.revolver', time: '2h' },
    { image: 'flamethrower', time: '4h' },
    { image: 'military%20flamethrower', time: '4h' },
    { image: 'pistol.python', time: '4h' },
    { image: 'revolver.hc', time: '4h' },
    { image: 'pistol.semiauto', time: '4h' },
    { image: 'shotgun.double', time: '4h' },
    { image: 'grenade.molotov', time: '4h' },
    { image: 'blunderbuss', time: '4h' },
    { image: 't1_smg', time: '4h' },
    { image: 'shotgun.pump', time: '6h' },
    { image: 'shotgun.spas12', time: '6h' },
    { image: 'pistol.m92', time: '6h' },
    { image: 'pistol.prototype17', time: '6h' },
    { image: 'rifle.semiauto', time: '6h' },
    { image: 'rifle.sks', time: '8h' },
    { image: 'smg.2', time: '8h' },
    { image: 'smg.thompson', time: '8h' },
    { image: 'smg.mp5', time: '8h' },
    { image: 'rifle.m39', time: '8h' },
    { image: 'rifle.ak', time: '22h' },
    { image: 'rifle.lr300', time: '22h' },
    { image: 'rifle.bolt', time: '22h' },
    { image: 'rifle.l96', time: '22h' },
    { image: 'homingmissile.launcher', time: '22h' },
    { image: 'batteringram', time: '22h' },
    { image: 'ballista.static', time: '22h' },
    { image: 'ballista.mounted', time: '22h' },
    { image: 'multiplegrenadelauncher', time: '24h' },
    { image: 'hmlmg', time: '24h' },
    { image: 'lmg.m249', time: '24h' },
    { image: 'minigun', time: '24h' },
    { image: 'catapult', time: '24h' },
    { image: 'rocket.launcher', time: '28h' },
];

const ammoAndExplosives = [
    { image: 'grenade.f1', time: '22h' },
    { image: 'grenade.beancan', time: '24h' },
    { image: 'surveycharge', time: '24h' },
    { image: 'explosive.satchel', time: '24h' },
    { image: 'submarine.torpedo.straight', time: '24h' },
    { image: 'ammo.grenadelauncher.he', time: '24h' },
    { image: 'catapult.ammo.explosive', time: '24h' },
    { image: 'ammo.rifle.explosive', time: '28h' },
    { image: 'explosive.timed', time: '28h' },
    { image: 'ammo.rocket.hv', time: '28h' },
    { image: 'ammo.rocket.fire', time: '28h' },
    { image: 'ammo.rocket.basic', time: '28h' },
    { image: 'ammo.rocket.mlrs', time: '28h' },
];

const clothing = [
    { image: 'coffeecan.helmet', time: '6h' },
    { image: 'roadsign.jacket', time: '6h' },
    { image: 'roadsign.kilt', time: '6h' },
    { image: 'metal.facemask', time: '22h' },
    { image: 'metal.plate.torso', time: '22h' },
    { image: 'heavy.plate.helmet', time: '22h' },
    { image: 'heavy.plate.jacket', time: '22h' },
    { image: 'heavy.plate.pants', time: '22h' },
];

curcontent["block3"] = {
    xhead: 'After-wipe blocks',
    xcon: (() => {
        const categories = [
            { title: 'Weapons', items: weapons },
            { title: 'Ammo and explosives', items: ammoAndExplosives },
            { title: 'Clothes', items: clothing }
        ];

        const warning = `<div class="block-warning">⚠️ This blocks apply only to servers categorized as "Modded".</div>`;

        const blocks = categories.map(category => `
            <div class="xbox_custom_kits">
                <div class="serverheader">${category.title}</div>
                <div class="kit_set">
                    <div class="kit-items">
                        ${category.items.map(item => `
                            <div class="kit-items__item">
                                <div class="kit-item">
                                    <img class="kit-item__image" src="https://s3.bloodrust.io/items/${item.image}.png">
                                    <div class="kit-item__quantity">${item.time}</div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `).join('');

        return warning + blocks;
    })()
};

curcontent["tos"] = {
	xhead: 'Пользовательское соглашение', 
	xcon: '<div class="tos-body"><p>Настоящий договор является публичной офертой (далее — Оферта). В соответствии с Гражданским кодексом Российской Федерации, акцептом условий настоящей Оферты является оплата Заказчиком услуг, предлагаемых Исполнителем.</p><p>Оферта заключается в электронном виде и не требует двустороннего подписания. Использование Сервиса означает полное согласие Заказчика с условиями настоящей Оферты и обязательство соблюдать их.</p><br><h4>1. Термины и определения</h4><p><b>Сервис</b>— веб-сайт в сети Интернет, расположенный по адресу bloodrust.store, который предоставляет доступ к услугам и информации о них.</p><p><b>Заказчик</b>— физическое или юридическое лицо, воспользовавшееся Сервисом и оплатившее предоставляемые Исполнителем Услуги.</p><p><b>Услуги</b>— платные услуги, оказываемые Исполнителем посредством Сервиса, в том числе предоставление бонусов (donate) для лицензионной игры Rust на проекте "Blood Rust".</p><br><h4>2. Предмет Оферты</h4><p>Исполнитель предоставляет Заказчику услуги по приобретению дополнительных бонусов (donate) для лицензионной игры Rust на проекте "Blood Rust". Описание предоставляемых услуг, их стоимость и условия оказания размещены в Сервисе на странице bloodrust.store/products и действуют на момент оформления Заказчиком заказа.</p><p>Заказчик принимает на себя обязательства по оплате заказанных Услуг в соответствии с условиями, изложенными в Сервисе, и ценами, актуальными на момент оформления заказа.</p><br><h4>3. Порядок оказания Услуг</h4><p>3.1. Перед оказанием Услуг Заказчик выбирает желаемую услугу на Сервисе и оплачивает её. Услуги считаются оказанными в момент зачисления средств на счет Исполнителя.</p><p>3.2. В случае если Заказчик не произведет оплату или оплатит услугу не в полном объеме, Исполнитель вправе приостановить или прекратить оказание услуг до момента полного погашения Заказчиком финансовых обязательств.</p><br><h4>4. Стоимость и порядок оплаты</h4><p>4.1. Стоимость предоставляемых Услуг указана в Сервисе на момент оформления заказа и может изменяться Исполнителем в одностороннем порядке. Изменение цен не распространяется на Услуги, оплаченные ранее.</p><p>4.2. Оплата Услуг осуществляется через доступные на Сервисе платежные системы. Заказчик самостоятельно выбирает удобный способ оплаты из предложенных.</p><p>4.3. Все расчеты между Заказчиком и Исполнителем производятся в рублях Российской Федерации. Услуги Сервиса НДС не облагаются.</p><br><h4>5. Права и обязанности сторон</h4><p><b>Исполнитель обязуется:</b></p><p>5.1. Надлежащим образом оказать Заказчику Услуги в соответствии с условиями настоящей Оферты.</p><p>5.2. Обеспечивать актуальность информации о предоставляемых Услугах и их стоимости, размещаемой в Сервисе.</p><p><b>Исполнитель вправе:</b></p><p>5.3. Вносить изменения в настоящую Оферту, условия оказания Услуг, а также их стоимость, уведомляя об этом Заказчика посредством публикации новой версии Оферты в Сервисе.</p><p>5.4. Приостановить или прекратить оказание Услуг в случае нарушения Заказчиком условий оплаты или предоставления недостоверных данных при регистрации или оформлении заказа.</p><p><b>Заказчик обязуется:</b></p><p>5.5. Своевременно и в полном объеме производить оплату выбранных Услуг.</p><p>5.6. Ознакомиться с условиями настоящей Оферты до момента её акцепта, а также регулярно следить за изменениями в условиях предоставления Услуг, публикуемыми на Сервисе.</p><p>5.7. Не предпринимать действия, нарушающие нормальную работу Сервиса, и соблюдать конфиденциальность данных, полученных в процессе использования Сервиса.</p><br><h4>6. Приемка-сдача Услуг. Условия возврата</h4><p>6.1. Услуги считаются оказанными Исполнителем и принятыми Заказчиком в момент заказа Услуг.</p><p>6.2. Если Заказчик в течение 1 (одного) рабочего дня с момента принятия Услуг не направит Исполнителю мотивированный отказ от их приемки, Услуги считаются оказанными качественно и в полном объеме.</p><p>6.3. В случае отказа от Услуг, Заказчик должен направить мотивированное обоснование отказа на электронную почту Исполнителя:<a href="mailto:help@bloodrust.io">help@bloodrust.io</a>. Исполнитель обязан рассмотреть запрос в течение 10 (десяти) рабочих дней и уведомить Заказчика о принятом решении.</p><p>6.4. При принятии отказа Исполнитель обязуется вернуть денежные средства в виде донатов, эквивалентных сумме оплаты Услуг.</p><p>6.5. Возврат средств не осуществляется, если Заказчик не предоставил мотивированный отказ в срок, предусмотренный настоящей Офертой.</p><p>6.6. Возврат денежных средств производится на тот же счет, с которого была произведена оплата, и в той же валюте.</p><p>6.7. Возврат денежных средств не осуществляется, если Заказчик был заблокирован на серверах проекта "Blood Rust" за нарушение правил или получил блокировку античитом Easy Anti-Cheat (EAC).</p><br><h4>7. Ответственность сторон</h4><p>7.1. Стороны несут ответственность за неисполнение или ненадлежащее исполнение своих обязательств по Оферте в соответствии с её условиями и действующим законодательством Российской Федерации.</p><p>7.2. Исполнитель не несет ответственности за перебои в работе Сервиса, вызванные техническими причинами, находящимися вне его контроля.</p><br><h4>8. Форс-мажор</h4><p>8.1. Стороны освобождаются от ответственности за частичное или полное неисполнение обязательств по настоящей Оферте, если такое неисполнение явилось следствием обстоятельств непреодолимой силы, которые невозможно было предвидеть или предотвратить.</p><br><h4>9. Споры и разногласия</h4><p>9.1. Все споры и разногласия, возникающие в связи с настоящей Офертой, решаются путём переговоров между Сторонами.</p><p>9.2. В случае невозможности достижения соглашения, споры подлежат рассмотрению в судебном порядке по месту нахождения Исполнителя.</p><br><h4>10. Заключительные положения</h4><p>10.1. Оферта вступает в силу с момента её акцепта Заказчиком и действует до момента её отзыва Исполнителем.</p><p>10.2. Заказчик подтверждает, что достиг возраста 18 лет, и что он полностью ознакомился с условиями настоящей Оферты и согласен с ними.</p><p>10.3. Исполнитель оставляет за собой право вносить изменения в содержание настоящей Оферты, публикуя новую редакцию в Сервисе.</p><p>e-Mail:<a href="mailto:help@bloodrust.io">help@bloodrust.io</a></p></div>'
};

function Open(el, usefade = true, zind = false) {
	closepage();
	var div1 = document.createElement("div");
    div1.id = 'Modal';
	var div2 = document.createElement("div");
	div2.className = 'modal modal-xacku fade';
	if(!usefade) div2.classList.add("show");
	div2.style = 'display: block; z-index: 1100;';
	div2.id = 'closer';
	//div2.onclick = closepage;
	var div3 = document.createElement("div");
	div3.className = "modal-dialog modal-lg";
	if(el=="block")div3.className+=" modal-lg-block"
	var div4 = document.createElement("div");
	div4.className = "modal-content";
	var div5 = document.createElement("div");
	div5.className = "modal-header";
	div5.innerHTML = '<h4 class="modal-title">'+curcontent[el].xhead+'</h4>';
	var div6 = document.createElement("div");
	div6.className = "modal-body";
	div6.innerHTML = curcontent[el].xcon;
	var div7 = document.createElement("div");
	div7.className = "modal-footer";
	div7.innerHTML = `<button type="button" class="btn btn-secondary" id="closer" onclick="closepage()">Закрыть</button>`;
	//div7.innerHTML = `<button type="button" class="btn btn-secondary" id="closer" onclick="closepage()">${UserLang == "EN" ? "Закрыть" : "Close"}</button>`;
	var div8 = document.createElement("div");
	div8.className = "modal-backdrop fade show";
	div8.style = 'z-index: 1050;';
	
	div1.appendChild(div2);
	//div2.appendChild(div2_5);
	div2.appendChild(div3);
	div3.appendChild(div4);
	div4.appendChild(div5);
	div4.appendChild(div6);
	div4.appendChild(div7);
	div1.appendChild(div8);
	if(usefade) setTimeout(()=> div2.classList.add("show"), 0);
	
	var body = document.getElementsByTagName('body')[0];
	body.appendChild(div1);
	body.className = "modal-open";
}

function OpenXL(el, usefade = true, zind = false) {
	closepage();
	var div1 = document.createElement("div");
    div1.id = 'Modal';
	var div2 = document.createElement("div");
	div2.className = 'modal modal-xacku fade';
	if(!usefade) div2.classList.add("show");
	div2.style = 'display: block; z-index: 1100;';
	div2.id = 'closer';
	//div2.onclick = closepage;
	var div3 = document.createElement("div");
	div3.className = "modal-dialog modal-xl";
	if(el=="block")div3.className+=" modal-xl-block"
	var div4 = document.createElement("div");
	div4.className = "modal-content";
	var div5 = document.createElement("div");
	div5.className = "modal-header";
	div5.innerHTML = '<h4 class="modal-title">'+curcontent[el].xhead+'</h4>';
	var div6 = document.createElement("div");
	div6.className = "modal-body";
	div6.innerHTML = curcontent[el].xcon;
	var div7 = document.createElement("div");
	div7.className = "modal-footer";
	div7.innerHTML = `<button type="button" class="btn btn-secondary" id="closer" onclick="closepage()">Закрыть</button>`;
	var div8 = document.createElement("div");
	div8.className = "modal-backdrop fade show";
	div8.style = 'z-index: 1050;';
	
	div1.appendChild(div2);
	//div2.appendChild(div2_5);
	div2.appendChild(div3);
	div3.appendChild(div4);
	div4.appendChild(div5);
	div4.appendChild(div6);
	div4.appendChild(div7);
	div1.appendChild(div8);
	if(usefade) setTimeout(()=> div2.classList.add("show"), 0);
	
	var body = document.getElementsByTagName('body')[0];
	body.appendChild(div1);
	body.className = "modal-open";
}

function closepage() {
  var Modal = document.getElementById('Modal');
  var Modalparent = null;
  try {
    Modalparent = ((Modal.parentElement) ? Modal.parentElement : ((Modal.parentNode) ? Modal.parentNode : null));
  } catch (error) {
    return;
  }
  if (Modalparent == null) return;
  Modalparent.removeChild(Modal);
  document.getElementsByTagName('body')[0].className = "";
}

window.onload = function () {
	document.body.onclick=function(event)
	{
		if(event.target.id == 'closer')closepage();
		if(event.target.className == 'MsoCommand')search(event);
	}
}

var CustomerSteamId = "0";
var OvhPayUrl = "";

var now = new Date();

function moruneHandler(e){
	paymentFormHandle();
	var inputval = document.getElementById('fk-donation-amount').value;
	var inputfloat = parseFloat(inputval);
	if(inputfloat < 200 || inputfloat > 15000 || isNaN(inputfloat)){
		document.getElementById('fk-error-box').innerText = "От 200 до 15000 RUB";
		e.preventDefault();
		return false;
	}else{
		document.getElementById('fk-error-box').innerText = "";
	}
	document.getElementById('fk-donation-amount').value = inputfloat;
	if(CustomerSteamId == "0" || CustomerSteamId == ""){
		document.getElementById('fk-error-box').innerText = "Пожалуйста авторизуйтесь в магазине!";
		e.preventDefault();
		return false;
	}
	
	return null;
}

function paymentFormHandle(){
	document.getElementById('qiwi-inp-other2').setAttribute("href", OvhPayUrl);
	var a3 = document.getElementById('fk-donation-comment');
	if(a3 != null)
	a3.value = CustomerSteamId;
	var a4 = document.getElementById('fk-donation-account');
	if(a4 != null)
	a4.value = CustomerSteamId;
}

function OvhUrlOverrite(){
	var slides = document.getElementsByClassName("nav-link");
	for (var i = 0; i < slides.length; i++) {
		var elelink = slides.item(i);
		var urlelelink = elelink.getAttribute("href");
	   if(urlelelink.startsWith('https://pay.moscow.ovh')){
		   OvhPayUrl = urlelelink;
		   console.log(OvhPayUrl);
		   elelink.setAttribute("href", "javascript:;");
		   elelink.setAttribute("onclick", "OpenOplata()");
	   }
	}
}

function openNewWindow(url) {

	if (CustomerSteamId == "0" || CustomerSteamId == "") {
		alert("Авторизуйтесь на сайте через Steam!");
	} else {
     	window.open(url, '_blank');
	}
}

setInterval(() => {
	OvhUrlOverrite();
}, 1000)

function obtainShopSteamId(){
	if(CustomerSteamId != "0" && CustomerSteamId != ""){
		return;
	}
	var xmlHttp = new XMLHttpRequest();

        if(xmlHttp != null)
        {
            xmlHttp.open( "GET", "/api/index.php?modules=users&action=getData", true );
            xmlHttp.send( null );
        }
		xmlHttp.onload = function(gjson) {
			var gjson = JSON.parse(xmlHttp.response);
          	console.log(gjson);
			var preSteam = gjson.data.steamID;
			var preLang = gjson.data.lang;
			OvhPayUrl = "https://pay.moscow.ovh/?"+gjson.data.pay;
			if(preSteam > 76561100000000000 || !isNaN(preSteam)){
				CustomerSteamId = preSteam.toString();
				UserLang = preLang.toString();
				//paymentFormHandle();
				OvhUrlOverrite();
			}else{
				console.log("error obtainShopSteamId! "+ gjson);
			}
		}

}

function OpenOplata(){
	if (UserLang == "EN") {
		OpenXL('Oplata_RU');
	} else {
		OpenXL('Oplata_EN');
	}
	paymentFormHandle();
	setTimeout(() => function () {
		try{
			paymentFormHandle();
		}catch(e){
			console.log('element not found '+ e);
		}
	}, 3000);
}

window.addEventListener("load", function () {
	try{
		obtainShopSteamId();
	}catch(e){
		console.log('element not found '+ e);
	}
});