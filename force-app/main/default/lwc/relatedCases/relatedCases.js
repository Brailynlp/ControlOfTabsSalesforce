import { LightningElement, api, track } from 'lwc';
import createChildCase from '@salesforce/apex/RelatedCaseController.createChildCase';
import { getFocusedTabInfo, openSubtab, openTab, closeTab } from 'lightning/platformWorkspaceApi';

export default class relatedCases extends LightningElement {
    @api recordId;
    @track error;

    async handleCreateNewRelatedCase() {
        try {
            const tabInfo = await getFocusedTabInfo();
            const parentTabId = tabInfo.isSubtab ? tabInfo.parentTabId : tabInfo.tabId;
           
            if (!parentTabId) return;

            const newCaseId = await createChildCase({ parentId: this.recordId } );

            const pageRef = {
                type: 'standard__recordPage',
                attributes: {
                    recordId: newCaseId,
                    objectApiName: 'Case',
                    actionName: 'view'
                }
            };

            await openSubtab(parentTabId, {
                pageReference: pageRef,
                focus: true,
                label: 'Caso heredado'
            });

            await openTab({
                pageReference: pageRef,
                focus: true,
                label: 'Caso heredado'
            });

            setTimeout(() => {
                    closeTab(parentTabId).catch(console.error);
            }, 700);
             
        } catch (err) {
            this.error = 'No se pudo crear o abrir el nuevo caso.';
            console.error(err);
        }
    }
}
