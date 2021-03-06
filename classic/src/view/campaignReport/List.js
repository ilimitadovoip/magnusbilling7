/**
 * Classe que define o list de "campaignReport"
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
 * 28/07/2020
 */
Ext.define('MBilling.view.campaignReport.List', {
    extend: 'Ext.ux.grid.Panel',
    alias: 'widget.campaignreportlist',
    store: 'CampaignReport',
    initComponent: function() {
        var me = this;
        me.buttonCsv = false;
        me.allowPrint = false;
        me.allowCreate = false;
        me.allowDelete = false;
        me.buttonCleanFilter = false;
        me.buttonUpdateLot = false;
        me.extraButtons = [{
            text: t('Last') + ' ' + t('hour'),
            reference: 'hour',
            iconCls: '',
            handler: 'onSetInterval',
            disabled: false
        }, {
            text: t('Today'),
            reference: 'day',
            iconCls: '',
            handler: 'onSetInterval',
            disabled: false
        }, {
            text: t('Last') + ' 7 ' + t('days'),
            reference: 'week',
            iconCls: '',
            handler: 'onSetInterval',
            disabled: false
        }, {
            text: t('Last') + ' 30 ' + t('days'),
            reference: 'month',
            iconCls: '',
            handler: 'onSetInterval',
            disabled: false
        }];
        me.columns = [{
            header: t('Id'),
            dataIndex: 'id',
            flex: 1,
            hidden: true,
            sortable: false,
            hideable: App.user.isAdmin
        }, {
            header: t('Campaign'),
            dataIndex: 'name',
            menuDisabled: true,
            sortable: false,
            flex: 3
        }, {
            header: t('Total Dialed'),
            dataIndex: 'totalDialed',
            menuDisabled: true,
            sortable: false,
            flex: 3
        }, {
            header: t('Total AMD'),
            dataIndex: 'totalAmd',
            menuDisabled: true,
            sortable: false,
            flex: 3
        }, {
            header: t('Total Answered'),
            dataIndex: 'totalAnswered',
            menuDisabled: true,
            sortable: false,
            flex: 3
        }, {
            header: t('Transfered'),
            menuDisabled: true,
            dataIndex: 'transfered',
            sortable: false,
            flex: 3
        }]
        me.callParent(arguments);
    }
});