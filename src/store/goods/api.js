import Api from '@/api';

class Goods extends Api {
  // list goods
  goods = () => this.rest('/goods/list.json');

  // delete good for id
  remove = (id) =>
    this.rest('/goods/delete-item', {
      method: 'POST',
      'Content-Type': 'application/json',
      body: JSON.stringify({ id }),
    }).then(() => id);

  // add new good in table
  add = (good) =>
    this.rest('/goods/add-item', {
      method: 'POST',
      'Content-Type': 'application/json',
      body: JSON.stringify({ good }),
    }).then(() => ({ ...good, id: new Date().getTime() }));

  //update good in table
  update = (good) =>
    this.rest('/goods/update-item', {
      method: 'POST',
      'Content-Type': 'application/json',
      body: JSON.stringify({ good }),
    }).then(() => good);
}

export default new Goods();
