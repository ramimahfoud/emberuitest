import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | users ', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /users', async function(assert) {
   
    await visit('/users');
    assert.equal(currentURL(), '/users');
    
    
    await visit('/user/1');
    assert.equal(currentURL(), '/user/1');


    assert
    .dom('[data-test-id="archive-btn"]')
    .hasText('Archived');

    
    await click('[data-test-button="archive-btn"]');


    assert
    .dom('[data-test-id="is-archived"]')
    .hasText('This user is Archived');

    assert
    .dom('[data-test-id="archive-btn"]')
    .hasText('UnAarchived');
 

    await click('[data-test-button="Save"]');


 



  });

});
