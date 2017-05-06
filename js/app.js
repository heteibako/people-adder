/**
 * Created by szabi on 2017. 05. 01..
 */


jQuery(document).ready(function($){

(function () {
    var people = {
        people: ["Will", "Norah"],
        init: function () {
            this.cacheDom();
            this.bindEvents();
            this.render();
        },
        cacheDom: function () {
            this.$el = $('#peopleModule');
            this.$button = this.$el.find('button');
            this.$input = this.$el.find('input');
            this.$ul = this.$el.find('ul');
            this.template = this.$el.find('#people-template').html();
        },
        render: function () {
            var data = {
                people: this.people,
            };
            this.$ul.html(Mustache.render(this.template, data));
        },
        bindEvents: function () {
            this.$button.on('click', this.addPerson.bind(this));
            this.$ul.delegate('i.del', 'click', this.deletePerson.bind(this));
        },
        addPerson: function () {
            this.people.push(this.$input.val());
            this.render();
            this.$input.val("");
        },
        deletePerson: function (e) {
            var $remove = $(e.target).closest('li');
            var i = this.$ul.find('li').index($remove);
            this.people.splice(i, 1);
            this.render();
        }
    };
        people.init();
})();


});
