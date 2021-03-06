export default [{
  tabName: 'Первая вкладка',
  controls: [
    {
      'text': 'Источник',
      'type': 'select',
      'name': 'source',
      'items': [
        'Лента'
      ],
      'default': 'Лента'
    },
    {
      'text': 'Дополнительные данные',
      'type': 'selectMultiple',
      'name': 'additionalData',
      'items': [
        'Курс доллара',
        'МРОТ',
        'Доход',
        'Цены на нефть'
      ]
    },
    {
      'text': 'Темы',
      'type': 'selectMultiple',
      'name': 'topics',
      'items': [
        'Оппозиция',
        'Газовый бюджет',
        'Минские соглашения',
        'Соглашение с Евросоюзом',
        'Выборы на Украине',
        'Пограничные войска',
        'Оппозиция в Беларуси',
        'Пострадавшие в терактах',
        'Крым и Латвия',
        'Убийства на границе',
        'Убийство на Украине',
        'Журналисты и социальные сети',
        'Исламский университет в Средней Азии',
        'Приговор преступнику',
        'Армия',
        'Вооруженный конфликт в Южной Осетии',
        'Снос памятников советским воинам в Прибалтике',
        'Межнациональные конфликты',
        'Промышленность Казахстана',
        'Политика на Украине'
      ]
    },
    {
      'text': 'Дата от',
      'type': 'date',
      'name': 'dateFrom'
    },
    {
      'text': 'Дата до',
      'type': 'date',
      'name': 'dateTo'
    }
  ],
  widgets: [
    {
      'width': 'xs12',
      'spec': require('./fake_spec.json')
    },
    {
      'width': 'xs6',
      'spec': require('./fake_spec_vega_lite.json')
    },
    {
      'width': 'xs6',
      'spec': require('./fake_spec_vega_lite.json')
    },
    {
      'width': 'xs4',
      'spec': require('./fake_spec.json')
    },
    {
      'width': 'xs4',
      'text': `
1. Я **текст** в *markdown*.
2. Я **текст** в *markdown*.
3. Я **текст** в *markdown*.
4. Я **текст** в *markdown*.
5. Я **текст** в *markdown*.`
    },
    {
      'width': 'xs4',
      'spec': require('./fake_spec.json')
    }
  ]
}, {
  tabName: 'Вторая вкладка',
  controls: [
    {
      'text': 'Дата от',
      'type': 'date',
      'name': 'dateFrom'
    }
  ],
  widgets: [
    {
      'width': 'xs12',
      'spec': require('./fake_spec.json')
    }
  ]
}]
