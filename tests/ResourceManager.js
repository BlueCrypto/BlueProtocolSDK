'use strict';
import ResourceManager from '../src/ResourceManager';

// import {expect} from 'chai';

describe('ResourceManager Test Suite', function() {
    it('should throw an exception for unknown resource', function() {
        ResourceManager.getResource('key');
    });
});
