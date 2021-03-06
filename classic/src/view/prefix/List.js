/**
 * Classe que define a lista de "Prefix"
 *
 * =======================================
 * ###################################
 * MagnusBilling
 *
 * @package MagnusBilling
 * @author Adilson Leffa Magnus.
 * @copyright Copyright (C) 2005 - 2016 MagnusBilling. All rights reserved.
 * ###################################
 *
 * This software is released under the terms of the GNU Lesser General Public License v3
 * A copy of which is available from http://www.gnu.org/copyleft/lesser.html
 *
 * Please submit bug reports, patches, etc to https://github.com/magnusbilling/mbilling/issues
 * =======================================
 * Magnusbilling.org <info@magnussolution.com>
 * 01/08/2012
 */
Ext.define('MBilling.view.prefix.List', {
    extend: 'Ext.ux.grid.Panel',
    alias: 'widget.prefixlist',
    store: 'Prefix',
    requires: ['MBilling.view.prefix.ImportCsv'],
    fieldSearch: 'prefix',
    initComponent: function() {
        var me = this;
        me.buttonImportCsv = !App.user.isClient,
            me.buttonUpdateLot = false;
        me.columns = [{
            header: t('Id'),
            dataIndex: 'id',
            flex: 1,
            hidden: true,
            hideable: App.user.isAdmin
        }, {
            header: t('prefix'),
            dataIndex: 'prefix',
            filter: {
                type: 'string'
            }
        }, {
            header: t('destination'),
            dataIndex: 'destination'
        }];
        me.callParent(arguments);
    }
});