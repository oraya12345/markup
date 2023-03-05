import React from 'react';
import { Link } from 'react-router-dom';

export default function SidebarAdmin() {
    return (
        <div class="bg-white" id="sidebar-wrapper">
            <div class="sidebar-header text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom">
                <i class="fas fa-user-secret me-2"></i>MY ADMIN
            </div>

            <div class="list-group list-group-flush my my-3">
                <Link to="/admin/product/add" class="list-group-item list-group-item-action bg-transparent second-text fw-bold">
                    <i class="fas fa-shopping-cart me-2"></i>เพิ่มสินค้า
                </Link>
                <Link to="/admin/product/all" class="list-group-item list-group-item-action bg-transparent second-text fw-bold">
                    <i class="fas fa-gift me-2"></i>สินค้าทั้งหมด
                </Link>
                <Link to="/admin/product/customer" class="list-group-item list-group-item-action bg-transparent second-text fw-bold">
                    <i class="fas fa-user-friends me-2 "></i>รายชื่อลูกค้า
                </Link>
                <Link to="/admin/product/payment" class="list-group-item list-group-item-action bg-transparent second-text fw-bold">
                    <i class="fas fa-money-check-alt me-2 "></i>รายการสั่งของ
                </Link>
                {/* <Link to="/admin/product/shipping" class="list-group-item list-group-item-action bg-transparent second-text fw-bold">
                <i class="fas fa-truck me-2 "></i>การจัดส่ง
            </Link> */}
                {/* <a href="#" class="list-group-item list-group-item-action bg-transparent text-danger fw-bold">
                    <i class="fas fa-sign-out-alt me-2"></i>ออกจากระบบ
                </a> */}
            </div>
        </div>
    )

}
