import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | card-book', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(2);

    this.setProperties({
      book: {name: "The black cat", gender: "Terror"}
    });

    await render(hbs`<CardBook @book={{this.book}}></CardBook>`);

    assert.equal(this.element.querySelector('label').textContent.trim(), 'Title', "label title");

    assert.equal(this.element.querySelector('p').textContent.trim(), 'The black cat', "Name book");
  });
});
