import { Component, OnInit, Injector } from '@angular/core';
import { PagedRequestDto, PagedListingComponentBase, PagedResultDto } from '@shared/component-base/paged-listing-component-base';
import { ProductService } from 'services'
import { Product } from 'entities'
import { CreateOrUpdateProductComponent } from './create-or-update-product/create-or-update-product.component'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styles: []
})
export class ProductComponent extends PagedListingComponentBase<any>{
  search: any = {};
  product: Product = new Product();
  productTypes = [{ value: 0, text: '测试' }];
  constructor(injector: Injector, private productService: ProductService) {
    super(injector);
  }

  protected fetchDataList(
    request: PagedRequestDto,
    pageNumber: number,
    finishedCallback: Function
  ): void {
    //获取列表数据
    this.productService.getAll(request, this.search.name).finally(() => {
      finishedCallback();
    }).subscribe((result: PagedResultDto) => {
      this.dataList = result.items;
      this.totalItems = result.totalCount;
    })
  }

  delete(entity: Product) {
    this.message.confirm(
      "是否确认删除产品:'" + entity.name + "'?",
      '信息确认',
      (result: boolean) => {
        if (result) {
          this.productService.delete(entity.id).subscribe(() => {
            this.notify.success('删除成功！');
            this.refresh();
          });
        }
      }
    )
  }

  editDing(item: Product) {
    this.modalHelper.open(CreateOrUpdateProductComponent, { id: item.id }, 'md', {
      nzMask: true
    }).subscribe(isSave => {
      if (isSave) {
        this.refresh();
      }
    });
  }
  create() {
    this.modalHelper.open(CreateOrUpdateProductComponent, {}, 'md', {
      nzMask: true
    }).subscribe(isSave => {
      if (isSave) {
        this.refresh();
      }
    });
  }

  updateState(product: Product) {
    this.productService.createOrUpdate(product).finally(() => {
    }).subscribe(() => {
      this.notify.success(this.l('状态修改成功'));
    });
  }

  refreshData() {
    this.search = {};
    this.refresh();
  }
}